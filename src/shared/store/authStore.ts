import { create } from "zustand";

type User = {
  id: string;
  email: string;
  name: string;
};

type AuthType = {
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
