import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import Box from "@mui/material/Box";
import SvgIcon from "@mui/material/SvgIcon";

const Navbar = () => {
  return (
    <AppBar
      position="static"
      color="primary"
      sx={{
        background: "black",
      }}
    >
      <Toolbar>
        {/* Left side: Logo */}
        <Box sx={{ flexGrow: 1 }}>
          <SvgIcon
            sx={{
              width: 80,
              height: 80,
              "&:hover": {
                cursor: "pointer",
              },
            }}
            onClick={(e) => {
              window.location.reload();
            }}
          >
            <svg
              width="125"
              height="26"
              viewBox="0 0 135 36"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0 5.89409H15.3693L9.5331 36H21.8368L27.2126 5.89409H42.2511L43.4131 0H1.17165L0 5.89409Z"
                fill="#D41F30"
              ></path>
              <path
                d="M47.2951 0L42.512 26.9438L49.9857 36H82.8746L89.1533 0H77.1198L71.8129 30.008H56.8626L54.4711 27.0927L59.1053 0H47.2951Z"
                fill="#D41F30"
              ></path>
              <path
                d="M86.9282 36H98.7784L100.699 23.9651H130.691L131.882 17.9993H101.825L103.214 8.93625L106.724 5.82379H122.018L120.826 11.9812H132.81L134.929 0H102.156L91.6286 9.00241L86.9282 36Z"
                fill="#D41F30"
              ></path>
            </svg>
          </SvgIcon>
        </Box>

        {/* Right side: Icon and Login Button */}
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <IconButton color="inherit">
            <DarkModeIcon />
          </IconButton>
          <Button
            color="inherit"
            href="/login"
            sx={{
              background: "#f43f5e",
              "&:hover": {
                background: "#e11d48",
              },
            }}
          >
            Login
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
