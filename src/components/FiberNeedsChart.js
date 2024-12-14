import React from 'react';
import { Bar } from 'react-chartjs-2';

const FiberNeedsChart = ({ fiberIntake }) => {
  const data = {
    labels: ['Fiber Intake'],
    datasets: [
      {
        label: 'Recommended Fiber Intake',
        data: [fiberIntake],
        backgroundColor: '#3f6212', // Green color for fiber
        borderColor: '#3f6212',
        borderWidth: 1,
        barThickness: 20,
      },
    ],
  };

  const options = {
    indexAxis: 'y', // Makes the bar horizontal
    plugins: {
      tooltip: { enabled: false },
      legend: { display: false },
    },
    scales: {
      x: {
        max: 40, // Set max scale for visual representation (adjust if needed)
        ticks: {
          beginAtZero: true,
          stepSize: 5,
        },
      },
    },
  };

  return (
    <div style={{ width: '200px', textAlign: 'center' }}>
      <Bar data={data} options={options} />
      <p style={{ marginTop: '5px', fontSize: '1.2rem', color: '#8BC34A' }}>
        {fiberIntake}g
      </p>
      {/* <p style={{ fontSize: '0.9rem' }}>Recommended Fiber Intake</p> */}
    </div>
  );
};

export default FiberNeedsChart;
