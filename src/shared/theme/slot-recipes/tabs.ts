import { defineSlotRecipe } from "@chakra-ui/react";

export const tabsSlotRecipe = defineSlotRecipe({
  slots: ["root", "list", "trigger", "content"],
  variants: {
    variant: {
      enclosed: {
        trigger: {
          color: "primary",
          mb: "-2px",
          _selected: {
            border: "2px solid {colors.fg}",
            borderTopRadius: "2xl",
            borderBottomEndRadius: "0",
            borderBottomStartRadius: "0",
            borderBottom: "none",
            color: "fg",
            boxShadow: "none",
          },
        },
        list: { p: "0", display: 'flex', justifyContent: 'space-between'},
        content: {
          border: "2px solid {colors.fg}",
          borderRadius: "2xl",
        },
      },
    },
  },
});
