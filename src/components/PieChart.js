// NutritionChart.js
import React from 'react';
import { Pie } from 'react-chartjs-2';
import 'chart.js/auto';

function PieChart({ protein, fat, carbs }) {
  // Check if all necessary data is available, or render a message
  if (!protein && !fat && !carbs) {
    return <p>No nutritional data available</p>;
  }

  const chartData = {
    labels: ['Protein', 'Fat', 'Carbohydrates'],
    datasets: [
      {
        label: 'Nutritional Breakdown',
        data: [protein, fat, carbs],
        backgroundColor: ['#a3e635', '#65a30d', '#365314'],
        hoverBackgroundColor: ['#a3e635', '#65a30d', '#365314'],
      },
    ],
  };

  return (
    <div className="flex flex-1 items-center justify-center px-8 max-lg:pb-12 max-lg:pt-10 sm:px-10 lg:pb-2">
          <Pie data={chartData} />
    </div>
  );
}

export default PieChart;
