import prisma from "../lib/prisma";

export const roomRepository = {
  create: (payload: any) => {
    const { propertyId, ...rest } = payload;

    console.log("PROPERTY ID:", propertyId);

    if (!propertyId || isNaN(propertyId)) {
      throw new Error("Invalid propertyId");
    }

    return prisma.room.create({
      data: {
        ...rest,
        property: {
          connect: { id: propertyId },
        },
      },
    });
  },
  
  update: (id: number, payload: any) =>
    prisma.room.update({ where: { id }, data: payload }),

  remove: (id: number) => prisma.room.delete({ where: { id } }),

  findById: (id: number) =>
    prisma.room.findUnique({
      where: { id },
      include: {
        availabilities: true,
        peakRates: true,
        property: true,
      },
    }),

  findByProperty: (propertyId: number) =>
    prisma.room.findMany({
      where: { propertyId },
      include: { availabilities: true, peakRates: true },
      orderBy: { id: "desc" },
    }),
};
