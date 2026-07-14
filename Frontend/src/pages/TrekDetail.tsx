import { useParams, useNavigate } from "react-router-dom";

import TrekMap from "../components/Map/TrekMap";
import treks from "../data/treks";

const TrekDetail = () => {
  const { trekId } = useParams();
  const navigate = useNavigate();

  const trek = treks[trekId as keyof typeof treks];

  if (!trek) {
    return (
      <div className="min-h-screen pt-24 pb-20 flex items-center justify-center" style={{ backgroundColor: "#0C1A13" }}>
        <div className="text-center">
          <h1 className="font-display text-3xl font-bold mb-4" style={{ color: "#F4ECD8" }}>
            Trek not found
          </h1>
          <p className="text-sm mb-6" style={{ color: "#8FA88C" }}>
            No map data available for this route.
          </p>
          <button
            onClick={() => navigate(-1)}
            className="font-mono text-sm px-5 py-2 rounded cursor-pointer transition-colors duration-200"
            style={{ backgroundColor: "rgba(200,121,42,0.15)", color: "#C8792A", border: "1px solid rgba(200,121,42,0.3)" }}
          >
            ← Go back
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-20" style={{ backgroundColor: "#0C1A13" }}>
      {/* Header bar */}
      <div
        className="sticky top-16 z-40 px-6 py-3 flex items-center justify-between"
        style={{ backgroundColor: "rgba(12, 26, 19, 0.9)", backdropFilter: "blur(8px)", borderBottom: "1px solid rgba(244,236,216,0.06)" }}
      >
        <div className="flex items-center gap-4">
          <button
            onClick={() => navigate(-1)}
            className="font-mono text-xs px-3 py-1.5 rounded cursor-pointer transition-colors duration-200"
            style={{ backgroundColor: "rgba(200,121,42,0.12)", color: "#C8792A", border: "1px solid rgba(200,121,42,0.25)" }}
          >
            ← Back
          </button>
          <div>
            <h1 className="font-display text-lg font-semibold" style={{ color: "#F4ECD8" }}>
              {trek.name}
            </h1>
            <p className="font-mono text-xs" style={{ color: "#8FA88C" }}>
              {trek.start.name} → {trek.end.name}
            </p>
          </div>
        </div>
        <div className="flex items-center gap-5">
          <div className="text-right">
            <div className="font-mono text-xs font-medium" style={{ color: "#E8A94A" }}>{trek.duration}</div>
            <div className="font-mono text-xs" style={{ color: "#8FA88C", fontSize: "10px" }}>Duration</div>
          </div>
          <div className="text-right">
            <div className="font-mono text-xs font-medium" style={{ color: "#E8A94A" }}>{trek.elevation.toLocaleString()}m</div>
            <div className="font-mono text-xs" style={{ color: "#8FA88C", fontSize: "10px" }}>Max Altitude</div>
          </div>
        </div>
      </div>

      {/* Map */}
      <TrekMap trek={trek} />
    </div>
  );
};

export default TrekDetail;
