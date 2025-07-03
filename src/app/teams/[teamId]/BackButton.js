"use client";

import { useRouter } from "next/navigation";
import { Button, Typography } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLeftLong } from "@fortawesome/free-solid-svg-icons";

export default function BackButton() {
  const router = useRouter();

  return (
    <Button
      size="small"
      variant="contained"
      onClick={() => router.back()}
      sx={{ ml: 2 }}
    >
      <FontAwesomeIcon icon={faLeftLong} />
      <Typography sx={{ ml: 1 }} variant="caption">
        previous page
      </Typography>
    </Button>
  );
}
