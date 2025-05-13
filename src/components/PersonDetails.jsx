import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Outlet, useLocation, useNavigate, useParams } from "react-router-dom";
import { asyncloadperson, removeperson } from "../store/actions/personActions";
import Loading from "./Loading";
import HorizontalCards from "./templates/HorizontalCards";

const PersonDetails = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const { id } = useParams();
  const { info } = useSelector((state) => state.person);
  const dispatch = useDispatch();

  console.log(info);

  useEffect(() => {
    dispatch(asyncloadperson(id));
    return () => {
      //clean up
      dispatch(removeperson());
    };
  }, [id]);

  return info ? (
    <div className="px-[15%] w-screen  bg-[#1F1E24]">
      {/* part 1 navigation */}
      <nav className="h-[10vh] w-full text-zinc-100 flex gap-10 text-2xl items-center">
        <Link
          onClick={() => {
            navigate(-1);
          }}
          className=" ri-arrow-left-line hover:text-[#6556CD]"
        ></Link>
      </nav>

      <div className="w-full flex flex-col">
        {/* part 2 left poster and details */}
        <div className="w-[20%]">
          <img
            className="h-[40vh] object-cover shadow-[8px_17px_38px_2px_rgba(0,0,0,.5)] rounded-lg"
            src={`https://image.tmdb.org/t/p/original/${info.detail.profile_path})
        `}
            alt=""
          />
          <hr className="mt-10 mb-10 border-none bg-zinc-300 h-[1px]" />
          {/* social media links */}
          <div className="text-2xl text-white flex gap-x-5">
            <a target="_blank" href={`https://www.wikidata.org/wiki/${info.external_ids.wikidata_id}`}>
              <i className="hover:text-blue-600 hover:underline ri-earth-fill"></i>
            </a>
            <a target="_blank" href={`https://www.facebook.com/${info.external_ids.facebook_id}`}>
              <i className="hover:text-blue-600 hover:underline ri-facebook-circle-fill"></i>
            </a>
            <a target="_blank" href={`https://www.instagram.com/${info.external_ids.instagram_id}`}>
              <i className="hover:text-blue-600 hover:underline ri-instagram-line"></i>
            </a>
            <a target="_blank" href={`https://www.twitter.com/${info.external_ids.twitter_id}`}>
              <i className="hover:text-blue-600 hover:underline ri-twitter-x-line"></i>
            </a>
          </div>
          {/* personal information */}
          <h1 className="text-2xl text-zinc-400 font-semibold my-5">Person Info</h1>

          <h1 className="text-lg text-zinc-400 font-semibold mt-5">Known For </h1>
          <h1 className=" text-zinc-400 ">{info.detail.known_for_department} </h1>

          
          <h1 className="text-lg text-zinc-400 font-semibold mt-3">Gender</h1>
          <h1 className=" text-zinc-400 ">{info.detail.gender === 2 ? "Male" : "Femail"} </h1>

          <h1 className="text-lg text-zinc-400 font-semibold mt-3">Birthday</h1>
          <h1 className=" text-zinc-400 ">{info.detail.birthday} </h1>

          <h1 className="text-lg text-zinc-400 font-semibold mt-3">Dethday</h1>
          <h1 className=" text-zinc-400 ">{info.detail.deathday ? info.detail.deathday : 'Still Alive'} </h1>

          <h1 className="text-lg text-zinc-400 font-semibold mt-3">place_of_birth</h1>
          <h1 className=" text-zinc-400 ">{info.detail.place_of_birth} </h1>

          <h1 className="text-lg text-zinc-400 font-semibold mt-3">Also known as</h1>
          <h1 className=" text-zinc-400 ">{info.detail.also_known_as.join(", ")} </h1>



        </div>

        {/* part 3 right Details and information */}
        <div className="w-[80%]">
        <h1 className="text-2xl text-zinc-400 font-semibold my-5">Person Info</h1>
        </div>
      </div>
    </div>
  ) : (
    <Loading />
  );
};

export default PersonDetails;
