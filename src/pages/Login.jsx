import React, { useState } from "react";
import {
  Box,
  Button,
  Container,
  CssBaseline,
  TextField,
  Typography,
  Alert,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

const validateCredentials = ({ username, password }) => {
  if (username === "root" && password === "password") {
    return true;
  }
  return false;
};

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateCredentials({ username, password })) {
      alert("Login successful!");
      navigate("/dashboard");
    } else {
      alert("Something went wrong!!");
    }
  };

  //   console.log(username, password);

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <Box
          component="form"
          onSubmit={(e) => {
            handleSubmit(e);
          }}
          noValidate
          sx={{ mt: 1 }}
        >
          <TextField
            margin="normal"
            required
            fullWidth
            id="username"
            label="Username"
            name="username"
            placeholder={`Type "root" as username`}
            autoComplete="username"
            autoFocus
            onChange={(e) => setUsername(e.target.value)}
            InputLabelProps={{
              sx: {
                "&.Mui-focused": {
                  color: "#f43f5e",
                },
              },
            }}
            InputProps={{
              sx: {
                "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                  borderColor: "#f43f5e",
                },
              },
            }}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            placeholder={`Type "password" as password`}
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            onChange={(e) => setPassword(e.target.value)}
            InputLabelProps={{
              sx: {
                "&.Mui-focused": {
                  color: "#f43f5e",
                },
              },
            }}
            InputProps={{
              sx: {
                "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                  borderColor: "#f43f5e",
                },
              },
            }}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            sx={{
              mt: 3,
              mb: 2,
              fontFamily: "typography.fontFamily",
              background: "#f43f5e",
              "&:hover": {
                background: "#e11d48",
              },
            }}
            onClick={(e) => {
              handleSubmit(e);
            }}
          >
            Sign In
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default Login;
