import { createSystem, defaultConfig, defineConfig } from "@chakra-ui/react";
import { semanticTokens } from "./semantic-tokens";
import { recipes } from "./recipes";
import { tokens } from "./tokens";

export const config = defineConfig({
  theme: {
    semanticTokens,
    tokens,
    recipes,
  },
});

export const system = createSystem(defaultConfig, config);
