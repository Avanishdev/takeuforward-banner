import React, { useEffect } from "react";
import { Typography, Button } from "@mui/material";
import CountdownTimer from "./CountdownTimer.jsx";
import styled from "styled-components";

const Slide = styled.div`
  width: 100vw;
  height: 100vh;
  padding: 2;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #e11d48;
`;

const Banner = ({ title, description, timer, link, onTimerComplete }) => {
  useEffect(() => {
    const timerID = setTimeout(() => {
      onTimerComplete();
    }, timer * 1000); //in seconds
    return () => clearTimeout(timerID);
  }, [timer, onTimerComplete]);
  return (
    <Slide>
      <Typography
        variant="h2"
        gutterBottom
        sx={{
          "@media (max-width: 812px)": {
            fontSize: "30px",
          },
        }}
      >
        {title}
      </Typography>
      <Typography
        variant="h4"
        gutterBottom
        sx={{
          "@media (max-width: 812px)": {
            fontSize: "30px",
          },
        }}
      >
        {description}
      </Typography>
      <CountdownTimer seconds={timer} />
      {link && (
        <Button
          variant="contained"
          href={link}
          target="_blank"
          sx={{
            fontFamily: "typography.fontFamily",
            marginTop: 2,
            background: "#f48799",
            "&:hover": {
              background: "#ea476a",
            },
          }}
        >
          Learn More
        </Button>
      )}
    </Slide>
  );
};

export default Banner;
