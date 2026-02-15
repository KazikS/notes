import { supabase } from "@/lib/supabase";

export const signUpWithEmail = async (
  email: string,
  password: string,
  name: string,
) => {
  try {
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          name,
        },
      },
    });
    return { data, error };
  } catch {
    return {
      data: null,
      error: {
        message: `Сервер недоступен`,
      },
    };
  }
};

export const signInWithEmail = async (email: string, password: string) => {
  try {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    return { data, error };
  } catch {
    return {
      data: null,
      error: {
        message: `Сервер недоступен`,
      },
    };
  }
};

export const signOut = async () => {
  try {
    const { error } = await supabase.auth.signOut({ scope: "local" });
    return error;
  } catch {
    return {
      error: {
        message: "Ошибка разлогина",
      },
    };
  }
};
