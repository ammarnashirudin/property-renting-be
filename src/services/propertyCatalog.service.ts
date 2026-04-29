import { propertyCatalogRepository } from "../repositories/propertyCatalog.repository";

export const propertyCatalogService = {
  async list(query: {
    page?: number;
    limit?: number;
    search?: string;
    categoryId?: number;
    sortBy?: "name" | "price";
    sortOrder?: "asc" | "desc";
    checkIn?: string;
    checkOut?: string;
    latitude?: number;
    longitude?: number; 
  }) {
    const page = query.page || 1;
    const limit = query.limit || 10;
    const skip = (page - 1) * limit;
    const checkIn = query.checkIn ? new Date(query.checkIn) : null;
    const checkOut = query.checkOut ? new Date(query.checkOut) : null;
    const today = new Date();
    const targetDate = checkIn ?? today;


 
    const where: any = {};

    if (query.search) {
      where.name = {
        contains: query.search,
        mode: "insensitive",
      };
    }

    if (query.categoryId) {
      where.categoryId = query.categoryId;
    }




    if (checkIn && checkOut) {
      where.rooms = {
        some: {
          AND: [

            {
              orders: {
                none: {
                  checkIn: { lt: checkOut },
                  checkOut: { gt: checkIn },
                },
              },
            },
      
            {
              availabilities: {
                none: {
                  date: {
                    gte: checkIn,
                    lt: checkOut,
                  },
                  isAvailable: false,
                },
              },
            },
          ],
        },
      };
    }


    const properties = await propertyCatalogRepository.findMany({
      where,
      skip,
      take: limit,
      orderBy:
        query.sortBy === "price"
          ? undefined
          : { name: query.sortOrder || "asc" },
      latitude : query.latitude,
      longitude : query.longitude,
    });

    const mapped = properties.map((p: any) => {
      const prices: number[] = [];

      p.rooms.forEach((room: any) => {
     
        const isAvailable = room.availabilities.some(
          (a: any) =>
            a.isAvailable &&
            new Date(a.date).toDateString() === targetDate.toDateString()

        );

        if (!isAvailable) return;


        let price = room.basePrice;

    
        const peak = room.peakRates?.find(
          (p: any) => targetDate >= p.startDate && targetDate <= p.endDate

        );

        if (peak) {
          price =
            peak.type === "PERCENT"
              ? price + price * (peak.value / 100)
              : price + peak.value;
        }

        prices.push(price);
      });

      return {
        id: p.id,
        name: p.name,
        address: p.address,
        image: p.image,
        category: p.category,
        lowestPrice: prices.length ? Math.min(...prices) : null,
      };
    });

 
    if (query.sortBy === "price") {
      mapped.sort((a, b) =>
        (query.sortOrder || "asc") === "asc"
          ? (a.lowestPrice ?? 0) - (b.lowestPrice ?? 0)
          : (b.lowestPrice ?? 0) - (a.lowestPrice ?? 0)
      );
    }


    const total = await propertyCatalogRepository.count(where);

    return {
      data: mapped,
      pagination: {
        page,
        limit,
        total,
        totalPages: Math.ceil(total / limit),
      },
    };
  },

  async detail(propertyId: number) {
    const property = await propertyCatalogRepository.findById(propertyId);
    if (!property) {
      throw new Error("Property tidak ditemukan");
    }
    return property;
  },
};
