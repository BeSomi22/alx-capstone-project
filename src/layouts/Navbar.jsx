export default function Navbar({
  categories,
  activeCategory,
  setActiveCategory,
  loadNews,
  darkMode,
  setDarkMode,
}) {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between px-6 py-4 mb-6 shadow bg-white dark:bg-gray-800 rounded-4xl">
      {/* Logo */}
      <h1 className="text-3xl md:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
        DailyNews
      </h1>

      {/* Categories */}
      <div className="flex flex-wrap justify-center gap-2 my-4 md:my-0">
        <button
          onClick={() => {
            setActiveCategory("");
            loadNews();
          }}
          className="px-4 py-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-200 hover:bg-blue-100 dark:hover:bg-blue-600 transition"
        >
          All
        </button>
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => {
              setActiveCategory(cat);
              loadNews("", cat);
            }}
            className={`px-4 py-2 rounded-full font-medium transition ${
              activeCategory === cat
                ? "bg-blue-600 text-white"
                : "bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-200 hover:bg-blue-100 dark:hover:bg-blue-600"
            }`}
          >
            {cat.charAt(0).toUpperCase() + cat.slice(1)}
          </button>
        ))}
      </div>

      {/* Dark Mode Toggle */}
      <button
        onClick={() => setDarkMode(!darkMode)}
        className="px-4 py-2 rounded-lg bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-200 hover:bg-blue-100 dark:hover:bg-blue-600 transition"
      >
        {darkMode ? "☀️ Light" : "🌙 Dark"}
      </button>
    </div>
  );
}
