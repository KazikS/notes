import { Button } from "@chakra-ui/react";
import { LuPlus } from "react-icons/lu";

export const AddButton = ({
  setIsOpen,
}: {
  setIsOpen: (value: boolean) => void;
}) => {
  return (
    <Button
      onClick={() => setIsOpen(true)}
      position="absolute"
      bottom="5"
      right="5"
      rounded="full"
      w="10"
      h="10"
      _hover={{
        scale: '1.05'
      }}
    >
      <LuPlus />
    </Button>
  );
};
