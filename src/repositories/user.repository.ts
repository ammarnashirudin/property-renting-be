import prisma from "@/lib/prisma";
import { create } from "node:domain";

export const userRepository = {
    findByEmail(email: string){
        return prisma.user.findUnique({where:{email}});
    },

    findById(id:number){
        return prisma.user.findUnique({where:{id}});
    },

    createUser(data:{
        role: "USER" | "TENANT";
        name: string;
        email: string;
        provider?: string;
        providerAccountId?: string;
        profileImage?:string;
    }){
        return prisma.user.create({
            data:{
                role: data.role,
                name: data.name,
                email: data.email,
                provider:data.provider ?? null,
                providerAccountId: data.providerAccountId ?? null,
                profileImage: data.profileImage ?? null,
                isVerified: data.provider === "GOOGLE",
            },
        });
    },

    updateUser(id:number, data:any){
        return prisma.user.update({
            where:{id},
            data,
        });
    },
}