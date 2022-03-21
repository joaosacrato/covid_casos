import axios from "axios";
import { options } from "./options";

export const getFlag = (country, set) => {
  axios
    .request({
        method: "GET",
        url: `https://countryflagsapi.com/svg/${country}`})
    .then(function (response) {
      if (response.status === 200) {
        set(response.data.response);
      }
    })
    .catch(function (error) {
      console.error(error);
    });
};
