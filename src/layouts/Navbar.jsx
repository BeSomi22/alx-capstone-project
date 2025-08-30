import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar({
  categories,
  activeCategory,
  setActiveCategory,
  loadNews,
}) {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="flex flex-col lg:flex-row items-center justify-between px-6 py-4 mb-6 shadow bg-white dark:bg-gray-800 rounded-4xl relative">
      {/* Logo */}
      <h1 className="text-3xl md:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
        DailyNews
      </h1>

      {/* Burger button (visible on mobile + tablet, hidden on desktop) */}
      <button
        className="lg:hidden absolute right-6 top-6 text-gray-700 dark:text-gray-200"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        {menuOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Categories */}
      <div
        className={`overflow-hidden transition-all duration-300 flex flex-col lg:flex-row gap-2 my-4 lg:my-0 lg:static absolute top-full left-0 w-full lg:w-auto bg-white dark:bg-gray-800 lg:bg-transparent lg:dark:bg-transparent p-4 lg:p-0 z-50 ${
          menuOpen ? "max-h-96" : "max-h-0 lg:max-h-full hidden lg:flex"
        }`}
      >
        {/* All Button */}
        <button
          onClick={() => {
            setActiveCategory("");
            loadNews();
            setMenuOpen(false);
          }}
          className="px-4 py-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-200 hover:bg-blue-100 dark:hover:bg-blue-600 transition w-full sm:w-auto"
        >
          All
        </button>

        {/* Dynamic Categories */}
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => {
              setActiveCategory(cat);
              loadNews("", cat);
              setMenuOpen(false);
            }}
            className={`px-4 py-2 rounded-full font-medium transition w-full sm:w-auto ${
              activeCategory === cat
                ? "bg-blue-600 text-white"
                : "bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-200 hover:bg-blue-100 dark:hover:bg-blue-600"
            }`}
          >
            {cat.charAt(0).toUpperCase() + cat.slice(1)}
          </button>
        ))}
      </div>
    </div>
  );
}
