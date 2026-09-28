const stats = [
  { label: "Opportunities", value: "0" },
  { label: "Active matches", value: "0" },
  { label: "Saved goals", value: "0" },
  { label: "Financial health", value: "Getting started" },
];

const sections = [
  {
    title: "Find opportunities",
    description:
      "Discover jobs, services, projects and people that match what you need.",
    action: "Explore opportunities",
  },
  {
    title: "Offer what you have",
    description:
      "Create an opportunity from your skills, services, products or experience.",
    action: "Create an offer",
  },
  {
    title: "Manage your money",
    description:
      "Track expenses, plan savings and build your emergency fund.",
    action: "Open financial tools",
  },
];

export default function Dashboard() {
  return (
    <main className="min-h-screen bg-slate-50">
      <header className="border-b bg-white">
        <div className="container flex items-center justify-between py-4">
          <div>
            <h1 className="text-xl font-bold text-slate-900">
              Your Dashboard
            </h1>
            <p className="text-sm text-slate-500">
              Your opportunities and financial progress in one place.
            </p>
          </div>

          <button className="secondary-button">Profile</button>
        </div>
      </header>

      <section className="container py-8">
        <h2 className="text-2xl font-bold text-slate-900">
          Welcome to Opportunity Engine
        </h2>

        <p className="mt-2 text-slate-600">
          Your dashboard will become the central place for your opportunities,
          transactions and financial wellness.
        </p>

        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="card">
              <p className="text-sm text-slate-500">{stat.label}</p>
              <p className="mt-2 text-2xl font-bold text-slate-900">
                {stat.value}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="container pb-12">
        <div className="grid gap-6 md:grid-cols-3">
          {sections.map((section) => (
            <article key={section.title} className="card">
              <h3 className="text-xl font-bold text-slate-900">
                {section.title}
              </h3>

              <p className="mt-3 text-slate-600">
                {section.description}
              </p>

              <button className="primary-button mt-6">
                {section.action}
              </button>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
