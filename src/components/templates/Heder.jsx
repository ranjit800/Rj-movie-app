import React from "react";
import { Link } from "react-router-dom";

const Heder = ({ data }) => {
  // console.log(data);
  return (
    <div
      style={{
        background: `linear-gradient(rgba(0,0,0,.2),rgba(0,0,0,.9)), url(https://image.tmdb.org/t/p/original/${data.backdrop_path || data.profile_path ||data.poster_path
          })`,
        backgroundPosition: "top 10%",
        backgroundSize: "cover",
        backgroundRepeat:"no-repeat",
      }}
      className="w-full h-[50vh] flex flex-col justify-end items-start p-12"
    >
      <h1 className="w-[70%] text-5xl text-white font-black ">{data.original_name || data.name || data.title || data.original_title}</h1>
      <p className="w-1/2 mt-3  mb-3 text-white">
        {data.overview ? `${data.overview.slice(0, 200)}...` : "No overview available"}
        <Link to={`/${data.media_type}/details/${data.id}`}  className="text-blue-400">more</Link>{" "}
      </p>
      <p className="text-white">
      <i className="ri-megaphone-fill text-yellow-500 "></i>{data.release_date || "No Information..."}
      <i className="ml-5 ri-album-fill text-yellow-500"></i>{data.media_type?.toUpperCase() || "N/A"}
      </p>
      <Link to={`/${data.media_type}/details/${data.id}/trailer`} className="p-3 rounded-lg mt-5 bg-[#6556CD] hover:bg-[#594cae] text-white font-thin">
      Watch Trailer
      </Link>
    </div>
  );
};

export default Heder;
