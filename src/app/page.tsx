import { AnimatedIntro } from "@/components/landing/AnimatedIntro";
import { Flex } from "@chakra-ui/react";

export default function Home() {
  const isAuth = true;
  const startUrl = isAuth ? "/notes" : "/login";
  return (
    <Flex
      bg="bg"
      color="fg"
      flexDir="column"
      align="center"
      justify="center"
      gap={4}
      w="10/12"
      margin="auto"
      h="70dvh"
      overflow="hidden"
    >
      <AnimatedIntro url={startUrl} />
    </Flex>
  );
}
