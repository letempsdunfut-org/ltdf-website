"use client";

import {
    type ExpandedState, type PaginationState, type SortingState, type Updater
} from "@tanstack/react-table";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

export type DataTableState = {
    pagination: PaginationState;
    sorting: SortingState;
    expanded: ExpandedState;
    pageItem: { label: string, value: string }[];
    setPagination: (updater: Updater<PaginationState>) => void;
    setSorting: (updater: Updater<SortingState>) => void;
    setExpanded: (updater: Updater<ExpandedState>) => void;
};

const defaultInitState: Omit<DataTableState, "setPagination" | "setSorting" | "setExpanded"> = {
    pagination: {
        pageIndex: 0,
        pageSize: 5,
    },
    sorting: [],
    expanded: {},
    pageItem: [
        { label: "5", value: "5" },
        { label: "10", value: "10" },
        { label: "25", value: "25" },
        { label: "50", value: "50" },
    ],
};

export const createDataTableStore = (tableId: string) => {
    return create<DataTableState>()(
        persist(
            (set) => ({
                ...defaultInitState,
                setPagination: (updater) => set((state) => ({
                    pagination: typeof updater === "function"
                        ? updater(state.pagination)
                        : updater
                })),
                setSorting: (updater) => set((state) => ({
                    sorting: typeof updater === "function"
                        ? updater(state.sorting)
                        : updater
                })),
                setExpanded: (updater) => set((state) => ({
                    expanded: typeof updater === "function"
                        ? updater(state.expanded)
                        : updater
                })),
            }),
            {
                name: `datatable-${tableId}`,
                storage: createJSONStorage(() => localStorage),
                partialize: (state) => ({
                    pagination: state.pagination,
                    sorting: state.sorting,
                    expand: state.expanded,
                    pageItem: state.pageItem
                }),
            }
        )
    );
};
