import styled from "styled-components";

const border = "1px solid #dee2e6";

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
      border-top: ${border};
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
      border-bottom: ${border};

      td[data-is-sorted="true"] {
        background-color: #f9f9f9;
      }
    }
  }
`;

export const TablePaginationControls = styled.div`
  margin-top: 30px;

  button {
    font-size: 13px;
    cursor: pointer;
    color: #4a4a4a;
    border: ${border};
    padding: 5px 10px;
    border-radius: 3px;
    background-color: #fff;

    &[disabled] {
      opacity: 0.5;
      cursor: not-allowed;
    }

    &:last-child {
      margin-left: 10px;
    }

    &:hover {
      color: #fff;
      background-color: #8dc647;
    }
  }
`;
