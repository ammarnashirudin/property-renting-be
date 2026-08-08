import cron from "node-cron";
import { transactionService } from "../services/transaction.service";

export function startOrderExpirationScheduler() {
  cron.schedule("* * * * *", async () => {
    try {
      const expired = await transactionService.expireUnpaidOrders();

      if (expired > 0) {
        console.log(
          `[AUTO CANCEL] ${expired} order(s) expired at ${new Date().toISOString()}`
        );
      }

      const completed = await transactionService.completeFinishedOrders();

      if (completed > 0) {
        console.log(
          `[AUTO COMPLETE] ${completed} order(s) completed at ${new Date().toISOString()}`
        );
      }
    } catch (err) {
      console.error("[ORDER SCHEDULER ERROR]", err);
    }
  });

  console.log("✅ Order Scheduler Started");
}