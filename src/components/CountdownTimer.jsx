import React, { useState, useEffect } from "react";
import { Typography } from "@mui/material";

const CountdownTimer = ({ seconds }) => {
  const [timeLeft, setTimeLeft] = useState(seconds);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);

    return () => clearInterval(timer);
  }, [seconds]);

  return <Typography variant="h6">{timeLeft} seconds remaining</Typography>;
};

export default CountdownTimer;
