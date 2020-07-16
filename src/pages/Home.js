import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({

}));

function Home() {
  return (
    <>
      <Grid item xs={12}>
        <Grid container justify="center" spacing={1}>
          <h1>Home</h1>
        </Grid>
      </Grid>
    </>
  );
}

export default Home;
