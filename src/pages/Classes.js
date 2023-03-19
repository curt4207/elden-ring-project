// import { GetAllClassesData } from '../api/GetAllClassesData';
import React from 'react'
import Head from "next/head";
import Link from 'next/link';
import { useState, useEffect } from 'react';
import getAllData from './api/getAllData';

function ClassesList() {
    const [classes, setClasses] = useState([]);

    useEffect(() => {
      getAllData("https://eldenring.fanapis.com/api/classes").then((data) => {
        // console.log("classes data.data",data.data)
        setClasses(data.data)
      })
    }, [])  
    
      return (
        <>
          <Link href="/">Home</Link>
          <br/>
          <Link href="/Bosses">Bosses</Link>

          <h1>Classes</h1>
          {classes.map((item) => {
            console.log("item", item)
            return(
              <>
              <h2>{item.name}</h2>
    
              </>
            )
          })}
      
        </>
      );
}

export default ClassesList;

