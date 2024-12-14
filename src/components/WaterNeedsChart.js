import React from 'react';
import { Bar } from 'react-chartjs-2';

const WaterNeedsChart = ({ waterIntake }) => {
  const data = {
    labels: ['Water Intake'],
    datasets: [
      {
        label: 'Water Intake (L)',
        data: [waterIntake],
        backgroundColor: '#a3e635', // Blue color for water
        borderColor: '#a3e635',
        borderWidth: 1,
        barThickness: 30,
      },
    ],
  };

  const options = {
    plugins: {
      tooltip: { enabled: false }, // Disable tooltip for a cleaner look
      legend: { display: false },   // Hide legend
    },
    scales: {
      y: {
        max: 3, // Set a maximum scale for visual representation (adjust if needed)
        ticks: {
          beginAtZero: true,
          stepSize: 1,
        },
      },
    },
  };

  return (
    <div style={{ width: '150px', textAlign: 'center' }}>
      <Bar data={data} options={options} />
      <p style={{ marginTop: '10px', fontSize: '1rem', color: '#65a30d' }}>
        {waterIntake}L
      </p>
      {/* <p style={{ fontSize: '0.9rem' }}>Recommended Water Intake</p> */}
    </div>
  );
};

export default WaterNeedsChart;
