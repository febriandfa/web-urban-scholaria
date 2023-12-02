import React from "react";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Tooltip, Legend } from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

const VerticalBarChartDashboardAdministrator = ({ label, dataset }) => {
  const data = {
    labels: label,
    datasets: [
      {
        label: "Total Perizinan",
        data: dataset,
        backgroundColor: ["rgba(25, 29, 136, 1)"],
        barThickness: 20,
        borderRadius: 20,
        borderSkipped: "never",
      },
    ],
  };

  const option = {
    plugins: {
      legend: {
        display: false,
      },
    },
    maintainAspectRatio: false,
  };

  return (
    <div className="h-64">
      <Bar data={data} options={option} />
    </div>
  );
};

export default VerticalBarChartDashboardAdministrator;
