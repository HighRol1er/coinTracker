import React, { useEffect, useState } from 'react'
import Header from '../components/Common/Header'
import TabsComponent from '../components/Dashboard/Tabs'
import axios from 'axios';
import Search from '../components/Dashboard/Search';

const DashboardPage = () => {
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState("");

  const onSearchChange = (e) => {
    setSearch(e.target.value);
  }

  let filteredCoins = coins.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase()) || 
    item.symbol.toLowerCase().includes(search.toLowerCase())
  );

  useEffect(() => {
    // fetch(
    //   "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&x_cg_demo_api_key=CG-anSCXyA1AEvjbBsSMdogQnoB"
    // )
    axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&x_cg_demo_api_key=CG-anSCXyA1AEvjbBsSMdogQnoB')
    .then((res) => {
      // code for handling the res
      console.log("Response", res);
      setCoins(res.data);
      
    })
    .catch((error) => {
      // code for handling the error
      console.log("error",error);
    })
  },[])
  // useEffect(() => {
  //   const options = {
  //     method: 'GET',
  //     url: 'https://api.coingecko.com/api/v3/coins/markets',
  //     params: {
  //       vs_currency: 'usd',
  //       order: 'market_cap_desc',
  //       per_page: '100',
  //       page: '1',
  //       sparkline: 'false',
  //       x_cg_demo_api_key: 'CG-anSCXyA1AEvjbBsSMdogQnoB'
  //     },
  //     headers: {accept: 'application/json'}
  //   };
    
  //   axios
  //     .request(options)
  //     .then(function (response) {
  //       console.log(response.data);
  //     })
  //     .catch(function (error) {
  //       console.error(error);
  //     });
  // },[]);
  return (
    <div>
      <Header/>
      <Search search={search} onSearchChange={onSearchChange} />
      <TabsComponent coins={filteredCoins}/>
    </div>
  )
}

export default DashboardPage