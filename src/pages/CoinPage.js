import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import CoinInfo from '../components/Coin/CoinInfo';
import LineChart from '../components/Coin/LineChart';
import Header from '../components/Common/Header';
import Loader from '../components/Common/Loader';
import List from '../components/Dashboard/List';
import SelectDays from '../components/Coin/SelectDays';
import { convertDate } from '../functions/convertDate';
import { coinObject } from '../functions/coinObject';
import { getCoinData } from '../functions/getCoinData';
import { getCoinPrices } from '../functions/getCoinPrices';
import { settingChartData } from '../functions/settingChartData';
import TogglePriceType from '../components/Coin/PriceType';

const CoinPage = () => {

  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [coinData, setCoinData] = useState();
  const [days, setDays] = useState(30);
  const [chartData, setChartData] = useState({});
  const [priceType, setPriceType] = useState('prices');


  useEffect(() => {
    if(id) {
      getData();
    };
  }, [id]); 
  
  async function getData() {
    const data = await getCoinData(id);
    if(data) {
      coinObject(setCoinData, data);
      const prices = await getCoinPrices(id, days, priceType);
      if(prices.length > 0) {
        settingChartData(setChartData, prices);
        setIsLoading(false);
      }
    }
  };

  const handleDaysChange = async (e) => {
    setIsLoading(true);
    // setDays(e.target.value);
    const prices = await getCoinPrices(id, e.target.value, priceType);
    if (prices.length > 0) {
      settingChartData(setChartData, prices);
      setIsLoading(false);
    }
    setDays(e.target.value);
  }

  const handlePriceTypeChange = async (e, newType) => {
    setIsLoading(true);
    setPriceType(newType);

    const prices = await getCoinPrices(id, days, newType);
    if (prices.length > 0) {
      // console.log(prices);
      settingChartData(setChartData, prices);
      setIsLoading(false);
    }
  };

  return (
    <div>
      <Header />
      {isLoading ? (
        <Loader />
      ) : (    
        <>  
          <div className='grey-wrapper' style={{ padding: "0rem 1rem" }}>
            <List coin={coinData}/>
          </div>
          <div className='grey-wrapper'>
            <SelectDays days={days} handleDaysChange={handleDaysChange}/>
            <TogglePriceType 
              priceType={priceType}
              handlePriceTypeChange={handlePriceTypeChange}
            />
            <LineChart chartData={chartData} priceType={priceType}/>
          </div>
          <CoinInfo heading={coinData.name} desc={coinData.desc}/>
      </>
      )}
    </div>
  );
};

export default CoinPage;