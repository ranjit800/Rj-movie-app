import  { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import TopNav from "./templates/TopNav";
import Dropwodn from "./templates/Dropwodn";
import axios from "../utils/axios";
import Cards from "./templates/Cards";
import Loading from "./Loading";
import InfiniteScroll from "react-infinite-scroll-component";

const Trending = () => {
  const navigate = useNavigate();
  const [category, setcategory] = useState("all");
  const [duration, setduration] = useState("day");
  const [trending, setTrending] = useState([]);
  const [page, setpage] = useState(1);
  const [hasMore, sethasMore] = useState(true);
document.title = "TMDB | Trending | "  + category.toLocaleUpperCase()

  const GetTrending = async () => {
    try {
      const { data } = await axios.get(`/trending/${category}/${duration}?page=${page}`);

      if (data.results.length > 0) {
        setpage(page + 1);

        setTrending((prevState) => [...prevState, ...data.results]);
      } else {
        sethasMore(false)
      }

      // setTrending(data.results);
      // console.log(data);
    } catch (error) {
      console.log("Error :", error);
    }
  };

  const refershHandler =  () => {
    if (trending.length === 0) {
      GetTrending();
    } else {
      setpage(1);
      setTrending([]);
      GetTrending()
    }
  };

  useEffect(() => {
    refershHandler()
  }, [category, duration]);

  // console.log(trending);

  return trending.length > 0 ? (
    <div className="w-screen h-screen  ">
      <div className="px-[5%] w-full flex items-center justify-between ">
      <div className="mr-2 px-2 py-1 bg-transparent border-[1px] border-[#6556CD]  rounded-full  flex justify-center items-center  text-2xl text-zinc-400 font-semibold">
         <i
            onClick={() => {
              navigate(-1);
            }}
            className=" ri-arrow-left-line hover:text-[#6556CD]"
          ></i>
         </div>
        <h1 className="w-[20%] text-2xl text-zinc-400 font-semibold">
        
          Trending
        </h1>

        <div className="flex items-center w-[80%]">
          <TopNav />
          <Dropwodn title="Category" options={["movie", "tv", "all"]} func={(e) => setcategory(e.target.value)} />
          <div className="w-[2%]"></div>
          <Dropwodn title="Duration" options={["week", "day"]} func={(e) => setduration(e.target.value)} />
        </div>
      </div>

      <InfiniteScroll 
      dataLength={trending.length}
       next={GetTrending}
        hasMore={hasMore}
         loader={<h1>Loading...</h1>}>
        <Cards data={trending} title={category} />
      </InfiniteScroll>
    </div>
  ) : (
    <Loading />
  );
};

export default Trending;
