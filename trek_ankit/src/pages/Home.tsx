import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [search, setSearch] = useState("");

  const navigate = useNavigate();

  const handleSearch = () => {
    const query = search.toLowerCase().trim();

    if (query.includes("abc") || query.includes("annapurna")) {
      navigate("/treks/abc");
    } else if (query.includes("ebc") || query.includes("everest")) {
      navigate("/treks/ebc");
    } else if (
      query.includes("ghorepani") ||
      query.includes("poon hill")
    ) {
      navigate("/treks/ghorepani");
    } else {
      alert("Trek not found!");
    }
  };

  return (
    <div className="p-10">
      <h1 className="text-4xl font-bold mb-8">
        Trek Nepal
      </h1>

      <input
        className="border p-3 rounded-lg w-96"
        placeholder="Search Trek..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") handleSearch();
        }}
      />
    </div>
  );
};

export default Home;