"use client";

import { create } from "zustand";
import useUsersManagementStore from "@/shared/stores/users/users-management-store";
import { UserBase, UserBaseTypes } from "@/types/users";


type UsersEditingState = {
  rowId: string | null;
  userRow: Record<string, UserBase>;
  startEdit: (rowId: string, initial: UserBase) => void;
  handleUserModifications: (rowId: string, field: string, value: string) => void;
  cancelEdit: () => void;
  getUserModifications: <T extends UserBaseTypes> (rowId: string, field: keyof UserBase, defaultValue: T) => T;

};

export const useEditUser = create<UsersEditingState>()((set, get) => ({
    rowId: null,
    userRow: {},

    startEdit: (rowId, initialValues) =>
      set((state) => ({
        rowId,
        userRow: { ...state.userRow, [rowId]: { ...initialValues } },
      })),

    handleUserModifications: (rowId, field, value) =>
      set((state) => ({
        userRow: {
          ...state.userRow,
          [rowId]: { ...state.userRow[rowId], [field]: value },
        },
      })),

    cancelEdit: () =>
      set((state) => {
        const currentId = state.rowId;
        const newUserRow = { ...state.userRow };
        const { rows, setRows } = useUsersManagementStore.getState();

        if (currentId) {
          delete newUserRow[currentId];

          const isNewAdded = rows.find((r) => r.id === currentId);
          if (isNewAdded && !isNewAdded.email) {
            setRows(rows.filter((r) => r.id !== currentId));
          }
        }

        return {
          rowId: null,
          userRow: newUserRow
        };
      }),

    getUserModifications: <T extends UserBaseTypes>(rowId: string, field: keyof UserBase, defaultValue: T): T => {
      const state = get();
      const row = state.userRow[rowId];
      return (row?.[field] as T) ?? defaultValue;
    },
  })
);


