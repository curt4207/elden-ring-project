import React from "react";
import Head from "next/head";
// import { GetAllBossesData } from './api/GetAllBossesData';
import Link from "next/link";
import getAllData from "./api/getAllData";
import { useState, useEffect } from "react";
import Grid from "@mui/material/Grid";

//API for boss list
//  "https://eldenring.fanapis.com/api/bosses?limit=100"

// Notes:
// Asynchronous Await: Async ensures that the function returns a promise and wraps non-promises in it. There is another word Await, that works only inside the async function.
//  the empty deps array [] means
// this useEffect will run once
// similar to componentDidMount()
// Till the data is fetch using API
// the Loading page will show.
// setIsLoading(true);
// Await make wait until that
// promise settles and return its result
// After fetching data stored it in posts state.

function BossesList() {
  const [bosses, setBosses] = useState([]);

useEffect(() => {
  getAllData("https://eldenring.fanapis.com/api/bosses?limit=100").then((data) => {
    console.log("bosses data.data",data.data)
    setBosses(data.data)
  })
}, [])  

  return (
    <>
      <Link href="/">Home</Link>
      <br/>
      <Link href="/Classes">Classes</Link>
      <h1>Bosses</h1>
      {bosses.map((item) => {
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

export default BossesList;
