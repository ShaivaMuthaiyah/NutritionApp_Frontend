// CalorieNeedsChart.js
import React from 'react';
import { Line } from 'react-chartjs-2';
import 'chart.js/auto';

function WeightChart({ idealWeight, currentWeight }) {
  // Define baseline range for comparison
  const baselineMin = idealWeight;
  const baselineMax = idealWeight + 5

  // Set up data for the line chart
  const chartData = {
    labels: ['Baseline Min', 'Current', 'Baseline Max'],
    datasets: [
      {
        label: 'Current Weight',
        data: [baselineMin, currentWeight, baselineMax],
        borderColor: '#3f6212',
        backgroundColor: '#3f6212',
        fill: false,
        pointBackgroundColor: '#3f6212',
      },
      {
        label: 'Ideal Range',
        data: [baselineMin, (baselineMin + baselineMax) / 2, baselineMax],
        borderColor: '#a3e635',
        backgroundColor: '#a3e635',
        borderDash: [5, 5],
        fill: false,
        pointBackgroundColor: '#a3e635',
      },
    ],
  };

  // Chart options
  const chartOptions = {
    scales: {
      y: {
        title: {
          display: true,
          text: 'Weight (kg)',
        },
        min: 50,
        max: 150,
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

export default WeightChart;
