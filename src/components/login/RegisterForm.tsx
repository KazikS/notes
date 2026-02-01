'use client'
import { signUpWithEmail } from "@/shared/api/auth";
import { Button, Field, Flex, Input } from "@chakra-ui/react";
import { useState } from "react";

export const RegisterForm = () => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [pwd, setPwd] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);


  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    const response = await signUpWithEmail(email, pwd, name);
    if (response.error) {
      setError(response.error.message);
    }
    setIsLoading(false);
  };
  return (
    <Flex as="form" flexDirection="column" onSubmit={handleSubmit} gap={4} maxW={400} p="5">
      <Field.Root required>
        <Field.Label>имя</Field.Label>
        <Input
          placeholder="введи имя..."
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </Field.Root>
      <Field.Root required>
        <Field.Label>почта</Field.Label>
        <Input
          placeholder="введи почту..."
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </Field.Root>
      <Field.Root required>
        <Field.Label>пароль</Field.Label>
        <Input
          placeholder="введи пароль..."
          type="password"
          value={pwd}
          onChange={(e) => setPwd(e.target.value)}
        />
      </Field.Root>

      <Field.Root invalid={error ? true : false}>
        <Field.ErrorText>{error}</Field.ErrorText>
      </Field.Root>

      <Button type="submit" w="fit" loading={isLoading}>
        регистрация
      </Button>
    </Flex>
  );
};
