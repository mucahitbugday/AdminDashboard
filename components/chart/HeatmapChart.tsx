import { ApexOptions } from 'apexcharts';
import React from 'react';
import ReactApexChart from 'react-apexcharts';

interface HeatmapChartProps {
  type: string;
}

const HeatmapChart: React.FC<HeatmapChartProps> = ({ type }) => {

  // Generate all dates for the year 2021 and categorize them by days of the week
  const generateYearData = (year: number) => {
    const weeks: { [key: string]: any[] } = {
      Monday: [],
      Tuesday: [],
      Wednesday: [],
      Thursday: [],
      Friday: [],
      Saturday: [],
      Sunday: [],
    };

    const date = new Date(year, 0, 1); // Start from January 1st of the given year
    while (date.getFullYear() === year) {
      const dayName = date.toLocaleString('en-US', { weekday: 'long' });
      weeks[dayName].push({
        x: date.toISOString().split('T')[0], // 'yyyy-mm-dd' format
        y: Math.floor(Math.random() * 100), // Random value for heatmap intensity
      });
      date.setDate(date.getDate() + 1);
    }

    return weeks;
  };

  const yearData = generateYearData(2021); // You can change the year dynamically

  // Prepare the seriesData from the generated yearData
  const seriesData = [
    {
      name: 'Metric 1',
      data: yearData.Monday, // Use Monday data as series for Metric 1
    },
    {
      name: 'Metric 2',
      data: yearData.Tuesday, // Use Tuesday data as series for Metric 2
    },
    {
      name: 'Metric 3',
      data: yearData.Wednesday, // Use Wednesday data as series for Metric 3
    },
    {
      name: 'Metric 4',
      data: yearData.Thursday, // Use Thursday data as series for Metric 4
    },
    {
      name: 'Metric 5',
      data: yearData.Friday, // Use Friday data as series for Metric 5
    },
    {
      name: 'Metric 6',
      data: yearData.Saturday, // Use Saturday data as series for Metric 6
    },
    {
      name: 'Metric 7',
      data: yearData.Sunday, // Use Sunday data as series for Metric 7
    },
  ];

  const colors = ['#008FFB', '#00E396', '#FEB019', '#FF4560', '#775DD0'];


  const options: ApexOptions = {
    chart: {
      height: 350,
      type: 'heatmap',
    },
    dataLabels: {
      enabled: false,
    },
    colors: colors,
    title: {
      align: 'center',
      style: {
        fontSize: '16px',
        fontWeight: 'bold',
      },
    },
    xaxis: {
      type: 'category',
      categories: [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
        'Sunday',
      ], // x-axis is the days of the week
    },
    yaxis: {
      labels: {
        show: false,
      },
    },
  };

  return (

    <div className="p-4 shadow-md rounded-md bg-white">
      <h2 className="text-xl font-semibold mb-4">HeatMap Grafiği</h2>
      <ReactApexChart options={options} series={seriesData} type="heatmap" height={350} />
    </div>


  );
};

export default HeatmapChart;
