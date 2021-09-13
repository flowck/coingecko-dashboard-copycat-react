import styled from "styled-components";
import { Coin } from "../store/coins.interfaces";

const CoinNameContainer = styled.div`
  display: flex;
  align-items: center;
`;

const CoinName = styled.div`
  width: 150px;
  display: flex;
  align-items: center;

  span {
    font-size: 14px;
    font-weight: 700;
  }
`;

const CoinLogo = styled.img`
  width: 18px;
  height: 18px;
  margin-right: 15px;
`;

const CoinSymbol = styled.span`
  font-size: 0.7rem;
  text-transform: uppercase;
`;

interface CoinColumnNameProp {
  coin: Coin;
}

export function CoinColumnName({ coin }: CoinColumnNameProp) {
  return (
    <CoinNameContainer>
      <CoinName>
        <CoinLogo src={coin.image} alt={coin.name} />
        <span>{coin.name}</span>
      </CoinName>
      <CoinSymbol>{coin.symbol}</CoinSymbol>
    </CoinNameContainer>
  );
}
