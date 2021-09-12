import { Button } from "@common/components/button/button";
import { CoinsCategory } from "@coins/store/coins.interfaces";
import { useEffect, useRef, useState, FocusEvent, FormEvent } from "react";
import { CategoriesContainer, CategoriesList, CategoriesListItem } from "./categories.style";

interface Props {
  items: CoinsCategory[];
  onSelectCategory(category: string): void;
}

interface OnItemClick {
  (category: CoinsCategory): void;
}

function renderCategoriesListItem(items: CoinsCategory[], onItemClick: OnItemClick) {
  if (!items.length) {
    return null;
  }

  return items.map((item) => (
    <CategoriesListItem key={item.category_id} onClick={() => onItemClick(item)}>
      {item.name}
    </CategoriesListItem>
  ));
}

export function Categories({ items, onSelectCategory }: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const categoriesListElement = useRef<any>(null);
  const [categories, setCategories] = useState(items);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [closeCategoriesTimeout, setCloseCategoriesTimeout] = useState(-1);

  useEffect(() => {
    setCategories(items);
  }, [items, setCategories]);

  // On filtering
  const onFiltering = ({ target }: FormEvent) => {
    const { value } = target as HTMLInputElement;
    const results = items.filter((item) => item.name.toUpperCase().indexOf(value.toUpperCase()) > -1);
    setCategories(results);
  };

  // On button click
  const onButtonClick = () => {
    setIsOpen(!isOpen);
    setCategories(items);

    const setFocusTimeout = window.setTimeout(() => {
      if (categoriesListElement.current) {
        categoriesListElement.current.focus();
      }
      window.clearTimeout(setFocusTimeout);
    }, 100);
  };

  const onInputFocus = () => {
    setIsOpen(true);
    window.clearTimeout(closeCategoriesTimeout);
  };

  const onItemClick = (category: CoinsCategory) => {
    setSelectedCategory(category.name);
    onSelectCategory(category.category_id);
    setIsOpen(false);
  };

  // On blur
  const onBlur = (event: FocusEvent<HTMLDivElement>) => {
    const { tagName } = event.target as HTMLElement;

    // On blur, prevent component from closing if relatedTarget exists
    // and blur event is fired from input
    if (event.relatedTarget && tagName === "INPUT") {
      return undefined;
    }

    const _timeout = window.setTimeout(() => {
      setIsOpen(false);
      window.clearTimeout(closeCategoriesTimeout);
    }, 100);
    setCloseCategoriesTimeout(_timeout);
  };

  // On element click
  const onCategoriesListClick = (event: any) => {
    window.clearTimeout(closeCategoriesTimeout);
    (event.target as HTMLElement).focus();
  };

  return (
    <CategoriesContainer>
      <Button id="toggleCategories" label={selectedCategory || "All categories"} onClick={onButtonClick}></Button>

      {isOpen ? (
        <CategoriesList
          tabIndex={0}
          id="categoriesList"
          onBlurCapture={onBlur}
          ref={categoriesListElement}
          onClick={onCategoriesListClick}
        >
          <input type="text" onFocus={onInputFocus} onInput={onFiltering} placeholder="Filter categories" />
          <ul>{renderCategoriesListItem(categories, onItemClick)}</ul>
        </CategoriesList>
      ) : null}
    </CategoriesContainer>
  );
}
