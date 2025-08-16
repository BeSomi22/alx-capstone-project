import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/HomePage";
import ArticleDetails from "./components/ArticleDetails";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/article/:id" element={<ArticleDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
