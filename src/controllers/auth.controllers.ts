import { Request, Response, NextFunction } from "express";
import { AuthService } from "@/services/auth.service";

export const authController = {
    registerUser : async(req: Request, res : Response, next : NextFunction)=>{
        try {
            const result = await AuthService.RegisterUser(req.body);
            res.status(201).json(result);            
        } catch (err) {
            next(err);
        }
    },

    registerTenant : async(req: Request, res : Response, next : NextFunction)=>{
        try {
            const result = await AuthService.RegisterTenant(req.body);
            res.status(201).json(result);
        } catch (err) {
            next(err);
        }
    },

    resendVerification : async(req: Request, res : Response, next : NextFunction)=>{
        try {
            const result = await AuthService.sendVerificationByUserId(req.body.userId);
            res.status(200).json(result);
        } catch (err) {
            next(err);
        }
    },

    verifyEmailSetPassword : async(req: Request, res: Response, next: NextFunction)=>{
        try {
            const result = await AuthService.verifyEmailAndSetPassword(req.body);
            res.status(200).json(result);
        } catch (err) {
            next(err);
        }
    },

    login : async(req: Request, res: Response, next: NextFunction)=>{
        try {
            const result = await AuthService.login(req.body);
            res.status(200).json(result);
        } catch (err) {
            next(err);
        }
    },

    requestResetPassword : async(req: Request, res: Response, next: NextFunction)=>{
        try {
            const result = await AuthService.requestResetPassword(req.body.email);
            res.status(200).json(result);
        } catch (err) {
            next(err);
        }
    },

    confirmResetPassword : async(req: Request, res: Response, next: NextFunction)=>{
        try {
            const result = await AuthService.confirmResetPassword(req.body);
            res.status(200).json(result);
        } catch (err) {
            next(err);
        }
    },

    socialAuth : async(req: Request, res: Response, next: NextFunction)=>{
        try {
            const result = await AuthService.socialAuth(req.body);
            res.status(200).json(result);
        } catch (err) {
            next(err);
        }
    }
};