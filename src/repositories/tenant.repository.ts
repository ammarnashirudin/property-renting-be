import prisma from "../lib/prisma";

export const tenantRepository = {
    createTenant(data:{
        userId: number;
        companyName: string;
        phoneNumber: string}){
        return prisma.tenant.create({data});
    },

    findByUserId(userId: number){
        return prisma.tenant.findUnique({where:{userId}});
    },
};