import { Routes, Route } from "react-router-dom";
import Home from "./pages/HomePage";
import ArticleDetails from "./components/ArticleDetails";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/article/:id" element={<ArticleDetails />} />
    </Routes>
  );
}

export default App;
