import React from "react";
import Auth from './components/Auth/Auth'
import { CssBaseline } from "@material-ui/core";
import { AuthProvider } from './Contexts/AuthContext'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ProtectedRoute from "./Helpers/ProtectedRoute";
import Cards from "./components/Cards";
import Investments from "./components/Investments";
import Crypto from "./components/Crypto";

const App = () => {
  return (
    <div className="App">
      <CssBaseline>
      <Router>
        <AuthProvider>
          <Switch>
          <ProtectedRoute exact path="/" component={Cards} />
          <ProtectedRoute exact path="/inversiones" component={Investments} />
          <ProtectedRoute exact path="/criptomonedas" component={Crypto} />
            <Route path="/login" component={Auth} />
          </Switch>
        </AuthProvider>
      </Router>
      </CssBaseline>
    </div>
  );
}

export default App;
