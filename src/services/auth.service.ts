import { genSaltSync, hashSync, compareSync } from "bcrypt";
import { userRepository } from "@/repositories/user.repository";
import { emailTokenRepository } from "@/repositories/emailToken.repository";
import { passwordResetTokenRepository } from "@/repositories/passwordResetToken.repositoy";
import { generateToken, generateRandomToken } from "@/helpers/token";
import { sendMail } from "@/helpers/mailer";
import { APP_BASE_URL } from "@/configs/env.config";
import { createCustomError } from "@/utils/customError";
import { OAuth2Client } from "google-auth-library";
import { expiresAt } from "@/helpers/token";
import { tenantRepository } from "@/repositories/tenant.repository";

const googleClient = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);

export const AuthService = {
    async RegisterUser(body:{name: string, email: string}){
        const exist = await userRepository.findByEmail(body.email);
        if(exist) throw createCustomError(400, "Email already exists");

        const user = await userRepository.createUser({
            role: "USER",
            name: body.name,
            email: body.email,
            provider: "EMAIL",
        });

        const token = generateRandomToken();
       
        await emailTokenRepository.create({
            userId: user.id,
            token,
            expiresAt: expiresAt(),
        })
        
        await sendMail(user.email, "Verification Email & Set Password", "Registration",{
            name: user.name,
            email: user.email,
            verifyUrl: `${APP_BASE_URL}/verify-email?token=${token}`,
        });

        return {message: "Registration successful. Please check your email to verify your account and set your password."};
    },

    async RegisterTenant(body:{
        name: string;
        email: string;
        companyName: string;
        phoneNumber: string;
    }){
        const exist = await userRepository.findByEmail(body.email);
        if(exist) throw createCustomError(400, "Email alreadu exists");

        const user = await userRepository.createUser({
            role: "TENANT",
            name: body.name,
            email: body.email,
            provider: "EMAIL",
        });

        await tenantRepository.createTenant({
            userId: user.id,
            companyName: body.companyName,
            phoneNumber: body.phoneNumber,
        });

        const token = generateRandomToken();

        await emailTokenRepository.create({
            userId: user.id,
            token,
            expiresAt: expiresAt(),
        });

        await sendMail(user.email, "Verification Email & Set Password", "Registration",{
            name: user.name,
            email: user.email,
            verifyUrl: `${APP_BASE_URL}/verify-email?token=${token}`,
        });

        return {message: "Registration Tenant successful. Please check your email to verify your account and set your password."};
    },

    async sendVerificationByUserId(userId: number){
        const user = await userRepository.findById(userId);
        if(!user) throw createCustomError(404, "User no found");
        
        await emailTokenRepository.invalidateAllUserTokens(user.id);

        const token = generateRandomToken();

        await emailTokenRepository.create({
            userId: user.id,
            token,
            expiresAt: expiresAt(),
        });

        await sendMail(user.email, "Verification Email", "Registration",{
            name: user.name,
            email: user.email,
            verifyUrl: `${APP_BASE_URL}/verify-email?token=${token}`,
        });
    },

    async verifyEmailAndSetPassword(body :{token: string, password: string}){
        const tokenData = await emailTokenRepository.findValidToken(body.token);
        if(!tokenData) throw createCustomError(400, "Invalid or expired token");
        if(!tokenData.used) throw createCustomError(404, "Token already used");
        if(!tokenData.expiresAt || tokenData.expiresAt < new Date())
            throw createCustomError(400, "Token expired");

        const user = tokenData.user;
        if(user.isVerified) throw createCustomError(400, "User already verified");
        
        const salt = genSaltSync(10);
        const hashed = hashSync(body.password, salt);

        if(!body.password || body.password.length < 8){
            throw createCustomError(400, "Password must be at least 8 characters long")};

            await userRepository.updateUser(user.id,{
                password: hashed,
                isVerified: true,
            });

            await emailTokenRepository.markUsed(tokenData.id);
            return {
                message: "Email verified and password set successfully",
                role: user.role,
            }
    },

    async login(body:{email: string, password: string}){
        const user = await userRepository.findByEmail(body.email);
        if(!user) throw createCustomError(400,"Invalid email or password");
        if(!user.password) throw createCustomError(400, "This user not set password");

        const match = compareSync(body.password, user.password);
        if(!match) throw createCustomError(400, "Invalid email or password");

        if(!user.isVerified) throw createCustomError(400, "Please verify your email before login");

        const token = generateToken({
            id: user.id, role: user.role, email: user.email, isVerified: user.isVerified
        }, "7d");

        return {
            message : "Login successful",
            token,
            role: user.role,
            isVerified: user.isVerified,
        };
    },

    async requestResetPassword(email: string){
        const user = await userRepository.findByEmail(email);
        if(!user) throw createCustomError(404, "User not found");
        if(user.provider && user.provider !== "EMAIL"){
            throw createCustomError(400, "This user is registered via social login and cannot reset password via email.")
        }

        if(!user.isVerified) throw createCustomError(400, "Please verify your email before reset password");

        await passwordResetTokenRepository.invalidateAllUserTokens(user.id);

        const token = generateRandomToken();
        
        await passwordResetTokenRepository.create({
            userId : user.id,
            token,
            expiresAt: expiresAt(),
        });

        await sendMail(user.email, "Reset Password", "reset-password",{
            resetUrl : `${APP_BASE_URL}/Reset-Password-Confirm?token=${token}`,
        });

        return {message: "Password reset email sent. Please check your email."};
    },

    async confirmResetPassword(body:{token: string, newPassword: string}){
        if(!body.newPassword || body.newPassword.length < 8){
            throw createCustomError(400, "Password must be at least 8 characters long")};
        
        const tokenData = await passwordResetTokenRepository.findValidToken(body.token);
        if(!tokenData) throw createCustomError(400, "Invalid or expired token");

        const hashed = hashSync(body.newPassword, genSaltSync(10));

        await userRepository.updateUser(tokenData.user.id,{password: hashed});

        await passwordResetTokenRepository.markUsed(tokenData.id);

        return {message: "Password reset successful"};
    },

    async socialAuth(body:{
        role: "USER" | "TENANT";
        provider: "google";
        token: string;
    }){
        let email: string;
        let name: string;
        let profileImage: string | undefined;
        let providerAccountId: string | undefined;;

        if(body.provider === "google"){
            const ticket = await googleClient.verifyIdToken({
                idToken: body.token,
                audience: process.env.GOOGLE_CLIENT_ID,
            });

            const payload = ticket.getPayload();
            if(!payload || !payload.email) throw createCustomError(400, "Invalid Google token");

            email = payload.email;
            name = payload.name || "Google User";
            profileImage = payload.picture;
            providerAccountId = payload.sub;      
        } else {
            throw createCustomError(400, "Provider not supported");
        }

        let user = await userRepository.findByEmail(email);

        if(!user){
            user = await userRepository.createUser({
                role: body.role,
                name,
                email,
                provider: body.provider.toUpperCase(),
                providerAccountId,
                profileImage,
            });
        }

        if(user.role !== body.role) throw createCustomError(400, `This email is already registered as ${user.role}`);

        const token = generateToken({
            id: user.id, role: user.role, email: user.email, isVerified: user.isVerified 
        }, "7d");

        return{
            message : "Social login successful",
            token,
            role: user.role,
            isVerified: user.isVerified,
        };

    }
}