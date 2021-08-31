import styled from "styled-components";
import { NavBar } from "../components/NavBar";
import { Switch, Route, useRouteMatch } from "react-router-dom";
import ListCoins from "../../../../modules/coins/views/ListCoins";
import { ListCompanies } from "../../../../modules/finance/views/ListCompanies";
import ListExchanges from "../../../../modules/exchanges/views/ListExchanges/ListExchanges";

const DashboardContainer = styled.section`
  display: flex;
`;

const DashboardViews = styled.section`
  margin-left: 230px;
  padding: 54px 30px;
  min-height: 100vh;
  width: calc(100% - 230px);
`;

export function Dashboard() {
  const match = useRouteMatch();

  return (
    <DashboardContainer>
      <NavBar></NavBar>

      <DashboardViews>
        <Switch>
          <Route path={`${match.path}/coins`}>
            <ListCoins></ListCoins>
          </Route>

          <Route path={`${match.path}/exchanges`}>
            <ListExchanges></ListExchanges>
          </Route>

          <Route path={`${match.path}/finance`}>
            <ListCompanies></ListCompanies>
          </Route>
        </Switch>
      </DashboardViews>
    </DashboardContainer>
  );
}
