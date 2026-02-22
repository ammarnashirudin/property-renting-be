import Jwt,{ Secret, SignOptions } from "jsonwebtoken";
import { SECRET_KEY } from "@/configs/env.config";
import crypto from "crypto";

export function generateToken(
    payload: object,
    expiresIn: SignOptions["expiresIn"]
){
    return Jwt.sign(
        payload,
        SECRET_KEY as Secret,
        {expiresIn: expiresIn}
    );
};

export function generateRandomToken(){
    return crypto.randomBytes(32).toString("hex");
};

export function expiresAt(){
    return new Date(Date.now()+60*60*1000);
};