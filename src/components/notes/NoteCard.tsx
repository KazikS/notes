"use client";
import { deleteNote } from "@/shared/api/notes";
import { NoteType } from "@/shared/types";
import { dateFormat } from "@/shared/utils";
import { Button, Flex, Heading, Text } from "@chakra-ui/react";
import { useRef, useState } from "react";
import { LuTrash } from "react-icons/lu";

type NoteCardProps = NoteType & {
  setNoteArray: React.Dispatch<React.SetStateAction<NoteType[]>>;
};

export const NoteCard = ({
  title,
  content,
  created_at,
  id,
  setNoteArray,
}: NoteCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const formattedDate = dateFormat(created_at);

  const handleDelete = async () => {
    const response = await deleteNote(id);
    setNoteArray((prev) => prev.filter((e) => e.id !== id));
    return response;
  };

  const onMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (cardRef.current) {
      const rect = cardRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const rotateY = ((x - centerX) / centerX) * 10;
      const rotateX = ((y - centerY) / centerY) * 10;
      setTilt({ x: rotateX, y: rotateY });
    }
  };

  return (
    <Flex
      flexDirection="column"
      w="full"
      maxH="md"
      bg="note.cedar"
      color="brand.200"
      p="5"
      boxShadow="4px 4px 8px 0 {colors.fg}"
      ref={cardRef}
      onMouseMove={(e) => {
        onMouseMove(e);
      }}
      _hover={{
        scale: "1.05",
      }}
      onMouseLeave={() => setTilt({ x: 0, y: 0 })}
      transform={`rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`}
      transition="all 0.5s"
      justifySelf="center"
    >
      <Flex w="full" justifyContent="space-between" alignItems="center">
        <Text>{formattedDate}</Text>
        <Button variant="ghost" rounded="full" onClick={handleDelete}>
          <LuTrash />
        </Button>
      </Flex>
      <Heading>{title}</Heading>
      <Text lineClamp="5">{content}</Text>
    </Flex>
  );
};
