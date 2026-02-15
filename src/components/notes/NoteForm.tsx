"use client";
import { useNoteForm } from "@/shared/hooks/useNoteForm";
import { Button, Dialog, Field, Input, Textarea } from "@chakra-ui/react";

export const NoteForm = ({
  edit,
  noteId,
  isFormOpen,
  onCloseForm,
  onUpdate,
  onCreate,
}: {
  edit: boolean;
  noteId: number;
  isFormOpen: boolean;
  onCloseForm: () => void;
  onUpdate: (noteId: number, title: string, content: string) => void;
  onCreate: (title: string, content: string, userId: string) => void;
}) => {
  const { setTitle, setContent, handleSubmit, title, content } = useNoteForm({
    onCreate,
    onUpdate,
  });

  return (
    <Dialog.Root open={isFormOpen} placement="center">
      <Dialog.Positioner backdropFilter={"blur(10px)"} perspective="1000px">
        <Dialog.Backdrop onClick={() => onCloseForm()} />
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
            onSubmit={(e) => handleSubmit(e, noteId, edit)}
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
                value={content}
                onChange={(e) => setContent(e.target.value)}
              />
            </Field.Root>

            <Button w="1/2" type="submit">
              записать
            </Button>
          </Dialog.Body>
          <Dialog.Footer />
        </Dialog.Content>
      </Dialog.Positioner>
    </Dialog.Root>
  );
};
