import { defineRecipe } from "@chakra-ui/react";

export const inputRecipe = defineRecipe({
  className: "chakra-input",
  variants: {
    variant: {
      flushed: {
        borderRadius: "2xl",
        border: "2px solid {colors.fg}",
        px: "2",
        _placeholder: {
          color: '{colors.primary}',
        },
        _focus: {
          boxShadow: "4px 4px 8px 0 {colors.fg}",
          border: "2px solid {colors.fg}",
        },
        _invalid: {
          border: "2px solid {colors.danger}",
          _focus: {
            boxShadow: "4px 4px 8px 0 {colors.danger}",
          },
        },
      },
    },
  },
  defaultVariants: {
    variant: "flushed",
  },
});
