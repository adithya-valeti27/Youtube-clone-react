import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Pages/Home/Home";
import Video from "./Pages/Video/Video";
import { API_KEY } from "./data";
import Search from "./Components/Search/Search";

const App = () => {
  const [sidebar, setSidebar] = useState(true);
  const [results, setResults] = useState([]);

  const searchYoutube = async (keyword) => {
    const url = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=40&q=${keyword}&key=${API_KEY}`;

    try {
      const response = await fetch(url);
      const data = await response.json();
      setResults(data.items);
      console.log(data);
    } catch (error) {
      console.log("Error fetching data");
    }
  };

  return (
    <div>
      <Navbar setSidebar={setSidebar} searchYoutube={searchYoutube} />
      <Routes>
        <Route
          path="/"
          element={<Home sidebar={sidebar} results={results} />}
        />
        <Route path="/video/:categoryId/:videoId" element={<Video />} />
        <Route path="/search" element={<Search results={results} />} />
      </Routes>
    </div>
  );
};

export default App;
