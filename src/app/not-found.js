"use client";
import React from "react";
import { Button, Typography } from "@mui/material";
import Link from "next/link";
import Layout from "./components/Dashboard";

export default function NotFound() {
  return (
    <Layout>
      <h2>Page Not Found</h2>
      <Button variant="outlined" sx={{mt: 4}}>
        <Link href="/">Return Home</Link>
      </Button>
    </Layout>
  );
}
