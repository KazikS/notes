"use client";
import { NoteForm, NoteList } from "@/components/notes";
import { AddButton } from "@/components/notes/AddButton";
import { useNotePage } from "@/shared/hooks/useNotePage";
import { useAuthStore } from "@/shared/store/auth";
import { Flex } from "@chakra-ui/react";
import { useEffect } from "react";

export default function Notes() {
  const {
    noteArray,
    setNoteArray,
    fetchNotes,
    isFormOpen,
    onOpenForm,
    onCloseForm,
    handleDelete,
    isEdit,
    handleCreateNote,
    handleUpdateNote,
    editNoteId,
    loading
  } = useNotePage();
  const userId = useAuthStore((state) => state.user?.id);

  useEffect(() => {
    fetchNotes();
  }, [userId]);

  return (
    <Flex w="full" h="fit">
      <Flex
        flexDir="column"
        py="5"
        gap={4}
        w="10/12"
        margin="auto"
        h="full"
        perspective="1000px"
      >
        <NoteList
          notes={noteArray}
          loading={loading}
          setNoteArray={setNoteArray}
          onOpenForm={onOpenForm}
          handleDelete={handleDelete}
        />
      </Flex>
      <NoteForm
        noteId={editNoteId ?? 0}
        edit={isEdit}
        isFormOpen={isFormOpen}
        onCloseForm={onCloseForm}
        onUpdate={handleUpdateNote}
        onCreate={handleCreateNote}
      />
      <AddButton onOpenForm={onOpenForm} />
    </Flex>
  );
}
