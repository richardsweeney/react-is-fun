import React, { Fragment } from 'react';

const SearchResult = ({ searchResult, showAnime }) => (
	<Fragment>
		<h3>{searchResult.title}</h3>
		<img src={searchResult.image_url} alt={`${searchResult.title} image`} />
		<p>{searchResult.synopsis}</p>
		<button
			type="button"
			onClick={() => showAnime(searchResult.mal_id)}
		>Show episode</button>
	</Fragment>
);

export default SearchResult;
