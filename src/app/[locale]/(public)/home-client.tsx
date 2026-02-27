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
    Badge,
} from "@chakra-ui/react";
import { LuBeer, LuLeaf, LuInfo, LuPhone } from "react-icons/lu";
import { useTranslations } from "next-intl";
import { Link, Routes } from "@/i18n/routing";
import NextImage from "next/image";

export default function HomeClient() {
    const t = useTranslations("apps.home");

    return (
        <Box w="full" bg={"bg.panel"}>
            {/* Hero Section */}
            <Box position="relative" overflow="hidden" pt={{ base: 20, md: 32 }} pb={{ base: 16, md: 24 }}>
                <Container maxW="7xl">
                    <SimpleGrid columns={{ base: 1, lg: 2 }} gap={{ base: "12", md: "16" }} alignItems="center">
                        <Stack gap={{ base: "6", md: "8" }} maxW="2xl">
                            <Badge size="lg" colorPalette="orange" alignSelf="flex-start">
                                <Icon size="sm"><LuBeer /></Icon>
                                Le Temps d'un Fût
                            </Badge>
                            <Heading size={{ base: "4xl", md: "6xl", lg: "7xl" }} fontWeight="extrabold" lineHeight="tight">
                                {t("description")}
                            </Heading>
                            <Text fontSize={{ base: "lg", md: "xl" }} color="fg.muted">
                                {t("productsInfo")}
                            </Text>
                            <Stack direction={{ base: "column", sm: "row" }} gap="4" mt="4">
                                <Link href={Routes.RENTAL_DAILY}>
                                    <Button size="xl" colorPalette="orange" w={{ base: "full", sm: "auto" }}>
                                        <Icon><LuBeer /></Icon>
                                        {t("moreinfoDaily")}
                                    </Button>
                                </Link>
                                <Link href={Routes.RENTAL_MONTHLY}>
                                    <Button size="xl" variant="outline" colorPalette="gray" w={{ base: "full", sm: "auto" }}>
                                        <Icon><LuLeaf /></Icon>
                                        {t("moreinfoMonthly")}
                                    </Button>
                                </Link>
                            </Stack>
                        </Stack>

                        <Box position="relative" height="500px" rounded="2xl" overflow="hidden" boxShadow="2xl">
                            <ChakraImage asChild objectFit="cover">
                                <NextImage
                                    src="/images/kegkumLight.png"
                                    alt="Bière artisanale et Kombucha"
                                    fill
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                    priority
                                />
                            </ChakraImage>
                            <Box position="absolute" inset="0" bg="blackAlpha.200" />
                        </Box>
                    </SimpleGrid>
                </Container>
            </Box>

            {/* Services Section */}
            <Box py={{ base: "16", md: "24" }} bg="bg.muted">
                <Container maxW="7xl">
                    <Stack gap="12">
                        <Stack gap="4" align="center" textAlign="center">
                            <Heading size="4xl" fontWeight="bold">{t("rentalSubTitle")}</Heading>
                            <Text fontSize="lg" color="fg.muted" maxW="2xl">
                                {t("rental")} <a href="mailto:info@ltdf.ca" style={{ textDecoration: 'underline' }}>{t("email")}</a>
                            </Text>
                        </Stack>

                        <SimpleGrid columns={{ base: 1, md: 3 }} gap="8">
                            {/* Feature 1 */}
                            <Stack gap="5" bg="bg.panel" p="8" rounded="2xl" shadow="md" borderWidth="1px">
                                <Box p="3" bg="orange.100" color="orange.600" rounded="lg" w="fit-content" _dark={{ bg: "orange.900", color: "orange.300" }}>
                                    <LuBeer size={24} />
                                </Box>
                                <Box dangerouslySetInnerHTML={{ __html: t.raw("rentalDraft") }} />
                            </Stack>

                            {/* Feature 2 */}
                            <Stack gap="5" bg="bg.panel" p="8" rounded="2xl" shadow="md" borderWidth="1px">
                                <Box p="3" bg="green.100" color="green.600" rounded="lg" w="fit-content" _dark={{ bg: "green.900", color: "green.300" }}>
                                    <LuLeaf size={24} />
                                </Box>
                                <Box dangerouslySetInnerHTML={{ __html: t.raw("rentalGlass") }} />
                            </Stack>

                            {/* Feature 3 */}
                            <Stack gap="5" bg="bg.panel" p="8" rounded="2xl" shadow="md" borderWidth="1px">
                                <Box p="3" bg="blue.100" color="blue.600" rounded="lg" w="fit-content" _dark={{ bg: "blue.900", color: "blue.300" }}>
                                    <LuInfo size={24} />
                                </Box>
                                <Box dangerouslySetInnerHTML={{ __html: t.raw("rentalLicence") }} />
                            </Stack>
                        </SimpleGrid>
                    </Stack>
                </Container>
            </Box>

            {/* Story Section */}
            <Box py={{ base: "16", md: "24" }}>
                <Container maxW="7xl">
                    <SimpleGrid columns={{ base: 1, lg: 2 }} gap={{ base: "12", md: "16" }} alignItems="center">
                        <SimpleGrid columns={{ base: 1, md: 2 }} gap={4} height={{ base: "auto", md: "600px" }}>
                            <Box position="relative" gridRow={{ base: "auto", md: "span 2" }} minH={{ base: "300px", md: "auto" }} rounded="2xl" overflow="hidden" boxShadow="lg">
                                <ChakraImage asChild objectFit="cover">
                                    <NextImage
                                        src="/images/team/arthur.jpg"
                                        alt="Arthur - Fondateur"
                                        fill
                                        sizes="(max-width: 768px) 100vw, 25vw"
                                    />
                                </ChakraImage>
                                <Box position="absolute" bottom="0" left="0" right="0" bg="blackAlpha.600" p="2">
                                    <Text color="white" fontSize="xs" fontWeight="bold" textAlign="center">Arthur</Text>
                                </Box>
                            </Box>
                            <Box position="relative" minH={{ base: "300px", md: "auto" }} rounded="2xl" overflow="hidden" boxShadow="lg">
                                <ChakraImage asChild objectFit="cover">
                                    <NextImage
                                        src="/images/team/coco.png"
                                        alt="Coco - Fondateur"
                                        fill
                                        sizes="(max-width: 768px) 100vw, 25vw"
                                    />
                                </ChakraImage>
                                <Box position="absolute" bottom="0" left="0" right="0" bg="blackAlpha.600" p="2">
                                    <Text color="white" fontSize="xs" fontWeight="bold" textAlign="center">Coco</Text>
                                </Box>
                            </Box>
                            <Box position="relative" minH={{ base: "300px", md: "auto" }} rounded="2xl" overflow="hidden" boxShadow="lg">
                                <ChakraImage asChild objectFit="cover">
                                    <NextImage
                                        src="/images/team/greg.png"
                                        alt="Greg - Fondateur"
                                        fill
                                        sizes="(max-width: 768px) 50vw, 25vw"
                                    />
                                </ChakraImage>
                                <Box position="absolute" bottom="0" left="0" right="0" bg="blackAlpha.600" p="2">
                                    <Text color="white" fontSize="xs" fontWeight="bold" textAlign="center">Greg</Text>
                                </Box>
                            </Box>
                        </SimpleGrid>

                        <Stack gap="8">
                            <Heading size="4xl" fontWeight="bold">{t("storyTitle")}</Heading>
                            <Box
                                className="story-content"
                                dangerouslySetInnerHTML={{ __html: t.raw("history").replaceAll('<text>', '<p>').replaceAll('</text>', '</p>').replaceAll('<bold>', '<strong>').replaceAll('</bold>', '</strong>').replaceAll('<box>', '<blockquote>').replaceAll('</box>', '</blockquote>').replaceAll('<cite>', '<em>').replaceAll('</cite>', '</em>') }}
                                css={{
                                    'p': { mb: 4, fontSize: 'lg', color: 'fg.muted', lineHeight: 'tall' },
                                    'blockquote': { pl: 4, borderLeftWidth: '4px', borderColor: 'orange.500', fontStyle: 'italic', my: 6, bg: 'bg.muted', p: 4, rounded: 'md' },
                                    'strong': { color: 'fg' }
                                }}
                            />
                            <Link href={Routes.BOOKING}>
                                <Button size="xl" colorPalette="orange" mt="4" w="fit-content">
                                    <Icon><LuPhone /></Icon>
                                    {t("rental")}
                                </Button>
                            </Link>
                        </Stack>
                    </SimpleGrid>
                </Container>
            </Box>
        </Box>
    );
}
