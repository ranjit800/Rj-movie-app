import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Trending from "./components/Trending";
import Popular from "./components/Popular";
import Movie from "./components/Movie";
import TvShows from "./components/TvShows";
import People from "./components/People";
import MovieDetails from "./components/MovieDetails";
import PersonDetails from "./components/PersonDetails";
import TvDetails from "./components/TvDetails";
import Trailer from "./components/templates/Trailer";
import NotFound from "./components/NotFound";



const App = () => {
  return (
    <div className="h-auto bg-[#1F1E24] flex">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/trending" element={<Trending />} />
        <Route path="/popular" element={<Popular />} />
        
        <Route path="/movie" element={<Movie />}/>
          <Route path="/movie/details/:id" element={<MovieDetails />} >
          <Route path="/movie/details/:id/trailer" element={<Trailer />}/>
          </Route>
     
        <Route path="/tv" element={<TvShows />}/>
        <Route path="/tv/details/:id" element={<TvDetails/>} >
        <Route path="/tv/details/:id/trailer" element={<Trailer />}/>
        </Route>
        

        <Route path="/person" element={<People />} /> 
        <Route path="/person/details/:id" element={<PersonDetails />} />
       

        <Route path="*" element={<NotFound />} /> 


      </Routes>
    </div>
  );
};

export default App;
