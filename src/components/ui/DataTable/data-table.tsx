"use client";

import {
  Box, Button, createListCollection, Flex, HStack, Icon, Portal, Show, Span, Table, Text
} from "@chakra-ui/react";
import {
  type ColumnDef,
  flexRender,
  getCoreRowModel,
  getExpandedRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  type Row,
  type Table as TanStackTable,
  useReactTable
} from "@tanstack/react-table";
import { useTranslations } from "next-intl";
import {
  ComponentProps, Fragment, ReactElement, ReactNode, useEffect, useMemo
} from "react";
import {
  LuChevronDown, LuChevronLeft, LuChevronRight, LuChevronUp
} from "react-icons/lu";
import { createDataTableStore } from "@/shared/stores/data-table-store";
import {
  SelectContent, SelectItem, SelectRoot,
  SelectTrigger, SelectValueText,
} from "../select";


export type DataTableProps<TData, TValue> = {
  data: TData[];
  tableId: string;
  columns: ColumnDef<TData, TValue>[]
  renderSubComponent?(props: { row: Row<TData> }): ReactElement
  getRowCanExpand?(row: Row<TData>): boolean;
  emptyMessage?: ReactNode;
  hoverBg?: string;
  tableProps?: ComponentProps<typeof Table.Root>;
  isSortable?: boolean;
  enablePagination?: boolean;
  tableRefAction?: (table: TanStackTable<TData>) => void;
};


export const headerCell = ({
  id, tAction, textProps,
}: {
  id: string,
  tAction: (key: string) => string,
  textProps?: ComponentProps<typeof Text>
}) => (
  <Text
    color="fg.solid"
    fontWeight="medium"
    fontSize="xs"
    pr={4}
    {...textProps}
    width={"100%"}
  >{tAction(`${id}`)}</Text>
)


/**
 * A generic Data Table component with sorting, pagination, and expandable rows.
 * Built using @tanstack/react-table and Chakra UI v3.
 */
export function DataTable<TData, TValue>({
  tableId,
  data,
  columns,
  getRowCanExpand, emptyMessage, hoverBg, tableProps, isSortable,
  renderSubComponent, enablePagination = true, tableRefAction
}: DataTableProps<TData, TValue>) {

  const t = useTranslations("data-table");
  const store = useMemo(() => createDataTableStore(tableId), [tableId]);

  const setPagination = store((state) => state.setPagination);
  const pagination = store((state) => state.pagination);
  const setSorting = store((state) => state.setSorting);
  const sorting = store((state) => state.sorting);
  const setExpanded = store((state) => state.setExpanded);
  const expanded = store((state) => state.expanded);
  const pageItemStore = store((state) => state.pageItem);
  const pageItem = createListCollection({ items: pageItemStore })

  // TanStack Table returns non-stable function refs; safe here since we don't memoize them
  // eslint-disable-next-line react-hooks/incompatible-library
  const table = useReactTable<TData>({
    data,
    columns,
    getRowCanExpand,
    getCoreRowModel: getCoreRowModel(),
    getExpandedRowModel: getExpandedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getSortedRowModel: getSortedRowModel(),
    ...(enablePagination && { getPaginationRowModel: getPaginationRowModel() }),
    ...(enablePagination && { onPaginationChange: setPagination }),
    onSortingChange: setSorting,
    onExpandedChange: setExpanded,
    state: {
      ...(enablePagination && { pagination }),
      sorting,
      expanded
    }
  })

  useEffect(() => {
    if (tableRefAction) {
      tableRefAction(table);
    }
  }, [table, tableRefAction]);

  const startIndex = enablePagination ? (table.getState().pagination.pageIndex) * table.getState().pagination.pageSize : 0;
  const summaryText = enablePagination ? t("pagination.summary", {
    from: data.length === 0 ? 0 : startIndex + 1,
    to: Math.min(startIndex + table.getState().pagination.pageSize, data.length),
    total: data.length,
  }) : "";


  return (
    <Box>
      <Table.Root {...tableProps}>
        <Table.Header>
          {table.getHeaderGroups().map(headerGroup => (
            <Table.Row key={headerGroup.id}>
              {headerGroup.headers.map(header => (
                <Table.ColumnHeader bg="gray.subtle" key={header.id} colSpan={header.colSpan} onClick={header.column.getToggleSortingHandler()}>
                  {header.isPlaceholder ? null : (
                    <Flex flexDirection={{ base: "column", md: "row" }} alignItems={{ base: "stretch", md: "center" }}>
                      {flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                      {/* call sort function */}
                      <Show when={isSortable}>
                        <Span mr={4}>
                          {isSortable &&
                            header.column.getCanSort() && (
                              header.column.getIsSorted() ? (
                                header.column.getIsSorted() === "desc" ? <LuChevronDown /> : <LuChevronUp />) : <LuChevronDown />)
                          }
                        </Span>
                      </Show>
                    </Flex>
                  )}
                </Table.ColumnHeader>
              ))}
            </Table.Row>
          ))}
        </Table.Header>
        <Table.Body>
          {table.getRowModel().rows.map((row) => {
            return (
              <Fragment key={row.id}>
                <Table.Row _hover={{ bg: hoverBg }}>
                  {row.getVisibleCells().map((cell) => (
                    <Table.Cell key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </Table.Cell>
                  ))}
                </Table.Row>
                {row.getIsExpanded() && renderSubComponent && (
                  <Table.Row>
                    {/* 2nd row is a custom 1 cell row */}
                    <Table.Cell colSpan={row.getVisibleCells().length}>
                      {renderSubComponent({ row })}
                    </Table.Cell>
                  </Table.Row>
                )}
              </Fragment>
            )
          })}
          {table.getRowModel().rows.length === 0 && (
            <Table.Row>
              <Table.Cell colSpan={table.getTotalSize()} textAlign="center" py={8}>
                {emptyMessage || t("noResults")}
              </Table.Cell>
            </Table.Row>
          )}
        </Table.Body>
      </Table.Root>
      {/* Footer with pagination*/}
      {enablePagination && (
        <Flex alignItems="center" justifyContent="space-between" mt={4} p={1}>
          <Text color="subtitleColor" fontSize="sm">
            {summaryText}
          </Text>
          <HStack>
            <Button size="sm" variant="outline" onClick={() => table.previousPage()} disabled={!table.getCanPreviousPage()} borderRadius="md">
              <Icon as={LuChevronLeft} />
              {t("pagination.prev")}
            </Button>
            <Button size="sm" variant="outline" onClick={() => table.nextPage()} disabled={!table.getCanNextPage()} borderRadius="md">
              {t("pagination.next")}
              <Icon as={LuChevronRight} />
            </Button>

            <SelectRoot
              size="sm"
              width="60px"
              value={[table.getState().pagination.pageSize.toString()]}
              onValueChange={(details: { value: string[] }) => table.setPageSize(Number(details.value[0]))}
              collection={pageItem}
              borderRadius="md"
            >
              <SelectTrigger>
                <SelectValueText />
              </SelectTrigger>
              <Portal>
                <SelectContent>
                  {pageItem.items.map((item) => (
                    <SelectItem item={item} key={item.value}>
                      {item.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Portal>
            </SelectRoot>

          </HStack>
        </Flex>
      )}
    </Box>
  );
}
