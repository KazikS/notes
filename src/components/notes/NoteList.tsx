import { NoteType } from "@/shared/types";
import { Grid, Skeleton, Text } from "@chakra-ui/react";
import { NoteCard } from "./NoteCard";

type NoteListProps = {
  notes: NoteType[];
  loading: boolean;
  setNoteArray: React.Dispatch<React.SetStateAction<NoteType[]>>;
  onOpenForm: (value: boolean, noteId: number) => void;
  handleDelete: (value: number) => void;
};

export const NoteList = ({
  notes,
  loading,
  setNoteArray,
  onOpenForm,
  handleDelete,
}: NoteListProps) => {
  console.log(loading)

  if (notes.length === 0 && !loading) {
    return (
      <Grid templateColumns="1fr" justifyItems="center">
        <Text fontSize="4xl">еще ничего не записано</Text>
      </Grid>
    );
  }

  return (
    <Grid
      templateColumns={{
        base: "1fr",
        md: "repeat(2, 1fr)",
        lg: "repeat(3, 1fr)",
      }}
      gap="4"
    >
      {loading
        ? Array.from({ length: 5 }, (_, key) => <Skeleton key={key} w="full" h="20" bgColor="secondary"/>)
        : notes.map((el) => (
            <NoteCard
              key={el.id}
              title={el.title}
              content={el.content}
              created_at={el.created_at}
              id={el.id}
              setNoteArray={setNoteArray}
              by_user={el.by_user}
              onOpenForm={onOpenForm}
              handleDelete={handleDelete}
            />
          ))}
    </Grid>
  );
};
