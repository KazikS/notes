import { defineRecipe } from "@chakra-ui/react";


export const buttonRecipe = defineRecipe({
    base: {
        rounded: '2xl',
        padding: '4',
        cursor: 'pointer',
    },
    variants: {
        size: {
            sm: {
                fontSize: 'sm',
            },
            md: {
                fontSize: 'md',
            },
            lg: {
                fontSize: 'lg',
            }
        },
        variant: {
            primary: {
                bg: "fg",
                color: "bg",
                _hover: {
                    bg: 'bg',
                    color: 'fg',
                    border: '1px solid {colors.fg}',
                }
            },
            secondary: {
                bg: "bg",
                color: "fg",
            },
            ghost: {
                color: "fg",
                _hover: {
                    color: 'bg',
                    bg: 'fg',
                }
            }
        }
    },
    defaultVariants: {
        variant: "primary",
        size: 'md',
    }
})