import {
    Button,
    Container,
    For,
    HStack,
    Icon,
    Image,
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
            >
                <Stack direction={{ base: "column-reverse", md: "row" }} gap="3">
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
                rowGap={{ base: "10", lg: "16" }}
            >
                {members.map((member) => (
                    <Stack key={member.name} gap="4">
                        <Stack gap="5">
                            <Image src={member.image} alt={member.name} h="72" objectFit="cover" />
                            <Stack gap="1">
                                <Text fontWeight="medium" textStyle={{ base: "lg", md: "xl" }}>
                                    {member.name}
                                </Text>
                                <Text color="colorPalette.fg" textStyle={{ base: "md", md: "lg" }}>
                                    {member.role}
                                </Text>
                            </Stack>
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
                ))}
            </SimpleGrid>
        </Stack>
    </Container>
)
