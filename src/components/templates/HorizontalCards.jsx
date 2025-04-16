import React from "react";
import { Link } from "react-router-dom";
import Dropwodn from "./Dropwodn";

const HorizontalCards = ({ data }) => {
  console.log(data)
  return (
    <div className="w-[100%] flex  overflow-y-hidden mb-5 p-5">
      {data.map((c, index) => (
        <Link to={`/${c.media_type}/details/${c.id}`} key={index} className="min-w-[16%]  mr-5  mb-5">
          <img className="w-full h-[50%] object-cover" src={`https://image.tmdb.org/t/p/original/${c.backdrop_path || c.profile_path || c.poster_path}`} alt="" />

          <div className="p-4 text-white h-[48%]">
            <h1 className="  text-xl  font-semibold ">{c.original_name || c.name || c.title || c.original_title}</h1>
            <p className="text-sm">
              {c.overview && `${c.overview.slice(0, 40)}...`}
              <span className="text-zinc-400">more</span>{" "}
            </p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default HorizontalCards;
