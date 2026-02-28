import {
    Avatar,
    Box,
    Button,
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
import { SectionHeader } from "./section-header"

export const Block = () => (
    <Container py={{ base: "16", md: "24" }}>
        <Stack gap={{ base: "12", xl: "24" }} direction={{ base: "column", lg: "row" }}>
            <SectionHeader
                tagline="We're hiring"
                headline="Meet our Team"
                description="Our talented team blends skills and experiences, driving our success."
                maxW={{ base: "full", md: "sm" }}
            >
                <Stack direction={{ base: "column", sm: "row" }} gap="3">
                    <Button size={{ base: "lg", sm: "xl" }}>Join our team</Button>
                    <Button variant="outline" size={{ base: "lg", sm: "xl" }} colorPalette="gray">
                        Contact us
                    </Button>
                </Stack>
            </SectionHeader>
            <SimpleGrid
                columns={{ base: 1, md: 2 }}
                columnGap="8"
                rowGap={{ base: "10", lg: "12" }}
                flex="1"
            >
                {members.map((member) => (
                    <Stack key={member.name} gap={{ base: "4", md: "5" }} direction="row">
                        <Avatar.Root boxSize={{ base: "16", md: "20" }}>
                            <Avatar.Fallback />
                            <Avatar.Image src={member.image} />
                        </Avatar.Root>
                        <Stack gap="4">
                            <Stack>
                                <Box>
                                    <Text fontWeight="medium" textStyle="lg">
                                        {member.name}
                                    </Text>
                                    <Text color="colorPalette.fg">{member.role}</Text>
                                </Box>
                                <Text color="fg.muted">{member.description}</Text>
                            </Stack>
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
                ))}
            </SimpleGrid>
        </Stack>
    </Container>
)
