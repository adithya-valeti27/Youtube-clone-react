import React from "react";

const Home = ({ sidebar, results }) => {
  console.log("Home results", results);
  return (
    <div>
      {sidebar && <div>Sidebar content here</div>}
      <div>
        {results > 0 ? (
          results.map((item) => (
            <div key={item.id.videoId} className="video-item">
              <h3>{item.snippet.title}</h3>
              <img
                src={item.snippet.thumbnails.default.url}
                alt={item.snippet.title}
              />
              <a
                href={`https://www.youtube.com/watch?v=${item.id.videoId}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                Watch
              </a>
            </div>
          ))
        ) : (
          <p>No results found</p>
        )}
      </div>
    </div>
  );
};

export default Home;
