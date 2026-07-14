import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { USER_HISTORY, USER_STATS, type UserTrekHistory } from "../data/trekData";

interface DashboardProps {
  userName: string;
}
function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map((n) => (
        <span key={n} style={{ color: n <= rating ? "#E8A94A" : "#1E3428", fontSize: "14px" }}>
          ★
        </span>
      ))}
    </div>
  );
}

function StatCard({ value, label, sub }: { value: string; label: string; sub?: string }) {
  return (
    <div
      className="rounded-lg p-5 flex flex-col gap-2"
      style={{ backgroundColor: "#122019", border: "1px solid rgba(244,236,216,0.08)" }}
    >
      <div className="font-display text-3xl font-bold" style={{ color: "#E8A94A" }}>{value}</div>
      <div>
        <div className="text-sm font-medium" style={{ color: "#F4ECD8" }}>{label}</div>
        {sub && <div className="font-mono text-xs mt-0.5" style={{ color: "#8FA88C" }}>{sub}</div>}
      </div>
    </div>
  );
}

function HistoryCard({ entry }: { entry: UserTrekHistory }) {
  const [expanded, setExpanded] = useState(false);
  const date = new Date(entry.completedDate);
  const formatted = date.toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" });

  return (
    <div
      className="rounded-lg overflow-hidden transition-all duration-200"
      style={{ backgroundColor: "#122019", border: "1px solid rgba(244,236,216,0.08)" }}
    >
      <div className="flex gap-4 p-5">
        <div
          className="flex-shrink-0 rounded overflow-hidden"
          style={{ width: "100px", height: "80px", backgroundColor: "#0C1A13" }}
        >
          <img
            src={entry.photos[0]}
            alt={entry.trekName}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between gap-3 mb-1">
            <h3 className="font-display text-lg font-semibold" style={{ color: "#F4ECD8" }}>
              {entry.trekName}
            </h3>
            <StarRating rating={entry.rating} />
          </div>
          <p className="font-mono text-xs mb-2" style={{ color: "#8FA88C" }}>
            Completed {formatted} · {entry.duration} days · {entry.maxAltitude.toLocaleString()}m max
          </p>
          <div className="flex gap-1.5 flex-wrap">
            {entry.badges.map((badge) => (
              <span
                key={badge}
                className="font-mono text-xs px-2 py-0.5 rounded"
                style={{ backgroundColor: "rgba(200,121,42,0.1)", color: "#C8792A", border: "1px solid rgba(200,121,42,0.2)" }}
              >
                {badge}
              </span>
            ))}
          </div>
        </div>
        <button
          onClick={() => setExpanded(!expanded)}
          className="flex-shrink-0 text-sm transition-colors self-start mt-0.5"
          style={{ color: "#8FA88C" }}
        >
          {expanded ? "▲" : "▼"}
        </button>
      </div>

      {expanded && (
        <div
          className="px-5 pb-5 pt-0"
          style={{ borderTop: "1px solid rgba(244,236,216,0.06)" }}
        >
          <p className="text-sm leading-relaxed mt-4" style={{ color: "#D4C5A9", fontStyle: "italic" }}>
            "{entry.notes}"
          </p>
        </div>
      )}
    </div>
  );
}

function AltitudeBar({ history }: { history: UserTrekHistory[] }) {
  const max = Math.max(...history.map((h) => h.maxAltitude), 6000);

  return (
    <div
      className="rounded-lg p-5"
      style={{ backgroundColor: "#122019", border: "1px solid rgba(244,236,216,0.08)" }}
    >
      <h3 className="font-display text-lg font-semibold mb-4" style={{ color: "#F4ECD8" }}>
        Altitude Profile
      </h3>
      <div className="space-y-3">
        {history.map((entry) => (
          <div key={entry.id}>
            <div className="flex justify-between items-center mb-1">
              <span className="text-xs" style={{ color: "#D4C5A9" }}>{entry.trekName.split(" ").slice(0, 3).join(" ")}</span>
              <span className="font-mono text-xs" style={{ color: "#8FA88C" }}>{entry.maxAltitude.toLocaleString()}m</span>
            </div>
            <div className="h-1.5 rounded-full overflow-hidden" style={{ backgroundColor: "#1E3428" }}>
              <div
                className="h-full rounded-full transition-all duration-700"
                style={{
                  width: `${(entry.maxAltitude / max) * 100}%`,
                  background: "linear-gradient(to right, #C8792A, #E8A94A)",
                }}
              />
            </div>
          </div>
        ))}
        <div className="flex justify-between pt-2" style={{ borderTop: "1px solid rgba(244,236,216,0.06)" }}>
          <span className="font-mono text-xs" style={{ color: "#8FA88C" }}>0m</span>
          <span className="font-mono text-xs" style={{ color: "#8FA88C" }}>{max.toLocaleString()}m</span>
        </div>
      </div>
    </div>
  );
}

