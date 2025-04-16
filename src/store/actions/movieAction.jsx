export {removemovie} from '../reducers/movieSlice'
import axios from '../../utils/axios';
import {loadmovie} from '../reducers/movieSlice';


export const asyncloadmovie = (id) => async (dispatch, getState)=>{
//    console.log(id)
    try {
        const detail = await axios.get(`/movie/${id}`);
        const external_ids = await axios.get(`/movie/${id}/external_ids`);
        const recommendations = await axios.get(`/movie/${id}/recommendations`);
        const similar = await axios.get(`/movie/${id}/similar`);
        const videos = await axios.get(`/movie/${id}/videos`);
        const watchproviders = await axios.get(`/movie/${id}/watch/providers`);

        
        let theultimatedetails = {
            detail:detail.data,
            external_ids:external_ids.data,
            recommendations:recommendations.data.results,
            similar:similar.data.results,
            videos:videos.data.results.find((m)=> m.type === "Trailer"),
            watchproviders:watchproviders.data.results.IN,
        };

        dispatch(loadmovie(theultimatedetails))
// console.log(theultimatedetails)

    } catch (error) {
        console.log("Error :", error);
    }
}

