import { Flex } from "@chakra-ui/react"

export const PopularBadge = () => (
    <Flex
        alignItems="center"
        justify="center"
        position="absolute"
        top="6"
        right="-9"
        bg="colorPalette.solid"
        color="colorPalette.contrast"
        minW="36"
        py="1"
        fontWeight="medium"
        textStyle="sm"
        transform="rotate(45deg)"
    >
        Popular
    </Flex>
)
