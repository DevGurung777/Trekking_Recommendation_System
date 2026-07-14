import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import TrekDetail from "./pages/TrekDetail";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/treks/:trekId" element={<TrekDetail />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;