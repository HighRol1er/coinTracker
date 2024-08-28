import axios from "axios";

// export const getCoinData = async (id) => {
//   const apiKey = process.env.REACT_APP_CG_API_KEY;
//   const getCoinId = { //getCoinId를 useEffect 안으로 넣어줘야 재렌더링되는걸 막을 수 있음 어차피 한번만 불러오면 되는거니깐 
//     method: 'GET',
//     url: `/api/v3/coins/${id}`, //https://api.coingecko.com
//     headers: {accept: 'application/json', 'x_cg_demo_api_key': apiKey}
//   };
//   // const myData = await axios
//   //   .request(getCoinId)
//   //   .then(function (response) {
//   //     // console.log(response.data);
//   //     // coinObject(setCoinData, response.data);
//   //     return response.data;
//   //   })
//   //   .catch(function (error) {
//   //     console.error(error);
//   //   });
//   // return myData;  
  
//   try {
//     const res = await axios.request(getCoinId);
//     const myData = res.data;
//     console.log(myData);
//     return myData;
//   } catch (error) {
//     console.error(error);
//   }
// }
/*이 코드는 잘 어울리지 않는 듯한 느낌임 async/ await 빼고 then문법으로 적는게 맞는거같음  */

export const getCoinData = (id) => {
  const apiKey = process.env.REACT_APP_CG_API_KEY;
  const myData = axios
    .get(`https://api.coingecko.com/api/v3/coins/${id}?x_cg_demo_api_key=${apiKey}`)
    .then((res) => {
      return res.data;
    })
    .catch((error) => {
      console.error(error);
    })
  return myData;
}