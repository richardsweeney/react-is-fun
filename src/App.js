import React, { useState } from 'react';
import CurrentAnime from "./CurrentAnime";
import SearchResults from "./SearchResults";

function App() {
  const [isLoading, updateIsLoading] = useState(false);
  const [search, updateSearch] = useState('Cowboy');
  const [searchResults, updateSearchResults] = useState([]);
  const [currentAnime, updateCurrentAnime] = useState(null);

  async function getApiResults() {
    updateIsLoading(true);
    updateSearchResults([]);
    updateCurrentAnime(null);

    const response = await fetch(`https://api.jikan.moe/v3/search/anime?q=${search}`);
    const json = await response.json();

    updateIsLoading(false);
    updateSearchResults(json.results);
  }

  async function getAnime(id) {
    updateIsLoading(true);
    updateCurrentAnime(null);

    const response = await fetch(`https://api.jikan.moe/v3/anime/${id}`);
    const json = await response.json();

    updateIsLoading(false);
    updateCurrentAnime(json);
  }

  const showAnime = id => {
    getAnime(id);
  };

  return (
    <div className="App" style={{
      width: '900px',
      margin: '30px auto',
    }}>
      <form
        onSubmit={event => {
          event.preventDefault();

          getApiResults();
        }}
      >
        <input
          type="search"
          value={search}
          onChange={event => updateSearch(event.target.value)}
        />
        <button type="submit">Search</button>
      </form>

      {isLoading && 'Loading...'}

      <CurrentAnime
        anime={currentAnime}
        back={() => updateCurrentAnime(null)}
      />

      {!currentAnime && (
        <SearchResults
          searchResults={searchResults}
          showAnime={showAnime}
        />
      )}
    </div>
  );
}

export default App;
