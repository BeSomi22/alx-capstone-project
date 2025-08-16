import { useLocation, Link } from "react-router-dom";

export default function ArticleDetails() {
  const { state } = useLocation();
  const article = state?.article;

  if (!article)
    return <p className="text-center mt-10">No article details found.</p>;

  return (
    <div className="max-w-3xl mx-auto p-4">
      <Link to="/" className="text-blue-600 hover:underline">
        &larr; Back
      </Link>
      <h1 className="text-2xl font-bold mt-4">{article.title}</h1>
      <img
        src={article.image_url}
        alt={article.title}
        className="w-full my-4 rounded-lg"
      />
      <p className="text-gray-700 mb-4">{article.description}</p>
      <p>
        <strong>Author:</strong> {article.author || "Unknown"}
      </p>
      <p>
        <strong>Source:</strong> {article.source || "Unknown"}
      </p>
      <a
        href={article.url}
        target="_blank"
        className="text-blue-600 hover:underline mt-4 block"
      >
        Read Original Article
      </a>
    </div>
  );
}
