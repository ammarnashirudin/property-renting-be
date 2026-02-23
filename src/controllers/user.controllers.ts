import { Request, Response, NextFunction } from "express";
import { UserService } from "@/services/user.service";

export const userController = {
    profile: async(req: Request, res: Response, next: NextFunction)=>{
        try {
            if(!req.user) {
                return res.status(401).json({message: "Unauthorized"});
            }
            const result = await UserService.getProfile(req.user.id);
            res.status(200).json(result);
        } catch (err) {
            next(err);
        }
    },

    updateProfile: async(req: Request, res: Response, next: NextFunction)=>{
        try {
            if(!req.user){
                return res.status(401).json({message: "Unauthorized"});
            }
            const result = await UserService.updatePofile(req.user!.id, req.body, req.file);
            res.status(200).json(result);
        } catch (err) {
            next(err);
        }
    },

    updateEmail: async(req: Request, res: Response, next: NextFunction)=>{
        try {
            if(!req.user){
                return res.status(401).json({message: "Unauthorized"});
            }
            const result = await UserService.updateEmail(req.user!.id, req.body.email);
            res.status(200).json(result);
        } catch (err) {
            next(err);
        }
    },

    updatePassword: async(req: Request, res: Response, next: NextFunction)=>{
        try {
            const {currentPassword, newPassword} = req.body;
            const result = await UserService.updatePassword(req.user!.id, currentPassword, newPassword);
            res.status(200).json(result);
        } catch (err) {
            next(err);
        }
    },
}