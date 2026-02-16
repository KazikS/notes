"use client";
import { NoteType } from "@/shared/types";
import { dateFormat } from "@/shared/utils";
import { Button, Flex, Heading, Text } from "@chakra-ui/react";
import { useRef } from "react";
import { LuPen, LuTrash } from "react-icons/lu";

type NoteCardProps = NoteType;
export const NoteCard = ({
  title,
  content,
  created_at,
  id,
  onOpenForm,
  handleDelete,
}: NoteCardProps & {
  onOpenForm: (value: boolean, noteId: number) => void;
  handleDelete: (value: number) => void;
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const formattedDate = dateFormat(created_at);

  return (
    <Flex
      flexDirection="column"
      w="full"
      maxW="1fr"
      bg="note.cedar"
      color="brand.200"
      p="5"
      boxShadow="4px 4px 8px 0 {colors.fg}"
      ref={cardRef}
      _hover={{
        base: {},
        md: {
          scale: "1.05",
        },
      }}
      justifySelf="center"
    >
      <Flex
        w="full"
        justifyContent="space-between"
        alignItems="center"
        borderBottom="1px solid {colors.fg}"
      >
        <Text>{formattedDate}</Text>
        <Flex>
          <Button
            variant="ghost"
            rounded="full"
            w="10"
            onClick={() => onOpenForm(true, id)}
          >
            <LuPen />
          </Button>
          <Button
            variant="ghost"
            rounded="full"
            w="10"
            onClick={() => handleDelete(id)}
          >
            <LuTrash />
          </Button>
        </Flex>
      </Flex>
      <Heading>{title}</Heading>
      <Text lineClamp="5" whiteSpace="normal" wordBreak="break-word">
        {content}
      </Text>
    </Flex>
  );
};
