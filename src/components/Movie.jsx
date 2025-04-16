import axios from "../utils/axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Loading from "./Loading";
import TopNav from "./templates/TopNav";
import Dropwodn from "./templates/Dropwodn";
import InfiniteScroll from "react-infinite-scroll-component";
import Cards from "./templates/Cards";

const Movie = () => {
    const navigate = useNavigate();
    const [category, setcategory] = useState("now_playing");
    const [movie, setmovie] = useState([]);
    const [page, setpage] = useState(1);
    const [hasMore, sethasMore] = useState(true);
    document.title = "TMDB | Movies | "  + category.toLocaleLowerCase()

    
    const GetMovie = async () => {
        try {
          const { data } = await axios.get(`/movie/${category}?page=${page}`);
          if (data.results.length > 0) {
            setpage(page + 1);
    
            setmovie((prevState) => [...prevState, ...data.results]);
          } else {
            sethasMore(false)
          }
    
          // setmovie(data.results);
        //   console.log(data);
        } catch (error) {
          console.log("Error :", error);
        }
      };
    
      const refershHandler =  () => {
        if (movie.length === 0) {
          GetMovie();
        } else {
          setpage(1);
          setmovie([]);
          GetMovie()
        }
      };
    
      useEffect(() => {
        refershHandler()
      }, [category]);
    
  return movie.length > 0 ? (
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
         
          Movie
          <small className="ml-2 text-sm text-zinc-600">({category})</small>
        </h1>

        <div className="flex items-center w-[80%]">
          <TopNav />
          <Dropwodn title="Category" options={["popular", "top_rated", "upcoming", "now_playing"]} func={(e) => setcategory(e.target.value)} />
          
          
        </div>
      </div>

      <InfiniteScroll 
      dataLength={movie.length}
       next={GetMovie}
        hasMore={hasMore}
         loader={<h1>Loading...</h1>}>
        <Cards data={movie} title="movie" />
      </InfiniteScroll>
    </div>
  ) : (
    <Loading />
  );
}

export default Movie