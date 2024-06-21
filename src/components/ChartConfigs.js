import { Line, Pie } from 'react-chartjs-2';
const dashboard24HoursPerformanceChart = () => {
  const labels = ["January", "February", "March", "April", "May", "June", "July"]
  const sales1 = [300, 310, 316, 322, 330, 326, 333, 345, 338, 354]
  const sales2 = [320, 340, 365, 360, 370, 385, 390, 384, 408, 420]
  const data = {
    labels,
    // // : [
    //   "Jan",
    //   "Feb",
    //   "Mar",
    //   "Apr",
    //   "May",
    //   "Jun",
    //   "Jul",
    //   "Aug",
    //   "Sep",
    //   "Oct",
    // ],
    datasets: [
      {
        borderColor: "#6bd098",
        backgroundColor: "#6bd098",
        pointRadius: 0,
        pointHoverRadius: 0,
        borderWidth: 3,
        tension: 0.4,
        fill: true,
        data: sales1,
      },
      {
        borderColor: "#f17e5d",
        backgroundColor: "#f17e5d",
        pointRadius: 0,
        pointHoverRadius: 0,
        borderWidth: 3,
        tension: 0.4,
        fill: true,
        data: sales2,
      },
      {
        borderColor: "#fcc468",
        backgroundColor: "#fcc468",
        pointRadius: 0,
        pointHoverRadius: 0,
        borderWidth: 3,
        tension: 0.4,
        fill: true,
        data: [370, 394, 415, 409, 425, 445, 460, 450, 478, 484],
      },
    ],
  }

  const options = {
    responsice:true,
    plugins: {
      legend: {position:"top"}
    },
    // scales: {
    //   y: {
    //     ticks: {
    //       color: "#9f9f9f",
    //       beginAtZero: false,
    //       maxTicksLimit: 5,
    //     },
    //     grid: {
    //       drawBorder: false,
    //       display: false,
    //     },
    //   },
    //   x: {
    //     barPercentage: 1.6,
    //     grid: {
    //       drawBorder: false,
    //       display: false,
    //     },
    //     ticks: {
    //       padding: 20,
    //       color: "#9f9f9f",
    //     },
    //   },
    //},
  }


  // const dashboardEmailStatisticsChart = {
  //   data: (canvas) => {
  //     return {
  //       labels: [1, 2, 3],
  //       datasets: [
  //         {
  //           label: "Emails",
  //           pointRadius: 0,
  //           pointHoverRadius: 0,
  //           backgroundColor: ["#e3e3e3", "#4acccd", "#fcc468", "#ef8157"],
  //           borderWidth: 0,
  //           data: [342, 480, 530, 120],
  //         },
  //       ],
  //     };
  //   },
  //   options: {
  //     plugins: {
  //       legend: { display: false },
  //       tooltip: { enabled: false },
  //     },
  //     maintainAspectRatio: false,
  //     pieceLabel: {
  //       render: "percentage",
  //       fontColor: ["white"],
  //       precision: 2,
  //     },
  //     scales: {
  //       y: {
  //         ticks: {
  //           display: false,
  //         },
  //         grid: {
  //           drawBorder: false,
  //           display: false,
  //         },
  //       },
  //       x: {
  //         barPercentage: 1.6,
  //         grid: {
  //           drawBorder: false,
  //           display: false,
  //         },
  //         ticks: {
  //           display: false,
  //         },
  //       },
  //     },
  //   },
  // };

  // const dashboardNASDAQChart = {
  //   data: (canvas) => {
  //     return {
  //       labels: [
  //         "Jan",
  //         "Feb",
  //         "Mar",
  //         "Apr",
  //         "May",
  //         "Jun",
  //         "Jul",
  //         "Aug",
  //         "Sep",
  //         "Oct",
  //         "Nov",
  //         "Dec",
  //       ],
  //       datasets: [
  //         {
  //           data: [0, 19, 15, 20, 30, 40, 40, 50, 25, 30, 50, 70],
  //           fill: false,
  //           borderColor: "#fbc658",
  //           backgroundColor: "transparent",
  //           pointBorderColor: "#fbc658",
  //           pointRadius: 4,
  //           pointHoverRadius: 4,
  //           pointBorderWidth: 8,
  //           tension: 0.4,
  //         },
  //         {
  //           data: [0, 5, 10, 12, 20, 27, 30, 34, 42, 45, 55, 63],
  //           fill: false,
  //           borderColor: "#51CACF",
  //           backgroundColor: "transparent",
  //           pointBorderColor: "#51CACF",
  //           pointRadius: 4,
  //           pointHoverRadius: 4,
  //           pointBorderWidth: 8,
  //           tension: 0.4,
  //         },
  //       ],
  //     };
  //   },
  //   options: {
  //     plugins: {
  //       legend: { display: false },
  //     },
  //   },
  // };
  
  return <Line options={options} data={data} />
}
  export default dashboard24HoursPerformanceChart