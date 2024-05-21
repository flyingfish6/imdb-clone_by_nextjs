import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FiThumbsUp } from "react-icons/fi";
const Card = ({ result }) => {
  return (
    <div className="group cursor-pointer sm:p-3 sm:hover:shadow-slate-400 sm:shadow-md rounded-lg sm:border-slate-400 sm:m-2 transition-shadow duration-200">
      <Link href={`/movie/${result.id}`}>
        <Image
          src={`https://image.tmdb.org/t/p/original/${
            result.backdrop_path || result.poster_path
          }`}
          width={500}
          height={300}
          className="group-hover:opacity-75 transition-opacity duration-300 rounded-lg"
          alt="image"
        />
        <div className="p-2">
          <p className="line-clamp-2 text-md">{result.overview}</p>
          <h2 className="text-lg font-bold truncate">{result.title}</h2>
          <div className="flex">
            <p>{result.release_date}</p>
            <FiThumbsUp className="h-5 mr-1 ml-3" /> {result.vote_count}
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Card;
