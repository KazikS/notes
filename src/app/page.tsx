"use client";
import { AnimatedIntro } from "@/components/landing/AnimatedIntro";
import { useAuthStore } from "@/shared/store/auth";
import { toaster } from "@/shared/theme/toaster";
import { Button, Flex } from "@chakra-ui/react";

export default function Home() {
  const isAuth = useAuthStore((state) => state.isAuth);
  const startUrl = isAuth ? "/notes" : "/login";
  return (
    <Flex
      flexDir="column"
      align="center"
      justify="center"
      gap={4}
      w="10/12"
      margin="auto"
      overflow="hidden"
      h="full"
    >
      <AnimatedIntro url={startUrl} />
      <Button
        onClick={() =>
          toaster.create({
            description: "File saved successfully",
            type: "error",
            closable: true,
            duration: 5000,
          })
        }
      >
        вызвать тостер
      </Button>
    </Flex>
  );
}
