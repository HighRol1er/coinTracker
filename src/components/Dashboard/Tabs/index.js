import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { createTheme, ThemeProvider } from '@mui/material';
import Grid from '../Grid';
import "./styles.css";

export default function TabsComponent({ coins }) {
  const [value, setValue] = useState('grid');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const theme = createTheme({
    palette: {
      primary: {
        main: "#3a80e9"
      },
    },
  });

  const tabStyle = {
    color : "var(--white)",
    width : "50vw",
    fontSize : "1rem",
    fontWeight : 600,
    fontFamily : "Inter",
    textTransform :"captialize",
  };
  return (
    <ThemeProvider theme={theme}>
      <TabContext value={value}>
          <TabList onChange={handleChange} variant="fullWidth">
            <Tab label="Grid" value="grid" sx={tabStyle}/> 
            <Tab label="List" value="list" sx={tabStyle}/>
          </TabList>
        <TabPanel value="grid">
          <div className='grid-flex'>
            {coins.map((coin, i) => {
              return <Grid coin={coin} key={i}/>
            })}
          </div>
        </TabPanel>
        <TabPanel value="list">mapping for list</TabPanel>
      </TabContext>
    </ThemeProvider>
  );
}
// Grid 대신 "Top 10 coinList" 이런식으로 바꿀 것