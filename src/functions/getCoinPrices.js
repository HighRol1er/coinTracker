import axios from "axios";

// export const getCoinPrices = async(id, days) => {
//   const apiKey = process.env.REACT_APP_CG_API_KEY;
//   const prices = {
//     method : "GET",
//     url :  `/api/v3/coins/${id}/market_chart`,  //https://api.coingecko.com
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

// 위 주석 코드에서 CORS 에러가 나옴 - 이건 해결 
/*위 코드는 잘 어울리지 않는 듯한 느낌임 async/ await 빼고 then문법으로 적는게 맞는거같음  */

export const getCoinPrices = (id, days, priceType) => {
  const apiKey = process.env.REACT_APP_CG_API_KEY;
  const prices = axios
    .get(`https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=usd&days=${days}&interval=daily&precision=0&x_cg_demo_api_key=${apiKey}`)
    .then((res) => {
      console.log("Prices>>>>", res.data);
      return res.data[priceType]; // 어떤 속성에 동적으로 접근해야 할 때
    })
    .catch((error) => {
      console.error(error);
    })
  return prices;
}


