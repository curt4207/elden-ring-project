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
import { useRouter } from "next/router";
import ListSubheader from "@mui/material/ListSubheader";
import List from "@mui/material/Link";

// Asynchronous Await: Async ensures that the function returns a promise and wraps non-promises in it. There is another word Await, that works only inside the async function.

export const GetAllBossesData = () => {
  // const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [bossesList, setBossesList] = useState([]);
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
      const bossesListResponse = await axios.get(
        "https://eldenring.fanapis.com/api/bosses?limit=100"
      );
      // const bossesListResponse = await axios.get("https://eldenring.fanapis.com/api/bosses")
      // After fetching data stored it in posts state.
      setBossesList(bossesListResponse.data.data);
      // setBossesList(bossesListResponse.data.data)
      // Closed the loading page
      setIsLoading(false);
    };

    // Call the function
    loadData();
  }, []);

  // console.log("bossesList", bossesList);
  console.log("bossesList", bossesList);

  return (
    <>
      {/* <data/> */}
      <h1>Class List</h1>

      {isLoading ? (
        <h3>Loading...</h3>
      ) : (
        bossesList &&
        bossesList.map((item) => {
          console.log("item", item);
          return (
            <TableContainer
              component={Paper}
              sx={{
                width: "980px",
                maxWidth: "100%",
                mx: "20px",
                my: "20px",
                backgroundImage:
                  "radial-gradient(circle, rgba(121,32,35,1) 7%, rgba(14,3,5,1) 64%)",
                color: "whitesmoke",
                border: "1px solid white",
              }}
            >
              <TableCell
                sx={{
                  display: "flex",
                  fontSize: "20px",
                }}
              >
                {item.name}
              </TableCell>
              <Table>
                <TableHead>
                  <img
                    alt="Boss"
                    src={item.image}
                    width={420}
                    height={320}
                    variant="rounded"
                    style={{
                      display: "flex",
                      paddingLeft: "20px",
                      maxWidth: "100%",
                    }}
                  />
                  <TableRow>
                    <ol
                      sx={{
                        display: "flex",
                        justifyContent: "flex-end",
                        color: "whitesmoke",
                        letterSpacing: "5px",
                      }}
                      key={item.drops}
                    >
                      <Typography
                        variant="subtitle1"
                        sx={{
                          color: "whitesmoke",
                          fontSize: "18px"
                        }}
                      >
                        Drops
                      </Typography>

                      {item.drops.map((drop) => {
                        console.log("drop", drop);
                        return (
                          <>
                            <li>{drop}</li>
                          </>
                        );
                      })}
                    </ol>

                    <Typography
                      key={item.description}
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                      }}
                    >
                      {item.description}
                    </Typography>
                    <Typography>{item.location}</Typography>
                    {/* <TableCell>{item.stats.dexterity}</TableCell> */}
                    {/* <TableCell>{item.stats.endurance}</TableCell> */}
                    {/* <TableCell>{item.stats.faith}</TableCell> */}
                    {/* <TableCell>{item.stats.intelligence}</TableCell> */}
                    {/* <TableCell>{item.stats.mind}</TableCell> */}
                    {/* <TableCell>{item.stats.strength}</TableCell> */}
                    {/* <TableCell>{item.stats.vigor}</TableCell> */}
                  </TableRow>
                </TableHead>

                <TableBody></TableBody>
              </Table>
            </TableContainer>
          );
        })
      )}
    </>
  );
};
