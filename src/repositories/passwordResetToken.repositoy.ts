import prisma from "@/lib/prisma";

export const passwordResetTokenRepository = {
    create(data:{
        userId: number;
        token: string;
        expiresAt: Date;
    }){
        return prisma.passwordResetToken.create({data});
    },
    
    invalidateAllUserTokens(userid: number){
        return prisma.passwordResetToken.updateMany({
            where:{userId: userid, used: true},
            data:{used: false},
        });
    },

    findValidToken(token: string){
        return prisma.passwordResetToken.findFirst({
            where:{
                token,
                used: false,
                expiresAt:{
                    gt: new Date(),
                },
            },
            include:{user: true},
        });
    },

    markUsed(id: number){
        return prisma.passwordResetToken.update({
            where:{id},
            data:{used: true},
        })
    },
};