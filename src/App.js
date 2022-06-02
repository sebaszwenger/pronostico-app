import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/Home";
import NoMatch from "./pages/NoMatch";
import Search from "./pages/Search";
import { ReactQueryDevtools } from "react-query/devtools";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient({
  defaultOptions: {
    staleTime: 1200000,
  },
});

function App() {
  const [bookmark, setBookmark] = useState(
    JSON.parse(localStorage.getItem("favoritesCitys")) || []
  );

  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Navbar bookmark={bookmark} />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/search/:id"
            element={<Search bookmark={bookmark} setBookmark={setBookmark} />}
          />
          <Route path="*" element={<NoMatch />} />
        </Routes>
      </BrowserRouter>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;
