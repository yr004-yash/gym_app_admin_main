import React, { Component } from "react";
import { Line } from "react-chartjs-2";

class WeeklySales1 extends Component {
  render() {
    const data = {
      labels: ["January", "February", "March", "April", "May", "June"],
      datasets: [
        {
          label: "Sales Stats",
          backgroundColor: "rgba(85, 20, 164, .5)",
          borderColor: "#5514a4",
          pointBackgroundColor: "#5514a4",
          pointBorderColor: "#5514a4",
          pointHoverBackgroundColor: "#5514a4",
          pointHoverBorderColor: "#5514a4",
          data: [0, 18, 14, 24, 16, 30],
        },
      ],
    };

    const options = {
      title: {
        display: !1,
      },
      tooltips: {
        intersect: !1,
        mode: "nearest",
        xPadding: 5,
        yPadding: 5,
        caretPadding: 5,
      },
      legend: {
        display: !1,
      },
      responsive: !0,
      maintainAspectRatio: !1,
      hover: {
        mode: "index",
      },
      scales: {
        xAxes: [
          {
            display: !1,
            gridLines: !1,
            scaleLabel: {
              display: !0,
              labelString: "Month",
            },
            ticks: {
              max: 30,
              min: 0,
            },
          },
        ],
        yAxes: [
          {
            display: !1,
            gridLines: !1,
            scaleLabel: {
              display: !0,
              labelString: "Value",
            },
            ticks: {
              beginAtZero: !0,
            },
          },
        ],
      },
      elements: {
        line: {
          tension: 0.15,
        },
        point: {
          radius: 2,
          borderWidth: 1,
        },
      },
      layout: {
        padding: {
          left: 0,
          right: 0,
          top: 0,
          bottom: 0,
        },
      },
    };

    return (
      <div style={{ height: 300 }}>
        <Line data={data} options={options} height={300} />
      </div>
    );
  }
}

export default WeeklySales1;
