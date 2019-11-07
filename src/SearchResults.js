import React from 'react';
import SearchResult from "./SearchResult";

const SearchResults = ({ searchResults, showAnime }) => (
	<div className={`search-results`}>
		{searchResults.map(searchResult => (
			<SearchResult
				key={searchResult.mal_id}
				searchResult={searchResult}
				showAnime={showAnime}
			/>
		))}
	</div>
);

export default SearchResults;
