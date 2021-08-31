// import { useState } from "react";
import styled from "styled-components";
import { NavBar } from "../components/NavBar";
import ListCoins from "../../coins/views/ListCoins";
import { ListCompanies } from "../../finance/views/ListCompanies";
import { Switch, Route, useRouteMatch } from "react-router-dom";

const DashboardContainer = styled.section`
  display: flex;
`;

const DashboardViews = styled.section`
  margin-left: 230px;
  padding: 54px 10px;
  border: 1px solid red;
  width: calc(100% - 230px);
`;

export function Dashboard() {
  // const history = useHistory();
  const match = useRouteMatch();
  // const [isUserLoggedIn] = useState(null);

  // if (!isUserLoggedIn) {
  //   history.push("/login");
  // }

  return (
    <DashboardContainer>
      <NavBar></NavBar>

      <DashboardViews>
        <Switch>
          <Route path={`${match.path}/coins`}>
            <ListCoins></ListCoins>
          </Route>

          <Route path={`${match.path}/finance`}>
            <ListCompanies></ListCompanies>
          </Route>
        </Switch>
      </DashboardViews>
    </DashboardContainer>
  );
}
