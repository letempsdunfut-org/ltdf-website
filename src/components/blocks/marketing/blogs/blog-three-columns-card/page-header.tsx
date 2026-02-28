import {
 Heading, Stack, type StackProps, Text 
} from "@chakra-ui/react"
import type React from "react"

export interface PageHeaderProps extends StackProps {
    tagline?: React.ReactNode
    headline: React.ReactNode
    description: React.ReactNode
    children?: React.ReactNode
}

export const PageHeader = (props: PageHeaderProps) => {
    const {
 tagline, headline, description, children, ...rootProps 
} = props
    return (
        <Stack gap={{ base: "6", md: "8" }} {...rootProps}>
            <Stack gap={{ base: "5", md: "6" }}>
                <Stack gap={{ base: "3", md: "4" }}>
                    {tagline && (
                        <Text textStyle={{ base: "sm", md: "md" }} fontWeight="medium" color="colorPalette.fg">
                            {tagline}
                        </Text>
                    )}
                    <Heading size={{ base: "3xl", md: "4xl" }} fontWeight="medium">
                        {headline}
                    </Heading>
                </Stack>
                {description && (
                    <Text color="fg.muted" textStyle={{ base: "md", md: "lg" }} maxW="3xl">
                        {description}
                    </Text>
                )}
            </Stack>
            {children}
        </Stack>
    )
}
