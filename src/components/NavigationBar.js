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
      <AppBar className="navbar" position="static">
        <Toolbar variant="dense">
          <IconButton></IconButton>
          <Typography variant="h5" color="inherit" component="div">
            Proyecta y Compara
          </Typography>
          <Tabs>
            <Tab label="Tarjetas Bancarias" to="/" component={Link}>
              <Typography variant="h6" color="inherit">
                Tarjetas Bancarias{" "}
              </Typography>
            </Tab>
            <Tab label="Inversiones" to="/inversiones" component={Link}>
              <Typography variant="h6" color="inherit">
                Inversiones{" "}
              </Typography>
            </Tab>

            <Tab label="Criptomonedas" to="/criptomonedas" component={Link}>
              <Typography variant="h6" color="inherit">
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
