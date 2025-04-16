import axios from "../utils/axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Loading from "./Loading";
import TopNav from "./templates/TopNav";
import Dropwodn from "./templates/Dropwodn";
import InfiniteScroll from "react-infinite-scroll-component";
import Cards from "./templates/Cards";
const TvShows = () => {

    const navigate = useNavigate();
    const [category, setcategory] = useState("airing_today");
    const [tv, settv] = useState([]);
    const [page, setpage] = useState(1);
    const [hasMore, sethasMore] = useState(true);
    document.title = "TMDB | tvs | "  + category.toLocaleLowerCase()

    
    const GetTv = async () => {
        try {
          const { data } = await axios.get(`/tv/${category}?page=${page}`);
          if (data.results.length > 0) {
            setpage(page + 1);
    
            settv((prevState) => [...prevState, ...data.results]);
          } else {
            sethasMore(false)
          }
    
          // settv(data.results);
        //   console.log(data);
        } catch (error) {
          console.log("Error :", error);
        }
      };
    
      const refershHandler =  () => {
        if (tv.length === 0) {
          GetTv();
        } else {
          setpage(1);
          settv([]);
          GetTv()
        }
      };
    
      useEffect(() => {
        refershHandler()
      }, [category]);
    

  return tv.length > 0 ? (
    <div className="w-screen h-screen ">
      <div className="px-[5%] w-full flex items-center justify-between ">
      <div className="mr-2 px-0.5 py-1 bg-transparent border-[1px] border-[#6556CD]  rounded-full  flex justify-center items-center w-[3%] text-2xl text-zinc-400 font-semibold">
         <i
            onClick={() => {
              navigate(-1);
            }}
            className=" ri-arrow-left-line hover:text-[#6556CD]"
          ></i>
         </div>
        <h1 className="w-[20%] text-2xl text-zinc-400 font-semibold">
          
          Tv Shows
          <small className="ml-2 text-sm text-zinc-600">({category})</small>
        </h1>

        <div className="flex items-center w-[80%]">
          <TopNav />
          <Dropwodn title="Category" options={["popular", "top_rated", "on_the_air","airing_today"]} func={(e) => setcategory(e.target.value)} />
          
          
        </div>
      </div>

      <InfiniteScroll 
      dataLength={tv.length}
       next={GetTv}
        hasMore={hasMore}
         loader={<h1>Loading...</h1>}>
        <Cards data={tv} title="tv" />
      </InfiniteScroll>
    </div>
  ) : (
    <Loading />
  );
}

export default TvShows