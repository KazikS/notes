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
  } catch (error) {
    console.log(JSON.stringify(error, null, 2));
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
  } catch (error) {
    console.log(JSON.stringify(error, null, 2));
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
  } catch (error) {
    console.log(JSON.stringify(error, null, 2));
    return {
      data: null,
      error: {
        message: "Ошибка разлогина",
      },
    };
  }
};
