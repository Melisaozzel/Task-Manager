import React from "react";
import { createTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
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

const useStyles = makeStyles((theme) => ({
  header: {
    textAlign: "center",
    padding: theme.spacing(3),
    backgroundColor: "#b388ff",
    color: "white",
  },
}));
function PageTitle({ text }) {
  const classes = useStyles();
  return (
    <Box>
      <Typography
        className={classes.header}
        variant="h2"
        gutterBottom
        component="div"
      >
        {text}
      </Typography>
    </Box>
  );
}

export default PageTitle;
