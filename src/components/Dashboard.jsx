import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Box,
  TextField,
  Button,
  Switch,
  FormControlLabel,
  Typography,
  Divider,
  Grid,
  Alert,
} from "@mui/material";

const Dashboard = () => {
  const [bannerData, setBannerData] = useState([{}]);

  const fetchData = async () => {
    const { data } = await axios.get(
      `${process.env.REACT_APP_BASE_URL}/banner`
    );
    setBannerData(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleUpdate = async (e) => {
    try {
      if (!bannerData) {
        const response = await axios.put(
          `${process.env.REACT_APP_BASE_URL}/banner/update/${bannerID}`,
          bannerData
        );
      } else {
        const response = await axios.post(
          `${process.env.REACT_APP_BASE_URL}/banner/create`,
          bannerData
        );
      }
      fetchData();
      alert("Banner created/updated successfully.");
    } catch (error) {
      console.error("Failed to update/create banner:", error);
    }
  };

  // console.log(bannerData, "bannerData");

  const [bannerID, setBannerID] = useState(null);
  const handleBannerClick = (id) => {
    setBannerID(id);
  };
  return (
    <Box sx={{ padding: 2 }}>
      <Typography variant="h5" gutterBottom>
        Admin Dashboard
      </Typography>
      <TextField
        label="Banner Title"
        fullWidth
        margin="normal"
        value={bannerData?.title}
        onChange={(e) =>
          setBannerData({ ...bannerData, title: e.target.value })
        }
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
        label="Banner Description"
        fullWidth
        margin="normal"
        value={bannerData?.description}
        onChange={(e) =>
          setBannerData({ ...bannerData, description: e.target.value })
        }
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
        label="Timer (seconds)"
        type="number"
        fullWidth
        margin="normal"
        value={bannerData?.timer}
        onChange={(e) =>
          setBannerData({ ...bannerData, timer: e.target.value })
        }
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
        label="Link"
        fullWidth
        margin="normal"
        value={bannerData?.link}
        onChange={(e) => setBannerData({ ...bannerData, link: e.target.value })}
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
      <FormControlLabel
        control={
          <Switch
            checked={bannerData?.isVisible}
            onChange={(e) =>
              setBannerData({ ...bannerData, isVisible: e.target.checked })
            }
            sx={{
              "& .MuiSwitch-switchBase.Mui-checked": {
                color: "#f43f5e",
              },
              "& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track": {
                backgroundColor: "#f43f5e",
              },
              "& .MuiSwitch-switchBase.Mui-checked:hover": {
                backgroundColor: "rgba(244, 63, 94, 0.08)",
              },
            }}
          />
        }
        label="Banner Visible"
      />
      <Button
        variant="contained"
        sx={{
          fontFamily: "typography.fontFamily",
          background: "#f43f5e",
          "&:hover": {
            background: "#e11d48",
          },
        }}
        onClick={(e) => {
          handleUpdate(e);
        }}
      >
        Update Banner
      </Button>
      <Divider sx={{ marginTop: 2 }} />
      <Grid container direction="column" gap={2} marginTop={3}>
        <Typography color="secondary.main">Banner ID's</Typography>
        {bannerData.length &&
          bannerData?.map((banner) => {
            return (
              <Grid item xs={12} sm={7} md={7} key={banner?._id}>
                <Button
                  variant="contained"
                  sx={{
                    fontFamily: "typography.fontFamily",
                    background: "#f43f5e",
                    "&:hover": {
                      background: "#e11d48",
                    },
                  }}
                  onClick={(e) => {
                    handleBannerClick(banner?._id);
                  }}
                >
                  {banner?._id}
                </Button>
              </Grid>
            );
          })}
      </Grid>
    </Box>
  );
};

export default Dashboard;
