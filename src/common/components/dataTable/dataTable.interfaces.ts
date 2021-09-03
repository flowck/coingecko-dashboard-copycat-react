import { SortDirection } from "./dataTable.types";

export interface OnSortColumn {
  (column: string, direction: SortDirection): void;
}

export interface TableColumn {
  name: string;
  label: string;
  component?(row: unknown): JSX.Element;
}

export interface DataTableProps {
  rows: unknown[];
  columns: TableColumn[];
}
