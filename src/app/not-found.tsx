"use client";
import { Button, Container, Typography } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { useRouter } from "next/navigation";

const NotFound = () => {
  const router = useRouter();
  return (
    <Container
      sx={{ height: "100vh", alignContent: "center", justifyItems: "center" }}
    >
      <Typography variant="h1" color="red">
        Page not found
      </Typography>
      <Button variant="contained" onClick={() => router.push("/")}>
        Go to Home
        <ArrowForwardIcon />
      </Button>
    </Container>
  );
};

export default NotFound;
