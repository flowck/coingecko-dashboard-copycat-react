import { Switch, Route } from "react-router-dom";
import { ListCoins } from "./modules/coins/views/ListCoins";
import { ListCompanies } from "./modules/finance/views/ListCompanies";

function Home() {
  return <div>Home</div>;
}

export function App() {
  return (
    <main>
      <Switch>
        <Route path="/coins">
          <ListCoins></ListCoins>
        </Route>

        <Route path="/finance">
          <ListCompanies></ListCompanies>
        </Route>

        <Route path="/">
          <Home></Home>
        </Route>
      </Switch>
    </main>
  );
}
