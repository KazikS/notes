import { NoteType } from "@/shared/types";
import { PostgrestError } from "@supabase/supabase-js";

export type NoteResponse = {
    data: NoteType[] | null,
    error: PostgrestError | null;
};
