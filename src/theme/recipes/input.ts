export const inputRecipe = {
  className: "chakra-input",
  base: {
    borderRadius: "2xl",
    _focus: {
      boxShadow: "4px 4px 8px 0 {colors.fg}",
    },
    _invalid: {
      border: "2px solid {colors.danger}",
      _focus: {
        boxShadow: "4px 4px 8px 0 {colors.danger}",
      },
    },
  },
};
