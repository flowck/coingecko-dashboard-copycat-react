import { Link } from "react-router-dom";
import styled from "styled-components";
import CoinGeckLogo from "../images/coingecko.png";

const Container = styled.aside`
  width: 230px;
  height: 100%;
  position: fixed;
  border: 1px solid rgba(0, 0, 0, 0.1);
`;

const Logo = styled.div`
  display: flex;
  padding: 20px 10px;
  align-items: center;

  h1 {
    font-size: 16px;
  }

  img {
    width: 30px;
    height: 30px;
    margin-right: 10px;
  }
`;

const Nav = styled.nav`
  ul li {
    font-size: 12px;
    text-transform: uppercase;

    &:first-child {
      a {
        border-top: 1px solid rgba(0, 0, 0, 0.1);
      }
    }

    a {
      display: block;
      padding: 15px 10px;
      text-decoration: none;
      border-bottom: 1px solid rgba(0, 0, 0, 0.1);

      &:hover {
        color: var(--color-green-gecko);
      }
    }
  }
`;

export function NavBar() {
  return (
    <Container>
      <Logo>
        <img src={CoinGeckLogo} alt="CoinGecko" />
        <h1>CoinGecko Copycat</h1>
      </Logo>

      <Nav>
        <ul>
          <li>
            <Link to="/dashboard/coins">Coins</Link>
          </li>
          <li>
            <Link to="/dashboard/exchanges">Exchanges</Link>
          </li>
          {/* <li>
            <Link to="/dashboard/exchanges">Exchanges</Link>
          </li>
          <li>
            <Link to="/dashboard/indexes">Indexes</Link>
          </li> */}
        </ul>
      </Nav>
    </Container>
  );
}
