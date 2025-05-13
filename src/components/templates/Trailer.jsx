import React from "react";
import ReactPlayer from "react-player";
import { useSelector } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
import NotFound from "../NotFound";

const Trailer = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const category = pathname.includes("movie") ? "movie" : "tv";
  const ytvideo = useSelector((state) => state[category].info.videos);
  // console.log(ytvideo)
  return (
    <div className="absolute z-50 bg-[rgba(0,0,0,.9)] top-0 left-0 w-screen h-screen flex justify-center items-center">
      <Link
        onClick={() => {
          navigate(-1);
        }}
        className=" absolute ri-close-large-fill hover:text-[#6556CD] text-3xl text-white right-[5%] top-[5%]"
      ></Link>

      {ytvideo ? <ReactPlayer controls height={640} width={1200} url={`https://www.youtube.com/watch?v=${ytvideo.key}`} /> : <NotFound />}
    </div>
  );
};

export default Trailer;
