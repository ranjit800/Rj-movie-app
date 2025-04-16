import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const SideNav = () => {
  return (
    <div className="w-[20%] h-full  border-r-[1px] border-zinc-200 p-10">
      <h1 className="md:text-2xl text-sm text-white font-bold">
        <i className="ri-tv-fill text-[#6556CD] mr-2"></i>
        <span>Rj-Dev-DB</span>
      </h1>
      <nav className="flex flex-col text-zinc-400 md:text-xl gap-2">
        <h1 className="text-white font-semibold mt-10 mb-3 md:text-xl text-xs">New Feeds</h1>
        <Link to="/trending" className="hover:bg-[#6556CD] hover:text-white p-3 rounded-lg duration-300">
          <i className="ri-fire-fill"></i> Trending
        </Link>
        <Link to="popular" className="hover:bg-[#6556CD] hover:text-white p-3 rounded-lg duration-300">
          {" "}
          <i className="ri-bard-fill"></i> Popular
        </Link>
        <Link to='/movie' className="hover:bg-[#6556CD] hover:text-white p-3 rounded-lg duration-300">
          {" "}
          <i className="ri-movie-2-ai-fill"></i> Movies
        </Link>
        <Link to='/tv' className="hover:bg-[#6556CD] hover:text-white p-3 rounded-lg duration-300">
          {" "}
          <i className="ri-slideshow-2-fill"></i> TV Show
        </Link>
        <Link  to='/person' className="hover:bg-[#6556CD] hover:text-white p-3 rounded-lg duration-300">
          {" "}
          <i className="ri-user-5-fill"></i> People
        </Link>
      </nav>

      <hr className="border-none h-[1px] bg-zinc-400 mt-3" />

      <nav className="flex flex-col text-zinc-400 md:text-xl gap-3">
        <h1 className="text-white font-semibold mt-10 mb-5 md:text-xl text-xs">Website Info</h1>
        <Link className="hover:bg-[#6556CD] hover:text-white p-3 rounded-lg duration-300">
          <i className="ri-information-2-fill"></i> About
        </Link>
        <Link className="hover:bg-[#6556CD] hover:text-white p-3 rounded-lg duration-300">
          {" "}
          <i className="ri-phone-fill"></i> Contact Us
        </Link>
      </nav>
    </div>
  );
};

export default SideNav;
