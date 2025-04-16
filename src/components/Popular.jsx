import axios from "../utils/axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Loading from "./Loading";
import TopNav from "./templates/TopNav";
import Dropwodn from "./templates/Dropwodn";
import InfiniteScroll from "react-infinite-scroll-component";
import Cards from "./templates/Cards";

const Popular = () => {
    const navigate = useNavigate();
    const [category, setcategory] = useState("movie");
    const [popular, setpopular] = useState([]);
    const [page, setpage] = useState(1);
    const [hasMore, sethasMore] = useState(true);
    document.title = "TMDB | Popular | "  + category.toUpperCase()

    
    const GetPopular = async () => {
        try {
          const { data } = await axios.get(`${category}/popular?page=${page}`);
          if (data.results.length > 0) {
            setpage(page + 1);
    
            setpopular((prevState) => [...prevState, ...data.results]);
          } else {
            sethasMore(false)
          }
    
          // setpopular(data.results);
        //   console.log(data);
        } catch (error) {
          console.log("Error :", error);
        }
      };
    
      const refershHandler =  () => {
        if (popular.length === 0) {
          GetPopular();
        } else {
          setpage(1);
          setpopular([]);
          GetPopular()
        }
      };
    
      useEffect(() => {
        refershHandler()
      }, [category]);
    

  return popular.length > 0 ? (
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
          
          Popular
        </h1>

        <div className="flex items-center w-[80%]">
          <TopNav />
          <Dropwodn title="Category" options={["movie", "tv"]} func={(e) => setcategory(e.target.value)} />
          
          
        </div>
      </div>

      <InfiniteScroll 
      dataLength={popular.length}
       next={GetPopular}
        hasMore={hasMore}
         loader={<h1>Loading...</h1>}>
        <Cards data={popular} title={category} />
      </InfiniteScroll>
    </div>
  ) : (
    <Loading />
  );
}

export default Popular