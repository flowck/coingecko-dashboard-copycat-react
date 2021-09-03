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
      border-top: 1px solid #dee2e6;
      border-bottom: 2px solid #dee2e6;
    }
  }

  tbody  {
    tr {
      height: 60px;
      border-bottom: 1px solid #dee2e6;
    }
  }
`;
