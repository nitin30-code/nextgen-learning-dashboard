export default function HeroCard() {
  return (
    <section className="bg-zinc-900 rounded-xl p-6 mb-6">
      <h1 className="text-3xl font-bold">
        Welcome Back 👋
      </h1>

      <p className="text-zinc-400 mt-2">
        Track your learning progress and complete your courses.
      </p>

      <div className="mt-4 flex gap-4">
        <div className="bg-zinc-800 px-4 py-2 rounded-lg">
          4 Active Courses
        </div>

        <div className="bg-zinc-800 px-4 py-2 rounded-lg">
          68% Average Progress
        </div>
      </div>
    </section>
  );
}