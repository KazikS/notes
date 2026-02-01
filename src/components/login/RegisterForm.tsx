import { Button, Field, Flex, Input } from "@chakra-ui/react";

export const RegisterForm = () => {
  return (
    <Flex flexDirection="column" gap={4} maxW={400} p="5">
      <Field.Root required>
        <Field.Label>имя</Field.Label>
        <Input placeholder="введи имя..." />
      </Field.Root>
      <Field.Root required>
        <Field.Label>почта</Field.Label>
        <Input placeholder="введи почту..." />
      </Field.Root>
      <Field.Root required>
        <Field.Label>пароль</Field.Label>
        <Input placeholder="введи пароль..." />
      </Field.Root>

      <Button type="submit" w="fit">
        регистрация
      </Button>
    </Flex>
  );
};
