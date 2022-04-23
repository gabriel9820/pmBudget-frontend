import { useMemo } from "react";
import { Column, Row, useTable } from "react-table";

import { Container } from "./styles";
import { ActionsColumn } from "./ActionsColumn";

interface IProps {
  columns: Column<any>[];
  data: any[];
  onEditClick?: (item: any) => void;
  onDeleteClick?: (item: any) => void;
}

export const Table: React.FC<IProps> = ({
  columns,
  data,
  onEditClick,
  onDeleteClick,
}) => {
  const tableColumns = useMemo(
    () => [
      ...columns,
      {
        id: "actions",
        width: 50,
        Cell: ({ row }: { row: Row }) => (
          <ActionsColumn
            onEditClick={
              onEditClick ? () => onEditClick(row.original) : undefined
            }
            onDeleteClick={
              onDeleteClick ? () => onDeleteClick(row.original) : undefined
            }
          />
        ),
      },
    ],
    [columns, onEditClick, onDeleteClick]
  );

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns: tableColumns, data });

  return (
    <Container>
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps()}>{column.render("Header")}</th>
              ))}
            </tr>
          ))}
        </thead>

        <tbody {...getTableBodyProps()}>
          {rows.map((row) => {
            prepareRow(row);

            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return (
                    <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </Container>
  );
};
