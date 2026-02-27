"use client"

import {
    Box,
    Button,
    Container,
    Heading,
    Icon,
    Image as ChakraImage,
    SimpleGrid,
    Stack,
    Text,
} from "@chakra-ui/react";
import { LuPhone, LuBuilding2, LuUsers } from "react-icons/lu";
import { useTranslations } from "next-intl";

export default function ProfessionalClient() {
    const t = useTranslations("apps.professional");

    return (
        <Box w="full" bg={"bg.panel"}>
            {/* Hero / Micro-distillery Section */}
            <Box position="relative" overflow="hidden" pt={{ base: 20, md: 32 }} pb={{ base: 16, md: 24 }} bg="bg.muted">
                <Container maxW="7xl">
                    <SimpleGrid columns={{ base: 1, lg: 2 }} gap={{ base: "12", md: "16" }} alignItems="center">
                        <Stack gap={{ base: "6", md: "8" }} maxW="2xl">
                            <Box p="3" bg="orange.100" color="orange.600" rounded="lg" w="fit-content" _dark={{ bg: "orange.900", color: "orange.300" }}>
                                <LuBuilding2 size={24} />
                            </Box>
                            <Heading size={{ base: "5xl", md: "7xl" }} fontWeight="extrabold" lineHeight="tight">
                                {t("microTitle")}
                            </Heading>
                            <Text fontSize="xl" color="fg.muted">
                                {t("microTxt")}
                            </Text>
                            <a href="mailto:info@ltdf.ca">
                                <Button size="xl" colorPalette="orange" w={{ base: "full", sm: "auto" }}>
                                    <Icon><LuPhone /></Icon>
                                    Contactez-nous
                                </Button>
                            </a>
                        </Stack>

                        <Box position="relative" height="500px" rounded="2xl" overflow="hidden" boxShadow="2xl">
                            <ChakraImage
                                src="/images/couverture/party-cover.jpg"
                                alt="Professionnel - Micro-distillerie"
                                objectFit="cover"
                                w="100%"
                                h="100%"
                            />
                        </Box>
                    </SimpleGrid>
                </Container>
            </Box>

            {/* Partners Section */}
            <Box py={{ base: "16", md: "24" }} borderBottomWidth="1px">
                <Container maxW="7xl">
                    <SimpleGrid columns={{ base: 1, lg: 2 }} gap={{ base: "12", md: "20" }} alignItems="center">
                        <Box order={{ base: 2, lg: 1 }} position="relative" height="400px" rounded="2xl" overflow="hidden">
                            <ChakraImage
                                src="/images/team/greg.png"
                                alt="Partenaires"
                                objectFit="cover"
                                w="100%"
                                h="100%"
                            />
                        </Box>

                        <Stack gap="8" order={{ base: 1, lg: 2 }}>
                            <Box p="3" bg="blue.100" color="blue.600" rounded="lg" w="fit-content" _dark={{ bg: "blue.900", color: "blue.300" }}>
                                <LuUsers size={24} />
                            </Box>
                            <Heading size="4xl" fontWeight="bold">{t("partnerTitle")}</Heading>
                            <Text fontSize="lg" color="fg.muted">
                                {t("partnerTxt")}
                            </Text>
                            <a href="mailto:info@ltdf.ca">
                                <Button size="lg" variant="outline" colorPalette="gray" w={{ base: "full", sm: "auto" }}>
                                    Devenir partenaire
                                </Button>
                            </a>
                        </Stack>
                    </SimpleGrid>
                </Container>
            </Box>

            {/* Company / About Section */}
            <Box py={{ base: "16", md: "24" }} bg="bg.muted">
                <Container maxW="4xl">
                    <Stack gap="8" textAlign="center" align="center">
                        <Heading size="3xl" fontWeight="bold">{t("companyTitle")}</Heading>
                        <Box
                            dangerouslySetInnerHTML={{ __html: t.raw("companyTxt").replaceAll('<text>', '<p>').replaceAll('</text>', '</p>').replaceAll('<bold>', '<strong>').replaceAll('</bold>', '</strong>').replaceAll('<box>', '<blockquote>').replaceAll('</box>', '</blockquote>') }}
                            css={{
                                'p': { mb: 4, fontSize: 'lg', color: 'fg.muted', textAlign: 'justify' },
                                'blockquote': { pl: 6, borderLeftWidth: '4px', borderColor: 'orange.500', fontStyle: 'italic', my: 8, bg: 'bg.panel', p: 6, rounded: 'lg' }
                            }}
                        />
                    </Stack>
                </Container>
            </Box>
        </Box>
    );
}
