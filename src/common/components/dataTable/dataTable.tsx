import { useState } from "react";
import { sorter } from "./dataTable.service";
import { TableContainer } from "./dataTable.styles";
import { SortDirection, TableRow } from "./dataTable.types";
import { TableColumn, OnSortColumn, DataTableProps } from "./dataTable.interfaces";

/**
 * Render each column and with an event handler for sort operations
 */
function renderColumns(
  columns: TableColumn[],
  sortDirection: SortDirection,
  sortColumn: string,
  onSortColumn: OnSortColumn
) {
  return columns.map((column, index) => {
    const clickHandler = () => onSortColumn(column.name, sortDirection);
    const _sortDirection = sortColumn === column.name ? sortDirection : undefined;

    return (
      <>
        <th key={index} onClick={clickHandler} aria-sort={_sortDirection}>
          {column.label || column.name}
        </th>
      </>
    );
  });
}

/**
 * Render each column's cell value or a component passed as an attribute of each column
 */
function renderCells(columns: TableColumn[], row: TableRow) {
  return columns.map((column, index) => (
    <td key={index}>{column.component ? column.component(row) : `${row[column.name]}`}</td>
  ));
}

function renderRows(columns: TableColumn[], rows: TableRow[]) {
  return rows.map((row, index) => <tr key={index}>{renderCells(columns, row)}</tr>);
}

export function DataTable({ rows, columns }: DataTableProps) {
  const [sortColumn, setSortColumn] = useState("");
  const [data, setData] = useState<TableRow[]>(rows as TableRow[]);
  const [sortDirection, setSortDirection] = useState<SortDirection>("ascending");

  const onSortColumn = (column: string, direction: SortDirection): void => {
    const _directiton = direction === "ascending" ? "descending" : "ascending";
    setSortDirection(_directiton);
    setSortColumn(column);
    setData([...data].sort(sorter(column, _directiton)));
  };

  return (
    <TableContainer>
      <table>
        <thead>
          <tr>{renderColumns(columns, sortDirection, sortColumn, onSortColumn)}</tr>
        </thead>

        <tbody>{renderRows(columns, data)}</tbody>
      </table>
    </TableContainer>
  );
}
