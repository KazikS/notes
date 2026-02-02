"use client";
import { supabase } from "@/lib";
import { ReactNode, useEffect } from "react";
import { useAuthStore } from "./authStore";

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const setIsAuth = useAuthStore((state) => state.setIsAuth);
  const setUser = useAuthStore((state) => state.setUser);
  useEffect(() => {
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((event, session) => {
      if (session) {
        setIsAuth(true);
        setUser({
          id: session.user.id,
          email: session.user.email!,
          name: session.user.user_metadata.name,
        });
      } else {
        setIsAuth(false);
        setUser(null);
      }
    });

    return () => subscription.unsubscribe();
  }, []);
  return <>{children}</>;
};
