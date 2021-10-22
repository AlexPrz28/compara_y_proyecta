import "./styles/App.css";
import React from "react";
import { CssBaseline } from "@material-ui/core";
import NavigationBar from "./components/NavigationBar";
import Routes from "./Routes";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <React.Fragment>
      <CssBaseline>
        <BrowserRouter>
          <NavigationBar />
          <Routes />
        </BrowserRouter>
      </CssBaseline>
    </React.Fragment>
  );
}

export default App;
