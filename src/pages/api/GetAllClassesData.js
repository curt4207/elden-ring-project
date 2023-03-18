import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/system/Stack";
import Image from "next/image";
import Typography from "@mui/material/Typography";

// Asynchronous Await: Async ensures that the function returns a promise and wraps non-promises in it. There is another word Await, that works only inside the async function.

export const GetAllClassesData = () => {
  // const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [playerClass, setPlayerClass] = useState([]);
  // Note: the empty deps array [] means
  // this useEffect will run once
  // similar to componentDidMount()

  useEffect(() => {
    const loadData = async () => {
      // Till the data is fetch using API
      // the Loading page will show.
      setIsLoading(true);

      // Await make wait until that
      // promise settles and return its result
      const classListResponse = await axios.get(
        "https://eldenring.fanapis.com/api/classes"
      );
      // const bossesListResponse = await axios.get("https://eldenring.fanapis.com/api/bosses")
      // After fetching data stored it in posts state.
      setPlayerClass(classListResponse.data.data);
      // setBossesList(bossesListResponse.data.data)
      // Closed the loading page
      setIsLoading(false);
    };

    // Call the function
    loadData();
  }, []);

  // console.log("bossesList", bossesList);
  console.log("playerClass", playerClass);

  return (
    <>
      {/* <data/> */}
      <h1>Class List</h1>

      {isLoading ? (
        <h3>Loading...</h3>
      ) : (
        playerClass &&
        playerClass.map((item) => {
          console.log("item", item);
          return (
            <TableContainer component={Paper}
            sx={{
             
              width: "850px",
              maxWidth: "100%",
              mx: "20px",
              my: "20px",
              backgroundImage: "linear-gradient(58deg, rgba(87,40,41,1) 1%, rgba(140,139,143,1) 51%)",
              color: "whitesmoke",
              border: "1px solid white",
            }}
            >
                    <TableCell align="left">{item.name}</TableCell>
              <Table>
                <TableHead>
                  <TableRow>
                    <img
                      alt="hero"
                      src={item.image}
                      width={200}
                      height={250}
                      variant="rounded"
                      style={{paddingLeft:"20px"}}
                    />


                    <Typography key={item.description}
                    >{item.description}</Typography>
                    
                    <TableCell key={item.stats.level}>{item.stats.level}</TableCell>
                    <TableCell>{item.stats.arcane}</TableCell>
                    <TableCell>{item.stats.dexterity}</TableCell>
                    <TableCell>{item.stats.endurance}</TableCell>
                    <TableCell>{item.stats.faith}</TableCell>
                    <TableCell>{item.stats.intelligence}</TableCell>
                    <TableCell>{item.stats.mind}</TableCell>
                    <TableCell>{item.stats.strength}</TableCell>
                    <TableCell>{item.stats.vigor}</TableCell>
                  </TableRow>
                </TableHead>

                <TableBody>
                    
                </TableBody>
              </Table>
            </TableContainer>
          );
        })
      )}
    </>
  );
};
