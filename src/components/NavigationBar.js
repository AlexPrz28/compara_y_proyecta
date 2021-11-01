import "../styles/NavigationBar.css";
import * as React from "react";
import {
  Typography,
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Tab,
  Tabs,
} from "@material-ui/core";
import { Link } from "react-router-dom";

/**
 * navigation bar elements
 * @returns NavigationBar UI elements
 */
const NavigationBar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" style = {{backgroundColor: 'black'}}>
        <Toolbar variant="dense">
          <IconButton></IconButton>
          <div style = {{color: 'white'}}>
            Proyecta y Compara
          </div>
          <Tabs>
            <Tab style = {{color: 'white'}} label="Tarjetas Bancarias" to="/" component={Link}>
              <Typography variant="h6">
                Tarjetas Bancarias{" "}
              </Typography>
            </Tab>
            <Tab label="Inversiones" to="/inversiones" component={Link}>
              <Typography variant="h6" color="">
                Inversiones{" "}
              </Typography>
            </Tab>

            <Tab label="Criptomonedas" to="/criptomonedas" component={Link}>
              <Typography variant="h6" color="">
                Criptomonedas{" "}
              </Typography>
            </Tab>
          </Tabs>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default NavigationBar;
