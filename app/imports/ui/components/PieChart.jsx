import React from 'react';
import 'chart.js/auto';
import { Pie } from 'react-chartjs-2';

/** Pie chart appears on User Report page. Rendered by Report page. */
const PieChart = () => {
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
    <Pie data={data} />
  );
};

export default PieChart;
