// CalorieNeedsChart.js
import React from 'react';
import { Line } from 'react-chartjs-2';
import 'chart.js/auto';

function CalorieNeedsChart({ caloricNeeds }) {
  // Define baseline range for comparison
  const baselineMin = 1800;
  const baselineMax = 2000;

  // Set up data for the line chart
  const chartData = {
    labels: ['Baseline Min', 'Current', 'Baseline Max'],
    datasets: [
      {
        label: 'Caloric Needs (Kcal)',
        data: [baselineMin, caloricNeeds, baselineMax],
        borderColor: '#4d7c0f',
        backgroundColor: '#4d7c0f',
        fill: false,
        pointBackgroundColor: '#4d7c0f',
      },
      // {
      //   label: 'Baseline Range',
      //   data: [baselineMin, (baselineMin + baselineMax) / 2, baselineMax],
      //   borderColor: '#1a2e05',
      //   backgroundColor: '#1a2e05',
      //   borderDash: [5, 5],
      //   pointBackgroundColor: '#1a2e05',
      // },
    ],
  };

  // Chart options
  const chartOptions = {
    scales: {
      y: {
        title: {
          display: true,
          text: 'Calories (kcal)',
        },
        min: 1500,
        max: 2500,
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

export default CalorieNeedsChart;
