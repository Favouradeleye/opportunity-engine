export type VerificationLevel =
  | "unverified"
  | "email_verified"
  | "phone_verified"
  | "identity_verified";

export type RiskLevel =
  | "low"
  | "medium"
  | "high"
  | "blocked";

export type TransactionStatus =
  | "pending"
  | "held"
  | "released"
  | "disputed"
  | "refunded"
  | "cancelled";

export type UserRole =
  | "user"
  | "business"
  | "admin";

export type OpportunityType =
  | "job"
  | "service"
  | "project"
  | "product"
  | "skill_exchange"
  | "partnership";

export interface User {
  id: string;
  name: string;
  email: string;
  country: string;
  currency: string;
  role: UserRole;
  verificationLevel: VerificationLevel;
  createdAt: string;
}

export interface Opportunity {
  id: string;
  ownerId: string;
  type: OpportunityType;
  title: string;
  description: string;
  location: string;
  budget: number | null;
  currency: string;
  riskLevel: RiskLevel;
  status: "active" | "paused" | "completed" | "blocked";
  createdAt: string;
}

export interface FinancialProfile {
  userId: string;
  totalExpenses: number;
  totalSaved: number;
  emergencyFund: number;
  currency: string;
}

export interface SavingsGoal {
  id: string;
  userId: string;
  name: string;
  targetAmount: number;
  currentAmount: number;
  currency: string;
  deadline: string | null;
  status: "active" | "completed" | "cancelled";
}

export interface Transaction {
  id: string;
  senderId: string;
  receiverId: string;
  opportunityId: string | null;
  amount: number;
  currency: string;
  riskLevel: RiskLevel;
  status: TransactionStatus;
  createdAt: string;
}

export interface VideoVerification {
  id: string;
  userId: string;
  opportunityId: string | null;
  authenticityRisk: RiskLevel;
  identityVerificationRequired: boolean;
  manualReviewRequired: boolean;
  createdAt: string;
}
