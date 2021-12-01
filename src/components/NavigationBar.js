import "../styles/NavigationBar.css";
import * as React from "react";
import { useHistory } from 'react-router-dom'
import { useAuth } from "../Contexts/AuthContext";
import {
  Typography,
  AppBar,
  Button,
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

  const history = useHistory();

  const { currentUser, logout } = useAuth();

  const logoutHandler = async () => {
    try {
        await logout();
        history.push('/login');
    } catch {
        alert('Hubo un error al momento de hacer logout');
    }
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar className="navbar" position="static">
        <Toolbar variant="dense">
          <IconButton></IconButton>
          <Typography variant="h5" color="inherit" component="div">
            Proyecta y Compara
          </Typography>
          <Tabs style = {{paddingLeft: '5rem'}}>
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
          <Button style = {{backgroundColor: 'purple', marginLeft: '25rem', color: 'white'}}
            onClick = {logoutHandler}
          >
            Cerrar Sesión
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default NavigationBar;
