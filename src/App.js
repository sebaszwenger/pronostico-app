import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import BookmarkContext from "./hooks/BookmarkContext";
import Home from "./pages/Home";
import NoMatch from "./pages/NoMatch";
import Search from "./pages/Search";

function App() {
  const [bookmark, setBookmark] = useState([]);

  return (
    <BrowserRouter>
      <BookmarkContext.Provider value={[bookmark, setBookmark]}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search/:id" element={<Search />} />
          <Route path="*" element={<NoMatch />} />
        </Routes>
      </BookmarkContext.Provider>
    </BrowserRouter>
  );
}

export default App;
