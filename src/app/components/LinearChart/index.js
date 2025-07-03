import React, { useEffect, useState } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { Box, LinearProgress, Typography } from "@mui/material";
import axios from "axios";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
      align: "end",
      labels: {
        boxWidth: 20,
        usePointStyle: true, // make legend marker circular
        pointStyle: "circle",
      },
    },
    title: {
      display: false, // we’ll use a custom title via JSX
    },
  },
  scales: {
    x: {
      title: {
        display: true,
      },
      ticks: {
        stepSize: 2,
        maxTicksLimit: 13,
      },
    },
    y: {
      title: {
        display: true,
      },
      suggestedMin: 0,
    },
  },
};

export function LinearChart() {
  const [chartData, setChartData] = useState({
    labels: [],
    datasets: [],
  });

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchChartsData() {
      try {
        const res = await axios.get("/api/charts");
        const data = res.data;
        console.log("res: ", data.achieved);

        setChartData({
          labels: data.labels,
          datasets: [
            {
              label: data.datasets[0].label,
              data: data.datasets[0].data,
              borderColor: data.datasets[0].borderColor,
              backgroundColor: data.datasets[0].backgroundColor,
              tension: data.datasets[0].tension,
            },
            {
              label: data.datasets[1].label,
              data: data.datasets[1].data,
              borderColor: data.datasets[1].borderColor,
              backgroundColor: data.datasets[1].backgroundColor,
              tension: data.datasets[1].tension,
            },
          ],
        });
      } catch (error) {
        console.error("Error fetching charts data: ", error);
      } finally {
        setLoading(false);
      }
    }

    fetchChartsData();
  }, []);

  if (loading) return <LinearProgress color="inherit" />;

  return (
    <Box
      sx={{
        p: 2,
        borderRadius: 2,
        boxShadow: "#43398126 0px 8px 24px",
        height: "43vh",
        width: "100%",
      }}
    >
      <Typography variant="body1" sx={{ pl: 3, pt: 1, pb: 0, fontWeight: 600 }}>
        Project Deliveries
      </Typography>
      <Line options={options} data={chartData} />
    </Box>
  );
}
