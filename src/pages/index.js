// import styles from '../styles/Home.module.css';
import callAPI from "./api/getData";
import { useEffect, useState } from "react";

// const armorsLimit = "armors?limit=100";
const endPoints = ["classes", "armors", "ashes"];

export default function Home() {
  const [results, setResults] = useState({});

  useEffect(() => {
    const requests = endPoints.map(async (endPoint) => {
      return { endPoint, result: await callAPI(endPoint) };
    });

    Promise.all(requests).then((requests) => {
      // console.log("requests", requests);
      const resultsObject = {};
      for (const request of requests) {
        resultsObject[request.endPoint] = request.result;
      }
      setResults(resultsObject);
      console.log("1 results.classes", results.classes);
      console.log("2 results.classes[0]", results.classes[0]);
      console.log("3 results.classes[0].name ", results.classes[0].name);
    });
  }, []);

  const classesList = results.classes.map(playerClass => {
   
      return (
        <>
        {playerClass.name}

        </>
      )
  });

//   const arr = [1, 2, 3];

// const newArr = arr.map(num => {
//   if (num > 2) {
//     return num + 1;
//   }
// });

// console.log("newArr",newArr);
  
  // console.log("classesList", classesList)
  return (
    <>
      <h1>hello</h1>
     
      {classesList}
        {/* {results.classes && results.classes.length}
  
  <br/>
  {results.armors && results.armors.length}
  <br/>
  {results.ashes && results.ashes.length} */}
      
    </>
  );
}
