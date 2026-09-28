const categories = [
  "All",
  "Jobs",
  "Services",
  "Projects",
  "Products",
  "Skill Exchange",
  "Partnerships",
];

const exampleOpportunities = [
  {
    type: "Service",
    title: "Logo design for a small business",
    description:
      "Looking for a designer to create a clean professional logo.",
    location: "Remote",
    budget: "₦30,000",
  },
  {
    type: "Project",
    title: "Build a small business website",
    description:
      "A local business needs a simple website and online presence.",
    location: "Remote",
    budget: "₦100,000",
  },
  {
    type: "Skill Exchange",
    title: "Graphic design in exchange for tutoring",
    description:
      "Offering graphic design help in exchange for mathematics tutoring.",
    location: "Online",
    budget: "Exchange",
  },
];

export default function OpportunitiesPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      <header className="border-b bg-white">
        <div className="container py-6">
          <h1 className="text-3xl font-bold text-slate-900">
            Opportunities
          </h1>

          <p className="mt-2 text-slate-600">
            Find something you can do, offer what you have, or discover a
            useful connection.
          </p>
        </div>
      </header>

      <section className="container py-6">
        <div className="card">
          <label
            htmlFor="search"
            className="text-sm font-semibold text-slate-700"
          >
            Search opportunities
          </label>

          <input
            id="search"
            type="search"
            placeholder="Search jobs, services, projects, skills..."
            className="mt-2 w-full rounded-lg border border-slate-300 bg-white px-4 py-3 outline-none focus:border-blue-600"
          />

          <div className="mt-4 flex gap-2 overflow-x-auto pb-2">
            {categories.map((category) => (
              <button
                key={category}
                className="whitespace-nowrap rounded-full border border-slate-300 bg-white px-4 py-2 text-sm font-semibold"
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="container pb-12">
        <div className="mb-5 flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold text-slate-900">
              Discover opportunities
            </h2>

            <p className="mt-1 text-sm text-slate-500">
              Personalized matching will connect users with relevant
              opportunities.
            </p>
          </div>

          <button className="primary-button">Create opportunity</button>
        </div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {exampleOpportunities.map((opportunity) => (
            <article key={opportunity.title} className="card">
              <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700">
                {opportunity.type}
              </span>

              <h3 className="mt-4 text-xl font-bold text-slate-900">
                {opportunity.title}
              </h3>

              <p className="mt-3 text-slate-600">
                {opportunity.description}
              </p>

              <div className="mt-5 flex items-center justify-between text-sm">
                <span className="text-slate-500">
                  {opportunity.location}
                </span>

                <span className="font-bold text-slate-900">
                  {opportunity.budget}
                </span>
              </div>

              <button className="secondary-button mt-5 w-full">
                View opportunity
              </button>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
