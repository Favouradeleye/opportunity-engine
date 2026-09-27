import type { Expense, SavingsGoal } from "./types";

export interface FinancialSummary {
  totalExpenses: number;
  totalSaved: number;
  remainingGoalAmount: number;
  savingsProgress: number;
}

export function calculateFinancialSummary(
  expenses: Expense[],
  savingsGoals: SavingsGoal[]
): FinancialSummary {
  const totalExpenses = expenses.reduce(
    (total, expense) => total + expense.amount,
    0
  );

  const totalSaved = savingsGoals.reduce(
    (total, goal) => total + goal.currentAmount,
    0
  );

  const totalTarget = savingsGoals.reduce(
    (total, goal) => total + goal.targetAmount,
    0
  );

  const remainingGoalAmount = Math.max(totalTarget - totalSaved, 0);

  const savingsProgress =
    totalTarget > 0
      ? Math.min((totalSaved / totalTarget) * 100, 100)
      : 0;

  return {
    totalExpenses,
    totalSaved,
    remainingGoalAmount,
    savingsProgress,
  };
}

export function calculateEmergencyFundTarget(
  monthlyEssentialExpenses: number,
  monthsOfProtection = 3
): number {
  if (monthlyEssentialExpenses <= 0) {
    return 0;
  }

  return monthlyEssentialExpenses * monthsOfProtection;
    }
