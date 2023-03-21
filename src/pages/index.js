import Head from "next/head";
import { Button, Card } from "@mui/material";
import Link from "next/link";
import Box from "@mui/material/Box";
import { createTheme } from "@mui/material/styles";
import ThemeProvider from "@mui/system/ThemeProvider";

const theme = createTheme({
  status: {
    danger: "#e53e3e",
  },
  palette: {
    primary: {
      main: "#0971f1",
      darker: "#053e85",
    },
    neutral: {
      main: "#0971f1",
      contrastText: "#fff",
    },
  },
});

// const armorsLimit = "armors?limit=100";
const endPoints = ["classes", "armors", "ashes"];

export default function Home() {
  return (
    <>
      <Head key="title">
        <title>My Elden Ring</title>
      </Head>

      <Card
        sx={{
          backgroundImage:
            "linear-gradient(141deg, rgba(76,2,89,1) 13%, rgba(24,1,28,1) 43%)",
          minWidth: "100%",
          minHeight: "100%",
          color: "white",
        }}
      >
        <h1
          style={{
            textAlign: "center",
          }}
        >
          Elden Ring Fan Home Page
        </h1>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            my: "10px",
            mx: "10px",
          }}
        >
          <ThemeProvider theme={theme}>
            <Box sx={{ my: "10px" }}>
              <Button
                variant="outlined"
                href="/Bosses"
                color="neutral"
                size="medium"
              >
                Bosses
              </Button>
            </Box>
            <Box>
              <Button
                variant="outlined"
                href="/Classes"
                color="neutral"
                size="medium"
              >
                Classes
              </Button>
            </Box>
          </ThemeProvider>
        </Box>
      </Card>
    </>
  );
}
