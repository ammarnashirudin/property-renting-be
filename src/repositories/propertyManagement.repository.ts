import prisma from "../lib/prisma";

export const propertyManagementRepository = {
  create: (payload: any) => prisma.property.create({ data: payload }),

  update: (id: number, payload: any) =>
    prisma.property.update({ where: { id }, data: payload }),

  remove: (id: number) => prisma.property.delete({ where: { id } }),

  findById: (id: number) =>
    prisma.property.findUnique({
      where: { id },
      include: {
        category: true,
        rooms: true,
      },
    }),

  findTenantProperties: (tenantId: number) =>
    prisma.property.findMany({
      where: { tenantId },
      include: { category: true, rooms: true },
      orderBy: { id: "desc" },
    }),
};
