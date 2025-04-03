import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "../../utils/axios";
import noimage from "../../asset/noimg.webp";

const TopNav = () => {
  const [query, setquery] = useState("");
  const [searches, setsearches] = useState([]);

  // console.log(query);

  const GetSearches = async () => {
    try {
      const { data } = await axios.get(`/search/multi?query=${query}`);

      setsearches(data.results);
      // console.log(data.results);
    } catch (error) {
      console.log("Error :", error);
    }
  };

  useEffect(() => {
    GetSearches();
  }, [query]);

  return (
    <div className="relative w-[80%] h-[10vh]  flex mx-auto items-center ">
      <i className="ri-search-eye-line text-3xl text-zinc-400 "></i>
      <input
        onChange={(e) => setquery(e.target.value)}
        value={query}
        className="w-[50%]  mx-10 p-5 text-xl outline-none border-none bg-transparent text-zinc-100"
        type="text"
        placeholder="Search anything..."
      />
      {query.length > 0 && (<i onClick={() => setquery("")} 
      className="ri-close-fill text-3xl text-zinc-400">
      </i>
    )}

      <div className="absolute w-[45%] max-h-[50vh] bg-zinc-200  top-[85%] left-[10%] overflow-auto rounded">
        {searches.map((s, index) => (
          <Link
            key={index}
            className="text-zinc-700 font-semibold hover:text-zinc-950 hover:bg-zinc-300 duration-300 w-[100%]  p-10 flex justify-start items-center border-b-2 border-zinc-100"
          >
            <img
              className="w-[10vh] h-[10vh] object-cover rounded-lg mr-5 shadow-lg"
              src={s.backdrop_path || s.profile_path ? `https://image.tmdb.org/t/p/original/${s.backdrop_path || s.profile_path}` : noimage}
              alt=""
            />
            <span>{s.original_name || s.name || s.title || s.original_title}</span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default TopNav;
