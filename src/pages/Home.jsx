import React from "react";
import { Button, Container } from "@mui/material";
import Navbar from "../components/Navbar";
import Slider from "../components/Slider";

const Home = () => {
  return (
    <>
      <Navbar />
      <Container
        maxWidth="xl"
        sx={{
          textAlign: "center",
        }}
      >
        <Slider />
        <Button
          variant="contained"
          href={"/login"}
          sx={{
            fontFamily: "typography.fontFamily",
            marginTop: 2,
            background: "#f43f5e",
            "&:hover": {
              background: "#e11d48",
            },
          }}
        >
          {`Go To Dashboard ->`}
        </Button>
      </Container>
    </>
  );
};

export default Home;
