import { Routes, Route, Link } from "react-router-dom";
import HomeDetailsPage from "./pages/home";
import PostDetailsPage from "./pages/postDetails";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomeDetailsPage />} />
        <Route path="posts/:id" element={<PostDetailsPage />} />
      </Routes>
    </div>
  );
}

export default App;
