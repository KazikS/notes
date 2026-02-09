import { User } from "@/shared/types/auth";
import { create } from "zustand";

export type AuthType = {
  isAuth: boolean;
  setIsAuth: (value: boolean) => void;
  user: User | null;
  setUser: (value: User | null) => void;
};

export const useAuthStore = create<AuthType>((set) => ({
  isAuth: false,
  setIsAuth: (value) => set(() => ({ isAuth: value })),
  user: null,
  setUser: (user) => set(() => ({ user })),
}));
