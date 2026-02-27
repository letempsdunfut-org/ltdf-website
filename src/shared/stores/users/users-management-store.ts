"use client";


import { create } from "zustand";
import { persist } from "zustand/middleware";
import { toaster } from "@/components/ui/toaster";
import {
  addUser, deleteUser, getUsers, updateUser
} from "@/shared/actions/user-management-actions";
import { showCommonError } from "@/shared/utils";
import { User, UserBase } from "@/types/users";

export type UserRowsState = {
  rows: User[];
  loading: boolean;
  error: string | null;
  load: () => Promise<void>;
  addUser: (user: User) => Promise<void>;
  updateUser: (user: User) => Promise<void>;
  deleteUser: (userId: string) => Promise<void>;
  setRows: (rows: User[]) => void;
};

export const useUsersManagementStore = create<UserRowsState>()(
  persist(
    (set, get) => ({
      rows: [],
      loading: false,
      error: null,

      setRows: (rows) => set({ rows }),

      load: async () => {
        set({ loading: true, error: null });
        try {
          const data = await getUsers();
          set({ rows: data, loading: false });
        } catch (error: unknown) {
          const message = error instanceof Error ? error.message : String(error);
          set({ error: message, loading: false });
          showCommonError("common.toaster.users.error.loading");
        }
      },

      addUser: async (user: User) => {
        // In case of error, don't keep editing row
        const prev = get().rows.filter (r => r.email)
        const row = prev.find(r => r.id === user.id);

        let optimistic;
        if (row) {
          optimistic = prev.map(r => r.id === user.id ? user : r);
        } else {
          optimistic = [user, ...prev];
        }
        set({ rows: optimistic });

        if (user.email) {
          try {
            const createdUser = await addUser(mapUserBase(user));
            // Update user in table
            const updatedRows = get().rows.map(r => {
                if (r.id === user.id) {
                    return createdUser;
                }
                return r;
            });

            set({ rows: updatedRows });

            toaster.success({
              duration: 5000,
              title: "common.toaster.users.addUser.title",
              description: "common.toaster.users.addUser.description",
              closable: true,
            });
          } catch (error: unknown) {
            set({ rows: prev });
            const errorMessage = (error instanceof Error && error.name === "DuplicateUserError")
             ? "common.toaster.users.error.duplicateUser"
             : "common.toaster.users.error.addUser";
            showCommonError(errorMessage);
          }
        }
      },

      updateUser: async (user: User) => {
        const prev = get().rows;
        const row = prev.find(r => r.id === user.id);
        if (!row) return;

        const optimistic = prev.map(r => r.id === user.id ? user : r);
        set({ rows: optimistic });

        try {
          await updateUser(user);
          toaster.success({
            duration: 5000,
            title: "common.toaster.users.updateUser.title",
            description: "common.toaster.users.updateUser.description",
            closable: true,
          });
        } catch (error: unknown) {
          set({ rows: prev });
          showCommonError("common.toaster.users.error.updateUser");
          throw error;
        }
      },

      deleteUser: async (userId: string) => {
        const prev = get().rows;
        const user = prev.find(r => r.id === userId);
        if (!user) return;

        const optimistic = prev.filter(r => r.id !== userId);
        set({ rows: optimistic });

        try {
          await deleteUser(userId);
          toaster.success({
            duration: 5000,
            title: "common.toaster.users.deleteUser.title",
            description: "common.toaster.users.deleteUser.description",
            closable: true,
          });
        } catch (error: unknown) {
          set({ rows: prev });
          showCommonError("common.toaster.users.error.deleteUser");
          throw error;
        }
      },
    }),
    {
      name: "user.rows",
      partialize: (state) => ({
        rows: state.rows,
      }),
    }
  )
);

function mapUserBase(user: User) : UserBase {
  const {
    name, email, role
  } = user;
  return {
    name, email, role
  } satisfies UserBase;
}

export default useUsersManagementStore;
