import { Link, useNavigate } from "react-router-dom";

interface NavbarProps {
  isLoggedIn: boolean;
  onLogout: () => void;
}

export default function Navbar({
  isLoggedIn,
  onLogout,
}: NavbarProps) {
  const navigate = useNavigate();

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50"
      style={{
        backgroundColor: "rgba(12, 26, 19, 0.85)",
        backdropFilter: "blur(12px)",
        borderBottom: "1px solid rgba(244, 236, 216, 0.08)",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link
          to="/"
          className="font-display text-lg font-semibold tracking-wide no-underline"
          style={{ color: "#F4ECD8" }}
        >
          Trek<span style={{ color: "#E8A94A" }}>r</span>
        </Link>

        <div className="flex items-center gap-8">
          <Link
            to="/"
            className="text-sm font-medium no-underline transition-colors duration-200"
            style={{ color: "#8FA88C" }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#F4ECD8")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "#8FA88C")}
          >
            Home
          </Link>
          <Link
            to="/recommendations"
            className="text-sm font-medium no-underline transition-colors duration-200"
            style={{ color: "#8FA88C" }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#F4ECD8")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "#8FA88C")}
          >
            Recommendations
          </Link>

          {isLoggedIn ? (
            <>
              <Link
                to="/dashboard"
                className="text-sm font-medium no-underline transition-colors duration-200"
                style={{ color: "#8FA88C" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#F4ECD8")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#8FA88C")}
              >
                Dashboard
              </Link>

              <button
                onClick={() => {
                  onLogout();
                  navigate("/");
                }}
                className="text-sm font-medium px-4 py-1.5 rounded transition-colors duration-200 cursor-pointer"
                style={{
                  backgroundColor: "rgba(200, 121, 42, 0.15)",
                  color: "#C8792A",
                  border: "1px solid rgba(200, 121, 42, 0.3)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = "rgba(200, 121, 42, 0.25)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "rgba(200, 121, 42, 0.15)";
                }}
              >
                Logout
              </button>
            </>
          ) : (
            <Link
              to="/login"
              className="text-sm font-medium px-4 py-1.5 rounded no-underline transition-colors duration-200"
              style={{
                backgroundColor: "#C8792A",
                color: "#0C1A13",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#E8A94A")}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#C8792A")}
            >
              Login
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
}
