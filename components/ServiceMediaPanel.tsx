import { PlayCircle } from "lucide-react";

type ServiceMediaPanelProps = {
  title: string;
  subtitle: string;
  imageSrc?: string;
  imageAlt?: string;
  points?: string[];
  mode?: "image" | "video";
  theme?: "light" | "dark";
};

export function ServiceMediaPanel({
  title,
  subtitle,
  imageSrc,
  imageAlt,
  points = [],
  mode = "image",
  theme = "dark",
}: ServiceMediaPanelProps) {
  const dark = theme === "dark";

  return (
    <div
      className={[
        "relative overflow-hidden rounded-[28px] border shadow-2xl",
        dark
          ? "border-white/10 bg-slate-950 text-white"
          : "border-slate-200 bg-white text-slate-900",
      ].join(" ")}
    >
      <div
        className={[
          "absolute inset-0",
          dark
            ? "bg-[radial-gradient(circle_at_top_right,rgba(194,94,63,0.18),transparent_30%),radial-gradient(circle_at_top_left,rgba(11,37,69,0.24),transparent_42%)]"
            : "bg-[radial-gradient(circle_at_top_right,rgba(194,94,63,0.12),transparent_30%),radial-gradient(circle_at_top_left,rgba(11,37,69,0.12),transparent_42%)]",
        ].join(" ")}
      />

      <div className="relative p-6">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p
              className={[
                "text-xs font-semibold uppercase tracking-[0.2em]",
                dark ? "text-white/60" : "text-brand-terracotta",
              ].join(" ")}
            >
              {mode === "video" ? "Video Preview" : "Visual Preview"}
            </p>
            <h3 className="mt-2 text-2xl font-bold">{title}</h3>
            <p className={["mt-2 text-sm leading-7", dark ? "text-slate-300" : "text-slate-600"].join(" ")}>
              {subtitle}
            </p>
          </div>
          {mode === "video" && (
            <div className="rounded-2xl bg-white/10 p-2">
              <PlayCircle className={dark ? "h-8 w-8 text-brand-terracotta" : "h-8 w-8 text-brand-navy"} />
            </div>
          )}
        </div>

        <div
          className={[
            "mt-6 overflow-hidden rounded-[22px] border",
            dark ? "border-white/10 bg-white/5" : "border-slate-200 bg-slate-50",
          ].join(" ")}
        >
          {imageSrc ? (
            <div className="relative">
              <img
                src={imageSrc}
                alt={imageAlt ?? title}
                className="h-[340px] w-full object-cover"
              />
              {mode === "video" && (
                <div className="absolute inset-0 flex items-center justify-center bg-slate-950/20">
                  <div className="rounded-full bg-white/90 p-4 shadow-xl">
                    <PlayCircle className="h-10 w-10 text-brand-navy" />
                  </div>
                </div>
              )}
            </div>
          ) : (
            <div className="grid min-h-[340px] place-items-center px-6 py-10">
              <div className="w-full max-w-md rounded-[24px] border border-white/10 bg-white/10 p-6 backdrop-blur">
                <div className="flex items-center gap-3">
                  <div className="h-3 w-3 rounded-full bg-brand-terracotta" />
                  <div className="h-3 w-3 rounded-full bg-amber-400" />
                  <div className="h-3 w-3 rounded-full bg-emerald-400" />
                </div>
                <div className="mt-6 space-y-3">
                  <div className="rounded-xl bg-white/10 px-4 py-3 text-sm text-white/90">
                    AI workflows and automation orchestration
                  </div>
                  <div className="rounded-xl bg-white/10 px-4 py-3 text-sm text-white/90">
                    Unified dashboards, CRM, and routing systems
                  </div>
                  <div className="rounded-xl bg-white/10 px-4 py-3 text-sm text-white/90">
                    Enterprise-ready process visibility and control
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {points.length > 0 && (
          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            {points.map((point) => (
              <div
                key={point}
                className={[
                  "rounded-2xl px-4 py-4 text-sm font-medium",
                  dark
                    ? "border border-white/10 bg-white/5 text-white/90"
                    : "border border-slate-200 bg-slate-50 text-slate-700",
                ].join(" ")}
              >
                {point}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
