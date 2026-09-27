export type UserRole =
  | "user"
  | "business"
  | "admin";

export type VerificationLevel =
  | "unverified"
  | "email_verified"
  | "phone_verified"
  | "identity_verified"
  | "business_verified";

export type OpportunityType =
  | "job"
  | "service"
  | "project"
  | "product"
  | "skill_exchange"
  | "partnership"
  | "other";

export type OpportunityStatus =
  | "draft"
  | "published"
  | "matched"
  | "in_progress"
  | "completed"
  | "cancelled";

export type TransactionStatus =
  | "pending"
  | "authorized"
  | "held"
  | "released"
  | "refunded"
  | "disputed"
  | "cancelled";

export type SubscriptionPlan =
  | "free"
  | "premium"
  | "business";

export type RiskLevel =
  | "low"
  | "medium"
  | "high"
  | "blocked";

export interface User {
  id: string;
  name: string;
  email: string;
  country: string;
  currency: string;
  role: UserRole;
  verificationLevel: VerificationLevel;
  subscriptionPlan: SubscriptionPlan;
  createdAt: string;
}

export interface Opportunity {
  id: string;
  ownerId: string;
  title: string;
  description: string;
  type: OpportunityType;
  status: OpportunityStatus;
  country: string;
  currency: string;
  budget?: number;
  createdAt: string;
}

export interface Match {
  id: string;
  opportunityId: string;
  userId: string;
  score: number;
  reason: string;
  createdAt: string;
}

export interface Transaction {
  id: string;
  senderId: string;
  receiverId: string;
  opportunityId?: string;
  amount: number;
  currency: string;
  status: TransactionStatus;
  riskLevel: RiskLevel;
  createdAt: string;
}

export interface SavingsGoal {
  id: string;
  userId: string;
  name: string;
  targetAmount: number;
  currentAmount: number;
  currency: string;
  targetDate?: string;
  createdAt: string;
}

export interface Expense {
  id: string;
  userId: string;
  amount: number;
  currency: string;
  category: string;
  description?: string;
  date: string;
}

export interface Business {
  id: string;
  ownerId: string;
  name: string;
  country: string;
  verificationLevel: VerificationLevel;
  createdAt: string;
  }
