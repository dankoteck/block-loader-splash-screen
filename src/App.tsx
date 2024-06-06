import { Link, Route, Routes, useLocation } from "react-router-dom";
import IndexPage from "./pages";
import AboutPage from "./pages/about";
import NewsPage from "./pages/news";
import { AnimatePresence } from "framer-motion";

export default function App() {
  const location = useLocation();

  return (
    <div className="flex gap-4 p-8 container mx-auto">
      <nav className="flex flex-col gap-4 border border-gray-200 p-4 w-fit">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/news">News</Link>
      </nav>

      <div className="flex-1">
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route index element={<IndexPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/news" element={<NewsPage />} />
          </Routes>
        </AnimatePresence>
      </div>
    </div>
  );
}
