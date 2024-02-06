import React from 'react';
import 'chart.js/auto';
import { Bar } from 'react-chartjs-2';

/** Bar chart appears on User Report page. Rendered by Report page. */
const BarChart = () => {
  const data = {
    labels: ['Red', 'Blue', 'Yellow'],
    datasets: [
      {
        data: [10, 20, 30],
        backgroundColor: ['red', 'blue', 'yellow'],
      },
    ],
  };

  return (
    <Bar data={data} />
  );
};

export default BarChart;
