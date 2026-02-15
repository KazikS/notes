import { createBrowserClient } from "@supabase/ssr";

export const supabase = createBrowserClient(
  process.env.NEXT_PUBLIC_PROJ_URL as string,
  process.env.NEXT_PUBLIC_ANON_KEY as string,
);