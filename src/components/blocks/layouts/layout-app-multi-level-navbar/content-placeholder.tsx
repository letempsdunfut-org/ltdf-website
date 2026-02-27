import {
    Box, type BoxProps, Text, type TextProps
} from "@chakra-ui/react"

export interface ContentPlaceholderProps extends BoxProps { }

export const ContentPlaceholder = (props: ContentPlaceholderProps) => (
    <Box
        {...props}
        css={{
            bg: "bg.muted",
            backgroundClip: "padding-box",
            backgroundImage: `url('/images/pattern.png')`,
            display: "flex",
            width: "100%",
        }}
    />
)

export const Label = (props: TextProps) => (
    <Box p="2">
        <Text color="fg.muted" fontWeight="medium" fontSize="sm" whiteSpace="nowrap" {...props} />
    </Box>
)
