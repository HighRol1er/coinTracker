import axios from "axios";

export const get100Coins = () => {
  const apiKey = process.env.REACT_APP_CG_API_KEY;
 
  const myCoins = axios
    .get(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&x_cg_demo_api_key=${apiKey}`)
    .then((res) => {
      console.log("Response>>>", res);
      return res.data;
    })
    .catch((error) => {
      console.log("error",error);
    });
    
  return myCoins;
}