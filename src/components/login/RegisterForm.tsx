"use client";
import { useRegisterForm } from "@/shared/hooks/useRegisterForm";
import { Button, Field, Flex, Input, InputGroup } from "@chakra-ui/react";
import { LuEye, LuEyeOff } from "react-icons/lu";

export const RegisterForm = ({
  setTabValue,
  setIsRegistered,
}: {
  setTabValue: (value: string) => void;
  setIsRegistered: (value: boolean) => void;
}) => {
  const {
    formData,
    errors,
    isLoading,
    showPassword,
    updateField,
    handleSubmit,
    togglePasswordVisibility,
  } = useRegisterForm({ setTabValue, setIsRegistered });

  const handleNameChange = (value: string) =>
    updateField({ field: "name", value });
  const handleEmailChange = (value: string) =>
    updateField({ field: "email", value });
  const handlePasswordChange = (value: string) =>
    updateField({ field: "password", value });

  return (
    <Flex
      as="form"
      flexDirection="column"
      onSubmit={handleSubmit}
      gap={4}
      maxW={400}
      p="5"
    >
      <Field.Root required invalid={!!errors.name}>
        <Field.Label>имя</Field.Label>
        <Input
          placeholder="введи имя..."
          value={formData.name}
          onChange={(e) => handleNameChange(e.target.value)}
        />
        {errors.name && <Field.ErrorText>{errors.name}</Field.ErrorText>}
      </Field.Root>
      <Field.Root required invalid={!!errors.email}>
        <Field.Label>почта</Field.Label>
        <Input
          placeholder="введи почту..."
          type="email"
          value={formData.email}
          onChange={(e) => handleEmailChange(e.target.value)}
        />
        {errors.email && <Field.ErrorText>{errors.email}</Field.ErrorText>}
      </Field.Root>
      <Field.Root required invalid={!!errors.password}>
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
            type={showPassword ? "text" : "password"}
            value={formData.password}
            onChange={(e) => {
              handlePasswordChange(e.target.value);
            }}
          />
        </InputGroup>
        {errors.password ? (
          <Field.ErrorText>{errors.password}</Field.ErrorText>
        ) : (
          <Field.HelperText marginLeft="2">
            Пароль должен быть не короче 6 символов, иметь заглавные и строчные
            латинские буквы
          </Field.HelperText>
        )}
      </Field.Root>

      {errors.api && (
        <Field.Root invalid={!!errors.api}>
          <Field.ErrorText>{errors.api}</Field.ErrorText>
        </Field.Root>
      )}

      <Button type="submit" w="fit" loading={isLoading}>
        регистрация
      </Button>
    </Flex>
  );
};
