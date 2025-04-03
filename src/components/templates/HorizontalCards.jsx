import React from "react";
import { Link } from "react-router-dom";
import Dropwodn from "./Dropwodn";

const HorizontalCards = ({ Cards }) => {
  
  return (

     

      <div className="w-[100%] flex  overflow-y-hidden mb-5 p-5">
        {Cards.map((c, index) => (
          <div key={index} className="min-w-[16%]  mr-5 bg-zinc-900 mb-5">
            <img 
            className="w-full h-[55%] object-cover" 
            src={`https://image.tmdb.org/t/p/original/${
              c.backdrop_path || c.profile_path || c.poster_path
              }`} alt="" />

              <div className="p-3 text-white h-[45%]">
              <h1 className="  text-xl  font-semibold ">{c.original_name || c.name || c.title || c.original_title}</h1>
            <p className="text-sm">
              {c.overview && `${c.overview.slice(0, 50)}...`}
              <span className="text-zinc-400">more</span>{" "}
            </p>
              </div>
           
          </div>
        ))}
      </div>
 
  );
};

export default HorizontalCards;
