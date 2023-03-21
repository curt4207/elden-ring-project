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
import { motion } from "framer-motion";
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

  // Styled
  const ClassCardContainer = styled.div`
    border: 1px solid black;
    width: 286px;
    height: 500px;
    cursor: grab;
    display: flex;
    flex-direction: column;
    font-size: 18px;
    position: relative;
    ${"" /* background-color: #33363a; */}
    background-color: #4d5156;
    box-shadow: 0 2px 7px 1px rgba(31, 31, 31, 0.6);
    color: whitesmoke;
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

  // use effect gets the data for classes for the getAllData api call, then sets classes to the data object data
  useEffect(() => {
    getAllData("https://eldenring.fanapis.com/api/classes").then((data) => {
      // console.log("classes data.data",data)
      if (data === data) {
        setClasses(data.data);
      }
    });
  }, [setClasses]);

  return (
    <>
      {/* <Layout /> */}
      <Layout>
        <h1 key="champion">Champion</h1>
        <div
          style={{
            display: "flex",
            flexFlow: "wrap",
            backgroundColor: "whitesmoke",
            justifyContent: "center",
          }}
        >
          {classes.map((champion) => {
            console.log("champion", champion);
            return (
              <>
                <ClassCardContainer>
                  <BackWrapper>
                    <CircleCenterWrapper1>
                      <CircleTopWrapper2>
                        <CircleRightWrapper3>
                          <CircleLeftWrapper4>
                            <LineWrapper>
                              <CardMedia
                                component="img"
                                sx={{
                                  position: "relative",
                                  top: "085px",
                                  right: "6em",
                                  minHeight: "320px",
                                  maxHeight: "350px",
                                  minWidth: "227px",
                                  maxWidth: "200px",
                                }}
                                image={!champion.image ? "" : champion.image}
                              />
                            </LineWrapper>
                          </CircleLeftWrapper4>
                        </CircleRightWrapper3>
                      </CircleTopWrapper2>
                    </CircleCenterWrapper1>
                    <CardContent
                    sx={{
                      marginBottom: 0,
                    }}
                    >{champion.description}</CardContent>
                  </BackWrapper>
                </ClassCardContainer>
              </>
            );
          })}
        </div>
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
