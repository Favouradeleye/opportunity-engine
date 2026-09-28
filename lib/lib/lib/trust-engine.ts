import type { RiskLevel, VerificationLevel } from "./types";

export interface VideoVerificationResult {
  authenticityRisk: RiskLevel;
  identityVerificationRequired: boolean;
  manualReviewRequired: boolean;
  reasons: string[];
}

export interface OpportunitySafetyResult {
  riskLevel: RiskLevel;
  transactionAllowed: boolean;
  additionalVerificationRequired: boolean;
  reasons: string[];
}

export function assessVideoVerification(
  verificationLevel: VerificationLevel,
  hasManipulationSignals: boolean,
  identityMismatchDetected: boolean
): VideoVerificationResult {
  const reasons: string[] = [];

  if (hasManipulationSignals) {
    reasons.push("Potential video manipulation detected.");
  }

  if (identityMismatchDetected) {
    reasons.push("Identity information requires additional verification.");
  }

  if (verificationLevel === "unverified") {
    reasons.push("Account identity has not yet been verified.");
  }

  if (hasManipulationSignals || identityMismatchDetected) {
    return {
      authenticityRisk: "high",
      identityVerificationRequired: true,
      manualReviewRequired: true,
      reasons,
    };
  }

  if (verificationLevel !== "identity_verified") {
    return {
      authenticityRisk: "medium",
      identityVerificationRequired: true,
      manualReviewRequired: false,
      reasons,
    };
  }

  return {
    authenticityRisk: "low",
    identityVerificationRequired: false,
    manualReviewRequired: false,
    reasons: [],
  };
}

export function assessOpportunitySafety(
  verificationLevel: VerificationLevel,
  reportedCount: number,
  suspiciousSignals: string[]
): OpportunitySafetyResult {
  const reasons = [...suspiciousSignals];

  if (reportedCount > 0) {
    reasons.push("This opportunity has received user reports.");
  }

  if (verificationLevel === "unverified") {
    reasons.push("The opportunity owner is not identity verified.");
  }

  if (suspiciousSignals.length >= 2 || reportedCount >= 3) {
    return {
      riskLevel: "high",
      transactionAllowed: false,
      additionalVerificationRequired: true,
      reasons,
    };
  }

  if (reasons.length > 0) {
    return {
      riskLevel: "medium",
      transactionAllowed: true,
      additionalVerificationRequired: true,
      reasons,
    };
  }

  return {
    riskLevel: "low",
    transactionAllowed: true,
    additionalVerificationRequired: false,
    reasons: [],
  };
}
