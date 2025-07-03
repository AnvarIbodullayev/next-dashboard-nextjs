"use client";
import { Grid } from "@mui/system";
import Layout from "./components/Dashboard";
import Strength from "./components/TeamsStrength";
import styles from "./page.module.css";
import Employees from "./components/Employees";
import { LinearChart } from "./components/LinearChart";
import TrsprtCard from "./components/TransparentCard";
import NtfcnCard from "./components/NotificationCard";

export default function Home() {
  return (
    <Layout>
      <Grid container>
        <Grid item size={{ xs: 12, sm: 12, md: 8, lg: 8 }}>
          <Grid container spacing={2}>
            <Grid item size={{ xs: 12, sm: 12, md: 12, lg: 6 }}>
              <Strength />
            </Grid>
            <Grid item size={{ xs: 12, sm: 12, md: 12, lg: 6 }}>
              <Employees />
            </Grid>
            <Grid item size={{ xs: 12, sm: 12, md: 12 }}>
              <LinearChart />
            </Grid>
          </Grid>
        </Grid>
        <Grid item size={{ xs: 12, sm: 12, md: 4, lg: 4 }} sx={{px: 3}}>
          <TrsprtCard />
          <NtfcnCard />
        </Grid>
      </Grid>
    </Layout>
  );
}
