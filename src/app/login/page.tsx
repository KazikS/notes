import { LoginTabs } from "@/components/login/LoginTabs";
import { Box, Flex } from "@chakra-ui/react";

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
      <Box mt="48" w="1/2">
        <LoginTabs />
      </Box>
    </Flex>
  );
}
