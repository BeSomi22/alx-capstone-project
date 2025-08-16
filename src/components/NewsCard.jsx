import { Link } from "react-router-dom";

export default function NewsCard({ article }) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition">
      <img
        src={article.image_url}
        alt={article.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h2 className="text-lg font-semibold">{article.title}</h2>
        <p className="text-gray-600 text-sm mt-2">{article.snippet}</p>
        <p className="text-xs text-gray-500 mt-2">
          {new Date(article.published_at).toLocaleString()}
        </p>
        <Link
          to={`/article/${article.uuid}`}
          state={{ article }}
          className="inline-block mt-3 text-blue-600 hover:underline"
        >
          Read more →
        </Link>
      </div>
    </div>
  );
}
