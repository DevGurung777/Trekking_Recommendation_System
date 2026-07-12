interface NavbarProps {
  currentPage: string;
  isLoggedIn: boolean;
  onNavigate: (page: string) => void;
  onLogout: () => void;
}

export default function Navbar({ currentPage, isLoggedIn, onNavigate, onLogout }: NavbarProps) {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50" style={{ backgroundColor: "rgba(12,26,19,0.92)", backdropFilter: "blur(12px)", borderBottom: "1px solid rgba(244,236,216,0.08)" }}>
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <button
          onClick={() => onNavigate("home")}
          className="flex items-center gap-3 group"
        >
          <div className="w-7 h-7 rounded-sm flex items-center justify-center" style={{ backgroundColor: "#C8792A" }}>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M8 2L14 12H2L8 2Z" fill="#0C1A13" />
            </svg>
          </div>
          <span className="font-display font-semibold text-lg tracking-tight" style={{ color: "#F4ECD8" }}>
            TrailFind
          </span>
        </button>

        <div className="flex items-center gap-1">
          {[
            { label: "Explore", page: "home" },
            { label: "Treks", page: "recommendations" },
            ...(isLoggedIn ? [{ label: "Dashboard", page: "dashboard" }] : []),
          ].map(({ label, page }) => (
            <button
              key={page}
              onClick={() => onNavigate(page)}
              className="px-4 py-2 text-sm rounded transition-all duration-150"
              style={{
                color: currentPage === page ? "#C8792A" : "#8FA88C",
                backgroundColor: currentPage === page ? "rgba(200,121,42,0.08)" : "transparent",
                fontWeight: currentPage === page ? 500 : 400,
              }}
            >
              {label}
            </button>
          ))}

          {isLoggedIn ? (
            <button
              onClick={onLogout}
              className="ml-4 px-4 py-1.5 text-sm rounded transition-all duration-150"
              style={{ border: "1px solid rgba(244,236,216,0.15)", color: "#8FA88C" }}
            >
              Sign out
            </button>
          ) : (
            <button
              onClick={() => onNavigate("login")}
              className="ml-4 px-4 py-1.5 text-sm rounded transition-all duration-150"
              style={{ backgroundColor: "#C8792A", color: "#0C1A13", fontWeight: 500 }}
            >
              Sign in
            </button>
          )}
        </div>
      </div>
    </nav>
  );
}
