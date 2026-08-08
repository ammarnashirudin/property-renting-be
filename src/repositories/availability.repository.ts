import {prisma} from "../lib/prisma";

export const availabilityRepository = {
  set: async (roomId: number, date: Date, isAvailable: boolean) => {
    const normalized = new Date(
      date.getFullYear(),
      date.getMonth(),
      date.getDate()
    );

    const exist = await prisma.roomAvailability.findFirst({
      where: {
        roomId,
        date: normalized,
      },
    });

    if (exist) {
      return prisma.roomAvailability.update({
        where: { id: exist.id },
        data: { isAvailable },
      });
    }

    return prisma.roomAvailability.create({
     data: {
        roomId,
        date: normalized,
        isAvailable,
      },
    });
  },

};
