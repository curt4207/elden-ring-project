
import React from 'react'
import Head from "next/head";
import { GetAllBossesData } from '../api/GetAllBossesData';

function BossesList() {
  return (
    <>  
   <h2>Bosses</h2>
  <GetAllBossesData/>
    </>
  )
}

export default BossesList;