export default function DashboardLoading() {
  return (
    <div className="grid grid-cols-12 gap-4 md:gap-6 animate-pulse">
      {/* Skeleton cards row */}
      {[1, 2, 3, 4].map((i) => (
        <div
          key={i}
          className="col-span-12 sm:col-span-6 xl:col-span-3 h-28 rounded-2xl bg-gray-100 dark:bg-white/[0.03]"
        />
      ))}
      {/* GA4 skeleton cards */}
      {[1, 2, 3, 4].map((i) => (
        <div
          key={i}
          className="col-span-12 sm:col-span-6 xl:col-span-3 h-28 rounded-2xl bg-gray-100 dark:bg-white/[0.03]"
        />
      ))}
      {/* Chart skeletons */}
      <div className="col-span-12 xl:col-span-8 h-96 rounded-2xl bg-gray-100 dark:bg-white/[0.03]" />
      <div className="col-span-12 xl:col-span-4 h-96 rounded-2xl bg-gray-100 dark:bg-white/[0.03]" />
      <div className="col-span-12 xl:col-span-6 h-72 rounded-2xl bg-gray-100 dark:bg-white/[0.03]" />
      <div className="col-span-12 h-64 rounded-2xl bg-gray-100 dark:bg-white/[0.03]" />
    </div>
  );
}
