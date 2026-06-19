export default function ActivityCard() {
  const days = Array.from({ length: 35 });

  return (
    <article className="bg-zinc-900 rounded-xl p-5">
      <h2 className="text-xl font-bold">
        Learning Activity
      </h2>

      <div className="grid grid-cols-7 gap-2 mt-6">
        {days.map((_, index) => (
          <div
            key={index}
            className="h-6 rounded bg-zinc-700"
          />
        ))}
      </div>
    </article>
  );
}