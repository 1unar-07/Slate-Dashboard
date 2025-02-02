// src/components/StudentPerformanceChart.js
import React, { useEffect } from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js";

// Register required components of Chart.js
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const StudentPerformanceChart = () => {
  // Sample data for the chart
  const data = {
    labels: ["Math", "Science", "History", "English", "Art"], // Subjects
    datasets: [
      {
        label: "Student's Performance",
        data: [85, 92, 78, 88, 91], // Scores
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: "Student Performance",
      },
    },
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div style={{ width: "80%", height: "400px", margin: "0 auto" }}>
      <Bar data={data} options={options} />
    </div>
  );
};

export default StudentPerformanceChart;
