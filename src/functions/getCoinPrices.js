import axios from "axios";

// export const getCoinPrices = async(id, days) => {
//   const apiKey = process.env.REACT_APP_CG_API_KEY;
//   const prices = {
//     method : "GET",
//     url :  `https://api.coingecko.com/api/v3/coins/${id}/market_chart`,  //https://api.coingecko.com
//     params: {vs_currency: 'usd', days: days, interval: 'daily', precision: '0'},
//     headers: {accept: 'application/json', 'x-cg-demo-api-key': apiKey}
//   };

//    // const prices = axios
//     //   .request(coinChartData)
//     //   .then((response) => {
//     //     // console.log(response.data);
//     //     return response.data.prices;
//     //     // setIsLoading(false);
//     //   })
//     //   .catch((error) => {
//     //     console.log(error);
//     //     // setIsLoading(false);
//     //   });
//     // return prices;

//   try {
//     const res = await axios.request(prices);
//     const priceData = res.data.prices;
//     console.log(priceData);
//     return priceData;
//   } catch (error) {
//     console.error(error);
//   }
// }

// 위 주석 코드에서 CORS 에러가 나옴 

export const getCoinPrices = (id, days) => {
  const apiKey = process.env.REACT_APP_CG_API_KEY;
  const prices = axios
    .get(`https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=usd&days=${days}&interval=daily&precision=0&x_cg_demo_api_key=${apiKey}`)
    .then((res) => {
      console.log("Prices>>>>", res.data.prices);
      return res.data.prices
    })
    .catch((error) => {
      console.error(error);
    })
  return prices;
}


