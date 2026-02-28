import {
 Heading, Stack, type StackProps, Text 
} from "@chakra-ui/react"
import type React from "react"

export interface SectionHeaderProps extends StackProps {
    tagline?: React.ReactNode
    headline: React.ReactNode
    description?: React.ReactNode
    children?: React.ReactNode
}

export const SectionHeader = (props: SectionHeaderProps) => {
    const {
 tagline, headline, description, ...rootProps 
} = props
    return (
        <Stack gap={{ base: "6", md: "8" }} {...rootProps}>
            <Stack gap={{ base: "4", md: "5" }}>
                <Stack gap={{ base: "2", md: "3" }}>
                    {tagline && (
                        <Text textStyle={{ base: "sm", md: "md" }} fontWeight="medium" color="colorPalette.fg">
                            {tagline}
                        </Text>
                    )}
                    <Heading as="h2" textStyle={{ base: "3xl", md: "4xl" }}>
                        {headline}
                    </Heading>
                </Stack>
                {description && (
                    <Text color="fg.muted" textStyle={{ base: "md", md: "lg" }} maxW="3xl">
                        {description}
                    </Text>
                )}
            </Stack>
            {props.children}
        </Stack>
    )
}
