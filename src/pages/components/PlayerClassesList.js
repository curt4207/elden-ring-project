import { GetAllClassesData } from '../api/GetAllClassesData';
import React from 'react'
import Head from "next/head";

function PlayerClassesList() {
  return (
    <>  
   <h1>Player Classes</h1>
  <GetAllClassesData/>
    </>
  )
}

export default PlayerClassesList;

