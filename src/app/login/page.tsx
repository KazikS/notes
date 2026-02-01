import { LoginTabs } from "@/components/login/LoginTabs";
import { Flex } from "@chakra-ui/react";

export default function Login() {
  return (
    <Flex
      flexDir="column"
      align="center"
      gap={4}
      w="10/12"
      margin="auto"
      overflow="hidden"
      h="full"
    >
      <Flex mt="48" w="2/3" alignItems="center" justifyContent="center">
        <LoginTabs />
      </Flex>
    </Flex>
  );
}
