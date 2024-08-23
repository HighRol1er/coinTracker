import React, { useEffect, useState } from 'react'
import Header from '../components/Common/Header'
import TabsComponent from '../components/Dashboard/Tabs'

const DashboardPage = () => {

  const [coins, setCoins] = useState([]);

  useEffect(() => {
    
  },[])
  return (
    <div>
      <Header/>
      <TabsComponent/>
    </div>
  )
}

export default DashboardPage