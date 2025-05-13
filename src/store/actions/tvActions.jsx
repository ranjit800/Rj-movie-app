export {removetv} from '../reducers/tvSlice'
import axios from '../../utils/axios';
import {loadtv} from '../reducers/tvSlice';


export const asyncloadtv = (id) => async (dispatch, getState)=>{
//    console.log(id)
    try {
        const detail = await axios.get(`/tv/${id}`);
        const external_ids = await axios.get(`/tv/${id}/external_ids`);
        const recommendations = await axios.get(`/tv/${id}/recommendations`);
        const similar = await axios.get(`/tv/${id}/similar`);
        const videos = await axios.get(`/tv/${id}/videos`);
        const watchproviders = await axios.get(`/tv/${id}/watch/providers`);
        const translations = await axios.get(`/tv/${id}/translations`);


        
        let theultimatedetails = {
            detail:detail.data,
            external_ids:external_ids.data,
            recommendations:recommendations.data.results,
            similar:similar.data.results,
            videos:videos.data.results.find((m)=> m.type === "Trailer"),
            watchproviders:watchproviders.data.results.IN,
            translations:translations.data.translations.map(t=>t.english_name),

        };

        dispatch(loadtv(theultimatedetails))
// console.log(theultimatedetails)

    } catch (error) {
        console.log("Error :", error);
    }
}

