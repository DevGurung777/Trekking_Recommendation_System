import { useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Recommendations from "./pages/Recommendations";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import type { FilterState } from "./pages/Home";

type Page = "home" | "recommendations" | "login" | "dashboard";

export default function App() {
  const [page, setPage] = useState<Page>("home");
  const [filters, setFilters] = useState<FilterState | null>(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState("");

  const navigate = (p: string) => {
    if (p === "dashboard" && !isLoggedIn) {
      setPage("login");
      return;
    }
    setPage(p as Page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleSearch = (f: FilterState) => {
    setFilters(f);
    setPage("recommendations");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleLogin = (name: string) => {
    setIsLoggedIn(true);
    setUserName(name);
    setPage("dashboard");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUserName("");
    setPage("home");
  };

  const showNavbar = page !== "login";

  return (
    <div style={{ backgroundColor: "#0C1A13", minHeight: "100vh" }}>
      {showNavbar && (
        <Navbar
          currentPage={page}
          isLoggedIn={isLoggedIn}
          onNavigate={navigate}
          onLogout={handleLogout}
        />
      )}

      {page === "home" && <Home onSearch={handleSearch} />}

      {page === "recommendations" && (
        <Recommendations filters={filters} />
      )}

      {page === "login" && (
        <Login onLogin={handleLogin} onNavigate={navigate} />
      )}

      {page === "dashboard" && isLoggedIn && (
        <Dashboard userName={userName} onNavigate={navigate} />
      )}
    </div>
  );
}
