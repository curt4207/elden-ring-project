import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import { Grid } from "@mui/material";

// import Typography from "@mui/material/Typography";
// import Button from "@mui/material/Button";
// import IconButton from "@mui/material/IconButton";
// import MenuIcon from "@mui/icons-material/Menu";
import Link from "next/link";
import Footer from "@/pages/components/Footer";

const Layout = ({ children }) => {
  return (
    <>
      <AppBar>
        <Toolbar >
          <Grid container
          sx={{ display: "flex", justifyContent: "space-evenly"}}
          >
            <Grid item>
              <Link href="/"> Home</Link>
            </Grid>
            <Grid item>
              <Link href="/Bosses">Bosses</Link>
            </Grid>
            <Grid item>
              <Link href="/Classes">Classes</Link>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
      <Toolbar id="back-to-top-anchor" />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
