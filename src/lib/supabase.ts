import { createClient } from "@supabase/supabase-js";

export const supabase = createClient(
  process.env.NEXT_PUBLIC_PROJ_URL as string,
  process.env.NEXT_PUBLIC_ANON_KEY as string,
);
