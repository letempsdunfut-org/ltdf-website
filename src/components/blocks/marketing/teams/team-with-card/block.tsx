import {
    Avatar,
    Box,
    Button,
    Card,
    Container,
    For,
    HStack,
    Icon,
    Link,
    SimpleGrid,
    Stack,
    Text,
} from "@chakra-ui/react"
import { FaLinkedin, FaTwitter } from "react-icons/fa"
import { members } from "./data"
import { PageHeader } from "./page-header"

export const Block = () => (
    <Container py={{ base: "16", md: "24" }}>
        <Stack gap={{ base: "12", md: "16" }}>
            <PageHeader
                tagline="We're hiring"
                headline="Meet our Team"
                description="Our talented team blends skills and experiences, driving our success. Meet the people shaping our vision and making a difference."
                align={{ base: "stretch", md: "center" }}
                textAlign="center"
            >
                <Stack
                    direction={{ base: "column-reverse", md: "row" }}
                    gap="3"
                    justify={{ base: "start", md: "center" }}
                >
                    <Button variant="outline" size={{ base: "lg", md: "xl" }} colorPalette="gray">
                        Contact us
                    </Button>
                    <Button size={{ base: "lg", md: "xl" }}>Join our team</Button>
                </Stack>
            </PageHeader>
            <SimpleGrid
                columns={{
 base: 1, md: 2, lg: 3 
}}
                columnGap="8"
                rowGap={{
 base: "6", md: "8", lg: "16" 
}}
            >
                {members.map((member) => (
                    <Card.Root key={member.name} variant="elevated">
                        <Card.Body>
                            <Stack gap="4" align="center" textAlign="center">
                                <Stack>
                                    <Stack gap={{ base: "4", md: "6" }} align="center">
                                        <Avatar.Root boxSize={{ base: "16", md: "20" }}>
                                            <Avatar.Fallback />
                                            <Avatar.Image src={member.image} />
                                        </Avatar.Root>
                                        <Stack gap="3" align="center">
                                            <Box>
                                                <Text fontWeight="medium" textStyle="lg">
                                                    {member.name}
                                                </Text>
                                                <Text color="colorPalette.fg">{member.role}</Text>
                                            </Box>
                                            <HStack gap="4">
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
                                        </Stack>
                                    </Stack>
                                </Stack>
                                <Text color="fg.muted" css={{ textWrap: "balance" }}>
                                    {member.description}
                                </Text>
                            </Stack>
                        </Card.Body>
                    </Card.Root>
                ))}
            </SimpleGrid>
        </Stack>
    </Container>
)
