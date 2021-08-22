import { useState } from "react";
import { ListCoins } from "../../coins/views/ListCoins";
import { ListCompanies } from "../../finance/views/ListCompanies";
import { Switch, Route, useHistory, useRouteMatch } from "react-router-dom";

export function Dashboard() {
  const history = useHistory();
  const match = useRouteMatch();
  const [isUserLoggedIn] = useState(null);

  if (!isUserLoggedIn) {
    history.push("/login");
  }

  return (
    <>
      <h1>Dashboard</h1>
      <Switch>
        <Route path={`${match.path}/coins`}>
          <ListCoins></ListCoins>
        </Route>

        <Route path={`${match.path}/finance`}>
          <ListCompanies></ListCompanies>
        </Route>
      </Switch>
    </>
  );
}
