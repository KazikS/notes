"use client";
import { useLoginForm } from "@/shared/hooks/useLoginForm";
import { Button, Field, Flex, Input, InputGroup, Text } from "@chakra-ui/react";
import { LuEye, LuEyeOff } from "react-icons/lu";

export const LoginForm = () => {
  const {
    formData,
    loading,
    showPassword,
    errors,
    handleSubmit,
    togglePasswordVisibility,
    updateField,
  } = useLoginForm();

  const handleEmailChange = (value: string) =>
    updateField({ field: "email", value });
  const handlePasswordChange = (value: string) =>
    updateField({ field: "password", value });

  return (
    <Flex
      as="form"
      onSubmit={handleSubmit}
      flexDirection="column"
      gap={4}
      maxW={400}
      p="5"
      position="relative"
    >
      <Field.Root required>
        <Field.Label>почта</Field.Label>
        <Input
          placeholder="введи почту..."
          value={formData.email}
          onChange={(e) => handleEmailChange(e.target.value)}
          type="email"
        />
      </Field.Root>
      <Field.Root required>
        <Field.Label>пароль</Field.Label>
        <InputGroup
          endElement={
            <Button
              variant="ghost"
              w="10"
              h="10"
              rounded="full"
              m="1"
              onClick={togglePasswordVisibility}
            >
              {showPassword ? <LuEyeOff /> : <LuEye />}
            </Button>
          }
        >
          <Input
            placeholder="введи пароль..."
            value={formData.password}
            onChange={(e) => handlePasswordChange(e.target.value)}
            type={showPassword ? "text" : "password"}
          />
        </InputGroup>
      </Field.Root>

      <Field.Root invalid={errors.api ? true : false}>
        <Field.ErrorText>{errors.api}</Field.ErrorText>
      </Field.Root>

      <Button type="submit" w="fit" loading={loading}>
        войти
      </Button>

      <Flex
        flexDirection="column"
        color="brand.500"
        position="absolute"
        top="72"
      >
        <Text>тестовый аккаунт</Text>
        <Text>логин: test@test.ru</Text>
        <Text>пароль: Test123</Text>
      </Flex>
    </Flex>
  );
};
