import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const DoughnutChartDashboardAdministrator = ({ label, dataset }) => {
  const data = {
    labels: label,
    datasets: [
      {
        label: "Total Perizinan",
        data: dataset,
        backgroundColor: ["rgba(111, 116, 218, 1)", "rgba(254, 196, 53, 1)", "rgba(126, 218, 117, 1)", "rgba(238, 135, 118, 1)"],
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        position: "right",
        align: "center",
        labels: {
          usePointStyle: true,
        },
      },
    },
    maintainAspectRatio: false,
  };

  return (
    <div>
      <Doughnut data={data} options={options} />
    </div>
  );
};

export default DoughnutChartDashboardAdministrator;
