import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Outlet, useLocation, useNavigate, useParams } from "react-router-dom";
import { asyncloadtv, removetv } from "../store/actions/tvActions";
import Loading from "./Loading";
import HorizontalCards from "./templates/HorizontalCards"


const TvDetails = () => {
  const { pathname } = useLocation();
    const navigate = useNavigate();
    const { id } = useParams();
    const { info } = useSelector((state) => state.tv);
    const dispatch = useDispatch();
  
    console.log(info);
  
    useEffect(() => {
      dispatch(asyncloadtv(id));
      return () => {
        //clean up
        dispatch(removetv());
      };
    }, [id]);

  return info ? (
    <div
      style={{
        background: `linear-gradient(rgba(0,0,0,.2),rgba(0,0,0,.9)), url(https://image.tmdb.org/t/p/original/${info.detail.backdrop_path})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed"
      }}
      className="w-screen min-h-screen relative"
    >
      <div className="absolute inset-0 overflow-y-auto px-[5%]">
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
        <div className="w-full flex">
          <img
            className="h-[50vh] object-cover shadow-[8px_17px_38px_2px_rgba(0,0,0,.5)] rounded-lg"
            src={`https://image.tmdb.org/t/p/original/${info.detail.poster_path || info.backdrop_path})
        `}
            alt=""
          />

          <div className="content ml-[5%] text-white">
            <h1 className="text-4xl font-black">
              {" "}
              {info.detail.name || info.detail.original_name || info.detail.title || info.detail.original_title}
              <span className="text-xl ml-2 text-zinc-200 font-bold">({info.detail.first_air_date.split("-")[0]})</span>
            </h1>

            <div className="flex items-center gap-x-3 mt-2 mb-4 font-semibold">
              <span className="text-white text-sm font-semibold w-[7vh] h-[7vh] flex justify-center items-center bg-yellow-600 rounded-full">
                {(info.detail.vote_average * 10).toFixed()} <sup>%</sup>
              </span>
              <h1 className="font-semibold text-2xl w-[60px] leading-5">User Score</h1>
              <h1>{info.detail.first_air_date}</h1>
              <h1>{info.detail.genres.map((g) => g.name).join(", ")}</h1>
              <h1>{info.detail.runtime} min</h1>
            </div>

            <h1 className="text-xl font-semibold italic text-zinc-200 mb-4">{info.detail.tagline}</h1>

            <h1 className="text-2xl mb-1">Overview</h1>
            <p className="mb-4">{info.detail.overview}</p>

            <h1 className="text-2xl mt-1 mb-2">tv Translated</h1>
            <p className="mb-10">{info.translations.join(", ")}</p>

            <Link className="px-10 py-4 bg-[#6556CD] rounded-2xl text-center w-[80%] mx-auto" to={`${pathname}/trailer`}>
              <i className="ri-play-fill text-xl mr-3"></i> Play Trailer
            </Link>
          </div>
        </div>

        {/* part 3 available on platform */}
        <div className="w-[80%] mt-5 gap-y-5 flex flex-col my-4">
          {info.watchproviders && info.watchproviders.flatrate && (
            <div className="flex gap-x-10 items-center text-white">
              <h1>Available on Platform : </h1>

              {info.watchproviders.flatrate.map((w, index) => (
                <img title={w.provider_name} key={index} className="w-[7vh] h-[7vh] object-cover rounded-md" src={`https://image.tmdb.org/t/p/original/${w.logo_path})`} alt="" />
              ))}
            </div>
          )}

          {info.watchproviders && info.watchproviders.rent && (
            <div className="flex gap-x-10 items-center text-white">
              <h1>Available on Rent : </h1>

              {info.watchproviders.rent.map((w, index) => (
                <img title={w.provider_name} key={index} className="w-[7vh] h-[7vh] object-cover rounded-md" src={`https://image.tmdb.org/t/p/original/${w.logo_path})`} alt="" />
              ))}
            </div>
          )}

          {info.watchproviders && info.watchproviders.buy && (
            <div className="flex gap-x-10 items-center text-white">
              <h1>Available to buy : </h1>

              {info.watchproviders.buy.map((w, index) => (
                <img title={w.provider_name} key={index} className="w-[7vh] h-[7vh] object-cover rounded-md" src={`https://image.tmdb.org/t/p/original/${w.logo_path})`} alt="" />
              ))}
            </div>
          )}
        </div>

     {/* part 4 seasons */}
     {/* <hr  className="mt-10 mb-10 border-none bg-zinc-300 h-[1px]"/>
        <h1 className="text-2xl text-white font-semibold">
         Seasons
        </h1>
        <HorizontalCards data={
          info.detail.seasons
        }/> */}

        <hr  className="mt-10 mb-10 border-none bg-zinc-300 h-[1px]"/>
        <h1 className="text-2xl text-white font-semibold">
         Seasons
        </h1>
        <div className="w-[100%] flex  overflow-y-hidden mb-5 p-5 gap-9">
       {info.detail.seasons.length > 0 ?  info.detail.seasons.map((s,i)=>(
        <div className="w-[15vw] ">
           <img className=" h-[42vh] min-w-[15vw] object-fit shadow-[8px_17px_38px_2px_rgba(0,0,0,.5)] rounded-lg" src={`https://image.tmdb.org/t/p/original/${s.poster_path || s.backdrop_path || s.profile_path})`} alt="" />
         <h1 className="text-2xl text-zinc-300 mt-3 font-semibold ">
         {s.name}

         </h1>
        </div>
       )): (
        <h1 className="text-3xl text-white font-black text-center mt-5">
        Nothing to show
      </h1>
       )}
        </div>
    
        {/* part 5 recommendations and similar */}
        <hr  className="mt-10 mb-10 border-none bg-zinc-300 h-[1px]"/>
        <h1 className="text-2xl text-white font-semibold">
          Recommnedations and similar
        </h1>
        <HorizontalCards data={
          info.recommendations.length > 0 ? info.recommendations : info.similar
        }/>
        <Outlet />

      </div>
    </div>
  ) : (
    <Loading />
  );
}

export default TvDetails;