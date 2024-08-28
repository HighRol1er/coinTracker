import React, { useEffect, useState } from 'react'
import Header from '../components/Common/Header'
import TabsComponent from '../components/Dashboard/Tabs'
// import axios from 'axios';
import Search from '../components/Dashboard/Search';
import PaginationComponent from '../components/Dashboard/Pagination';
import Loader from '../components/Common/Loader';
import BackToTop from '../components/Common/BackToTop';
import { get100Coins } from '../functions/get100Coins';


const DashboardPage = () => {
  // const apiKey = process.env.REACT_APP_CG_API_KEY;
  const [coins, setCoins] = useState([]);
  const [paginatedCoins, setPaginatedCoins] =useState([])
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true);

  const handlePageChange = (event, value) => {
    setPage(value);//1
    console.log(value);
    let previousIndex = (value - 1) * 10;
    setPaginatedCoins(coins.slice(previousIndex, previousIndex + 10));
    /*
            previndex, previndex + 10
    value=1 [0 , 10]
    value=2 [10, 20]
    value=3 [20, 30]
    ...
    value=9 [80, 90]
    value=10[90, 100] //배열의 끝 요소는 해당X하기때문에
     */
  }

  const onSearchChange = (e) => {
    setSearch(e.target.value);
  }

  let filteredCoins = coins.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase()) || 
    item.symbol.toLowerCase().includes(search.toLowerCase())
  );

  useEffect(() => {
    // // fetch(
    // //   "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&x_cg_demo_api_key={키값 "{}"는 빼고 }"
    // // )
    // axios.get(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&x_cg_demo_api_key=${apiKey}`)
    // .then((res) => {
    //   // code for handling the res
    //   // console.log("Response", res);
    //   setCoins(res.data);
    //   setPaginatedCoins(res.data.slice(0, 10));
    //   setIsLoading(false);
    // })
    // .catch((error) => {
    //   // code for handling the error
    //   console.log("error",error);
    //   setIsLoading(false);
    // });
    getData();
  },[]);

  const getData = async () => {
    const myCoins = await get100Coins();
    if(myCoins) {
      setCoins(myCoins);
      setPaginatedCoins(myCoins.slice(0, 10));
      setIsLoading(false);
    }
  };

  return (
    <>
     <Header/>
     <BackToTop />
      {isLoading ? (
        <Loader />
        ) : (
          <div>
            <Search search={search} onSearchChange={onSearchChange} />
            {/* <TabsComponent coins={filteredCoins}/> 아래꺼로 교체(pagination)*/}
            <TabsComponent coins={search ? filteredCoins : paginatedCoins}/>
            {!search && (
              <PaginationComponent page={page} handlePageChange={handlePageChange}/>
            )} {/*이렇게 작성하면 Search를 이용할 떄 코인 pagination 안보임  */}
            {/* <PaginationComponent page={page} handlePageChange={handlePageChange}/> */}
            </div>
      )}
    </>
  )
}

export default DashboardPage