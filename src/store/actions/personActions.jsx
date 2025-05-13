export { removeperson } from "../reducers/personSlice";
import axios from "../../utils/axios";
import { loadperson } from "../reducers/personSlice";

export const asyncloadperson = (id) => async (dispatch, getState) => {
  //    console.log(id)
  try {
    const detail = await axios.get(`/person/${id}`);
    const external_ids = await axios.get(`/person/${id}/external_ids`);

    const tv_credits = await axios.get(`/person/${id}/tv_credits`);
    const movie_credits = await axios.get(`/person/${id}/movie_credits`);
    const combined_credits = await axios.get(`/person/${id}/combined_credits`);

    let theultimatedetails = {
      detail: detail.data,
      external_ids: external_ids.data,
      tv_credits: tv_credits.data,
      movie_credits: movie_credits.data,
      combined_credits: combined_credits.data,
    };

    dispatch(loadperson(theultimatedetails));
    // console.log(theultimatedetails)
  } catch (error) {
    console.log("Error :", error);
  }
};
