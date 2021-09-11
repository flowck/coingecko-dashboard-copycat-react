import { Link } from "react-router-dom";
import styled from "styled-components";
import { numberToCurrency } from "@common/utils";
import { CoinColumnName } from "../coinColumnName";
import { Coin } from "@coins/store/coins.interfaces";
import { DataTable } from "@common/components/dataTable/dataTable";

interface Props {
  coins: Coin[];
  vsCurrency: string;
}

const ColoredStatusColumn = styled.span<Record<string, string | number>>`
  color: ${({ value }) => (value && value >= 0 ? "#4eaf0a" : "#e15241")};
`;

export function CoinsTable({ coins, vsCurrency }: Props) {
  const columns = [
    {
      name: "name",
      label: "Name",
      component: (row: Coin) => {
        return (
          <Link to={`/dashboard/coins/${row.id}`}>
            <CoinColumnName coin={row} />
          </Link>
        );
      },
    },
    {
      label: "Price",
      name: "current_price",
      component: (row: Coin) => {
        return <span>{numberToCurrency(row.current_price, vsCurrency)}</span>;
      },
    },
    {
      label: "24h",
      name: "price_change_percentage_24h",
      component: (row: Coin) => {
        return (
          <ColoredStatusColumn value={row.price_change_percentage_24h}>
            {row.price_change_percentage_24h ? row.price_change_percentage_24h.toFixed(2) + "%" : ""}
          </ColoredStatusColumn>
        );
      },
    },
    {
      label: "24h Volume",
      name: "total_volume",
      component: (row: Coin) => {
        return <span>{numberToCurrency(row.total_volume, vsCurrency)}</span>;
      },
    },
    {
      label: "Mkt Cap",
      name: "market_cap",
      component: (row: Coin) => {
        return <span>{numberToCurrency(row.market_cap, vsCurrency)}</span>;
      },
    },
  ];

  return coins.length ? <DataTable rows={coins} columns={columns} /> : null;
}
