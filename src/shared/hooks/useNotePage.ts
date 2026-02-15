import { useState } from "react";
import { NoteType } from "../types";
import { useAuthStore } from "../store/auth";
import {
  createNote,
  deleteNote,
  selectAllNotes,
  updateNote,
} from "../api/notes";
import { toaster } from "../theme/toaster";

export const useNotePage = () => {
  const [noteArray, setNoteArray] = useState<NoteType[]>([]);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [loading, setLoading] = useState(false);
  const [editNoteId, setEditNoteId] = useState<number | null>(null);
  const userId = useAuthStore((state) => state.user?.id);

  const fetchNotes = async () => {
    if (userId) {
      try {
        setLoading(true);
        const response = await selectAllNotes(userId);
        if (response.error) {
          toaster.create({
            description: `ошибка ${response.error.message}`,
            type: "error",
            closable: true,
            duration: 3000,
          });

          return;
        }
        if (response?.data) {
          setNoteArray(response.data);
        }
      } finally {
        setLoading(false);
      }
    }
  };

  const handleDelete = async (noteId: number) => {
    const response = await deleteNote(noteId);
    if (response.error) {
      toaster.create({
        description: `ошибка ${response.error.message}`,
        type: "error",
        closable: true,
        duration: 3000,
      });
      return;
    }
    setNoteArray((prev) => prev.filter((note) => note.id !== noteId));
  };

  const handleUpdateNote = async (
    noteId: number,
    newTitle: string,
    newContent: string,
  ) => {
    const response = await updateNote(noteId, newTitle, newContent);
    if (response.error) {
      toaster.create({
        description: `ошибка ${response.error.message}`,
        type: "error",
        closable: true,
        duration: 3000,
      });
      return;
    }
    setNoteArray((notes) =>
      notes.map((note) =>
        note.id === noteId
          ? { ...note, title: newTitle, content: newContent }
          : note,
      ),
    );
    onCloseForm();
  };

  const handleCreateNote = async (
    title: string,
    content: string,
    userId: string,
  ) => {
    const response = await createNote(title, content, userId);
    if (response.error) {
      toaster.create({
        description: `ошибка ${response.error.message}`,
        type: "error",
        closable: true,
        duration: 3000,
      });
      return;
    }
    if (response.data) {
      const newNote = response.data[0];
      setNoteArray((notes) => [newNote, ...notes]);
      onCloseForm();
    }
  };

  const onOpenForm = (isEdit: boolean, noteId?: number) => {
    setIsEdit(isEdit);
    if (noteId) {
      setEditNoteId(noteId);
    }
    setIsFormOpen(true);
  };

  const onCloseForm = () => {
    setIsFormOpen(false);
  };

  return {
    noteArray,
    setNoteArray,
    isFormOpen,
    onOpenForm,
    onCloseForm,
    setIsFormOpen,
    fetchNotes,
    loading,
    isEdit,
    handleDelete,
    handleCreateNote,
    handleUpdateNote,
    editNoteId,
  };
};
