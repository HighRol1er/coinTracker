import axios from "axios";

export const getCoinData = (id) => {
  const apiKey = process.env.REACT_APP_CG_API_KEY;
  const myData = axios
    .get(`https://api.coingecko.com/api/v3/coins/${id}`)
    .then((res) => {
      return res.data;
    })
    .catch((error) => {
      console.error(error);
    })
  return myData;
}

