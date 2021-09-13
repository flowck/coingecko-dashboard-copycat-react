import styled from "styled-components";

export const ButtonContainer = styled.button`
  height: 34px;
  cursor: pointer;
  padding: 0 15px;
  border: 1px solid #e5e7eb;
  background-color: transparent;
  border-radius: calc(34px / 2);
  transition: border-color 0.15s;

  &:hover {
    border-color: #8dc647;
  }
`;
