import React from 'react';
import { Pie, Bar } from 'react-chartjs-2';

const Charts = ({ type, data, title }) => {
  const chartData = {
    labels: data ? data.labels : [],
    datasets: [
      {
        data: data ? data.values : [],
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF'],
        hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF'],
      },
    ],
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">{title}</h2>
      {type === 'pie' && <Pie data={chartData} />}
      {type === 'bar' && <Bar data={chartData} />}
    </div>
  );
};

export default Charts;
