import { useLocation, Link } from "react-router-dom";
import Navbar from "../layouts/Navbar";
import { useEffect } from "react";

export default function ArticleDetails() {
  const { state } = useLocation();
  const article = state?.article;

  // Scroll to top when this component loads
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!article)
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p className="text-lg text-gray-500 dark:text-gray-400">
          No article details found.
        </p>
      </div>
    );

  return (
    <div className="max-w-6xl mx-auto p-6">
      {/* <Navbar /> */}
      {/* Back button */}
      <Link
        to="/"
        className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline mb-6"
      >
        ← Back
      </Link>

      {/* Article Card */}
      <div className="bg-white dark:bg-gray-800 flex flex-col lg:flex-row shadow-lg rounded-2xl overflow-hidden transition-colors">
        {/* Image */}
        <img
          src={article.urlToImage || "/placeholder.png"}
          alt={article.title}
          className="w-full lg:w-1/3 h-64 lg:h-auto object-cover"
        />

        {/* Content */}
        <div className="p-6 flex flex-col justify-between lg:w-2/3">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4 leading-tight">
            {article.title}
          </h1>

          <p className="text-gray-700 dark:text-gray-300 mb-6 text-lg">
            {article.description}
          </p>
          <p className="text-gray-700 dark:text-gray-300 mb-6 text-lg">
            {article.content}
          </p>

          <div className="grid sm:grid-cols-2 gap-4 text-gray-600 dark:text-gray-400">
            <p>
              <span className="font-semibold">Author:</span>{" "}
              {article.author || "Unknown"}
            </p>
            <p>
              <span className="font-semibold">Source:</span>{" "}
              {article.source?.name || "Unknown"}
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
              <span className="font-semibold">Published At:</span>{" "}
              {article.publishedAt
                ? new Date(article.publishedAt).toLocaleDateString()
                : "Unknown"}
            </p>
          </div>

          <a
            href={article.url}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-block px-5 py-3 rounded-xl bg-blue-600 text-white font-medium hover:bg-blue-700 transition"
          >
            Read Original Article →
          </a>
        </div>
      </div>
    </div>
  );
}
