import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import { asyncloadmovie, removemovie } from "../store/actions/movieAction";
import Loading from "./Loading";

const MovieDetails = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { info } = useSelector((state) => state.movie);
  const dispatch = useDispatch();

  console.log(info);

  useEffect(() => {
    dispatch(asyncloadmovie(id));
    return () => {
      //clean up
      dispatch(removemovie());
    };
  }, []);

  return info ? (
    <div
      style={{
        background: `linear-gradient(rgba(0,0,0,.2),rgba(0,0,0,.9)), url(https://image.tmdb.org/t/p/original/${info.detail.backdrop_path})`,
        backgroundPosition: "top 10%",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
      className="w-screen h-screen px-[10%]"
    >
      {/* part 1 navigation */}
      <nav className="h-[10vh] w-full text-zinc-100 flex gap-10 text-2xl items-center">
        <Link
          onClick={() => {
            navigate(-1);
          }}
          className=" ri-arrow-left-line hover:text-[#6556CD]"
        ></Link>

        <a target="_blank" href={info.detail.homepage}>
          <i className="hover:text-red-600 hover:underline ri-external-link-line"></i>
        </a>

        <a target="_blank" href={`https://www.wikidata.org/wiki/${info.external_ids.wikidata_id}`}>
          <i className="hover:text-blue-600 hover:underline ri-earth-fill"></i>
        </a>
        <a className="hover:text-[#E1B516] hover:underline" target="_blank" href={`https://www.imdb.com/title/${info.external_ids.imdb_id}/`}>
          IMDB
        </a>
      </nav>

      {/* part 2 poster and details */}

      <div className="w-full flex ">
        <img
          className=" h-[42vh] object-cover shadow-[8px_17px_38px_2px_rgba(0,0,0,.5)] rounded-lg"
          src={`https://image.tmdb.org/t/p/original/${info.detail.poster_path || info.backdrop_path})
      `}
          alt=""
        />


        <div className="content ml-[5%]">
          <h1 className="text-5xl font-black text-white"> {info.detail.name || info.detail.original_name ||  info.detail.title || info.detail.original_title}</h1>
          <span className="text-lg  text-white">{info.detail.release_date.split("-")[0]}</span>
        </div>
      </div>

      {/* part 3 available on platffrom  */}
      <div className="w-[80%] mt-10 gap-y-5 flex flex-col ">
        {info.watchproviders && info.watchproviders.flatrate && (
          <div className="flex gap-x-10 items-center text-white">
            <h1>Available on Platfrom : </h1>

            {info.watchproviders.flatrate.map((w, index) => (
              <img title={w.provider_name} key={index} className="w-[7vh] h-[7vh] object-cover  rounded-md" src={`https://image.tmdb.org/t/p/original/${w.logo_path})`} alt="" />
            ))}
          </div>
        )}

        {info.watchproviders && info.watchproviders.rent && (
          <div className="flex gap-x-10 items-center text-white">
            <h1>Available on Reant : </h1>

            {info.watchproviders.rent.map((w, index) => (
              <img title={w.provider_name} key={index} className="w-[7vh] h-[7vh] object-cover  rounded-md" src={`https://image.tmdb.org/t/p/original/${w.logo_path})`} alt="" />
            ))}
          </div>
        )}

        {info.watchproviders && info.watchproviders.buy && (
          <div className="flex gap-x-10 items-center text-white">
            <h1>Available to buy : </h1>

            {info.watchproviders.buy.map((w, index) => (
              <img title={w.provider_name} key={index} className="w-[7vh] h-[7vh] object-cover  rounded-md" src={`https://image.tmdb.org/t/p/original/${w.logo_path})`} alt="" />
            ))}
          </div>
        )}
      </div>
    </div>
  ) : (
    <Loading />
  );
};

export default MovieDetails;
