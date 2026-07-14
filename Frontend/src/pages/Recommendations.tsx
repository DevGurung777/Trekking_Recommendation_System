import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ALL_TREKS, type Trek } from "../data/trekData";
import { TREK_ID_MAP } from "../data/treks";
import type { FilterState } from "./Home";

interface RecommendationsProps {
  filters: FilterState | null;
}

function difficultyColor(d: string) {
  if (d === "Easy") return "#4CAF7D";
  if (d === "Moderate") return "#E8A94A";
  if (d === "Hard") return "#E07040";
  return "#CF4040";
}

function matchScore(trek: Trek, filters: FilterState | null): number {
  if (!filters) return 1;
  let score = 0;
  if (trek.budget <= filters.budget) score += 30;
  if (trek.altitude <= filters.maxAltitude) score += 25;
  if (trek.duration <= filters.duration) score += 20;
  if (!filters.season || trek.seasons.includes(filters.season as any)) score += 15;
  if (!filters.difficulty || trek.difficulty === filters.difficulty) score += 10;
  if (
    !filters.location ||
    trek.country.toLowerCase().includes(filters.location.toLowerCase()) ||
    trek.location.toLowerCase().includes(filters.location.toLowerCase())
  )
    score += 10;
  return score;
}

function TrekCard({ trek, rank, onView }: { trek: Trek; rank: number; onView: () => void }) {
  const [hovered, setHovered] = useState(false);

  return (
    <article
      className="rounded-lg overflow-hidden transition-all duration-300 cursor-pointer group"
      style={{
        backgroundColor: "#122019",
        border: `1px solid ${hovered ? "rgba(200,121,42,0.3)" : "rgba(244,236,216,0.08)"}`,
        transform: hovered ? "translateY(-2px)" : "translateY(0)",
        boxShadow: hovered ? "0 12px 40px rgba(0,0,0,0.4)" : "none",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={onView}
    >
      {/* Image */}
      <div className="relative overflow-hidden" style={{ height: "220px", backgroundColor: "#0C1A13" }}>
        <img
          src={trek.thumbnailImage}
          alt={trek.name}
          className="w-full h-full object-cover transition-transform duration-500"
          style={{ transform: hovered ? "scale(1.04)" : "scale(1)" }}
        />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(18,32,25,0.8) 0%, transparent 60%)" }} />
        <div className="absolute top-3 left-3 flex gap-2">
          <span
            className="font-mono text-xs px-2 py-0.5 rounded"
            style={{ backgroundColor: "rgba(200,121,42,0.9)", color: "#0C1A13" }}
          >
            #{rank}
          </span>
          <span
            className="font-mono text-xs px-2 py-0.5 rounded"
            style={{ backgroundColor: "rgba(12,26,19,0.85)", color: difficultyColor(trek.difficulty), border: `1px solid ${difficultyColor(trek.difficulty)}40` }}
          >
            {trek.difficulty}
          </span>
        </div>
        <div className="absolute bottom-3 left-3 right-3">
          <div className="flex gap-1.5 flex-wrap">
            {trek.tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="font-mono text-xs px-2 py-0.5 rounded"
                style={{ backgroundColor: "rgba(12,26,19,0.7)", color: "#8FA88C", border: "1px solid rgba(244,236,216,0.1)" }}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        <div className="flex items-start justify-between gap-3 mb-2">
          <div>
            <h3 className="font-display text-xl font-semibold leading-tight mb-0.5" style={{ color: "#F4ECD8" }}>
              {trek.name}
            </h3>
            <p className="font-mono text-xs" style={{ color: "#8FA88C" }}>
              {trek.location}, {trek.country}
            </p>
          </div>
        </div>

        <p className="text-sm leading-relaxed mt-3 mb-4" style={{ color: "#D4C5A9" }}>
          {trek.summary}
        </p>

        {/* Specs */}
        <div className="grid grid-cols-4 gap-2 pt-4" style={{ borderTop: "1px solid rgba(244,236,216,0.06)" }}>
          {[
            { label: "Altitude", value: `${trek.altitude.toLocaleString()}m` },
            { label: "Duration", value: `${trek.duration}d` },
            { label: "Budget", value: `$${trek.budget.toLocaleString()}` },
            { label: "Seasons", value: trek.seasons[0] },
          ].map(({ label, value }) => (
            <div key={label} className="text-center">
              <div className="font-mono text-xs font-medium" style={{ color: "#E8A94A" }}>{value}</div>
              <div className="font-mono text-xs mt-0.5" style={{ color: "#8FA88C", fontSize: "10px" }}>{label}</div>
            </div>
          ))}
        </div>
      </div>
    </article>
  );
}

function TrekDetailModal({ trek, onClose, onViewMap }: { trek: Trek; onClose: () => void; onViewMap: () => void }) {
  return (
    <div
      className="fixed inset-0 z-50 flex items-start justify-center overflow-y-auto py-8 px-4"
      style={{ backgroundColor: "rgba(12,26,19,0.92)", backdropFilter: "blur(8px)" }}
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div
        className="w-full max-w-3xl rounded-lg overflow-hidden"
        style={{ backgroundColor: "#122019", border: "1px solid rgba(244,236,216,0.1)" }}
      >
        {/* Hero */}
        <div className="relative" style={{ height: "360px", backgroundColor: "#0C1A13" }}>
          <img src={trek.heroImage} alt={trek.name} className="w-full h-full object-cover" style={{ opacity: 0.8 }} />
          <div className="absolute inset-0" style={{ background: "linear-gradient(to top, #122019 0%, transparent 60%)" }} />
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-8 h-8 rounded flex items-center justify-center transition-all"
            style={{ backgroundColor: "rgba(12,26,19,0.7)", color: "#F4ECD8", border: "1px solid rgba(244,236,216,0.1)" }}
          >
            ✕
          </button>
          <div className="absolute bottom-6 left-8 right-8">
            <p className="font-mono text-xs tracking-widest uppercase mb-2" style={{ color: "#C8792A" }}>
              {trek.location} · {trek.country}
            </p>
            <h2 className="font-display text-4xl font-bold" style={{ color: "#F4ECD8" }}>
              {trek.name}
            </h2>
          </div>
        </div>

        {/* Body */}
        <div className="p-8">
          {/* Stats row */}
          <div className="grid grid-cols-5 gap-4 mb-8 p-4 rounded" style={{ backgroundColor: "#0C1A13" }}>
            {[
              { label: "Max Altitude", value: `${trek.altitude.toLocaleString()}m` },
              { label: "Duration", value: `${trek.duration} days` },
              { label: "Difficulty", value: trek.difficulty },
              { label: "Best Season", value: trek.seasons.join(", ") },
              { label: "Budget", value: `~$${trek.budget.toLocaleString()}` },
            ].map(({ label, value }) => (
              <div key={label} className="text-center">
                <div className="font-mono text-sm font-medium mb-0.5" style={{ color: "#E8A94A" }}>{value}</div>
                <div className="font-mono text-xs" style={{ color: "#8FA88C", fontSize: "10px" }}>{label}</div>
              </div>
            ))}
          </div>

          {/* Article body */}
          <div className="space-y-5 mb-8">
            {trek.body.map((para, i) => (
              <p key={i} className="text-base leading-relaxed" style={{ color: "#D4C5A9", fontFamily: "Inter, sans-serif" }}>
                {para}
              </p>
            ))}
          </div>

          {/* Highlights */}
          <div className="mb-8">
            <h4 className="font-display text-lg font-semibold mb-3" style={{ color: "#F4ECD8" }}>
              Highlights
            </h4>
            <ul className="space-y-2">
              {trek.highlights.map((h) => (
                <li key={h} className="flex items-start gap-3 text-sm" style={{ color: "#D4C5A9" }}>
                  <span style={{ color: "#C8792A", marginTop: "2px", flexShrink: 0 }}>▲</span>
                  {h}
                </li>
              ))}
            </ul>
          </div>

          {/* View Route Map */}
          {TREK_ID_MAP[trek.id] && (
            <button
              onClick={onViewMap}
              className="w-full font-mono text-sm font-medium px-5 py-3 rounded cursor-pointer transition-colors duration-200"
              style={{ backgroundColor: "#C8792A", color: "#0C1A13" }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#E8A94A")}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#C8792A")}
            >
              View Route Map →
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default function Recommendations({ filters }: RecommendationsProps) {
  const [selectedTrek, setSelectedTrek] = useState<Trek | null>(null);
  const navigate = useNavigate();

  const scored = ALL_TREKS
    .map((trek) => ({ trek, score: matchScore(trek, filters) }))
    .sort((a, b) => b.score - a.score);

  const hasFilters = filters !== null;

  return (
    <div className="min-h-screen pt-24 pb-20" style={{ backgroundColor: "#0C1A13" }}>
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="mb-10">
          <p className="font-mono text-xs tracking-[0.2em] uppercase mb-3" style={{ color: "#C8792A" }}>
            {hasFilters ? "Matched results" : "All routes"}
          </p>
          <h1 className="font-display text-5xl font-bold mb-3" style={{ color: "#F4ECD8" }}>
            {hasFilters ? "Your recommendations" : "All treks"}
          </h1>
          {hasFilters && (
            <p className="text-sm" style={{ color: "#8FA88C" }}>
              Ranked by match score — filters applied: budget ${filters.budget.toLocaleString()}, up to {filters.maxAltitude.toLocaleString()}m, {filters.duration} days
              {filters.season ? `, ${filters.season}` : ""}
              {filters.difficulty ? `, ${filters.difficulty}` : ""}
              {filters.location ? `, near ${filters.location}` : ""}
            </p>
          )}
        </div>

        {/* Featured top pick */}
        {scored.length > 0 && (
          <div
            className="rounded-lg overflow-hidden mb-10 cursor-pointer group transition-all duration-300"
            style={{ backgroundColor: "#122019", border: "1px solid rgba(200,121,42,0.2)" }}
            onClick={() => setSelectedTrek(scored[0].trek)}
          >
            <div className="grid" style={{ gridTemplateColumns: "1fr 1fr" }}>
              <div className="relative" style={{ height: "360px", backgroundColor: "#0C1A13" }}>
                <img
                  src={scored[0].trek.heroImage}
                  alt={scored[0].trek.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  style={{ opacity: 0.75 }}
                />
              </div>
              <div className="p-10 flex flex-col justify-center">
                <div className="flex items-center gap-2 mb-4">
                  <span className="font-mono text-xs px-2 py-0.5 rounded" style={{ backgroundColor: "#C8792A", color: "#0C1A13" }}>
                    Top Pick
                  </span>
                  <span className="font-mono text-xs" style={{ color: "#8FA88C" }}>
                    {scored[0].trek.location}, {scored[0].trek.country}
                  </span>
                </div>
                <h2 className="font-display text-4xl font-bold mb-4 leading-tight" style={{ color: "#F4ECD8" }}>
                  {scored[0].trek.name}
                </h2>
                <p className="text-base leading-relaxed mb-6" style={{ color: "#D4C5A9" }}>
                  {scored[0].trek.summary}
                </p>
                <div className="flex gap-6">
                  {[
                    { label: "Altitude", value: `${scored[0].trek.altitude.toLocaleString()}m` },
                    { label: "Duration", value: `${scored[0].trek.duration} days` },
                    { label: "Budget", value: `$${scored[0].trek.budget.toLocaleString()}` },
                  ].map(({ label, value }) => (
                    <div key={label}>
                      <div className="font-mono text-sm font-medium" style={{ color: "#E8A94A" }}>{value}</div>
                      <div className="font-mono text-xs mt-0.5" style={{ color: "#8FA88C" }}>{label}</div>
                    </div>
                  ))}
                </div>
                <div className="mt-6">
                  <span className="text-sm font-medium" style={{ color: "#C8792A" }}>
                    Read the full route guide →
                  </span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Grid */}
        <div className="grid gap-6" style={{ gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))" }}>
          {scored.slice(1).map(({ trek }, i) => (
            <TrekCard
              key={trek.id}
              trek={trek}
              rank={i + 2}
              onView={() => setSelectedTrek(trek)}
            />
          ))}
        </div>
      </div>

      {selectedTrek && (
        <TrekDetailModal
          trek={selectedTrek}
          onClose={() => setSelectedTrek(null)}
          onViewMap={() => {
            const geoKey = TREK_ID_MAP[selectedTrek.id];
            if (geoKey) {
              setSelectedTrek(null);
              navigate(`/treks/${geoKey}`);
            }
          }}
        />
      )}
    </div>
  );
}
