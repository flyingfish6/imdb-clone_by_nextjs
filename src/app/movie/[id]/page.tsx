import React from "react";
import Image from "next/image";
const getMoveById = async (movieId) => {
  const movie = await fetch(
    `https://api.themoviedb.org/3/movie/${movieId}?api_key=${process.env.API_KEY}`
  );
  return movie.json();
};
const MovieDetail = async ({ params }) => {
  console.log(params.id);
  const movie = await getMoveById(params.id);
  console.log(movie);
  return (
    <div>
      <div>
        <Image
          src={`https://image.tmdb.org/t/p/original/${
            movie.backdrop_path || movie.poster_path
          }`}
          alt="image"
          width={500}
          height={300}
          className="rounded-lg"
        ></Image>
      </div>
    </div>
  );
};

export default MovieDetail;
