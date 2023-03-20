// import { GetAllClassesData } from '../api/GetAllClassesData';
import React from "react";
import Head from "next/head";
import Link from "next/link";
import { useState, useEffect } from "react";
import getAllData from "./api/getAllData";
import Layout from "@/styles/layout";
import { Container } from "@mui/system";
import Box from "@mui/system/Box";
import Grid from "@mui/material/Grid";

function ClassesList() {
  const [classes, setClasses] = useState([]);

  useEffect(() => {
    getAllData("https://eldenring.fanapis.com/api/classes").then((data) => {
      // console.log("classes data.data",data.data)
      setClasses(data.data);
    });
  }, []);

  return (
    <>
      {/* <Layout /> */}
            <Layout >
      
          <h1 key="h1">Classes</h1>
          {classes.map((item) => {
            {/* console.log("item", item); */}
            return (
              <>
                <h2 key={item.id}>{item.name}</h2>
              </>
            );
          })}
       
        </Layout>
    </>
  );
}

export default ClassesList;
