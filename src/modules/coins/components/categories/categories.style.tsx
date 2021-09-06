import styled from "styled-components";

export const CategoriesContainer = styled.div`
  position: relative;

  input {
    padding: 10px;
    border-radius: 3px;
    border: 1px solid rgba(0, 0, 0, 0.1);
  }
`;

export const CategoriesList = styled.div`
  width: 400px;
  z-index: 100;
  height: 400px;
  padding: 10px;
  display: flex;
  margin-top: 10px;
  border-radius: 5px;
  position: absolute;
  overflow-y: scroll;
  flex-direction: column;
  background-color: #fff;
  border: 1px solid rgba(0, 0, 0, 0.1);

  ul {
    list-style: none;
    margin-top: 10px;
  }
`;

export const CategoriesListItem = styled.li`
  width: 100%;
  padding: 10px;
  cursor: pointer;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);

  &:hover {
    background-color: #eee;
  }
`;
