import type { SubscriptionPlan } from "./types";

export interface SubscriptionPrice {
  plan: SubscriptionPlan;
  monthlyPrice: number;
  currency: string;
}

export interface RevenueRecord {
  id: string;
  source:
    | "subscription"
    | "business"
    | "partner"
    | "service";
  amount: number;
  currency: string;
  userId?: string;
  createdAt: string;
}

export const subscriptionPrices: SubscriptionPrice[] = [
  {
    plan: "free",
    monthlyPrice: 0,
    currency: "NGN",
  },
  {
    plan: "premium",
    monthlyPrice: 5000,
    currency: "NGN",
  },
  {
    plan: "business",
    monthlyPrice: 25000,
    currency: "NGN",
  },
];

export function calculateMonthlyRecurringRevenue(
  records: RevenueRecord[]
): number {
  return records
    .filter((record) => record.source === "subscription")
    .reduce((total, record) => total + record.amount, 0);
}

export function calculateAverageRevenuePerUser(
  totalRevenue: number,
  activeUsers: number
): number {
  if (activeUsers <= 0) {
    return 0;
  }

  return totalRevenue / activeUsers;
}

export function calculateNetRevenue(
  totalRevenue: number,
  operatingCosts: number
): number {
  return Math.max(totalRevenue - operatingCosts, 0);
}
