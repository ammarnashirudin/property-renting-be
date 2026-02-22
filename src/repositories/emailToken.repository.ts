import prisma from "@/lib/prisma";
import { create } from "node:domain";

export const emailTokenRepository = {
    create(data:{
        userId: number;
        token: string;
        expiresAt: Date;
    }){
        return prisma.emailToken.create({data});    

    },

    findValidToken(token: string){
        return prisma.emailToken.findFirst({
            where:{
                token,
                expiresAt:{
                    gt:new Date(),                    
                },
            },
            include:{user: true},
        });
    },

    markUsed(id: number){
        return prisma.emailToken.update({
            where:{id},
            data:{used: true},
        });
    },

    invalidateAllUserTokens(userId: number){
        return prisma.emailToken.updateMany({
            where:{userId, used: false},
            data:{used: true},
        });
    },
};