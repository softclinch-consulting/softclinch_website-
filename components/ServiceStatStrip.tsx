type ServiceStat = {
  value: string;
  label: string;
};

export function ServiceStatStrip({
  items,
}: {
  items: ServiceStat[];
}) {
  return (
    <div className="mx-auto mt-12 grid max-w-7xl gap-4 md:grid-cols-2 xl:grid-cols-4">
      {items.map((item) => (
        <div
          key={item.label}
          className="rounded-3xl border border-slate-200 bg-white px-6 py-8 shadow-sm"
        >
          <div className="text-3xl font-bold text-slate-950">{item.value}</div>
          <p className="mt-2 text-sm leading-6 text-slate-600">{item.label}</p>
        </div>
      ))}
    </div>
  );
}
