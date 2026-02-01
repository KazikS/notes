'use client'
import { signInWithEmail } from "@/lib/auth";
import { useAuthStore } from "@/shared/store/authStore";
import { Button, Field, Flex, Input } from "@chakra-ui/react";
import { useState } from "react";

export const LoginForm = () => {
  const [email, setEmail] = useState<string>("");
  const [pwd, setPwd] = useState<string>("");
  const [error, setError] = useState<string>("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const response = await signInWithEmail(email, pwd);
    if (response.error) {
      setError(response.error.message);
    }
  };

  return (
    <Flex
      as="form"
      onSubmit={handleSubmit}
      flexDirection="column"
      gap={4}
      maxW={400}
      p="5"
    >
      <Field.Root required>
        <Field.Label>почта</Field.Label>
        <Input
          placeholder="введи почту..."
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </Field.Root>
      <Field.Root required>
        <Field.Label>пароль</Field.Label>
        <Input
          placeholder="введи пароль..."
          value={pwd}
          onChange={(e) => setPwd(e.target.value)}
        />
      </Field.Root>

      <Field.Root>
        <Field.ErrorText>{error}</Field.ErrorText>
      </Field.Root>

      <Button type="submit" w="fit">
        войти
      </Button>
    </Flex>
  );
};
