import { NavLink } from "react-router-dom";
import { Container, Nav } from "./navBar.styles";

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
    </Container>
  );
}
