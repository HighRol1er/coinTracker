import React, { useEffect, useState } from 'react'
import Header from '../components/Common/Header'
import Search from '../components/Dashboard/Search';
import Loader from '../components/Common/Loader';
import BackToTop from '../components/Common/BackToTop';
import TabsComponent from '../components/Dashboard/Tabs'
import PaginationComponent from '../components/Dashboard/Pagination';
import { get100Coins } from '../functions/get100Coins';


const DashboardPage = () => {
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

  const getData = async () => {
    const myCoins = await get100Coins();
    if(myCoins) {
      setCoins(myCoins);
      setPaginatedCoins(myCoins.slice(0, 10));
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getData();
  },[]);

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