'use client'
import { Button, Field, Flex, Input } from "@chakra-ui/react";
import { useState } from "react";
import { signInWithEmail } from "@/lib/auth";

export const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    const { error } = await signInWithEmail(email, pwd);
    console.log(error)

    if (error) {
      setError(error.message);
    } else {
      // тут дальше редирект / закрытие модалки / обновление auth-store
      console.log("login success");
    }

    setLoading(false);
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
          type="password"
          placeholder="введи пароль..."
          value={pwd}
          onChange={(e) => setPwd(e.target.value)}
        />
      </Field.Root>

      <Button type="submit" w="fit" loading={loading}>
        войти
      </Button>
    </Flex>
  );
};
