import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "./components/AppBar";
import Routes from "./router/Router";
import Grid from "@material-ui/core/Grid";
import "./App.css";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: "100%"
  },
  appBar: {
    width: "100%"
  }
}));

function App() {
  const classes = useStyles();
  return (
    <div className="App">
      <Grid container className={classes.root}>
        <AppBar className={classes.appBar} />
        <Routes />
      </Grid>
    </div>
  );
}

export default App;
