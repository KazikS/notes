"use client";
import { NoteForm, NoteList } from "@/components/notes";
import { AddButton } from "@/components/notes/AddButton";
import { selectAllNotes } from "@/shared/api/notes";
import { NoteType } from "@/shared/types";
import { Flex } from "@chakra-ui/react";
import { useEffect, useState } from "react";

export default function Notes() {
  const [noteArray, setNoteArray] = useState<NoteType[]>([]);
  const [isFormOpen, setIsFormOpen] = useState(false);
  useEffect(() => {
    const fetchNotes = async () => {
      const data = await selectAllNotes();
      if (data?.data) {
        setNoteArray(data.data);
      }
    };
    fetchNotes();
  }, []);
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
        <NoteList notes={noteArray} setNoteArray={setNoteArray}/>
      </Flex>
      <NoteForm addNewNote={setNoteArray} open={isFormOpen} setIsOpen={setIsFormOpen}/>
      <AddButton setIsOpen={setIsFormOpen} />
    </Flex>
  );
}
