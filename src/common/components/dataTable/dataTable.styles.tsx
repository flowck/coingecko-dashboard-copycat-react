import styled from "styled-components";

export const TableContainer = styled.div`
  overflow-x: auto;

  table {
    width: 100%;
    border-collapse: collapse;
  }

  td,
  th {
    padding: 0 10px;
    text-align: left;
  }

  thead {
    tr {
      height: 45px;
      font-size: 12px;
      font-weight: bold;
      text-transform: uppercase;
    }

    th {
      cursor: pointer;
      position: relative;
      border-top: 1px solid #dee2e6;
      border-bottom: 2px solid #dee2e6;

      &::after {
        top: 50%;
        content: "";
        right: 10px;
        opacity: 0.5;
        border-bottom: 0;
        margin-left: 3px;
        position: absolute;
        visibility: hidden;
        transition: all 0.15s;
        transform: translateY(-50%);
        border-top: 3px solid #000;
        border-left: 3px solid transparent;
        border-right: 3px solid transparent;
      }

      // Show sort icon on hover
      &:hover::after {
        visibility: visible;
      }

      // Show on aria-sort set to ascending
      &[aria-sort="ascending"]::after {
        opacity: 1;
        visibility: visible;
        transform: rotate(180deg);
      }

      &[aria-sort="descending"]::after {
        opacity: 1;
        visibility: visible;
      }
    }
  }

  tbody  {
    tr {
      height: 60px;
      border-bottom: 1px solid #dee2e6;

      td[data-is-sorted="true"] {
        background-color: #f9f9f9;
      }
    }
  }
`;
