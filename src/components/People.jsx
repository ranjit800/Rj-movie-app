import axios from "../utils/axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Loading from "./Loading";
import TopNav from "./templates/TopNav";
import Dropwodn from "./templates/Dropwodn";
import InfiniteScroll from "react-infinite-scroll-component";
import Cards from "./templates/Cards";

const People = () => {
  const navigate = useNavigate();
  const [category, setcategory] = useState("popular");
  const [person, setperson] = useState([]);
  const [page, setpage] = useState(1);
  const [hasMore, sethasMore] = useState(true);
  document.title = "TMDB | Person | " + category.toLocaleLowerCase();

  const GetPerson = async () => {
    try {
      const { data } = await axios.get(`/person/${category}?page=${page}`);
      console.log(data)
      if (data.results.length > 0) {
        setpage(page + 1);

        setperson((prevState) => [...prevState, ...data.results]);
      } else {
        sethasMore(false);
      }

      // setperson(data.results);
      //   console.log(data);
    } catch (error) {
      console.log("Error :", error);
    }
  };

  const refershHandler = () => {
    if (person.length === 0) {
      GetPerson();
    } else {
      setpage(1);
      setperson([]);
      GetPerson();
    }
  };

  useEffect(() => {
    refershHandler();
  }, [category]);

  return person.length > 0 ? (
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
          
          People
        </h1>

        <div className="flex items-center w-[80%]">
          <TopNav />
        </div>
      </div>

      <InfiniteScroll dataLength={person.length} next={GetPerson} hasMore={hasMore} loader={<h1>Loading...</h1>}>
        <Cards data={person} title='person' />
      </InfiniteScroll>
    </div>
  ) : (
    <Loading />
  );
};

export default People;
