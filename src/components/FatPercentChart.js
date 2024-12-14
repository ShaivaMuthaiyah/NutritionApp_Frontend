// CalorieNeedsChart.js
import React from 'react';
import { Line } from 'react-chartjs-2';
import 'chart.js/auto';

function FatPercentageChart({ FatPercentageRange, FatPercentage }) {
  // Define baseline range for comparison
  const baselineMin = FatPercentageRange[0];
  const baselineMax = FatPercentageRange[1];

  // Set up data for the line chart
  const chartData = {
    labels: ['Baseline Min', 'Current', 'Baseline Max'],
    datasets: [
      {
        label: 'Current Fat Percentage',
        data: [baselineMin, FatPercentage, baselineMax],
        borderColor: '#a3e635',
        backgroundColor: '#a3e635',
        pointBackgroundColor: '#a3e635',
      }
    ],
  };

  // Chart options
  const chartOptions = {
    scales: {
      y: {
        title: {
          display: true,
          text: 'Fat Percentage',
        },
        min: 5,
        max: 50,
      },
    },
    plugins: {
      legend: {
        position: 'top',
      },
    },
  };

  return (
    <div>
      <Line data={chartData} options={chartOptions} />
    </div>
  );
}

export default FatPercentageChart;
