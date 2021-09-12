import { useEffect, useState } from "react";
import { sorter } from "./dataTable.service";
import { SortDirection, TableRow } from "./dataTable.types";
import { TableContainer, TablePaginationControls } from "./dataTable.styles";
import { TableColumn, OnSortColumn, DataTableProps, PaginationHandler } from "./dataTable.interfaces";

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
      <th key={index} onClick={clickHandler} aria-sort={_sortDirection}>
        {column.label || column.name}
      </th>
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

function renderPaginationControls(onPrev: PaginationHandler, onNext: PaginationHandler, page: number) {
  const isDisabled = page === 1;
  return (
    <TablePaginationControls>
      <button onClick={onPrev} disabled={isDisabled}>
        {"‹ Prev"}
      </button>
      <button onClick={onNext}> {"Next ›"} </button>
    </TablePaginationControls>
  );
}

export function DataTable({ rows, columns, onPrev, onNext }: DataTableProps) {
  const [sortColumn, setSortColumn] = useState("");
  const [data, setData] = useState<TableRow[]>(rows as TableRow[]);
  const [sortDirection, setSortDirection] = useState<SortDirection>("ascending");
  const [page, setPage] = useState(1);

  // Update data on rows change
  useEffect(() => {
    setData(rows as TableRow[]);
  }, [rows]);

  const onSortColumn = (column: string, direction: SortDirection): void => {
    const _directiton = direction === "ascending" ? "descending" : "ascending";
    setSortDirection(_directiton);
    setSortColumn(column);
    setData([...data].sort(sorter(column, _directiton)));
  };

  const nextPage = () => {
    if (onNext) {
      onNext(page + 1);
      setPage(page + 1);
    }
  };

  const prevPage = () => {
    if (onPrev && page > 1) {
      onPrev(page - 1);
      setPage(page - 1);
    }
  };

  return (
    <TableContainer>
      <table>
        <thead>
          <tr>{renderColumns(columns, sortDirection, sortColumn, onSortColumn)}</tr>
        </thead>

        <tbody>{renderRows(columns, data, sortColumn)}</tbody>
      </table>
      {onPrev && onNext ? renderPaginationControls(prevPage, nextPage, page) : null}
    </TableContainer>
  );
}
