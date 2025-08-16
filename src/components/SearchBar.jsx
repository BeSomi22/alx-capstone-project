import { useState } from "react";

export default function SearchBar({ onSearch }) {
  const [term, setTerm] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(term);
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 p-4">
      <input
        type="text"
        value={term}
        onChange={(e) => setTerm(e.target.value)}
        placeholder="Search news..."
        className="flex-1 p-2 border rounded-lg"
      />
      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded-lg"
      >
        Search
      </button>
    </form>
  );
}
