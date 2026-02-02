"use client";
import { signInWithEmail } from "@/shared/api/auth";
import { Button, Field, Flex, Input } from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import { useState } from "react";

export const LoginForm = () => {
  const [email, setEmail] = useState<string>("");
  const [pwd, setPwd] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    const response = await signInWithEmail(email, pwd);
    if (response.error) {
      setError(response.error.message);
      setIsLoading(false);
      return;
    }
    router.push('/notes');
    setIsLoading(false);
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
          type="email"
        />
      </Field.Root>
      <Field.Root required>
        <Field.Label>пароль</Field.Label>
        <Input
          placeholder="введи пароль..."
          value={pwd}
          onChange={(e) => setPwd(e.target.value)}
          type="password"
        />
      </Field.Root>

      <Field.Root invalid={error ? true : false}>
        <Field.ErrorText>{error}</Field.ErrorText>
      </Field.Root>

      <Button type="submit" w="fit" loading={isLoading}>
        войти
      </Button>
    </Flex>
  );
};
