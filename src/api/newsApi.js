const API_URL = "https://api.thenewsapi.com/v1/news/top?locale=us";

const API_KEY = import.meta.env.VITE_NEWS_API_KEY;

export const fetchNews = async (query = "", category = "") => {
  try {
    let url = `${API_URL}&api_token=${API_KEY}`;
    if (query) url += `&search=${query}`;
    if (category) url += `&categories=${category}`;

    const res = await fetch(url);
    const data = await res.json();
    return data.data || [];
  } catch (err) {
    console.error("Error fetching news:", err);
    return [];
  }
};
