import React from "react";
import Head from "next/head";
import { useState, useEffect } from "react";
import Link from "next/link";

// Imported Components
import getAllData from "./api/getAllData";
import Grid from "@mui/material/Grid";
import Layout from "@/styles/layout";

// MUI imports
import styled from "@mui/system/styled";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import VisibilityIcon from '@mui/icons-material/Visibility';
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";

import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";

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

// const ExpandMore = styled((props) => {
//   const { expand, ...other } = props;
  
//   return <IconButton {...other} />;
// })(({ theme, expand }) => ({
//   transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
//   marginLeft: "auto",
//   transition: theme.transitions.create("transform", {
//     duration: theme.transitions.duration.shortest,
//   }),
// }));

function BossesList() {
  const [bosses, setBosses] = useState([]);
  const [expanded, setExpanded] = useState(false);
  
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  
  useEffect(() => {
    getAllData("https://eldenring.fanapis.com/api/bosses?limit=100").then(
      (data) => {
        console.log("bosses data.data", data.data);
        setBosses(data.data);
      }
      );
    }, []);
    // bosses return data
    // id:
    // name:
    // image:
    // description:
    // location:
    // drops:
    // healthPoints:
    
  return (
    <>
      <Layout>
        <h1>Bosses</h1>
        <div style={{ display: "flex", flexFlow: "wrap",backgroundColor: "whitesmoke" }}>
          {bosses.map((item) => {
            console.log("item", item);
            return (
              <>
               
                <Card
                  sx={{
                    maxWidth: "545px",
                    minWidth: "545px",
                    minHeight: "545px",
                    maxHeight: "545px",
                    my: "20px",
                    mx: "20px",
                  }}
                  elevation={5}
                >
                  <CardHeader 
                  avatar={
                  <Avatar>

                  </Avatar>
                  } 
                  titleTypographyProps={{variant: "h5"}}
                  title={item.name}
                  subheaderTypographyProps={{variant: "p"}}
                  subheader={`Location: ${item.location}`}
                   />
                   <CardMedia
                    component="img"
                    height="350px"
                    image={!item.image ? "" : item.image}
                   />

                   <CardContent>
                   <Typography
                   variant="body2"
                   >
                    {item.description}
                   </Typography>
                   </CardContent>
                  <CardActions disableSpacing >
                  <IconButton>
                  <VisibilityIcon />
                  </IconButton>
                  {/* <ExpandMore
                  expand={expanded}
                  onClick={handleExpandClick}
                  // aria-label="show drops"
                  > */}

                  {/* </ExpandMore> */}
                  </CardActions>

                </Card>
              </>
            );
          })}
        </div>
      </Layout>
    </>
  );
}

export default BossesList;

