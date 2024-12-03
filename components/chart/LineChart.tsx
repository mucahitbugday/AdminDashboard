'use client'

import React from 'react'
import Chart from 'react-apexcharts'

const LineChart = () => {
  const options = {
    chart: {
      id: 'line-chart',
    },
    xaxis: {
      categories: ['Ocak', 'Şubat', 'Mart', 'Nisan'],
    },
  }
  const series = [
    {
      name: 'Gelir',
      data: [10, 30, 25, 40],
    },
  ]

  return (
    <div className="p-4 shadow-md rounded-md bg-white">
      <h2 className="text-xl font-semibold mb-4">Çizgi Grafiği</h2>
      <Chart options={options} series={series} type="line" width="100%" />
    </div>
  )
}

export default LineChart
