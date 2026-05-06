import cron from "node-cron";
import { userRepository } from "../repositories/user.repository";

export const startCleanupJob = () => {
    cron.schedule("*/10 * * * *", async () => {
        try {
            const oneHourAgo = new Date(Date.now() - 60 * 60 * 1000);

            const result = await userRepository.deleteUser(oneHourAgo);

            if (result.count > 0) {
                console.log(`Deleted ${result.count} unverified users`);
            }
        } catch (err) {
            console.error("Cleanup job error:", err);
        }
    });
};