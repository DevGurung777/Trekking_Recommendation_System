import { useState } from "react";
import type { Trek } from "../data/treks";

export interface FilterState {
  budget: number;
  season: string;
  maxAltitude: number;
  duration: number;
  difficulty: string;
  location: string;
}

interface HomeProps {
  onSearch: (filters: FilterState) => void;
}

const HERO_IMAGE = "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1600&h=900&fit=crop&auto=format";

export default function Home({ onSearch }: HomeProps) {
  const [filters, setFilters] = useState<FilterState>({
    budget: 2000,
    season: "",
    maxAltitude: 6000,
    duration: 14,
    difficulty: "",
    location: "",
  });

  const set = (key: keyof FilterState, value: string | number) =>
    setFilters((f) => ({ ...f, [key]: value }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(filters);
  };

  return (
    <div className="min-h-screen" style={{ backgroundColor: "#0C1A13" }}>
      {/* Hero */}
      <div className="relative h-screen min-h-[600px] flex flex-col justify-end" style={{ backgroundColor: "#0C1A13" }}>
        <img
          src={HERO_IMAGE}
          alt="Mountain peak above clouds at dawn"
          className="absolute inset-0 w-full h-full object-cover"
          style={{ opacity: 0.45 }}
        />
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(to top, #0C1A13 0%, rgba(12,26,19,0.4) 60%, rgba(12,26,19,0.15) 100%)" }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-6 pb-16 pt-32 w-full">
          <div className="max-w-2xl">
            <p className="font-mono text-xs tracking-[0.2em] uppercase mb-5" style={{ color: "#C8792A" }}>
              Trail Intelligence
            </p>
            <h1 className="font-display text-6xl font-bold leading-[1.05] mb-6" style={{ color: "#F4ECD8" }}>
              Find your<br />
              <em className="not-italic" style={{ color: "#E8A94A" }}>perfect</em> trek.
            </h1>
            <p className="text-lg leading-relaxed" style={{ color: "#8FA88C", maxWidth: "480px" }}>
              Tell us your constraints — budget, fitness, time, altitude comfort — and we'll match you with routes worth every step.
            </p>
          </div>
        </div>
      </div>

      {/* Filter Form */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 -mt-4 pb-24">
        <form
          onSubmit={handleSubmit}
          className="rounded-lg p-8"
          style={{ backgroundColor: "#122019", border: "1px solid rgba(244,236,216,0.08)" }}
        >
          <h2 className="font-display text-2xl font-semibold mb-8" style={{ color: "#F4ECD8" }}>
            Plan your expedition
          </h2>

          <div className="grid grid-cols-1 gap-6" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))" }}>
            {/* Budget */}
            <div>
              <label className="block font-mono text-xs tracking-widest uppercase mb-3" style={{ color: "#8FA88C" }}>
                Budget (USD)
              </label>
              <div className="flex items-center gap-4">
                <input
                  type="range"
                  min={200}
                  max={5000}
                  step={100}
                  value={filters.budget}
                  onChange={(e) => set("budget", Number(e.target.value))}
                  className="flex-1 h-1 rounded-full appearance-none outline-none cursor-pointer"
                  style={{ accentColor: "#C8792A", backgroundColor: "#1E3428" }}
                />
                <span className="font-mono text-sm w-16 text-right" style={{ color: "#E8A94A" }}>
                  ${filters.budget.toLocaleString()}
                </span>
              </div>
            </div>

            {/* Season */}
            <div>
              <label className="block font-mono text-xs tracking-widest uppercase mb-3" style={{ color: "#8FA88C" }}>
                Season
              </label>
              <div className="flex gap-2 flex-wrap">
                {["Spring", "Summer", "Autumn", "Winter"].map((s) => (
                  <button
                    key={s}
                    type="button"
                    onClick={() => set("season", filters.season === s ? "" : s)}
                    className="px-3 py-1.5 text-sm rounded transition-all duration-150"
                    style={{
                      backgroundColor: filters.season === s ? "#C8792A" : "#1E3428",
                      color: filters.season === s ? "#0C1A13" : "#8FA88C",
                      border: `1px solid ${filters.season === s ? "#C8792A" : "rgba(244,236,216,0.08)"}`,
                      fontWeight: filters.season === s ? 500 : 400,
                    }}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>

            {/* Max Altitude */}
            <div>
              <label className="block font-mono text-xs tracking-widest uppercase mb-3" style={{ color: "#8FA88C" }}>
                Max Altitude (m)
              </label>
              <div className="flex items-center gap-4">
                <input
                  type="range"
                  min={1000}
                  max={8000}
                  step={100}
                  value={filters.maxAltitude}
                  onChange={(e) => set("maxAltitude", Number(e.target.value))}
                  className="flex-1 h-1 rounded-full appearance-none outline-none cursor-pointer"
                  style={{ accentColor: "#C8792A", backgroundColor: "#1E3428" }}
                />
                <span className="font-mono text-sm w-20 text-right" style={{ color: "#E8A94A" }}>
                  {filters.maxAltitude.toLocaleString()}m
                </span>
              </div>
            </div>

            {/* Duration */}
            <div>
              <label className="block font-mono text-xs tracking-widest uppercase mb-3" style={{ color: "#8FA88C" }}>
                Duration (days)
              </label>
              <div className="flex items-center gap-4">
                <input
                  type="range"
                  min={3}
                  max={60}
                  step={1}
                  value={filters.duration}
                  onChange={(e) => set("duration", Number(e.target.value))}
                  className="flex-1 h-1 rounded-full appearance-none outline-none cursor-pointer"
                  style={{ accentColor: "#C8792A", backgroundColor: "#1E3428" }}
                />
                <span className="font-mono text-sm w-14 text-right" style={{ color: "#E8A94A" }}>
                  {filters.duration}d
                </span>
              </div>
            </div>

            {/* Difficulty */}
            <div>
              <label className="block font-mono text-xs tracking-widest uppercase mb-3" style={{ color: "#8FA88C" }}>
                Difficulty
              </label>
              <div className="flex gap-2 flex-wrap">
                {["Easy", "Moderate", "Hard", "Extreme"].map((d) => (
                  <button
                    key={d}
                    type="button"
                    onClick={() => set("difficulty", filters.difficulty === d ? "" : d)}
                    className="px-3 py-1.5 text-sm rounded transition-all duration-150"
                    style={{
                      backgroundColor: filters.difficulty === d ? "#C8792A" : "#1E3428",
                      color: filters.difficulty === d ? "#0C1A13" : "#8FA88C",
                      border: `1px solid ${filters.difficulty === d ? "#C8792A" : "rgba(244,236,216,0.08)"}`,
                      fontWeight: filters.difficulty === d ? 500 : 400,
                    }}
                  >
                    {d}
                  </button>
                ))}
              </div>
            </div>

            {/* Location */}
            <div>
              <label className="block font-mono text-xs tracking-widest uppercase mb-3" style={{ color: "#8FA88C" }}>
                Region / Country
              </label>
              <input
                type="text"
                value={filters.location}
                onChange={(e) => set("location", e.target.value)}
                placeholder="Khumbu, Annapurna, Mustang…"
                className="w-full px-4 py-2.5 rounded text-sm outline-none transition-all duration-150"
                style={{
                  backgroundColor: "#1E3428",
                  border: "1px solid rgba(244,236,216,0.08)",
                  color: "#F4ECD8",
                }}
              />
            </div>
          </div>

          <div className="mt-8 flex justify-end">
            <button
              type="submit"
              className="px-8 py-3 rounded text-sm font-medium transition-all duration-200 hover:opacity-90 active:scale-95"
              style={{ backgroundColor: "#C8792A", color: "#0C1A13" }}
            >
              Find Matching Treks →
            </button>
          </div>
        </form>

        {/* Ambient stats */}
        <div className="mt-16 grid grid-cols-3 gap-8 max-w-lg">
          {[
            { value: "7", label: "Nepal routes" },
            { value: "14", label: "Districts covered" },
            { value: "5,416m", label: "Highest pass" },
          ].map(({ value, label }) => (
            <div key={label}>
              <div className="font-display text-3xl font-bold mb-1" style={{ color: "#E8A94A" }}>{value}</div>
              <div className="font-mono text-xs tracking-wide uppercase" style={{ color: "#8FA88C" }}>{label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
