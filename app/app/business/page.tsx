const businessTools = [
  {
    title: "Post an opportunity",
    description:
      "Find people with the skills and experience your business needs.",
    action: "Create opportunity",
  },
  {
    title: "Find talent",
    description:
      "Discover people based on skills, experience and opportunity requirements.",
    action: "Find talent",
  },
  {
    title: "Employee financial wellness",
    description:
      "Provide employees with budgeting, savings and financial education tools.",
    action: "Explore business plan",
  },
  {
    title: "Business dashboard",
    description:
      "Manage opportunities, activity, transactions and business information.",
    action: "Open dashboard",
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

          <button className="primary-button mt-6">
            Create business account
          </button>
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

              <button className="secondary-button mt-5">
                {tool.action}
              </button>
            </article>
          ))}
        </div>
      </section>

      <section className="container pb-16">
        <div className="card">
          <h2 className="text-2xl font-bold text-slate-900">
            Business plan
          </h2>

          <p className="mt-3 max-w-2xl text-slate-600">
            The business plan will include employee financial-wellness
            features, savings challenges, budgeting tools, financial
            education and privacy-conscious aggregate reporting.
          </p>

          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            <div className="rounded-lg border border-slate-200 p-4">
              Employee financial wellness
            </div>

            <div className="rounded-lg border border-slate-200 p-4">
              Savings challenges
            </div>

            <div className="rounded-lg border border-slate-200 p-4">
              Budgeting tools
            </div>

            <div className="rounded-lg border border-slate-200 p-4">
              Financial education
            </div>
          </div>
        </div>
      </section>
    </main>
  );
      }
