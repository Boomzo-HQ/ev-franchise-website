"use client";

import * as React from "react";
// import {
//   CaretSortIcon,
//   ChevronDownIcon,
//   DotsHorizontalIcon,
// } from "@radix-ui/react-icons"
import {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  VisibilityState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { FRANCHISE_DATA, FranchiseType } from "@/types/frnachiseData";
import BookingForm from "./BookingForm";

export const columns: ColumnDef<FranchiseType>[] = [
  {
    accessorKey: "franchiseName",
    header: "Franchise Name",
    size: 200,
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("franchiseName")}</div>
    ),
  },
  {
    accessorKey: "franchiseSince",
    header: "Franchise Since",
    size: 200,
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("franchiseSince")}</div>
    ),
  },
  {
    accessorKey: "investment",
    header: "Investment",
    size: 140,
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("investment")}</div>
    ),
  },
  {
    accessorKey: "franchiseFee",
    header: "Franchise Fee",
    size: 140,
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("franchiseFee")}</div>
    ),
  },
  {
    accessorKey: "spaceRequirement",
    header: "Space Requirement",
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("spaceRequirement")}</div>
    ),
  },
  {
    accessorKey: "",
    header: "Book Now",
    size: 60,
    cell: ({ row }) => <BookingForm row={row} />,
  },
];
const FranchiseTable = () => {
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    []
  );
  const [columnVisibility, setColumnVisibility] =
    React.useState<VisibilityState>({});
  const [rowSelection, setRowSelection] = React.useState({});

  const table = useReactTable({
    data: FRANCHISE_DATA,
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
    },
  });

  return (
    <section
      id="Franchises"
      className="bg-[white] flex flex-col gap-y-8 py-16 md:py-20 px-[8vw]"
    >
      <h1
        className="text-xl lg:text-3xl font-semibold text-median text-center lg:text-left"
        style={{ lineHeight: "1.25" }}
      >
        List of Top 10 EV Charging Station Franchise Cost and Price in India
        2024
      </h1>
      <div className="w-full">
        <div className="rounded-md border-none">
          <Table>
            <TableHeader>
              {table.getHeaderGroups().map((headerGroup) => (
                <TableRow key={headerGroup.id}>
                  {headerGroup.headers.map((header) => {
                    return (
                      <TableHead
                        key={header.id}
                        style={{ width: `${header.getSize()}px` }}
                      >
                        {header.isPlaceholder
                          ? null
                          : flexRender(
                              header.column.columnDef.header,
                              header.getContext()
                            )}
                      </TableHead>
                    );
                  })}
                </TableRow>
              ))}
            </TableHeader>
            <TableBody>
              {table.getRowModel().rows?.length ? (
                table.getRowModel().rows.map((row) => (
                  <TableRow
                    key={row.id}
                    data-state={row.getIsSelected() && "selected"}
                    className="hover:bg-[#f8f8fa]"
                  >
                    {row.getVisibleCells().map((cell) => (
                      <TableCell key={cell.id}>
                        {flexRender(
                          cell.column.columnDef.cell,
                          cell.getContext()
                        )}
                      </TableCell>
                    ))}
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell
                    colSpan={columns.length}
                    className="h-24 text-center"
                  >
                    No results.
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>
      </div>
    </section>
  );
};

export default FranchiseTable;
