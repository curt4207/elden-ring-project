// import { GetAllClassesData } from '../api/GetAllClassesData';
import React from "react";
import Head from "next/head";
import Link from "next/link";
import { useState, useEffect } from "react";
import getAllData from "./api/getAllData";
import Layout from "@/styles/layout";
import { Container } from "@mui/system";
import Box from "@mui/system/Box";
import Image from "next/image";
import styled, { keyframes } from "styled-components";

// Imported Components
import styles from "../styles/styles.module.css";

// import Framer Motion
import { motion, useMotionValue, useTransform } from "framer-motion";

// MUI imports
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import VisibilityIcon from "@mui/icons-material/Visibility";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";

import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";

function ClassesList() {
  const [classes, setClasses] = useState([]);

  const CardWrapper = styled(motion.div)`
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    perspective: 2000;
    justify-content: center;
  `;

  // Styled
  const ClassCardContainer = styled(motion.div)`
    border: 1px solid black;
    min-width: 300px;
    width: 306px;
    height: 540px;
    cursor: grab;
    ${"" /* display: flex; */}
    ${"" /* flex-direction: column; */}
    font-size: 18px;
    position: relative;
    background-color: #33363a;
    box-shadow: 0 2px 7px 1px rgba(31, 31, 31, 0.6);
    color: white;
    border-radius: 25px;
    margin: 26px;
  `;

  const BackWrapper = styled.div`
    position: relative;
    top: 0;
    left: 0;
    min-width: 100%;
    min-height: 100%;
    overflow: hidden;
    border-top-right-radius: 25px;
  `;
  const glow = keyframes`
  from {
    box-shadow: 0 0 10px #fff, 0 0 20px #fff, 0 0 20px #F8FF36, 0 0 30px #F8FF36, 0 0 40px #F8FF36, 0 0 50px #F8FF36, 0 0 50px #F8FF36,  inset 0px 0px 5px 5px #F8FF36;
  }
  to {
    box-shadow: 0 0 10px #fff, 0 0 20px #FFF316, 0 0 30px #FFF316, 0 0 40px #FFF316, 0 0 50px #FFF316, 0 0 60px #FFF316, 0 0 70px #FFF316,  inset 0px 0px 10px 5px #FFF316;
  }
  `;
  // Inter locking circle rings Center, Top , Right, Left
  const CircleCenterWrapper1 = styled.div`
    position: relative;
    width: 200px;
    height: 200px;
    top: 3.5em;
    right: 0em;
    left: 2em;
    z-index: 5;
    border: 5px #f3d80c;
    border-radius: 50%;
    animation: 2s ${glow} ease-in-out infinite alternate;
  `;

  const CircleTopWrapper2 = styled.div`
    position: relative;
    width: 200px;
    height: 200px;
    top: 3.5em;
    right: 0em;
    z-index: 5;
    border: 5px #f3d80c;
    border-radius: 50%;
    animation: 3s ${glow} ease-in-out infinite alternate;
  `;

  const CircleRightWrapper3 = styled.div`
    position: relative;
    width: 200px;
    height: 200px;
    top: 3em;
    left: 4em;
    z-index: 5;
    border: 5px #f3d80c;
    border-radius: 50%;
    animation: 4s ${glow} ease-in-out infinite alternate;
  `;

  const CircleLeftWrapper4 = styled.div`
    position: relative;
    width: 200px;
    height: 200px;
    top: 0em;
    right: 8em;
    z-index: 5;
    border: 5px #f3d80c;
    border-radius: 50%;
    animation: 1s ${glow} ease-in-out infinite alternate;
  `;

  const LineWrapper = styled.div`
    position: relative;
    width: 10px;
    height: 300px;
    top: -9.5em;
    left: 9em;
    z-index: 5;
    border: 6px #f3d80c;
    background-color: #f3d80c;
    border-radius: 30%;
    animation: 1s ${glow} ease-in-out infinite alternate;
  `;

  const BottomWrapper = styled.div`
    position: relative;
    top: 190px;
    z-index: 100;
    display: flex;
    color: white;
  `;

  const ImageWrapper = styled(motion.div)``;
  // use effect gets the data for classes for the getAllData api call, then sets classes to the data object data
  useEffect(() => {
    getAllData("https://eldenring.fanapis.com/api/classes").then((data) => {
      // console.log("classes data.data",data)
      try {
        setClasses(data.data);
      } catch {
        console.log("Error");
      }
    });
  }, [setClasses]);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateY = useTransform(y, [-100, 100], [30, -30]);
  const rotateX = useTransform(x, [-100, 100], [-30, 30]);

  return (
    <>
      {/* <Layout /> */}
      <Layout>
        <h1 key="champion">Champion</h1>
        <>
          <CardWrapper>
            {classes.map((champion) => {
              console.log("champion", champion);
              return (
                <>
                  <ClassCardContainer
                    id="container"
                    style={{ x, y, rotateX, rotateY, z: 50 }}
                    drag
                    dragElastic={0.07}
                    dragConstraints={{
                      top: 0,
                      right: 0,
                      bottom: 0,
                      left: 0,
                    }}
                  >
                    <BackWrapper>
                      <CircleCenterWrapper1>
                        <CircleTopWrapper2>
                          <CircleRightWrapper3>
                            <CircleLeftWrapper4>
                              <LineWrapper id="lineWrapper">
                                <ImageWrapper
                                  style={{ x, y, rotateX, rotateY, z: 50 }}
                                  drag
                                  dragElastic={0.07}
                                  dragConstraints={{
                                    top: 0,
                                    right: 0,
                                    bottom: 0,
                                    left: 0,
                                  }}
                                >
                                  <CardMedia
                                    component="img"
                                    variant="rounded"
                                    sx={{
                                      position: "relative",
                                      top: "35px",
                                      right: "5em",
                                      minHeight: "220px",
                                      maxHeight: "350px",
                                      minWidth: "227px",
                                      maxWidth: "200px",
                                      // userSelect: "none",
                                    }}
                                    image={
                                      !champion.image ? "" : champion.image
                                    }
                                  />
                                </ImageWrapper>
                              </LineWrapper>
                            </CircleLeftWrapper4>
                          </CircleRightWrapper3>
                        </CircleTopWrapper2>
                      </CircleCenterWrapper1>

                      <BottomWrapper>
                        <CardContent
                          sx={
                            {
                              // position: "relative",
                              // top: "180px",
                              // zIndex: 100,
                              // display: "flex",
                            }
                          }
                        >
                          {champion.description}
                        </CardContent>
                      </BottomWrapper>
                    </BackWrapper>
                  </ClassCardContainer>
                </>
              );
            })}
          </CardWrapper>
        </>
      </Layout>
    </>
  );
}

export default ClassesList;

{
  /* <CardMedia
      component="img"
      sx={{minHeight: "327px"}}
      image={!champion.image ? "" : champion.image}
    /> */
}
