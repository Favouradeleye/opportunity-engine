
const features = [
  {
    title: "Find opportunities",
    description:
      "Discover jobs, services, projects, products and people who can help you.",
    icon: "🔎",
  },
  {
    title: "Offer what you have",
    description:
      "Turn your skills, time, products or experience into opportunities.",
    icon: "🤝",
  },
  {
    title: "Build your financial health",
    description:
      "Track spending, create savings goals and plan for emergencies.",
    icon: "💰",
  },
];

const quickActions = [
  "Find an opportunity",
  "Offer a skill or service",
  "Create a savings goal",
  "Track an expense",
];

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50">
      <header className="border-b bg-white">
        <div className="container flex items-center justify-between py-4">
          <div>
            <h1 className="text-xl font-bold text-slate-900">
              Opportunity Engine
            </h1>
            <p className="text-sm text-slate-500">
              Turn what you have into opportunities.
            </p>
          </div>

          <button className="primary-button">Sign in</button>
        </div>
      </header>

      <section className="container py-12">
        <div className="max-w-3xl">
          <p className="mb-3 font-semibold text-blue-600">
            ONE PLATFORM. MANY OPPORTUNITIES.
          </p>

          <h2 className="text-4xl font-bold leading-tight text-slate-900 sm:text-6xl">
            Find what you need.
            <br />
            Offer what you have.
            <br />
            Build your future.
          </h2>

          <p className="mt-6 max-w-2xl text-lg text-slate-600">
            Opportunity Engine connects people, skills, services, projects,
            businesses and financial tools in one place.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <button className="primary-button">
              Find an opportunity
            </button>

            <button className="secondary-button">
              Offer something
            </button>
          </div>
        </div>
      </section>

      <section className="container pb-10">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {quickActions.map((action) => (
            <button
              key={action}
              className="card text-left transition hover:-translate-y-1"
            >
              <span className="text-lg font-semibold text-slate-900">
                {action}
              </span>
              <span className="mt-2 block text-sm text-slate-500">
                Get started
              </span>
            </button>
          ))}
        </div>
      </section>

      <section className="container pb-16">
        <div className="grid gap-6 md:grid-cols-3">
          {features.map((feature) => (
            <article key={feature.title} className="card">
              <div className="text-3xl">{feature.icon}</div>

              <h3 className="mt-4 text-xl font-bold text-slate-900">
                {feature.title}
              </h3>

              <p className="mt-2 text-slate-600">
                {feature.description}
              </p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
