import { Action } from "redux";
import { connect } from "react-redux";
import styled from "styled-components";
import { RootState } from "@store/index";
import { ThunkDispatch } from "redux-thunk";
import { useEffect, useState } from "react";
import { Coin, CoinsCategory } from "@coins/store/coins.interfaces";
import { CoinsTable } from "@coins/components/coinsTable/coinsTable";
import { Categories } from "@coins/components/categories/categories";
import { ViewTitle } from "@common/components/viewTitle/viewTitle";
import { fetchCoinsCategories, fetchCoinsPerMarket } from "../store/coins.thunks";

interface CoinsListProps {
  coins: Coin[];
  fetchCategories(): void;
  categories: CoinsCategory[];
  fetchCoins(vsCurrency: string, page?: number, category?: string): void;
}

const FiltersContainer = styled.div`
  margin-bottom: 20px;
`;

function CoinsList({ fetchCoins, fetchCategories, categories, coins }: CoinsListProps) {
  const [vsCurrency] = useState("usd");
  const [selectedCategory, setSelectedCategory] = useState("");

  useEffect(() => {
    fetchCoins(vsCurrency);
    fetchCategories();
  }, [fetchCoins, fetchCategories, vsCurrency]);

  useEffect(() => {
    fetchCoins(vsCurrency, 1, selectedCategory);
  }, [selectedCategory, fetchCoins, vsCurrency]);

  const paginationHandler = (page: number) => {
    fetchCoins(vsCurrency, page, selectedCategory);
  };

  return (
    <section>
      <ViewTitle title="Cryptocurrency Prices by Market Cap" />

      <FiltersContainer>
        <Categories items={categories} onSelectCategory={(category) => setSelectedCategory(category)} />
      </FiltersContainer>

      <CoinsTable onPaginate={paginationHandler} coins={coins} vsCurrency={vsCurrency} />
    </section>
  );
}

function mapStateToProps(state: RootState) {
  return {
    coins: state.coinsModule.coins,
    categories: state.coinsModule.categories,
  };
}

function mapDispatchToProps(dispatch: ThunkDispatch<RootState, void, Action>) {
  return {
    fetchCoins: (vsCurrency: string, page = 1, category?: string) =>
      dispatch(fetchCoinsPerMarket(vsCurrency, page, category)),
    fetchCategories: () => dispatch(fetchCoinsCategories()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CoinsList);