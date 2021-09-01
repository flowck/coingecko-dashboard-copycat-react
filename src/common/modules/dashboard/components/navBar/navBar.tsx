import { Link } from "react-router-dom";
import { Container, Nav } from "./navBar.styles";

export function NavBar() {
  return (
    <Container>
      <Nav>
        <ul>
          <li>
            <Link to="/dashboard/coins">Coins</Link>
          </li>
          <li>
            <Link to="/dashboard/exchanges">Exchanges</Link>
          </li>
        </ul>
      </Nav>
    </Container>
  );
}
