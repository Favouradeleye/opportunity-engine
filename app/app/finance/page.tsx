import Link from "next/link";

const financialTools = [
  {
    title: "Track expenses",
    description:
      "Record and understand where your money is going.",
    action: "Add expense",
  },
  {
    title: "Savings goals",
    description:
      "Create goals and track your progress toward them.",
    action: "Create goal",
  },
  {
    title: "Emergency fund",
    description:
      "Plan how much you need to protect yourself from unexpected expenses.",
    action: "Plan fund",
  },
  {
    title: "Financial health",
    description:
      "See your spending, savings and financial progress in one place.",
    action: "View health",
  },
];

export default function FinancePage() {
  return (
    <main className="min-h-screen bg-slate-50">
      <header className="border-b bg-white">
        <div className="container py-6">
          <p className="text-sm font-semibold text-blue-600">
            FINANCIAL WELLNESS
          </p>

          <h1 className="mt-2 text-3xl font-bold text-slate-900">
            Your Financial Center
          </h1>

          <p className="mt-2 max-w-2xl text-slate-600">
            Understand your money, plan ahead and build stronger financial
            habits without being pushed into unnecessary debt.
          </p>
        </div>
      </header>

      <section className="container py-8">
        <div className="grid gap-4 sm:grid-cols-3">
          <div className="card">
            <p className="text-sm text-slate-500">
              Total expenses
            </p>

            <p className="mt-2 text-3xl font-bold text-slate-900">
              ₦0
            </p>
          </div>

          <div className="card">
            <p className="text-sm text-slate-500">
              Total saved
            </p>

            <p className="mt-2 text-3xl font-bold text-slate-900">
              ₦0
            </p>
          </div>

          <div className="card">
            <p className="text-sm text-slate-500">
              Emergency fund
            </p>

            <p className="mt-2 text-3xl font-bold text-slate-900">
              Getting started
            </p>
          </div>
        </div>
      </section>

      <section className="container pb-12">
        <h2 className="text-2xl font-bold text-slate-900">
          Financial tools
        </h2>

        <div className="mt-5 grid gap-5 md:grid-cols-2">
          {financialTools.map((tool) => (
            <article key={tool.title} className="card">
              <h3 className="text-xl font-bold text-slate-900">
                {tool.title}
              </h3>

              <p className="mt-2 text-slate-600">
                {tool.description}
              </p>

              <Link
                href="/login"
                className="primary-button mt-5 inline-block"
              >
                {tool.action}
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className="container pb-8">
        <div className="card">
          <h2 className="text-xl font-bold text-slate-900">
            Premium financial tools
          </h2>

          <p className="mt-2 text-slate-600">
            Advanced forecasting, multiple savings goals, household
            budgeting, detailed spending analysis and personalized
            financial planning will be available through the appropriate
            subscription plan.
          </p>

          <Link
            href="/login"
            className="secondary-button mt-5 inline-block"
          >
            View account plans
          </Link>
        </div>
      </section>

      <section className="container pb-16">
        <div className="card">
          <h2 className="text-xl font-bold text-slate-900">
            Your financial plan
          </h2>

          <p className="mt-2 text-slate-600">
            Your personalized financial planning tools will appear here
            after your account is connected.
          </p>

          <Link
            href="/account"
            className="secondary-button mt-5 inline-block"
          >
            Go to account
          </Link>
        </div>
      </section>
    </main>
  );
}
