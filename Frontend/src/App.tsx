import { useState } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  useNavigate,
} from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Recommendations from "./pages/Recommendations";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import TrekDetail from "./pages/TrekDetail";

import type { FilterState } from "./pages/Home";

function AppContent() {
  const navigate = useNavigate();

  const [filters, setFilters] = useState<FilterState | null>(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState("");

  const handleSearch = (filters: FilterState) => {
    setFilters(filters);
    navigate("/recommendations");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleLogin = (name: string) => {
    setIsLoggedIn(true);
    setUserName(name);
    navigate("/dashboard");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUserName("");
    navigate("/");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div style={{ backgroundColor: "#0C1A13", minHeight: "100vh" }}>
      <Navbar
        isLoggedIn={isLoggedIn}
        onLogout={handleLogout}
      />

      <Routes>
        <Route
          path="/"
          element={<Home onSearch={handleSearch} />}
        />

        <Route
          path="/recommendations"
          element={<Recommendations filters={filters} />}
        />

        <Route
          path="/login"
          element={<Login onLogin={handleLogin} />}
        />

        <Route
          path="/dashboard"
          element={
            isLoggedIn ? (
              <Dashboard userName={userName} />
            ) : (
              <Navigate to="/login" replace />
            )
          }
        />

        <Route
          path="/treks/:trekId"
          element={<TrekDetail />}
        />

        <Route
          path="*"
          element={<Navigate to="/" replace />}
        />
      </Routes>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}
