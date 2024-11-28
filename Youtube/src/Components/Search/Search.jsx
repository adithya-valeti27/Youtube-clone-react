
import React from 'react';

const Search = ({ results }) => {
    return (
        <div>
            {results.map((item) => (
                <div key={item.id.videoId}>
                    <h3>{item.snippet.title}</h3>
                    <img src={item.snippet.thumbnails.default.url} alt={item.snippet.title} />
                    <a href={`https://www.youtube.com/watch?v=${item.id.videoId}`} target="_blank" rel="noopener noreferrer">
                        Watch
                    </a>
                </div>
            ))}
        </div>
    );
};

export default Search;
