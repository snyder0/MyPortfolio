import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Routes from "./router/Router";
import Grid from "@material-ui/core/Grid";
import "./App.css";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
}));

function App() {
  const classes = useStyles();
  return (
    <div className="App">
      <Grid container className={classes.root} spacing={2}>
        <Routes />
      </Grid>
    </div>
  );
}

export default App;
