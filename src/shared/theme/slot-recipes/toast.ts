import { defineSlotRecipe } from "@chakra-ui/react";

export const toastSlotRecipe = defineSlotRecipe({
  className: "chakra-toast",
  slots: [
    "root",
    "title",
    "description",
    "indicator",
    "closeTrigger",
    "actionTrigger",
  ],
  base: {
    root: {
      roundedBottom: "36px",
      roundedTop: "none",
      bg: "{colors.fg}",
      color: "{colors.bg}",
      "&[data-type=error]": {
        bg: "{colors.danger}",
        color: "{colors.bg}",
      },
    },
    title: {
      fontSize: "b4",
      fontWeight: 400,
      textAlign: "center",
      margin: 0,
    },
    description: {
      fontSize: "b4",
      fontWeight: 400,
      textAlign: "center",
    },
    indicator: {
      position: "absolute",
    },
  },
});
