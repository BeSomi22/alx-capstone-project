import { Link } from "react-router-dom";

export default function NewsCard({ article }) {
  return (
    <div className="bg-white dark:bg-gray-800 dark:text-white rounded-xl shadow-md hover:shadow-xl transition">
      <Link
        to={`/article/${encodeURIComponent(article.url)}`}
        state={{ article }}
        className="inline-block mt-3 text-blue-600 hover:underline font-medium"
      >
        <img
          src={article.urlToImage || "/placeholder.png"}
          alt={article.title}
          className="w-full h-48 md:h-56 object-cover"
        />
        <div className="p-4">
          <div className="flex justify-between items-center mb-2">
            <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
              {article.source.name}
            </span>
            <span className="text-gray-400 text-xs">
              {new Date(article.publishedAt).toLocaleDateString()}
            </span>
          </div>
          <h2 className="text-lg font-semibold line-clamp-2">
            {article.title}
          </h2>
          <p className="text-gray-600 text-sm mt-2 line-clamp-3 dark:text-gray-400">
            {article.description}
          </p>
        </div>
      </Link>
    </div>
  );
}
