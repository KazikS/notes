import { supabase } from "@/lib";

export const createNote = async (
  title: string,
  description: string,
  userId: string,
) => {
  try {
    const { data, error } = await supabase
      .from("Notes")
      .insert({
        title: title,
        content: description,
        by_user: userId,
      })
      .select();
    return { data, error };
  } catch {
    return {
      data: null,
      error: {
        message: 'ошибка создания заметки'
      }
    };
  }
};

export const selectAllNotes = async () => {
  try {
    const { data, error } = await supabase.from("Notes").select();
    return { data, error };
  } catch {
    return {
      data: null,
      error: {
        message: 'ошибка получения заметок'
      }
    };
  }
};

export const deleteNote = async (noteId: number) => {
  try {
    const { data, error } = await supabase
      .from("Notes")
      .delete()
      .eq("id", noteId);
    return { data, error };
  } catch {
         return {
      data: null,
      error: {
        message: 'ошибка удаления заметки'
      }
    };
  }
};
