import CoinGeckLogo from "./coingecko.png";
import { HeaderContainer, Logo, HeaderNavigation } from "./header.styles";

export function Header() {
  return (
    <HeaderContainer>
      <Logo>
        <img src={CoinGeckLogo} alt="CoinGecko" />
        <h1>CoinGecko Copycat</h1>
      </Logo>

      <HeaderNavigation>
        <ul>
          <li>
            <a href="https://github.com/flowck/coingecko-dashboard-copycat-react">Source code</a>
          </li>
        </ul>
      </HeaderNavigation>
    </HeaderContainer>
  );
}
