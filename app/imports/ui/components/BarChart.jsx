import React from 'react';
import PropTypes from 'prop-types';
import 'chart.js/auto';
import { Bar } from 'react-chartjs-2';

/** Bar chart appears on User Report page. Rendered by Report page. */
const BarChart = ({ labels, data, label, xAxisTitle, yAxisTitle }) => {
  const chartData = {
    labels: labels,
    datasets: [
      {
        label: label,
        backgroundColor: 'rgba(54, 162, 235, 0.6)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1,
        hoverBackgroundColor: 'rgba(54, 162, 235, 0.8)',
        hoverBorderColor: 'rgba(54, 162, 235, 1)',
        data: data,
      },
    ],
  };
  const options = {
    scales: {
      x: {
        title: {
          display: true,
          text: xAxisTitle,
        },
      },
      y: {
        title: {
          display: true,
          text: yAxisTitle,
        },
      },
    },
  };
  return (
    <Bar data={chartData} options={options} />
  );
};

BarChart.propTypes = {
  labels: PropTypes.arrayOf(PropTypes.string).isRequired,
  data: PropTypes.arrayOf(PropTypes.number).isRequired,
  label: PropTypes.string.isRequired,
  xAxisTitle: PropTypes.string.isRequired,
  yAxisTitle: PropTypes.string.isRequired,
};

export default BarChart;
