import {
 Avatar, Box, Container, SimpleGrid, Stack, Text 
} from "@chakra-ui/react"
import { members } from "./data"
import { PageHeader } from "./page-header"

export const Block = () => (
    <Container py={{ base: "16", md: "24" }}>
        <Stack gap={{ base: "12", md: "16" }}>
            <PageHeader
                tagline="We're hiring"
                headline="Meet our team"
                description="Our talented team blends skills and experiences, driving our success. Meet the people shaping our vision and making a difference."
                align="center"
                textAlign="center"
            />
            <SimpleGrid
                columns={{
 base: 1, sm: 2, md: 3, lg: 4 
}}
                columnGap="8"
                rowGap={{ base: "10", lg: "16" }}
            >
                {members.map((member) => (
                    <Stack key={member.name} gap="4" align="center" textAlign="center">
                        <Stack gap={{ base: "4", md: "5" }} align="center">
                            <Avatar.Root boxSize={{ base: "24", lg: "32" }}>
                                <Avatar.Fallback />
                                <Avatar.Image src={member.image} />
                            </Avatar.Root>
                            <Box>
                                <Text fontWeight="medium" textStyle="lg">
                                    {member.name}
                                </Text>
                                <Text color="colorPalette.fg">{member.role}</Text>
                            </Box>
                        </Stack>
                    </Stack>
                ))}
            </SimpleGrid>
        </Stack>
    </Container>
)
