import {
 Heading, Stack, type StackProps, Text 
} from "@chakra-ui/react"
import type React from "react"

export interface PageHeaderProps extends StackProps {
    tagline?: React.ReactNode
    headline: React.ReactNode
    description: React.ReactNode
}

export const PageHeader = (props: PageHeaderProps) => {
    const {
 tagline, headline, description, children, ...stackProps 
} = props
    return (
        <Stack gap={{ base: "4", md: "5" }} {...stackProps}>
            <Stack gap={{ base: "2", md: "3" }}>
                {tagline && (
                    <Text textStyle={{ base: "sm", md: "md" }} fontWeight="medium" color="colorPalette.fg">
                        {tagline}
                    </Text>
                )}
                <Heading size={{ base: "3xl", md: "4xl" }} fontWeight="medium">
                    {headline}
                </Heading>
            </Stack>
            <Text color="fg.muted" textStyle={{ base: "lg", md: "xl" }} maxW="3xl">
                {description}
            </Text>
            {children}
        </Stack>
    )
}
