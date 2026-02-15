"use client";
import { ColorModeButton, useColorMode } from "@/shared/theme/color-mode";
import { Box, Button, Flex, Text } from "@chakra-ui/react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useAuthStore } from "@/shared/store/auth/authStore";
import { signOut } from "@/shared/api/auth";

export const Header = () => {
  const { colorMode } = useColorMode();
  const [mounted, setMounted] = useState(false);
  const router = useRouter();
  const isAuth = useAuthStore().isAuth;
  const btnText = isAuth ? "выйти" : "войти";
  const userName = useAuthStore((state) => state.user?.name);

  const handleLogoClick = () => {
    router.push("/");
  };

  const handleBtnClick = () => {
    if (isAuth) {
      signOut();
      router.push("/");
    } else {
      router.push("/login");
    }
  };

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
        <Flex flexDirection="column">
          <Text
            fontSize={{ base: "md", md: "2xl" }}
            cursor="pointer"
            onClick={handleLogoClick}
          >
            заметки
          </Text>
          <Text>{userName ? userName : "гость"}</Text>
        </Flex>
        {mounted && (
          <Box
            display={{ base: "none", md: "block" }}
            cursor="pointer"
            onClick={handleLogoClick}
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
          <Button
            variant="primary"
            size={{ base: "sm", md: "md" }}
            onClick={handleBtnClick}
          >
            {btnText}
          </Button>
          <ColorModeButton />
        </Flex>
      </Flex>
    </Box>
  );
};
