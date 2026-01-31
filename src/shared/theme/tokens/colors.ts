import { defineTokens } from "@chakra-ui/react";

export const colors = defineTokens.colors({
  brand: {
    50: { value: "#FBF0E6" }, // самый светлый - кремовый
    100: { value: "#F5E6D8" },
    200: { value: "#E5C8AA" }, // песочный
    300: { value: "#D4B08C" },
    400: { value: "#C19673" }, // терракотовый светлый
    500: { value: "#A67D5D" },
    600: { value: "#7C5840" }, // коричневый средний
    700: { value: "#5C4230" },
    800: { value: "#3D2C20" },
    900: { value: "#261C1A" }, // тёмно-коричневый
    950: { value: "#1A1210" }, // почти чёрный тёплый
  },
});
