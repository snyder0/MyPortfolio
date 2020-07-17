import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: "90vh",
    width: "100%",
  },
  skill: {
    color: "#7FCD91",
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
          alignItems="center"
          spacing={1}
        >
          <Typography align="left" variant="h3">
            <span className={classes.skill}>Hello,</span>
            <br />
            my name is
            <br />
            <Typography variant="h1">
              Luke Snyder,
            </Typography>
            and I enjoy{" "}
            <span className={classes.skill}>
              web development.
            </span>
          </Typography>
        </Grid>
      </Grid>
    </>
  );
}

export default Home;
