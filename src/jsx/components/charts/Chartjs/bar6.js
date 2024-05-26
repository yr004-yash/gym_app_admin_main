import React, { Component } from "react";
import { Bar } from "react-chartjs-2";

class BarChart6 extends Component {
  render() {
    const data = {
      defaultFontFamily: "Poppins",
      labels: ["Mon", "Tue", "Wed", "Thur", "Fri", "Sat", "Sun"],
      datasets: [
        {
          label: "Dark Blue",
          backgroundColor: "rgba(11,42,151, 1)",
          hoverBackgroundColor: "rgba(118,0,159, 1)",
          data: ["12", "12", "12", "12", "12", "12", "12"],
          barPercentage: 0.5,
        },
        {
          label: "Gray",
          backgroundColor: "rgba(109,158,184, 1)",
          hoverBackgroundColor: "rgba(109,158,184, 1)",
          data: ["12", "12", "12", "12", "12", "12", "12"],
          barPercentage: 0.5,
        },
        {
          label: "Red",
          backgroundColor: "rgba(250,56,64, 1)",
          hoverBackgroundColor: "rgba(250,56,64, 1)",
          data: ["12", "12", "12", "12", "12", "12", "12"],
          barPercentage: 0.5,
        },
      ],
    };
    const options = {
      plugins:{
        legend: {
          display: false,
        },
        title: {
          display: false,
        },
        tooltips: {
        mode: "index",
          intersect: false,
        },
		    responsive: true,
	  },
      scales: {
        x:
          {
            stacked: true,
          },
        y:
          {
            stacked: true,
          },
      },
    };

    return (
      <>
        <Bar data={data} height={150} options={options} />
      </>
    );
  }
}

export default BarChart6;
