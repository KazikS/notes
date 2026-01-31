import { defineSemanticTokens } from "@chakra-ui/react";

const colors = defineSemanticTokens.colors({
    bg: {
        value: { base: '{colors.brand.50}', _dark: '{colors.brand.900}' }
    },
    fg: {
        value: { base: '{colors.brand.700}', _dark: '{colors.brand.100}' }
    },
    primary: {
        value: { base: '{colors.brand.500}', _dark: '{colors.brand.300}' }
    },
    secondary: {
        value: { base: '{colors.brand.300}', _dark: '{colors.brand.500}' }
    },
    danger: {
        value: { base: '#C45C4A', _dark: '#E07A68' }
    }
});

export { colors };