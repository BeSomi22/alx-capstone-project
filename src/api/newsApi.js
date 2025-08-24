const API_URL = "https://newsapi.org/v2/top-headlines?country=us&pageSize=20";

const API_KEY = import.meta.env.VITE_NEWS_API_KEY;

export const fetchNews = async (query = "", category = "") => {
  try {
    let url = `${API_URL}&apiKey=${API_KEY}`;
    if (query) url += `&q=${query}`;
    if (category) url += `&category=${category}`;

    const res = await fetch(url);
    const data = await res.json();
    return data.articles || [];
  } catch (err) {
    console.error("Error fetching news:", err);
    return [];
  }
};
