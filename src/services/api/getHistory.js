import axios from "axios";
import { options } from "./options";

export const getHistory = async (set, country) => {
  await axios
    .request({
      ...options,
      url: `https://covid-193.p.rapidapi.com/history?country=${country}`,
    })
    .then(function (response) {
      if (response.status == 200) {
        set(response.data.response);
      }
    })
    .catch(function (error) {
      console.error(error);
    });
};