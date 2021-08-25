import "antd/dist/antd.css";
import "./common/styles/global.css";
import { useHistory } from "react-router-dom";
import { Switch, Route } from "react-router-dom";
import { Login } from "./modules/auth/views/Login";
import { Dashboard } from "./modules/dashboard/views/Dashboard";

function Home() {
  const history = useHistory();
  history.push("/dashboard/coins");

  return <div>Home</div>;
}

function App() {
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

export default App;
