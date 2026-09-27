import type { RiskLevel, VerificationLevel } from "./types";

export interface SecurityCheck {
  riskLevel: RiskLevel;
  requiresVerification: boolean;
  reasons: string[];
}

const verificationRank: Record<VerificationLevel, number> = {
  unverified: 0,
  email_verified: 1,
  phone_verified: 2,
  identity_verified: 3,
  business_verified: 4,
};

export function runSecurityCheck(
  verificationLevel: VerificationLevel,
  transactionAmount: number,
  suspiciousSignals: string[] = []
): SecurityCheck {
  const reasons: string[] = [];

  if (verificationRank[verificationLevel] < 2) {
    reasons.push("Phone verification is required for financial activity.");
  }

  if (transactionAmount > 100000) {
    reasons.push("Higher-value transaction requires additional verification.");
  }

  if (suspiciousSignals.length > 0) {
    reasons.push(...suspiciousSignals);
  }

  if (suspiciousSignals.length >= 2) {
    return {
      riskLevel: "high",
      requiresVerification: true,
      reasons,
    };
  }

  if (transactionAmount > 100000) {
    return {
      riskLevel: "medium",
      requiresVerification: true,
      reasons,
    };
  }

  return {
    riskLevel: reasons.length > 0 ? "medium" : "low",
    requiresVerification: reasons.length > 0,
    reasons,
  };
}

export function canStartTransaction(
  verificationLevel: VerificationLevel
): boolean {
  return verificationRank[verificationLevel] >= 2;
}
