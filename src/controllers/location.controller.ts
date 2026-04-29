import { Request, Response } from "express";
import axios from "axios";

export async function searchLocation(req: Request, res: Response) {
  const q = req.query.q as string;

  if (!q) {
    return res.status(400).json({ message: "Query required" });
  }

  const response = await axios.get(
    "https://api.opencagedata.com/geocode/v1/json",
    {
      params: {
        q,
        key: process.env.OPENCAGE_API_KEY,
        limit: 5,
        countrycode: "id",
      },
    }
  );

  const results = response.data.results.map((item: any) => ({
    label: item.formatted,
    latitude: item.geometry.lat,
    longitude: item.geometry.lng,
  }));

  res.json(results);
}
