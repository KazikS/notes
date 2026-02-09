"use client";
import { createNote } from "@/shared/api/notes";
import { useAuthStore } from "@/shared/store/auth";
import { NoteType } from "@/shared/types";
import { Button, Dialog, Field, Input, Textarea } from "@chakra-ui/react";
import { useState } from "react";

export const NoteForm = ({
  open,
  setIsOpen,
  addNewNote,
}: {
  open: boolean;
  addNewNote: React.Dispatch<React.SetStateAction<NoteType[]>>;
  setIsOpen: (value: boolean) => void;
}) => {
  const [title, setTitle] = useState<string>("");
  const [desc, setDesc] = useState<string>("");
  const userId = useAuthStore((state) => state.user?.id);

  const handleSubmit = async (e: React.FormEvent) => {
    if (!userId) return;
    e.preventDefault();

    const response = await createNote(title, desc, userId);

    if (response?.data) {
      const noteFromDb = response.data[0];

      addNewNote((prev) => [noteFromDb, ...prev]);
      setIsOpen(false);
    }
  };

  return (
    <Dialog.Root open={open} placement="center">
      <Dialog.Positioner backdropFilter={"blur(10px)"} perspective="1000px">
        <Dialog.Backdrop onClick={() => setIsOpen(false)} />
        <Dialog.Content
          bgColor="note.caramel"
          boxShadow="0px 0px 10px 15px {colors.fg}"
        >
          <Dialog.Header>
            <Dialog.Title>заметка</Dialog.Title>
          </Dialog.Header>
          <Dialog.Body
            display="flex"
            gap="4"
            flexDirection="column"
            as="form"
            onSubmit={handleSubmit}
          >
            <Field.Root>
              <Field.Label>заголовок</Field.Label>
              <Input
                placeholder="пару слов..."
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </Field.Root>

            <Field.Root>
              <Field.Label>описание</Field.Label>
              <Textarea
                placeholder="чуть больше слов..."
                value={desc}
                onChange={(e) => setDesc(e.target.value)}
              />
            </Field.Root>

            <Button w="1/2" type="submit">записать</Button>
          </Dialog.Body>
          <Dialog.Footer />
        </Dialog.Content>
      </Dialog.Positioner>
    </Dialog.Root>
  );
};
