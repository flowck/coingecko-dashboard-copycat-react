import styled from "styled-components";

export const Container = styled.aside`
  top: 40px;
  width: 230px;
  display: flex;
  position: fixed;
  padding-bottom: 10px;
  flex-direction: column;
  height: calc(100% - 40px);
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-top: none;
`;

export const Nav = styled.nav`
  flex-grow: 1;

  .nav--is-active {
    color: var(--color-green-gecko);
  }

  ul li {
    a {
      display: block;
      padding: 10px 10px;
      text-decoration: none;
      border-bottom: 1px solid rgba(0, 0, 0, 0.1);

      &:hover {
        color: var(--color-green-gecko);
      }
    }
  }
`;

export const AppVersion = styled.div`
  text-align: center;
`;
