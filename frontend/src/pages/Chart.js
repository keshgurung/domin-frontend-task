import React from 'react'
import { Line } from 'react-chartjs-2'
import { Chart as Chartjs } from 'chart.js/auto'

const data = {
  labels: ['1 day', '1 week', '1 mo', '3 mo'],
  datasets: [
    {
      label: 'Spool position',
      data: [12, 19, 0, 5, 2, 3],
      borderWidth: 1,
    },
    {
      label: 'Temperature',
      data: [4, 0, 15, 6, 11, 4],
      borderWidth: 1,
    },
    {
      label: 'Pressure',
      data: [9, 13, 4, 0, 5, 13],
      borderWidth: 1,
    },
  ],
}
const options = {
  scales: {
    y: {
      beginAtZero: true,
    },
  },
}

const Chart = () => {
  return (
    <div>
      Chart
      <Line data={data} options={options} />
    </div>
  )
}

export default Chart
