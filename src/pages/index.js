import Head from "next/head";
import { Card } from "@mui/material";
import Link from "next/link";

// const armorsLimit = "armors?limit=100";
const endPoints = ["classes", "armors", "ashes"];

export default function Home() {
  return (
    <>
      <Head key="title">
        <title>My Elden Ring</title>
      </Head>
      <Card container>
        <Card
          sx={{
            backgroundImage:
              "linear-gradient(141deg, rgba(76,2,89,1) 13%, rgba(24,1,28,1) 43%)",
            minWidth: "100%",
            minHeight: "100%",
            color: "white",
          }}
        >
      <h1 style={{textAlign: "center"}}>Elden Ring Fan Home Page</h1>
         
        </Card>
        <h2>Home Page</h2>
      </Card>
      <Link href="/Bosses">Bosses</Link>
      <br/>
      <Link href="/Classes">Classes</Link>
    </>
  );
}
