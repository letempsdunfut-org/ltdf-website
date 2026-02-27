import {
 Box, Container, For, HStack, Icon, Link, SimpleGrid, Stack, Text 
} from "@chakra-ui/react"
import { FaLinkedin, FaTwitter } from "react-icons/fa"
import { members } from "./data"
import { PageHeader } from "./page-header"
import { SquareImage } from "./square-image"

export const Block = () => (
    <Container py={{ base: "16", md: "24" }}>
        <Stack gap={{ base: "12", md: "16" }}>
            <PageHeader
                tagline="We're hiring"
                headline="Meet our Team"
                description="Our talented team blends skills and experiences, driving our success. Meet the people shaping our vision and making a difference."
            />
            <SimpleGrid
                columns={{
 base: 1, sm: 2, lg: 3 
}}
                columnGap="8"
                rowGap={{ base: "10", md: "16" }}
            >
                {members.map((member) => (
                    <Box key={member.name}>
                        <Stack gap="4">
                            <Stack gap={{ base: "4", md: "5" }}>
                                <SquareImage src={member.image} alt={member.name} />
                                <Stack gap="3">
                                    <Box>
                                        <Text textStyle="lg" fontWeight="medium">
                                            {member.name}
                                        </Text>
                                        <Text color="colorPalette.fg">{member.role}</Text>
                                    </Box>
                                    <HStack gap="3">
                                        <For each={[FaLinkedin, FaTwitter]}>
                                            {(SocialIcon) => (
                                                <Link href="#" colorPalette="gray">
                                                    <Icon size="md">
                                                        <SocialIcon />
                                                    </Icon>
                                                </Link>
                                            )}
                                        </For>
                                    </HStack>
                                    <Text color="fg.muted">{member.description}</Text>
                                </Stack>
                            </Stack>
                        </Stack>
                    </Box>
                ))}
            </SimpleGrid>
        </Stack>
    </Container>
)
