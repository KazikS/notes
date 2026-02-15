import { useState } from "react";
import { useAuthStore } from "../store/auth";

export const useNoteForm = ({
  onCreate,
  onUpdate,
}: {
  onCreate: (title: string, content: string, userId: string) => void;
  onUpdate: (noteId: number, title: string, content: string) => void;
}) => {
  const [title, setTitle] = useState<string>("");
  const [content, setContent] = useState<string>("");
  const userId = useAuthStore((state) => state.user?.id);

  const handleSubmit = async (
    e: React.FormEvent,
    noteId: number,
    onEdit: boolean,
  ) => {
    e.preventDefault();

    if (onEdit) {
      onUpdate(noteId, title, content);
    }
    if (!onEdit && userId) {
      onCreate(title, content, userId);
      setTitle("");
      setContent("");
    }
  };

  return {
    title,
    content,
    setTitle,
    setContent,
    handleSubmit,
  };
};
