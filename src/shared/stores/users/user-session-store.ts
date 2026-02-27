"use client";

import type { Session } from "next-auth";
import { getSession, signOut } from "next-auth/react";
import { create } from "zustand";

export type UserSessionState = {
  session: Session | null;
  isLoading: boolean;
  isAuthenticated: boolean;
  userName: string;
  userEmail: string;
  userRole: string;
  initialize: () => Promise<void>;
  setSession: (session: Session | null) => void;
  logout: () => Promise<void>;
};

const getComputedValues = (session: Session | null) => ({
  userName: session?.user?.name ?? "",
  userEmail: session?.user?.email ?? "",
  userRole: session?.jwt?.role as string ?? "",
  isAuthenticated: !!session,
});

export const useUserSessionStore = create<UserSessionState>()((set) => ({
  session: null,
  isLoading: true,
  isAuthenticated: false,
  userName: "",
  userEmail: "",
  userRole: "",

  initialize: async () => {
    set({ isLoading: true });
    try {
      const session = await getSession();
      set({
        session,
        isLoading: false,
        ...getComputedValues(session),
      });
    } catch {
      set({
        session: null,
        isLoading: false,
        ...getComputedValues(null),
      });
    }
  },

  setSession: (session) => {
    set({
      session,
      ...getComputedValues(session),
    });
  },

  logout: async () => {
    set({ isLoading: true });
    await signOut();
    set({
      session: null,
      isLoading: false,
      ...getComputedValues(null),
    });
  },
}));

export default useUserSessionStore;

