import { useState } from "react";

interface LoginProps {
  onLogin: (name: string) => void;
  onNavigate: (page: string) => void;
}

const BG = "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=900&fit=crop&auto=format";

export default function Login({ onLogin, onNavigate }: LoginProps) {
  const [mode, setMode] = useState<"login" | "register">("login");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password) {
      setError("Please fill in all fields.");
      return;
    }
    if (mode === "register" && !name) {
      setError("Please enter your name.");
      return;
    }
    // Simulate auth — in production this would hit an API
    onLogin(mode === "register" ? name : email.split("@")[0]);
  };

  return (
    <div className="min-h-screen flex" style={{ backgroundColor: "#0C1A13" }}>
      {/* Left panel — image */}
      <div className="hidden lg:block flex-1 relative" style={{ backgroundColor: "#0C1A13" }}>
        <img src={BG} alt="Mountain landscape at dusk" className="absolute inset-0 w-full h-full object-cover" style={{ opacity: 0.5 }} />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to right, rgba(12,26,19,0) 60%, #0C1A13 100%)" }} />
        <div className="absolute bottom-12 left-12 max-w-xs">
          <p className="font-display text-2xl font-semibold italic leading-snug mb-3" style={{ color: "#F4ECD8" }}>
            "The mountains are calling and I must go."
          </p>
          <p className="font-mono text-xs" style={{ color: "#8FA88C" }}>— John Muir</p>
        </div>
      </div>

      {/* Right panel — form */}
      <div className="flex flex-col justify-center w-full lg:w-[480px] lg:flex-none px-10 py-16">
        <div className="mb-10">
          <p className="font-mono text-xs tracking-[0.2em] uppercase mb-4" style={{ color: "#C8792A" }}>TrailFind</p>
          <h1 className="font-display text-4xl font-bold mb-2" style={{ color: "#F4ECD8" }}>
            {mode === "login" ? "Welcome back." : "Join TrailFind."}
          </h1>
          <p className="text-sm" style={{ color: "#8FA88C" }}>
            {mode === "login"
              ? "Sign in to access your trek history and personal dashboard."
              : "Create an account to save treks and track your expeditions."}
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          {mode === "register" && (
            <div>
              <label className="block font-mono text-xs tracking-widest uppercase mb-2" style={{ color: "#8FA88C" }}>
                Full Name
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Alex Sherpa"
                className="w-full px-4 py-3 rounded text-sm outline-none transition-all"
                style={{
                  backgroundColor: "#122019",
                  border: "1px solid rgba(244,236,216,0.1)",
                  color: "#F4ECD8",
                }}
              />
            </div>
          )}

          <div>
            <label className="block font-mono text-xs tracking-widest uppercase mb-2" style={{ color: "#8FA88C" }}>
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              className="w-full px-4 py-3 rounded text-sm outline-none transition-all"
              style={{
                backgroundColor: "#122019",
                border: "1px solid rgba(244,236,216,0.1)",
                color: "#F4ECD8",
              }}
            />
          </div>

          <div>
            <label className="block font-mono text-xs tracking-widest uppercase mb-2" style={{ color: "#8FA88C" }}>
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              className="w-full px-4 py-3 rounded text-sm outline-none transition-all"
              style={{
                backgroundColor: "#122019",
                border: "1px solid rgba(244,236,216,0.1)",
                color: "#F4ECD8",
              }}
            />
          </div>

          {error && (
            <p className="font-mono text-xs" style={{ color: "#CF4040" }}>{error}</p>
          )}

          <button
            type="submit"
            className="w-full py-3 rounded text-sm font-medium transition-all duration-200 hover:opacity-90 active:scale-95 mt-2"
            style={{ backgroundColor: "#C8792A", color: "#0C1A13" }}
          >
            {mode === "login" ? "Sign in" : "Create account"}
          </button>
        </form>

        <div className="mt-6 text-center">
          <p className="text-sm" style={{ color: "#8FA88C" }}>
            {mode === "login" ? "Don't have an account? " : "Already have an account? "}
            <button
              onClick={() => { setMode(mode === "login" ? "register" : "login"); setError(""); }}
              className="transition-colors"
              style={{ color: "#C8792A" }}
            >
              {mode === "login" ? "Register" : "Sign in"}
            </button>
          </p>
        </div>

        <div className="mt-8 pt-6" style={{ borderTop: "1px solid rgba(244,236,216,0.06)" }}>
          <p className="text-xs text-center mb-3" style={{ color: "#8FA88C" }}>Quick demo access</p>
          <button
            onClick={() => onLogin("Alex Sherpa")}
            className="w-full py-2.5 rounded text-sm transition-all hover:opacity-80"
            style={{ backgroundColor: "#1E3428", color: "#D4C5A9", border: "1px solid rgba(244,236,216,0.08)" }}
          >
            Continue as demo user →
          </button>
        </div>

        <button
          onClick={() => onNavigate("home")}
          className="mt-6 text-sm text-center transition-colors"
          style={{ color: "#8FA88C" }}
        >
          ← Back to explore
        </button>
      </div>
    </div>
  );
}
