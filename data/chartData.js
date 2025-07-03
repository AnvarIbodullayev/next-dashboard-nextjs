const chartData = {
  labels: [
    "Oct 2021",
    "Nov 2021",
    "Dec 2021",
    "Jan 2022",
    "Feb 2022",
    "Mar 2022",
  ],
  datasets: [
    {
      label: "Achieved",
      data: [6, 7, 6, 5, 6, 8],
      borderColor: "#F5866A",
      backgroundColor: "#F5866A",
      tension: 0.4,
    },
    {
      label: "Target",
      data: [4, 3, 6, 5, 3, 7],
      borderColor: "#6956E5",
      backgroundColor: "#6956E5",
      tension: 0.4,
    },
  ],
};

export default chartData;
