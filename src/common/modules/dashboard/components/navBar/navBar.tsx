import { NavLink } from "react-router-dom";
import { AppVersion, Container, Nav } from "./navBar.styles";
import { version, repository } from "../../../../../../package.json";

export function NavBar() {
  return (
    <Container>
      <Nav>
        <ul>
          <li>
            <NavLink activeClassName="nav--is-active" to="/dashboard/coins">
              Coins
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName="nav--is-active" to="/dashboard/exchanges">
              Exchanges
            </NavLink>
          </li>
        </ul>
      </Nav>

      <AppVersion>
        <a href={`${repository.url.replace(".git", "")}/releases/tag/v${version}`}>v{version}</a>
      </AppVersion>
    </Container>
  );
}
