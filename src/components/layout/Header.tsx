"use client";
import { ColorModeButton, useColorMode } from "@/shared/theme/color-mode";
import { Box, Button, Flex, Text } from "@chakra-ui/react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useAuthStore } from "@/shared/store/authStore";

export const Header = () => {
  const { colorMode } = useColorMode();
  const [mounted, setMounted] = useState(false);
  const router = useRouter();
  const isAuth = useAuthStore().isAuth;
  console.log(isAuth);
  const btnText = isAuth ? "профиль" : "войти";

  const handleClick = () => {
    router.push("/");
  };

  const handleBtnClick = () => {
    router.push(`${isAuth ? '/' : '/login'}`)
  }

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
        h={{ base: "52px", md: "80px" }}
      >
        <Text
          fontSize={{ base: "md", md: "2xl" }}
          cursor="pointer"
          onClick={handleClick}
        >
          заметки
        </Text>
        {mounted && (
          <Box
            display={{ base: "none", md: "block" }}
            cursor="pointer"
            onClick={handleClick}
          >
            <Image
              src={`/logo-${colorMode}.svg`}
              alt=""
              width={150}
              height={150}
            />
          </Box>
        )}
        <Flex gap={4} alignItems="center">
          <Button variant="primary" size={{ base: "sm", md: "md" }} onClick={handleBtnClick}>
            {btnText}
          </Button>
          <ColorModeButton />
        </Flex>
      </Flex>
    </Box>
  );
};
