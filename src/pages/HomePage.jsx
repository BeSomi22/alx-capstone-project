import { useEffect, useState } from "react";
import { fetchNews } from "../api/newsApi";
import SearchBar from "../components/SearchBar";
import NewsCard from "../components/NewsCard";

export default function Home() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  const loadNews = async (query = "") => {
    setLoading(true);
    const data = await fetchNews(query);
    setArticles(data);
    setLoading(false);
  };

  useEffect(() => {
    loadNews();
  }, []);

  return (
    <div className="container mx-auto p-4">
      <SearchBar onSearch={loadNews} />
      {loading ? (
        <p className="text-center mt-10">Loading news...</p>
      ) : articles.length === 0 ? (
        <p className="text-center mt-10">No articles found.</p>
      ) : (
        <div className="grid md:grid-cols-3 gap-4">
          {articles.map((article) => (
            <NewsCard key={article.uuid} article={article} />
          ))}
        </div>
      )}
    </div>
  );
}
