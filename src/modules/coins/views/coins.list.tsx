import { Action } from "redux";
import { connect } from "react-redux";
import styled from "styled-components";
import { ThunkDispatch } from "redux-thunk";
import { RootState } from "../../../store";
import { useEffect, useState } from "react";
import { Coin, CoinsCategory } from "../store/coins.interfaces";
import { CoinsTable } from "../components/coinsTable/coinsTable";
import { Categories } from "../components/categories/categories";
import { ViewTitle } from "../../../common/components/viewTitle/viewTitle";
import { fetchCoinsCategories, fetchCoinsPerMarket } from "../store/coins.thunks";

interface CoinsListProps {
  coins: Coin[];
  fetchCategories(): void;
  categories: CoinsCategory[];
  fetchCoins(vsCurrency: string, category?: string): void;
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
    fetchCoins(vsCurrency, selectedCategory);
  }, [selectedCategory, fetchCoins, vsCurrency]);

  return (
    <section>
      <ViewTitle title="Cryptocurrency Prices by Market Cap" />

      <FiltersContainer>
        <Categories items={categories} onSelectCategory={(category) => setSelectedCategory(category)} />
      </FiltersContainer>

      <CoinsTable coins={coins} vsCurrency={vsCurrency} />
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
    fetchCoins: (vsCurrency: string, category?: string) => dispatch(fetchCoinsPerMarket(vsCurrency, category)),
    fetchCategories: () => dispatch(fetchCoinsCategories()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CoinsList);
