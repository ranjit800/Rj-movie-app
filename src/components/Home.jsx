import React, { useEffect, useState } from "react";
import SideNav from "./templates/SideNav";
import TopNav from "./templates/TopNav";
import axios from "../utils/axios";
import Heder from "./templates/Heder";
import HorizontalCards from "./templates/HorizontalCards";
import Dropwodn from "./templates/Dropwodn";

const Home = () => {
  document.title = "Movie | Home";
  const [wallpaper, setwallpaper] = useState(null);
  const [Trending, setTrending] = useState([]);
  const [category, setCategory] = useState("all");
  //--------
  const getHederWallpaper = async () => {
    try {
      const { data } = await axios.get(`/trending/all/day`);
      let randondata = data.results[(Math.random() * data.results.length).toFixed()];
      setwallpaper(randondata);
    } catch (error) {
      console.log("Error :", error);
    }
  };

  //for h cards
  const GetTrending = async () => {
    try {
      const { data } = await axios.get(`/trending/${category}/day`);

      setTrending(data.results);
    } catch (error) {
      console.log("Error :", error);
    }
  };

  useEffect(() => {
    GetTrending();
    !wallpaper && getHederWallpaper();
  }, [category]);

  console.log(Trending);
  console.log(wallpaper);

  return wallpaper && Trending ? (
    <>
      <SideNav />
      <div className="w-[80%] h-full  overflow-x-hidden overflow-auto">
        <TopNav />
        <Heder data={wallpaper} />
        <div className=" flex justify-between p-5">
          <h1 className="text-3xl font-semibold text-zinc-400 ">Trending</h1>

          <Dropwodn title="Filter" 
          options={["tv", "movie", "all", "person"]} 
          func={(e)=>setCategory(e.target.value)} />
        </div>
        <HorizontalCards Cards={Trending} />
      </div>
    </>
  ) : (
    <h1>Loding...</h1>
  );
};

export default Home;
