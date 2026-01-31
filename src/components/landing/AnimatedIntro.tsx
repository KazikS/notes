"use client";
import MotionBox from "@/shared/ui/common/MotionBox";
import { Button, Flex } from "@chakra-ui/react";
import { useRouter } from "next/navigation";

export const AnimatedIntro = ({url}: {url: string}) => {
  const router = useRouter();
  const fadeInUp = {
    initial: { opacity: 0, y: 200 },
    animate: { opacity: 1, y: 0 },
  };
  const handleClick = () => {
    router.push(url);
  };
  return (
    <Flex flexDir="column" align="center">
      <MotionBox
        color="fg"
        fontSize="4xl"
        fontWeight="bold"
        {...fadeInUp}
        transition={{ duration: 0.8 }}
      >
        заметки
      </MotionBox>
      <MotionBox
        color="fg"
        fontSize="2xl"
        {...fadeInUp}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        запиши, пока не забыл
      </MotionBox>
      <MotionBox
        color="fg"
        fontSize="2xl"
        {...fadeInUp}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <Button mt="6" variant="primary" size="lg" onClick={handleClick}>
          Начать
        </Button>
      </MotionBox>
    </Flex>
  );
};