export default function Dashboard({ userName }: DashboardProps) {
  const navigate = useNavigate();

  const [activeTab, setActiveTab] = useState<
    "overview" | "history" | "wishlist"
  >("overview");

  const WISHLIST = [
    { name: "Everest Base Camp", country: "Nepal", reason: "The ultimate Himalayan pilgrimage — Khumbu Icefall views from Kala Patthar" },
    { name: "Upper Mustang Trek", country: "Nepal", reason: "The forbidden kingdom of Lo — targeting Tiji Festival in May 2026" },
    { name: "Dolpo & Shey Phoksundo", country: "Nepal", reason: "The Snow Leopard country — needs full camping expedition prep" },
  ];

  return (
    <div className="min-h-screen pt-24 pb-20" style={{ backgroundColor: "#0C1A13" }}>
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="mb-10 flex items-end justify-between">
          <div>
            <p className="font-mono text-xs tracking-[0.2em] uppercase mb-2" style={{ color: "#C8792A" }}>
              Personal Dashboard
            </p>
            <h1 className="font-display text-5xl font-bold" style={{ color: "#F4ECD8" }}>
              Welcome back, {userName}.
            </h1>
          </div>
          <button
            onClick={() => navigate("/")}
            className="px-5 py-2.5 rounded text-sm font-medium transition-all hover:opacity-80"
            style={{ backgroundColor: "#1E3428", color: "#D4C5A9", border: "1px solid rgba(244,236,216,0.08)" }}
          >
            Plan new trek →
          </button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-4 mb-10">
          <StatCard value={String(USER_STATS.totalTreks)} label="Treks completed" sub="All time" />
          <StatCard value={`${USER_STATS.totalKm}km`} label="Trail distance" sub="Estimated total" />
          <StatCard value={`${USER_STATS.maxAltitude.toLocaleString()}m`} label="Personal best" sub="Max altitude" />
          <StatCard value={String(USER_STATS.countries.length)} label="Countries trekked" sub={USER_STATS.countries.slice(0, 2).join(", ") + "…"} />
          <StatCard value={`${USER_STATS.totalDays}d`} label="Days on trail" sub="Combined total" />
        </div>

        {/* Tabs */}
        <div className="flex gap-1 mb-8 p-1 rounded-lg w-fit" style={{ backgroundColor: "#122019" }}>
          {(["overview", "history", "wishlist"] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className="px-5 py-2 text-sm rounded capitalize transition-all duration-150"
              style={{
                backgroundColor: activeTab === tab ? "#C8792A" : "transparent",
                color: activeTab === tab ? "#0C1A13" : "#8FA88C",
                fontWeight: activeTab === tab ? 500 : 400,
              }}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Tab content */}
        {activeTab === "overview" && (
          <div className="grid gap-6" style={{ gridTemplateColumns: "2fr 1fr" }}>
            <div>
              <h2 className="font-display text-2xl font-semibold mb-4" style={{ color: "#F4ECD8" }}>
                Recent treks
              </h2>
              <div className="space-y-3">
                {USER_HISTORY.map((entry) => (
                  <HistoryCard key={entry.id} entry={entry} />
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <AltitudeBar history={USER_HISTORY} />

              {/* Countries visited */}
              <div
                className="rounded-lg p-5"
                style={{ backgroundColor: "#122019", border: "1px solid rgba(244,236,216,0.08)" }}
              >
                <h3 className="font-display text-lg font-semibold mb-4" style={{ color: "#F4ECD8" }}>
                  Countries visited
                </h3>
                <div className="flex flex-wrap gap-2">
                  {USER_STATS.countries.map((c) => (
                    <span
                      key={c}
                      className="font-mono text-xs px-3 py-1 rounded"
                      style={{ backgroundColor: "#1E3428", color: "#D4C5A9", border: "1px solid rgba(244,236,216,0.06)" }}
                    >
                      {c}
                    </span>
                  ))}
                </div>
              </div>

              {/* Favourite region */}
              <div
                className="rounded-lg p-5"
                style={{ backgroundColor: "#122019", border: "1px solid rgba(244,236,216,0.08)" }}
              >
                <p className="font-mono text-xs tracking-widest uppercase mb-2" style={{ color: "#8FA88C" }}>
                  Favourite region
                </p>
                <p className="font-display text-2xl font-semibold" style={{ color: "#E8A94A" }}>
                  {USER_STATS.favoriteRegion}
                </p>
              </div>
            </div>
          </div>
        )}

        {activeTab === "history" && (
          <div className="max-w-3xl space-y-4">
            <p className="text-sm mb-6" style={{ color: "#8FA88C" }}>
              All {USER_HISTORY.length} completed treks — click any entry to read your notes.
            </p>
            {USER_HISTORY.map((entry) => (
              <HistoryCard key={entry.id} entry={entry} />
            ))}
          </div>
        )}

        {activeTab === "wishlist" && (
          <div className="max-w-2xl">
            <p className="text-sm mb-6" style={{ color: "#8FA88C" }}>
              Routes saved for future expeditions.
            </p>
            <div className="space-y-3">
              {WISHLIST.map((w, i) => (
                <div
                  key={i}
                  className="p-5 rounded-lg flex items-center justify-between gap-4"
                  style={{ backgroundColor: "#122019", border: "1px solid rgba(244,236,216,0.08)" }}
                >
                  <div>
                    <h3 className="font-display text-lg font-semibold mb-0.5" style={{ color: "#F4ECD8" }}>
                      {w.name}
                    </h3>
                    <p className="font-mono text-xs mb-2" style={{ color: "#8FA88C" }}>{w.country}</p>
                    <p className="text-sm" style={{ color: "#D4C5A9" }}>{w.reason}</p>
                  </div>
                  <button
                    onClick={() => navigate("/")}
                    className="flex-shrink-0 text-xs px-3 py-1.5 rounded transition-all hover:opacity-80"
                    style={{ backgroundColor: "#1E3428", color: "#C8792A", border: "1px solid rgba(200,121,42,0.2)" }}
                  >
                    View →
                  </button>
                </div>
              ))}
              <button
                onClick={() => navigate("/")}
                className="w-full py-3 rounded text-sm transition-all hover:opacity-80 mt-2"
                style={{ backgroundColor: "#122019", color: "#8FA88C", border: "1px dashed rgba(244,236,216,0.12)" }}
              >
                + Find new treks to add
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
