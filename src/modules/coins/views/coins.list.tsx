import { Action } from "redux";
import { connect } from "react-redux";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { ThunkDispatch } from "redux-thunk";
import { RootState } from "../../../store";
import { useEffect, useState } from "react";
import { coinsSelector } from "../store/coins.selectors";
import { numberToCurrency } from "../../../common/utils";
import { CoinColumnName } from "../components/coinColumnName";
import { Coin, CoinsCategory } from "../store/coins.interfaces";
import { Categories } from "../components/categories/categories";
import { DataTable } from "../../../common/components/dataTable/dataTable";
import { ViewTitle } from "../../../common/components/viewTitle/viewTitle";
import { fetchCoinsCategories, fetchCoinsPerMarket } from "../store/coins.thunks";

interface CoinsListProps {
  coins: Coin[];
  categories: CoinsCategory[];
  fetchCategories(): void;
  fetchCoins(vsCurrency: string): void;
}

const FiltersContainer = styled.div`
  margin-bottom: 20px;
`;

function CoinsList({ fetchCoins, fetchCategories, categories, coins }: CoinsListProps) {
  const [vsCurrency] = useState("usd");

  const columns = [
    { label: "#", name: "index" },
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
      name: "price",
      component: (row: Coin) => {
        return <span>{numberToCurrency(row.price, vsCurrency)}</span>;
      },
    },
    { label: "24h", name: "lastDayPriceChange" },
    {
      label: "24h Volume",
      name: "lastDayVolume",
      component: (row: Coin) => {
        return <span>{numberToCurrency(row.lastDayVolume, vsCurrency)}</span>;
      },
    },
    {
      label: "Mkt Cap",
      name: "marketCapital",
      component: (row: Coin) => {
        return <span>{numberToCurrency(row.marketCapital, vsCurrency)}</span>;
      },
    },
  ];

  useEffect(() => {
    fetchCoins(vsCurrency);
    fetchCategories();
  }, [fetchCoins, fetchCategories, vsCurrency]);

  return (
    <section>
      <ViewTitle title="Cryptocurrency Prices by Market Cap" />

      <FiltersContainer>
        <Categories items={categories} />
      </FiltersContainer>

      {coins.length ? <DataTable rows={coins} columns={columns} /> : null}
    </section>
  );
}

function mapStateToProps(state: RootState, props: any) {
  return {
    coins: coinsSelector(state.coinsModule),
    categories: state.coinsModule.categories,
  };
}

function mapDispatchToProps(dispatch: ThunkDispatch<RootState, void, Action>) {
  return {
    fetchCoins: (vsCurrency: string) => dispatch(fetchCoinsPerMarket(vsCurrency)),
    fetchCategories: () => dispatch(fetchCoinsCategories()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CoinsList);
