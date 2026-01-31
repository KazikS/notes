import { ColorModeButton } from "@/theme/color-mode";
import { Flex, Button, Input, Field } from "@chakra-ui/react";

export default function Home() {
  return (
    <Flex
      bg="bg"
      color="fg"
      flexDir="column"
      align="center"
      justify="center"
      gap={4}
      w="10/12"
      margin="auto"
    >
      <ColorModeButton />
      Home Page
      <Button variant="primary" size="md">
        Click me
      </Button>
      <Button variant="secondary" size="md">
        Click me
      </Button>
      <Button variant="ghost" size="md">
        Click me
      </Button>
      <Field.Root invalid>
        <Field.Label px="4">Input Label</Field.Label>
        <Field.HelperText px="4">Helper text</Field.HelperText>
        <Input placeholder="Type here..." />
      </Field.Root>
    </Flex>
  );
}
