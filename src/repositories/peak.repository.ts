import prisma from "../lib/prisma";

export const peakRepository = {
  create: (payload: any) => prisma.peakSeasonRate.create({ data: payload }),

  remove: (id: number) => prisma.peakSeasonRate.delete({ where: { id } }),

  findByRoom: (roomId:number) =>
  prisma.peakSeasonRate.findMany({
    where: { roomId },
    orderBy: { startDate: "asc" }
  }),

};
