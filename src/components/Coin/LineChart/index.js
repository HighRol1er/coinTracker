import React from 'react'
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS } from "chart.js/auto"; //Dont remove this

function LineChart({ chartData, PriceType, multiAxis }) {
  const options = {
    plugins : {
      legend : {
        display : multiAxis ? true : false,
      },
    },
    responsive : true,
    interaction : { // can remove this < css
      mode: "index",
      intersect: false,
    }
  }
  
  return (
    <Line data={chartData} options={options} />
  )
}

export default LineChart;