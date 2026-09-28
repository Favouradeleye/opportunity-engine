const verificationSteps = [
  {
    title: "Email verification",
    status: "Not connected",
  },
  {
    title: "Phone verification",
    status: "Not connected",
  },
  {
    title: "Identity verification",
    status: "Not completed",
  },
];

export default function AccountPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      <header className="border-b bg-white">
        <div className="container py-6">
          <p className="text-sm font-semibold text-blue-600">
            ACCOUNT & SECURITY
          </p>

          <h1 className="mt-2 text-3xl font-bold text-slate-900">
            Your Account
          </h1>

          <p className="mt-2 text-slate-600">
            Manage your identity, security, subscription and personal
            information.
          </p>
        </div>
      </header>

      <section className="container py-8">
        <div className="card">
          <h2 className="text-xl font-bold text-slate-900">
            Personal information
          </h2>

          <div className="mt-5 grid gap-4 sm:grid-cols-2">
            <div>
              <p className="text-sm text-slate-500">Name</p>
              <p className="font-semibold">Not set</p>
            </div>

            <div>
              <p className="text-sm text-slate-500">Email</p>
              <p className="font-semibold">Not connected</p>
            </div>

            <div>
              <p className="text-sm text-slate-500">Country</p>
              <p className="font-semibold">Not set</p>
            </div>

            <div>
              <p className="text-sm text-slate-500">Currency</p>
              <p className="font-semibold">Not set</p>
            </div>
          </div>

          <button className="primary-button mt-6">
            Edit profile
          </button>
        </div>
      </section>

      <section className="container pb-8">
        <div className="card">
          <h2 className="text-xl font-bold text-slate-900">
            Verification
          </h2>

          <p className="mt-2 text-slate-600">
            Verification helps protect users and makes financial activity
            safer.
          </p>

          <div className="mt-5 space-y-3">
            {verificationSteps.map((step) => (
              <div
                key={step.title}
                className="flex items-center justify-between rounded-lg border border-slate-200 p-4"
              >
                <span className="font-semibold text-slate-900">
                  {step.title}
                </span>

                <span className="text-sm text-slate-500">
                  {step.status}
                </span>
              </div>
            ))}
          </div>

          <button className="secondary-button mt-5">
            Start verification
          </button>
        </div>
      </section>

      <section className="container pb-16">
        <div className="grid gap-5 md:grid-cols-2">
          <div className="card">
            <h2 className="text-xl font-bold text-slate-900">
              Security
            </h2>

            <p className="mt-2 text-slate-600">
              Manage password, two-factor authentication, sessions and
              security alerts.
            </p>

            <button className="secondary-button mt-5">
              Security settings
            </button>
          </div>

          <div className="card">
            <h2 className="text-xl font-bold text-slate-900">
              Subscription
            </h2>

            <p className="mt-2 text-slate-600">
              Current plan: Free
            </p>

            <button className="primary-button mt-5">
              View plans
            </button>
          </div>
        </div>
      </section>
    </main>
  );
      }
