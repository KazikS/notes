import { Button } from "@chakra-ui/react";
import { LuPlus } from "react-icons/lu";

export const AddButton = ({
  onOpenForm,
}: {
  onOpenForm: (value: boolean) => void;
}) => {
  return (
    <Button
      onClick={() => onOpenForm(false)}
      position="absolute"
      bottom="5"
      right="5"
      rounded="full"
      w="10"
      h="10"
      _hover={{
        scale: "1.05",
      }}
    >
      <LuPlus />
    </Button>
  );
};
