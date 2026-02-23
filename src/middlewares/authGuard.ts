import { Request, Response, NextFunction } from "express";

export const authGuard = (req : Request, res : Response, next : NextFunction) => {
    if(!req.user){
        return res.status(401).json({message: "Unauthorized"});
    }
    next();
};