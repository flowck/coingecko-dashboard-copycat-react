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
function renderCells(columns: TableColumn[], row: TableRow, sortColumn: string) {
  return columns.map((column, index) => (
    <td data-is-sorted={sortColumn === column.name} key={index}>
      {column.component ? column.component(row) : `${row[column.name]}`}
    </td>
  ));
}

function renderRows(columns: TableColumn[], rows: TableRow[], sortColumn: string) {
  return rows.map((row, index) => <tr key={index}>{renderCells(columns, row, sortColumn)}</tr>);
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

        <tbody>{renderRows(columns, data, sortColumn)}</tbody>
      </table>
    </TableContainer>
  );
}
