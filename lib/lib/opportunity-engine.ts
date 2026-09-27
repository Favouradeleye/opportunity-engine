import type {
  Match,
  Opportunity,
  User,
} from "./types";

function normalize(value: string): string {
  return value.trim().toLowerCase();
}

function calculateMatchScore(
  opportunity: Opportunity,
  user: User
): number {
  let score = 0;

  if (normalize(opportunity.country) === normalize(user.country)) {
    score += 25;
  }

  if (opportunity.currency === user.currency) {
    score += 20;
  }

  if (user.verificationLevel !== "unverified") {
    score += 15;
  }

  if (user.role === "business" && opportunity.type === "partnership") {
    score += 20;
  }

  if (
    opportunity.type === "service" ||
    opportunity.type === "job" ||
    opportunity.type === "project"
  ) {
    score += 10;
  }

  return Math.min(score, 100);
}

export function findOpportunities(
  opportunities: Opportunity[],
  user: User
): Match[] {
  return opportunities
    .filter((opportunity) => opportunity.status === "published")
    .map((opportunity) => {
      const score = calculateMatchScore(opportunity, user);

      return {
        id: crypto.randomUUID(),
        opportunityId: opportunity.id,
        userId: user.id,
        score,
        reason:
          score >= 60
            ? "Strong compatibility based on available profile information."
            : "Potential compatibility based on available profile information.",
        createdAt: new Date().toISOString(),
      };
    })
    .sort((a, b) => b.score - a.score);
}
