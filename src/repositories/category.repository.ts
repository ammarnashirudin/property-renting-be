import prisma from "../lib/prisma";

export const categoryRepository = {
  create: (name: string) =>
    prisma.propertyCategory.create({ data: { name } }),

  findAll: () =>
    prisma.propertyCategory.findMany({ orderBy: { id: "desc" } }),

  findById: (id: number) =>
    prisma.propertyCategory.findUnique({ where: { id } }),

  update: (id: number, name: string) =>
    prisma.propertyCategory.update({ where: { id }, data: { name } }),

  remove: (id: number) =>
    prisma.propertyCategory.delete({ where: { id } }),
};
