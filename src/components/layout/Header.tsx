"use client";
import { ColorModeButton, useColorMode } from "@/shared/theme/color-mode";
import { Box, Button, Flex, Text } from "@chakra-ui/react";
import Image from "next/image";
import { useEffect, useState } from "react";

export const Header = () => {
  const { colorMode } = useColorMode();
  const [mounted, setMounted] = useState(false);
  const isAuth = true;
  const btnText = isAuth ? "Профиль" : "Войти";

  useEffect(() => {
    // eslint-disable-next-line
    setMounted(true);
  }, []);
  return (
    <Box w="full" borderBottom="1px solid {colors.fg}">
      <Flex
        maxW="1200px"
        justify="space-between"
        align="center"
        margin="auto"
        p={4}
        w="full"
      >
        <Text fontSize={{ base: "md", md: "2xl" }}>заметки</Text>
        {mounted && (
          <Box display={{ base: "none", md: "block" }}>
            <Image
              src={`/logo-${colorMode}.svg`}
              alt=""
              width={150}
              height={150}
            />
          </Box>
        )}
        <Flex gap={4} alignItems="center">
          <Button variant="primary" size={{ base: "sm", md: "md" }}>
            {btnText}
          </Button>
          <ColorModeButton />
        </Flex>
      </Flex>
    </Box>
  );
};
