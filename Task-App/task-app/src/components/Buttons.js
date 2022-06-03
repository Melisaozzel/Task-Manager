import React from "react";
import { Button, Typography, Box, Grid } from "@material-ui/core";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import { yellow } from "@mui/material/colors";
import { ThemeProvider } from "styled-components";
import FilterListIcon from "@material-ui/icons/FilterList";
const theme = (theme) => ({
  Select: {
    "&:before": {
      borderColor: "black",
    },
    "&:after": {
      borderColor: "pink",
    },
  },
  icon: {
    fill: yellow,
    width: "10px",
    color: "white",
  },
  item: {
    fontSize: "15px",
  },
  root: {
    fontSize: "15px",
  },
});

function Buttons() {
  const [value, setValue] = React.useState("");
  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <Grid
      container
      display="flex"
      justifyContent="space-evenly"
      alignItems="center"
    >
      <Grid item display="flex" justifyContent="center" alignItems="center">
        <Button type="submit" color="primary" variant="contained">
          <Typography variant="button"> ADD TASK </Typography>
        </Button>
      </Grid>
      <Grid>
        <FormControl variant="filled" sx={{ m: 1, minWidth: 150 }}>
          <InputLabel
            style={{ color: "white", fontSize: "30px" }}
            id="demo-simple-select-filled-label"
          >
            Adddge
          </InputLabel>
          <Select
            sx={{
              backgroundColor: "#9e9e9e",
              fontSize: "10px",
              color: "white",
            }}
            value={5}
            onChange={handleChange}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>
      </Grid>
    </Grid>
  );
}

export default Buttons;
