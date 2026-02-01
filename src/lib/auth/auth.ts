import { supabase } from "../supabase";

export const signUpWithEmail = async (email: string, password: string) => {
  const response = await supabase.auth.signUp({
    email: email,
    password: password,
  });
  return response;
};

export const signInWithEmail = async (email: string, password: string) => {
  const { data, error } = await supabase.auth.signInWithPassword({
    email: email,
    password: password,
  });
  return { data, error };
};
