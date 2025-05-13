import React from "react";
import { Link } from "react-router-dom";
import noimage from '../../asset/noimg.webp'

const HorizontalCards = ({ data }) => {
  console.log(data)
  return (
    <div className="w-[100%] flex  overflow-y-hidden mb-5 p-5 ">
      {data.length > 0 ? data.map((c, index) => (
        <Link to={`/${c.media_type}/details/${c.id}`} key={index} className="min-w-[16%]  mr-5  mb-5  bg-zinc-900 h-[39vh] pb-2">
          <img className="w-full h-[50%] object-cover" 
          src={c.backdrop_path ||
            c.profile_path ||
             c.poster_path ? `https://image.tmdb.org/t/p/original/${
            c.backdrop_path ||
             c.profile_path ||
              c.poster_path
              }`:
                noimage
              
            }
               alt=""
                />

          <div className="p-4 text-white h-[45%] overflow-y-auto">
            <h1 className="  text-xl  font-semibold ">{c.original_name || c.name || c.title || c.original_title}</h1>
            <p className="text-sm">
              {c.overview && `${c.overview.slice(0, 40)}...`}
              <span className="text-zinc-400">more</span>{" "}
            </p>
          </div>
        </Link>
      )):(
        <h1 className="text-3xl text-white font-black text-center mt-5">
          Nothing to show
        </h1>
      )}
    </div>
  );
};

export default HorizontalCards;
