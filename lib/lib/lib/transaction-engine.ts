import type {
  RiskLevel,
  TransactionStatus,
  VerificationLevel,
} from "./types";

export interface TransactionRequest {
  id: string;
  senderId: string;
  receiverId: string;
  amount: number;
  currency: string;
  verificationLevel: VerificationLevel;
  riskLevel: RiskLevel;
  status: TransactionStatus;
}

export interface TransactionDecision {
  allowed: boolean;
  status: TransactionStatus;
  requiresReview: boolean;
  reason: string;
}

export function authorizeTransaction(
  request: TransactionRequest
): TransactionDecision {
  if (request.amount <= 0) {
    return {
      allowed: false,
      status: "cancelled",
      requiresReview: false,
      reason: "Transaction amount must be greater than zero.",
    };
  }

  if (request.verificationLevel === "unverified") {
    return {
      allowed: false,
      status: "cancelled",
      requiresReview: true,
      reason: "Account verification is required before financial activity.",
    };
  }

  if (request.riskLevel === "blocked") {
    return {
      allowed: false,
      status: "cancelled",
      requiresReview: true,
      reason: "Transaction blocked by the security system.",
    };
  }

  if (request.riskLevel === "high") {
    return {
      allowed: false,
      status: "disputed",
      requiresReview: true,
      reason: "Transaction requires additional security review.",
    };
  }

  return {
    allowed: true,
    status: "held",
    requiresReview: request.riskLevel === "medium",
    reason:
      "Transaction authorized and placed into protected holding status.",
  };
}

export function releaseTransaction(
  status: TransactionStatus,
  conditionsCompleted: boolean
): TransactionDecision {
  if (status !== "held") {
    return {
      allowed: false,
      status,
      requiresReview: false,
      reason: "Only protected transactions can be released.",
    };
  }

  if (!conditionsCompleted) {
    return {
      allowed: false,
      status: "held",
      requiresReview: false,
      reason: "Transaction conditions have not been completed.",
    };
  }

  return {
    allowed: true,
    status: "released",
    requiresReview: false,
    reason: "Transaction conditions completed and funds may be released.",
  };
}

export function refundTransaction(
  status: TransactionStatus
): TransactionDecision {
  if (status !== "held" && status !== "disputed") {
    return {
      allowed: false,
      status,
      requiresReview: false,
      reason: "This transaction is not eligible for this refund flow.",
    };
  }

  return {
    allowed: true,
    status: "refunded",
    requiresReview: false,
    reason: "Transaction marked for refund processing.",
  };
}
