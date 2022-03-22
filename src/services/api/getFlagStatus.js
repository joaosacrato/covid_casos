import axios from "axios";

export const getFlagStatus = (country, setCountry) => {
  axios
    .request({
        method: "GET",
        url: `https://countryflagsapi.com/svg/${country}`})
    .then(function (response) {
      console.log(response)
      setCountry(response.status)
    })
    .catch(function (error) {
      console.error(error);
    });
};
