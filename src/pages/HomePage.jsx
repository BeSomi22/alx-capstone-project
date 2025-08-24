import { useEffect, useState } from "react";
import { fetchNews } from "../api/newsApi";
import { Link } from "react-router-dom";
import NewsCard from "../components/NewsCard";
import Navbar from "../layouts/Navbar";

const categories = [
  "business",
  "entertainment",
  "health",
  "science",
  "sports",
  "technology",
];

export default function Home() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeCategory, setActiveCategory] = useState("");
  const [darkMode, setDarkMode] = useState(false);

  const loadNews = async (query = "", category = "") => {
    setLoading(true);
    const data = await fetchNews(query, category);
    setArticles(data);
    setLoading(false);
  };

  useEffect(() => {
    loadNews();
  }, []);

  useEffect(() => {
    const root = window.document.documentElement;
    if (darkMode) root.classList.add("dark");
    else root.classList.remove("dark");
  }, [darkMode]);

  return (
    <div className="container mx-auto bg-white dark:bg-gray-900 min-h-screen transition-colors">
      {/* Navbar */}
      <Navbar
        categories={categories}
        activeCategory={activeCategory}
        setActiveCategory={setActiveCategory}
        loadNews={loadNews}
        darkMode={darkMode}
        setDarkMode={setDarkMode}
      />

      <div className="lg:px-8">
        {/* Hero Section (First Article) */}
        {!loading && articles[0] && (
          <Link
            to={`/article/${encodeURIComponent(articles[0].uuid)}`}
            state={{ article: articles[0] }}
            className="block relative mb-6 rounded-lg overflow-hidden shadow-lg"
          >
            <img
              src={articles[0].urlToImage || "/placeholder.png"}
              alt={articles[0].title}
              className="w-full h-72 md:h-96 object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
              <h2 className="text-xl md:text-3xl text-white font-bold">
                {articles[0].title}
              </h2>
              <p className="text-gray-300 mt-2 line-clamp-2">
                {articles[0].description}
              </p>
            </div>
          </Link>
        )}

        {/* Articles Grid */}
        {loading ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {Array(6)
              .fill(0)
              .map((_, i) => (
                <div
                  key={i}
                  className="animate-pulse bg-gray-200 dark:bg-gray-700 h-64 rounded-lg"
                />
              ))}
          </div>
        ) : articles.length === 0 ? (
          <p className="text-center mt-10 dark:text-white">
            No articles found.
          </p>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {articles.slice(1).map((article, idx) => (
              <NewsCard key={idx} article={article} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
