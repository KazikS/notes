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
        message: "ошибка создания заметки",
      },
    };
  }
};

export const selectAllNotes = async (userId: string) => {
  try {
    const { data, error } = await supabase
      .from("Notes")
      .select()
      .eq("by_user", userId);
    return { data, error };
  } catch {
    return {
      data: null,
      error: {
        message: "ошибка получения заметок",
      },
    };
  }
};

export const deleteNote = async (noteId: number) => {
  try {
    const { data, error } = await supabase
      .from("Notes")
      .delete()
      .eq("id", noteId);
      console.log(noteId);
    return { data, error };
  } catch {
    return {
      data: null,
      error: {
        message: "ошибка удаления заметки",
      },
    };
  }
};

export const updateNote = async (
  noteId: number,
  title: string,
  content: string,
) => {
  try {
    const { data, error } = await supabase
      .from("Notes")
      .update({ title, content })
      .eq("id", noteId)
      .select();
    return { data, error };
  } catch {
    return {
      data: null,
      error: {
        message: "ошибка обновления заметки",
      },
    };
  }
};