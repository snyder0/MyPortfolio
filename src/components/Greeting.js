import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid"
import Typewriter from "typewriter-effect";

const useStyles = makeStyles((theme) => ({
  skill: {
    color: "#7FCD91",
  },
}));

export default function Greeting() {
  const classes = useStyles();

  return (
    <>
      <Typography align="left" variant="h4">
        <Grid item xs={12}>
          <span className={classes.skill}>Hello,</span>
        </Grid>
        <Grid item xs={12}>
          <span> my name is</span>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h1">
            Luke Snyder,
            </Typography>
        </Grid>
        <Grid container>
          <Grid item xs={4}>
            <span>and I enjoy</span>
          </Grid>
          <Grid item xs={8}>
            <span className={classes.skill}>
              <Typewriter
                options={{
                  strings: ["web development.", "UX/UI Design.", "React development."],
                  autoStart: true,
                  loop: true,
                }}
              />
            </span>
          </Grid>
        </Grid>
      </Typography>
    </>
  );
}