import { Switch, Route } from "react-router-dom";
import CardsScreen from "./components/CardsScreen";
import CryptoScreen from "./components/CryptoScreen";
import InvestmentsScreen from "./components/InvesmentsScreen";

/**
 * Routes
 * @returns Routes
 */
const Routes = () => {
  return (
    <Switch>
      <Route path="/" component={CardsScreen} exact />
      <Route path="/criptomonedas" component={CryptoScreen} />
      <Route path="/inversiones" component={InvestmentsScreen} />
    </Switch>
  );
};

export default Routes;
