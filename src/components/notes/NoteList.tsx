import { NoteType } from "@/shared/types";
import { Grid } from "@chakra-ui/react";
import { NoteCard } from "./NoteCard";

type NoteListProps = {
  notes: NoteType[];
  setNoteArray: React.Dispatch<React.SetStateAction<NoteType[]>>;
};

export const NoteList = ({ notes, setNoteArray }: NoteListProps) => {
  console.log(notes);
  return (
    <Grid
      templateColumns={{
        base: "1fr",
        md: "repeat(2, 1fr)",
        lg: "repeat(3, 1fr)",
      }}
      gap="4"
    >
      {notes.map((el) => (
        <NoteCard
          key={el.id}
          title={el.title}
          content={el.content}
          created_at={el.created_at}
          id={el.id}
          setNoteArray={setNoteArray}
          by_user={el.by_user}
        />
      ))}
    </Grid>
  );
};
