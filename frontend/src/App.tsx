import { Switch, Route } from "react-router-dom";
import { Login } from "./modules/auth/views/Login";
import { Dashboard } from "./modules/dashboard/views/Dashboard";

function Home() {
  return <div>Home</div>;
}

export function App() {
  return (
    <main>
      <Switch>
        <Route path="/dashboard">
          <Dashboard></Dashboard>
        </Route>

        <Route path="/login">
          <Login></Login>
        </Route>

        <Route path="/">
          <Home></Home>
        </Route>
      </Switch>
    </main>
  );
}
