"use client";
import { Box, Flex, Tabs, Text } from "@chakra-ui/react";
import { LoginForm } from "./LoginForm";
import { RegisterForm } from "./RegisterForm";
import { useState } from "react";
import { FaCheckCircle } from "react-icons/fa";

export const LoginTabs = () => {
  const [tabValue, setTabValue] = useState<string | null>("login");
  const [isRegistered, setIsRegistered] = useState<boolean>(false);
  return (
    <Tabs.Root
      w={{ base: "100%", md: "400px" }}
      variant="enclosed"
      value={tabValue}
      onValueChange={(e) => setTabValue(e.value)}
    >
      <Tabs.List>
        <Tabs.Trigger value="login">войти</Tabs.Trigger>
        <Tabs.Trigger value="register">регистрация</Tabs.Trigger>
      </Tabs.List>
      <Tabs.Content value="login" borderTopStartRadius="none">
        <LoginForm />
        {isRegistered && (
          <Flex align="center" paddingBottom={4} px="4">
            <Box
              color="{colors.success}"
            >
              <FaCheckCircle size={20}/>
            </Box>
            <Text mx="3">регистрация успешна, вводи данные</Text>
          </Flex>
        )}
      </Tabs.Content>
      <Tabs.Content value="register" borderTopEndRadius="none">
        <RegisterForm
          setTabValue={setTabValue}
          setIsRegistered={setIsRegistered}
        />
      </Tabs.Content>
    </Tabs.Root>
  );
};
