import { TableContainer } from "./dataTable.styles";

interface TableColumn {
  name: string;
  label: string;
  component?(row: unknown): JSX.Element;
}

type TableRow = Record<string, string | number>;

interface Props {
  rows: unknown[];
  columns: TableColumn[];
}

function renderColumns(columns: TableColumn[]) {
  return columns.map((column, index) => <th key={index}>{column.label || column.name}</th>);
}

function renderCells(columns: TableColumn[], row: TableRow) {
  return columns.map((column, index) => (
    <td key={index}>{column.component ? column.component(row) : `${row[column.name]}`}</td>
  ));
}

function renderRows(columns: TableColumn[], rows: TableRow[]) {
  return rows.map((row, index) => <tr key={index}>{renderCells(columns, row)}</tr>);
}

export function DataTable({ rows, columns }: Props) {
  return (
    <TableContainer>
      <thead>
        <tr>{renderColumns(columns)}</tr>
      </thead>

      <tbody>{renderRows(columns, rows as TableRow[])}</tbody>
    </TableContainer>
  );
}
