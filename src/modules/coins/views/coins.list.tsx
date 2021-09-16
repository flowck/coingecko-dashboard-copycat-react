import styled from "styled-components";
import { RootState } from "@store/index";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ViewTitle } from "@common/components/viewTitle/viewTitle";
import { Coin, CoinsCategory } from "@coins/store/coins.interfaces";
import { CoinsTable } from "@coins/components/coinsTable/coinsTable";
import { Categories } from "@coins/components/categories/categories";
import { fetchCoinsCategories, fetchCoinsPerMarket } from "../store/coins.thunks";

const FiltersContainer = styled.div`
  margin-bottom: 20px;
`;

function CoinsList() {
  const dispatch = useDispatch();
  const [vsCurrency] = useState("usd");
  const [selectedCategory, setSelectedCategory] = useState("");
  const coins = useSelector<RootState, Coin[]>(({ coinsModule }) => coinsModule.coins);
  const categories = useSelector<RootState, CoinsCategory[]>(({ coinsModule }) => coinsModule.categories);

  useEffect(() => {
    dispatch(fetchCoinsPerMarket(vsCurrency));
    dispatch(fetchCoinsCategories());
  }, [vsCurrency, dispatch]);

  useEffect(() => {
    dispatch(fetchCoinsPerMarket(vsCurrency, 1, selectedCategory));
  }, [selectedCategory, vsCurrency, dispatch]);

  const paginationHandler = (page: number) => {
    dispatch(fetchCoinsPerMarket(vsCurrency, page, selectedCategory));
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

export default CoinsList;
