import { SortDirection, TableRow } from "./dataTable.types";

/**
 * High-order function that takes column and sort direction as parameters and return
 * the sort callback function.
 * @param column
 * @param direction
 * @returns
 */
export function sorter(column: string, direction: SortDirection) {
  return (a: TableRow, b: TableRow) => {
    // Prepare column items for sorting
    const itemA = typeof a[column] === "string" ? String(a[column]).toUpperCase() : a[column];
    const itemB = typeof a[column] === "string" ? String(b[column]).toUpperCase() : b[column];

    if (direction === "ascending") {
      return itemA > itemB ? 1 : -1;
    }

    if (direction === "descending") {
      return itemA < itemB ? 1 : -1;
    }

    // Equal values -- do nothing
    return 0;
  };
}
