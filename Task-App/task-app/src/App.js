import "./App.css";
import PageTitle from "./components/PageTitle";
import AppHeader from "./components/AppHeader";
import { createTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
import React from "react";
import {
  makeStyles,
  Theme,
  createStyles,
  withStyles,
} from "@material-ui/core/styles";
import {
  Card,
  CardContent,
  CardMedia,
  CardHeader,
  Typography,
  Grid,
  Chip,
  Paper,
  Box,
  Button,
} from "@material-ui/core";
const theme = createTheme({
  typography: {
    fontWeightMedium: "500px",
    h2: {
      fontWeight: 600,
    },
    button: {
      fontWeight: 700,
      width: "150px",
      fontSize: "15px",
    },

    fontFamily: ["Poppins", "sans-serif"].join(","),
  },
});
const useStyles = makeStyles((theme) => ({
  header: {
    textAlign: "center",
    padding: theme.spacing(1),
  },
}));
function App() {
  const classes = useStyles();
  return (
    <ThemeProvider theme={theme}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={12}>
          <PageTitle text="TASK MANAGER" />
        </Grid>
        <Grid
          container
          direction="row"
          alignItems="center"
          justify="space-between"
        >
          <Grid item xs={12} md={12}>
            <AppHeader />
          </Grid>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}

export default App;
