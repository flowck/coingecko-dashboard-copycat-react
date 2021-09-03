import styled from "styled-components";
import { NavBar } from "../components/navBar/navBar";
import { Header } from "../components/header/header";
import { Switch, Route, useRouteMatch } from "react-router-dom";
import CoinsList from "../../../../modules/coins/views/coins.list";
import { ListCompanies } from "../../../../modules/finance/views/ListCompanies";
import ListExchanges from "../../../../modules/exchanges/views/listExchanges/listExchanges";
import SingleExchange from "../../../../modules/exchanges/views/singleExchange/singleExchange";
import { CoinsDetails } from "../../../../modules/coins/views/coins.details";

const DashboardContainer = styled.section`
  display: flex;
`;

const DashboardViews = styled.section`
  padding: 30px;
  margin-top: 40px;
  margin-left: 230px;
  width: calc(100% - 230px);
  min-height: calc(100vh -40px);
`;

export function Dashboard() {
  const match = useRouteMatch();

  return (
    <DashboardContainer>
      <Header></Header>

      <NavBar></NavBar>

      <DashboardViews>
        <Switch>
          <Route path={`${match.path}/coins/:coinId`}>
            <CoinsDetails></CoinsDetails>
          </Route>

          <Route path={`${match.path}/coins`}>
            <CoinsList></CoinsList>
          </Route>

          <Route path={`${match.path}/exchanges/:exchangeId`}>
            <SingleExchange></SingleExchange>
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
