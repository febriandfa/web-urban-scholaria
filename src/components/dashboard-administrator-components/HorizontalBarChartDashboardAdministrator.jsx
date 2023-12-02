import React from "react";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const HorizontalBarChartDashboardAdministrator = ({ label, dataset }) => {
  const data = {
    labels: label,
    datasets: [
      {
        label: "Total Perizinan",
        data: dataset,
        backgroundColor: ["rgba(245, 158, 11, 1)"],
        barThickness: 20,
        borderRadius: 20,
        borderSkipped: "never",
      },
    ],
  };

  const option = {
    indexAxis: "y",
    plugins: {
      legend: {
        display: false,
      },
    },
    maintainAspectRatio: false,
  };

  return (
    <div className="h-[110rem]">
      <Bar data={data} options={option} />
    </div>
  );
};

export default HorizontalBarChartDashboardAdministrator;
