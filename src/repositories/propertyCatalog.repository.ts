import prisma from "../lib/prisma";

export const propertyCatalogRepository = {
  findMany({ where, skip, take, orderBy, latitude, longitude }: any) {
    if (latitude !== undefined && longitude !== undefined) {
      const range = 0.1;

      where.latitude = {
        gte: latitude - range,
        lte: latitude + range,
      };

      where.longitude = {
        gte: longitude - range,
        lte: longitude + range,
      };
    }

    return prisma.property.findMany({
      where,
      skip,
      take,
      orderBy,
      include: {
        category: true,
        rooms: {
          include: {
            availabilities: true,
            peakRates: true,
            orders: true,
          },
        },
      },
    });
  },

  count(where: any) {
    return prisma.property.count({ where });
  },

  findById(id: number) {
    return prisma.property.findUnique({
      where: { id },
      include: {
        category: true,
        images: true, 
        rooms: {
          include: {
            availabilities: true,
            peakRates: true,
          },
        },
      },
    });
  }


};
