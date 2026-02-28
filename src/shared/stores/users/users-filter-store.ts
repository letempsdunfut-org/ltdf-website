import { create } from "zustand";
import { persist } from "zustand/middleware";
import { mapToFilterItems } from "@/shared/utils";
import { allRoles } from "@/types/roles";

export type FilterItemsProps = {
  label: string
  value: string
}

type UserFilterItems = {
  roles: FilterItemsProps[]
}

type FilterKeys = "roleFilter";

type UserFilterState = {
  filters: {
    roleFilter: string | null;
  };
  userItems: UserFilterItems
  loading: boolean
  error: string | null
  fetchUserFilterItems: () => Promise<void>
  setFilter: (key: FilterKeys, value: string | null) => void;
  resetFilters: () => void;
};

const useUserFilterStore = create<UserFilterState>()(
  persist(
    (set) => ({
      userItems: {
        roles: [],
      },
      loading: false,
      error: null,
      filters: {
        roleFilter: null,
      },
      setFilter: (key, value) =>
        set((state) => ({
          filters: {
            ...state.filters,
            [key]: value,
          },
        })),
      resetFilters: () =>
        set({
          filters: {
            roleFilter: null,
          },
        }),
      fetchUserFilterItems: async () => {
        set({ loading: true, error: null })
        const roles = mapToFilterItems([...allRoles]);
        set({
          userItems: {
            roles,
          },
          loading: false,
        })
      },
    }),
    {
      name: "user-filter",
      partialize: (state) => ({ filters: state.filters }),
    }
  )
);

export { useUserFilterStore };
