import styled from "styled-components";
import CoinsList from "@coins/views/coins.list";
import { Header } from "../components/header/header";
import { NavBar } from "../components/navBar/navBar";
import { CoinsDetails } from "@coins/views/coins.details";
import { Breadcrumbs } from "@common/components/breadcrumbs/breadcrumbs";
import { Switch, Route, useRouteMatch, Redirect } from "react-router-dom";
import SingleExchange from "@exchanges/views/singleExchange/singleExchange";
import { ListExchanges } from "@exchanges/views/listExchanges/listExchanges";

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

const DashboardBreadcrumbs = styled.div`
  margin-bottom: 30px;
`;

export function Dashboard() {
  const match = useRouteMatch();

  return (
    <DashboardContainer>
      <Header></Header>

      <NavBar></NavBar>

      <DashboardViews>
        <DashboardBreadcrumbs>
          <Breadcrumbs />
        </DashboardBreadcrumbs>
        <Switch>
          <Route exact path="/dashboard">
            <Redirect to="/dashboard/coins"></Redirect>
          </Route>

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
        </Switch>
      </DashboardViews>
    </DashboardContainer>
  );
}
