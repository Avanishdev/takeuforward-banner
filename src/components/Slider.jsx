import { ArrowLeftOutlined, ArrowRightOutlined } from "@mui/icons-material";
import { useEffect, useRef, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import Banner from "./Banner";
import { Typography } from "@mui/material";
import io from "socket.io-client";

const Container = styled.div`
  width: 100%;
  height: 80vh;
  display: flex;
  position: relative;
  overflow: hidden;
`;

const Arrow = styled.div`
  width: 50px;
  height: 50px;
  background-color: #fff7f7;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: ${(props) => props.direction === "left" && "10px"};
  right: ${(props) => props.direction === "right" && "10px"};
  margin: auto;
  cursor: pointer;
  opacity: 0.5;
  z-index: 2;
`;

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  transition: all 1.5s ease;
  transform: translateX(${(props) => props.slideIndex * -100}vw);
`;

const Slider = () => {
  const [bannerData, setBannerData] = useState([]);
  const [filterBannerData, setFilterBannerData] = useState([]);
  // const socketRef = useRef(null);
  // if (!socketRef.current) {
  //   socketRef.current = io("http://localhost:8080");
  // }
  // const socket = socketRef.current;
  // console.log({ socket });
  // useEffect(() => {
  //   // Initialize the socket connection

  //   socketRef.current.on("connect", () => {
  //     console.log("Connected to server");
  //   });

  //   socketRef.current.on("connect_error", (error) => {
  //     console.error("Connection error:", error);
  //   });

  //   socketRef.current.on("message", (data) => {
  //     console.log("Message from server:", data);
  //   });

  //   socketRef.current.on("disconnect", () => {
  //     console.log("Disconnected from server");
  //   });

  //   // Cleanup on component unmount
  //   return () => {
  //     if (socketRef.current) {
  //       socketRef.current.disconnect();
  //     }
  //   };
  // }, []);

  const fetchData = async () => {
    const { data } = await axios.get(
      `${process.env.REACT_APP_BASE_URL}/banner`
    );
    setBannerData(data);
    visibleBannerData(data);
  };

  const visibleBannerData = (data) => {
    setFilterBannerData(data?.filter((banner) => banner?.isVisible));
  };

  const [slideIndex, setSlideIndex] = useState(0);
  const handleClick = (direction) => {
    if (direction === "left") {
      setSlideIndex(
        slideIndex > 0 ? slideIndex - 1 : filterBannerData.length - 1
      );
    } else {
      setSlideIndex(
        slideIndex < filterBannerData.length - 1 ? slideIndex + 1 : 0
      );
    }
  };

  useEffect(() => {
    // socket.on("bannerUpdate", (data) => {
    //   console.log("Banner update received:", data);
    //   setBannerData(data);
    //   visibleBannerData(data);
    // });
    // return () => {
    //   socket.off("bannerUpdate");
    // };
    fetchData();
  }, []);

  // console.log(bannerData, "bannerData");
  // console.log(filterBannerData, "filterBannerData");

  return (
    <Container>
      <Arrow direction="left" onClick={() => handleClick("left")}>
        <ArrowLeftOutlined />
      </Arrow>
      {filterBannerData ? (
        <Wrapper slideIndex={slideIndex}>
          {bannerData?.length > 0 &&
            filterBannerData?.map((banner) => {
              return (
                banner?.isVisible && (
                  <Banner
                    key={banner?._id}
                    title={banner?.title}
                    description={banner?.description}
                    timer={banner?.timer}
                    link={banner?.link}
                    onTimerComplete={() => handleClick("right")}
                  />
                )
              );
            })}
        </Wrapper>
      ) : (
        <Typography variant="h4">No data available.</Typography>
      )}

      <Arrow direction="right" onClick={() => handleClick("right")}>
        <ArrowRightOutlined />
      </Arrow>
    </Container>
  );
};

export default Slider;
