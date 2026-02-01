import { Tabs } from "@chakra-ui/react";
import { LoginForm } from "./LoginForm";
import { RegisterForm } from "./RegisterForm";

export const LoginTabs = () => {
  return (
    <Tabs.Root defaultValue="login" maxW="800px" variant="enclosed">
      <Tabs.List>
        <Tabs.Trigger value="login">войти</Tabs.Trigger>
        <Tabs.Trigger value="register">регистрация</Tabs.Trigger>
      </Tabs.List>
      <Tabs.Content value="login" borderTopStartRadius="none">
        <LoginForm />
      </Tabs.Content>
      <Tabs.Content value="register">
        <RegisterForm />
      </Tabs.Content>
    </Tabs.Root>
  );
};
