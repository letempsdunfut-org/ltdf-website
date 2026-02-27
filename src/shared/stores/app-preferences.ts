"use client";

import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import { Locale } from "@/i18n/routing";


export type AppPreferencesState = {
  locale: Locale;
  isSidebarCollapsed: boolean;
  usersDisplayCount: number;
  setLocale: (locale: Locale) => void;
  setCollapsed: (collapsed: boolean) => void;
  setUsersDisplayCount: (count: number) => void;
  toggleCollapsed: () => void;
};

const defaultState: Pick<AppPreferencesState, "locale" |"usersDisplayCount" | "isSidebarCollapsed"> = {
  locale: Locale.FR_CA,
  usersDisplayCount: 5,
  isSidebarCollapsed: false,
};

export const useAppPreferences = create<AppPreferencesState>()(
  persist(
    (set, get) => ({
      ...defaultState,
      setLocale: (locale) => set({ locale }),
      setCollapsed: (collapsed) => set({ isSidebarCollapsed: collapsed }),
      setUsersDisplayCount: (usersCount) => set({ usersDisplayCount: usersCount }),
      toggleCollapsed: () => set({ isSidebarCollapsed: !get().isSidebarCollapsed }),
    }),
    {
      name: "app.preferences",
      storage: createJSONStorage(() => localStorage),
      partialize: (state) => ({
        locale: state.locale,
        usersDisplayCount: state.usersDisplayCount,
        isSidebarCollapsed: state.isSidebarCollapsed,
      }),
    }
  )
);

export default useAppPreferences;
