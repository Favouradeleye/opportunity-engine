import Link from "next/link";

const businessTools = [
  {
    title: "Post an opportunity",
    description:
      "Find people with the skills and experience your business needs.",
    action: "Create opportunity",
    href: "/login",
  },
  {
    title: "Find talent",
    description:
      "Discover people based on skills, experience and opportunity requirements.",
    action: "Find talent",
    href: "/opportunities",
  },
  {
    title: "Employee financial wellness",
    description:
      "Provide employees with budgeting, savings and financial education tools.",
    action: "Explore business plan",
    href: "/login",
  },
  {
    title: "Business dashboard",
    description:
      "Manage opportunities, activity, transactions and business information.",
    action: "Open dashboard",
    href: "/dashboard",
  },
];

export default function BusinessPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      <header className="border-b bg-white">
        <div className="container py-8">
          <p className="text-sm font-semibold text-blue-600">
            FOR BUSINESSES
          </p>

          <h1 className="mt-2 text-3xl font-bold text-slate-900 sm:text-4xl">
            Build opportunities with people.
          </h1>

          <p className="mt-3 max-w-2xl text-slate-600">
            Businesses can find talent, create opportunities and provide
            financial-wellness tools for their teams.
          </p>

          <Link
            href="/login"
            className="primary-button mt-6 inline-block"
          >
            Create business account
          </Link>
        </div>
      </header>

      <section className="container py-8">
        <div className="grid gap-5 md:grid-cols-2">
          {businessTools.map((tool) => (
            <article key={tool.title} className="card">
              <h2 className="text-xl font-bold text-slate-900">
                {tool.title}
              </h2>

              <p className="mt-3 text-slate-600">
                {tool.description}
              </p>

              <Link
                href={tool.href}
                className="secondary-button mt-5 inline-block"
              >
                {tool.action}
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className="container pb-8">
        <div className="card">
          <p className="text-sm font-semibold text-blue-600">
            BUSINESS PLAN
          </p>

          <h2 className="mt-2 text-2xl font-bold text-slate-900">
            Financial wellness for organizations
          </h2>

          <p className="mt-3 max-w-2xl text-slate-600">
            Businesses can provide employees with budgeting tools, savings
            challenges, financial education and privacy-conscious aggregate
            reporting.
          </p>

          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            <div className="rounded-lg border border-slate-200 bg-white p-4">
              Employee financial wellness
            </div>

            <div className="rounded-lg border border-slate-200 bg-white p-4">
              Savings challenges
            </div>

            <div className="rounded-lg border border-slate-200 bg-white p-4">
              Budgeting tools
            </div>

            <div className="rounded-lg border border-slate-200 bg-white p-4">
              Financial education
            </div>
          </div>
        </div>
      </section>

      <section className="container pb-16">
        <div className="card">
          <h2 className="text-xl font-bold text-slate-900">
            Business security
          </h2>

          <p className="mt-2 text-slate-600">
            Business accounts will use verification, permissions, security
            controls and transaction safeguards before accessing sensitive
            features.
          </p>

          <Link
            href="/account"
            className="secondary-button mt-5 inline-block"
          >
            Security & verification
          </Link>
        </div>
      </section>
    </main>
  );
}
