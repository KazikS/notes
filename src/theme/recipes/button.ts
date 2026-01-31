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
            },
            secondary: {
                bg: "bg",
                color: "fg",
            },
            ghost: {
                color: "fg",
            }
        }
    },
    defaultVariants: {
        variant: "primary",
        size: 'md',
    }
})