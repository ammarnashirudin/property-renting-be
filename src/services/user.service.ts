import { userRepository } from "@/repositories/user.repository";
import { createCustomError } from "@/utils/customError";
import { AuthService } from "./auth.service";
import { compareSync, genSaltSync, hashSync } from "bcrypt";
import { cloudinaryUpload, cloudinaryRemove } from "@/utils/cloudinary";

function validateImage(file: Express.Multer.File){
    const allowed = ["image/jpeg", "image/png", "image/gif"];
    if(!allowed.includes(file.mimetype)){
        throw createCustomError(400, "Invalid file type. Only JPEG, PNG and GIF are allowed.");
    }
    if(file.size > 1024 * 1024){
        throw createCustomError(400, "File size exceeds 1MB limit.");
    }
}

export const UserService = {
    async getProfile(userId :  number){
        const user = await userRepository.findById(userId);
        if(!user) throw createCustomError(404, "User not found");
        return user;
    },

    async updatePofile(
        userId : number,
        body : {name?:string},
        file? : Express.Multer.File,
    ){
        const user = await userRepository.findById(userId);
        if(!user) throw createCustomError(404, "User not found");

        let profileImage = user.profileImage;

        if(file){
            validateImage(file);

            const uploud = await cloudinaryUpload(file, "profile_pictures");
            if(user.profileImage) await cloudinaryRemove(user.profileImage);

            profileImage = uploud.secure_url;
        }

        return await userRepository.updateUser(userId,{
            ...(body.name ? {name: body.name}:{}),
            profileImage,
        });
    },

    async updateEmail(userId: number, newEmail: string){
        const exist = await userRepository.findByEmail(newEmail);
        if(exist) throw createCustomError(400, "Email already in use");

        await userRepository.updateUser(userId,{
            email: newEmail,
            isVerified: false,
        });

        await AuthService.sendVerificationByUserId(userId);

        return {
            message: "Email updated. Please verify your new email address.",
        };
    },

    async updatePassword(
        userId : number,
        currentPassword: string,
        newPassword: string
    ){
        const user = await userRepository.findById(userId);
        if(!user) throw createCustomError(404, "User not found");

        if(!user.password || !compareSync(currentPassword, user.password)){
            throw createCustomError(400, "Current password is incorrect");
        };

        if(newPassword.length<8){
            throw createCustomError(400, "Password must be at least 8 characters long")
        };

        const hashed = hashSync(newPassword, genSaltSync(10));
        await userRepository.updateUser(userId,{password: hashed});

        return{message: "Password updated successfully"};
    },
}
