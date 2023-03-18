import Head from "next/head";
import PlayerClassesList from "./components/PlayerClassesList";
import BossesList from "./components/BossesList";
import { Card } from "@mui/material";



// const armorsLimit = "armors?limit=100";
const endPoints = ["classes", "armors", "ashes"];

export default function Home() {
  
return (
  <>
  <Head key="title">
   <title>My Elden Ring</title>
   </Head>
  <h1>Elden Ring</h1>
  <Card container>
  <Card
  sx={{
    backgroundImage: "linear-gradient(141deg, rgba(76,2,89,1) 13%, rgba(24,1,28,1) 43%)",
  }}
  
  >
<PlayerClassesList />
<BossesList />

  </Card>
</Card>
  </>
)
  
}
