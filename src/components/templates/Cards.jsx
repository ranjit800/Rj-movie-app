import React from "react";
import { Link } from "react-router-dom";
import noimage from "../../asset/noimg.webp";

const Cards = ({ data, title }) => {
  console.log(title);
  return (
    <div className="w-full h-full px-[5%] pt-7 flex flex-wrap justify-center bg-[#1F1E24]">
      {data.map((c, i) => (
        <Link to={`/${c.media_type || title}/details/${c.id}`} className="relative w-[25vh] mr-[5%] mb-[5%] " key={i}>
          <img
            className=" h-[42vh] object-cover shadow-[8px_17px_38px_2px_rgba(0,0,0,.5)] rounded-lg"
            src={c.poster_path || c.backdrop_path || c.profile_path ? `https://image.tmdb.org/t/p/original/${c.poster_path || c.backdrop_path || c.profile_path}` : noimage}
            alt=""
          />

          <h1 className="text-2xl text-zinc-300 mt-3 font-semibold ">{c.name || c.original_name || c.title || c.original_title}</h1>

          {c.vote_average && (
            <div className="absolute right-[-14%] bottom-[35%] text-white text-sm font-semibold w-[7vh] h-[7vh] flex justify-center items-center bg-yellow-600 rounded-full">
              {(c.vote_average * 10).toFixed()} <sup>%</sup>
            </div>
          )}
        </Link>
      ))}
    </div>
  );
};

export default Cards;
