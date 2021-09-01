import styled from "styled-components";

export const Logo = styled.div`
  height: 100%;
  display: flex;
  align-items: center;

  h1 {
    font-size: 16px;
  }

  img {
    width: 25px;
    height: 25px;
    margin-right: 10px;
  }
`;

export const HeaderContainer = styled.header`
  top: 0;
  width: 100%;
  height: 40px;
  display: flex;
  position: fixed;
  padding: 0 10px;
  background-color: #fff;
  justify-content: space-between;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
`;

export const HeaderNavigation = styled.nav`
  height: 100%;
  // border: 1px solid red;
  display: flex;
  align-items: center;

  ul {
    display: flex;
    list-style: none;

    a {
      text-decoration: none;
    }
  }
`;
