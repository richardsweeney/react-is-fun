import React from 'react';

const CurrentAnime = ({ anime, back }) => {
	if (!anime) {
		return null;
	}

	return (
		<div>
			<h1>{anime.title} ({anime.title_japanese})</h1>

			<p>{anime.synopsis}</p>

			<button role="button" onClick={() => back()}>Back..</button>
		</div>
	);
};

export default CurrentAnime;
