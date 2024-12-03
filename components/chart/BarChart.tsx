'use client'

import React from 'react'
import Chart from 'react-apexcharts'

const BarChart = () => {
  const options = {
    chart: {
      id: 'bar-chart',
    },
    xaxis: {
      categories: ['Ocak', 'Şubat', 'Mart', 'Nisan'],
    },
  }
  const series = [
    {
      name: 'Satışlar',
      data: [30, 40, 45, 50],
    },
  ]

  return (
    <div className="p-4 shadow-md rounded-md bg-white">
      <h2 className="text-xl font-semibold mb-4">Sütun Grafiği</h2>
      <Chart options={options} series={series} type="bar" width="100%" />
    </div>
  )
}

export default BarChart
