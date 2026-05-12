import axios from "axios";
import { OPENCAGE_API_KEY } from "../configs/env.config";

export async function geocodeAddress(address: string) {
    const url = "https://api.opencagedata.com/geocode/v1/json";

    const response = await axios.get(url, {
        params: {
            q: address,
            key: OPENCAGE_API_KEY,
        },
    });

    const results = response.data.results;
    if (!results.length) { 
        throw new Error("Unable to geocode the provided address.");
    }

    const loaction = results[0].geometry;
    return {
        lat: loaction.lat,
        lng: loaction.lng,
    };
}