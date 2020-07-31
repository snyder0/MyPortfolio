import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Greeting from "../components/Greeting"

import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: "90vh",
    width: "100%",
  },
}));

function Home() {
  const classes = useStyles();
  return (
    <>
      <Grid item xs={12}>
        <Grid
          container
          className={classes.root}
          justify="center"
          alignItems="center">
            <Greeting />
        </Grid>
      </Grid>
    </>
  );
}

export default Home;
