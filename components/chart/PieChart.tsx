'use client'

import React from 'react'
import Chart from 'react-apexcharts'

const PieChart = () => {
    const options = {
        labels: ['Kategori A', 'Kategori B', 'Kategori C'],
    }
    const series = [44, 55, 13] // Her kategori için değerler

    return (
        <div className="p-4 shadow-md rounded-md bg-white">
            <h2 className="text-xl font-semibold mb-4">Pasta Grafiği</h2>
            <Chart options={options} series={series} type="pie" width="100%" />
        </div>
    )
}

export default PieChart
