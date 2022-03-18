import axios from "axios";
import { options } from "./options";

export const getPaisesDisponiveis = (set) => {
  axios
    .request({ ...options, url: "https://covid-193.p.rapidapi.com/countries" })
    .then(function (response) {
      if (response.status === 200) {
        set(response.data.response);
      }
    })
    .catch(function (error) {
      console.error(error);
    });
};
