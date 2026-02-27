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
    Accordion,
} from "@chakra-ui/react";
import { LuBeer, LuCalendar, LuCheck } from "react-icons/lu";
import { useTranslations } from "next-intl";
import { Link, Routes } from "@/i18n/routing";
import NextImage from "next/image";

export default function ProductClient() {
    const t = useTranslations("apps.product");

    return (
        <Box w="full" bg={"bg.panel"}>
            {/* Page Header */}
            <Box pt={{ base: 20, md: 32 }} pb={{ base: 10, md: 16 }} bg="bg.muted">
                <Container maxW="7xl" textAlign="center">
                    <Heading size="5xl" fontWeight="extrabold" mb="6">{t("pageTitle")}</Heading>
                    <Text fontSize="xl" color="fg.muted" maxW="3xl" mx="auto">
                        {t("heroSubtitle")}
                    </Text>
                </Container>
            </Box>

            {/* Daily Rental Section */}
            <Box py={{ base: "16", md: "24" }}>
                <Container maxW="7xl">
                    <SimpleGrid columns={{ base: 1, lg: 2 }} gap={{ base: "12", md: "20" }} alignItems="center">
                        <Stack gap="8">
                            <Box p="3" bg="orange.100" color="orange.600" rounded="lg" w="fit-content" _dark={{ bg: "orange.900", color: "orange.300" }}>
                                <LuBeer size={24} />
                            </Box>
                            <Heading size="4xl" fontWeight="bold">{t("dailyRental")}</Heading>

                            <Accordion.Root variant="subtle" defaultValue={["info"]} collapsible>
                                <Accordion.Item value="info">
                                    <Accordion.ItemTrigger>{t("draftPriceTitle")}</Accordion.ItemTrigger>
                                    <Accordion.ItemContent>
                                        <Box p="4" dangerouslySetInnerHTML={{ __html: t.raw("draftPricePanel").replaceAll('<list>', '<ul>').replaceAll('</list>', '</ul>').replaceAll('<listItem>', '<li>').replaceAll('</listItem>', '</li>').replaceAll('<listIcon/>', '✓') }} />
                                    </Accordion.ItemContent>
                                </Accordion.Item>
                                <Accordion.Item value="tech">
                                    <Accordion.ItemTrigger>{t("draftTechnicalTilte")}</Accordion.ItemTrigger>
                                    <Accordion.ItemContent>
                                        <Box p="4" dangerouslySetInnerHTML={{ __html: t.raw("draftTechnicalList").replaceAll('<listItem>', '<li>').replaceAll('</listItem>', '</li>').replaceAll('<listIcon/>', '✓') }} />
                                    </Accordion.ItemContent>
                                </Accordion.Item>
                                <Accordion.Item value="delivery">
                                    <Accordion.ItemTrigger>{t("draftDelivryTitle")}</Accordion.ItemTrigger>
                                    <Accordion.ItemContent>
                                        <Text p="4">{t("draftDelivryInfo")}</Text>
                                    </Accordion.ItemContent>
                                </Accordion.Item>
                            </Accordion.Root>

                            <Link href={Routes.RENTAL_DAILY}>
                                <Button size="lg" colorPalette="orange" w={{ base: "full", sm: "auto" }}>
                                    {t("redirectDaily")}
                                </Button>
                            </Link>
                        </Stack>

                        <Box position="relative" height="500px" rounded="3xl" overflow="hidden" boxShadow="xl">
                            <ChakraImage asChild objectFit="cover">
                                <NextImage
                                    src="/images/tireurse.png"
                                    alt="Location journalière"
                                    fill
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                />
                            </ChakraImage>
                        </Box>
                    </SimpleGrid>
                </Container>
            </Box>

            {/* Monthly Rental Section */}
            <Box py={{ base: "16", md: "24" }} bg="bg.muted">
                <Container maxW="7xl">
                    <SimpleGrid columns={{ base: 1, lg: 2 }} gap={{ base: "12", md: "20" }} alignItems="center">
                        <Box order={{ base: 2, lg: 1 }} position="relative" height="500px" rounded="3xl" overflow="hidden" boxShadow="xl">
                            <ChakraImage asChild objectFit="cover">
                                <NextImage
                                    src="/images/kegator.png"
                                    alt="Location mensuelle"
                                    fill
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                />
                            </ChakraImage>
                        </Box>

                        <Stack gap="8" order={{ base: 1, lg: 2 }}>
                            <Box p="3" bg="green.100" color="green.600" rounded="lg" w="fit-content" _dark={{ bg: "green.900", color: "green.300" }}>
                                <LuCalendar size={24} />
                            </Box>
                            <Heading size="4xl" fontWeight="bold">{t("monthlyRental")}</Heading>

                            <Accordion.Root variant="subtle" defaultValue={["info"]} collapsible>
                                <Accordion.Item value="info">
                                    <Accordion.ItemTrigger>{t("monthlyDraftPriceTitle")}</Accordion.ItemTrigger>
                                    <Accordion.ItemContent>
                                        <Box p="4" dangerouslySetInnerHTML={{ __html: t.raw("monthlyDraftPricePanel").replaceAll('<list>', '<ul>').replaceAll('</list>', '</ul>').replaceAll('<listItem>', '<li>').replaceAll('</listItem>', '</li>') }} />
                                    </Accordion.ItemContent>
                                </Accordion.Item>
                                <Accordion.Item value="service">
                                    <Accordion.ItemTrigger>{t("monthlyDraftServiceTitle")}</Accordion.ItemTrigger>
                                    <Accordion.ItemContent>
                                        <Text p="4">{t("monthlyDraftServiceInfo")}</Text>
                                    </Accordion.ItemContent>
                                </Accordion.Item>
                            </Accordion.Root>

                            <Link href={Routes.RENTAL_MONTHLY}>
                                <Button size="lg" colorPalette="green" w={{ base: "full", sm: "auto" }}>
                                    {t("redirectMonthly")}
                                </Button>
                            </Link>
                        </Stack>
                    </SimpleGrid>
                </Container>
            </Box>
        </Box>
    );
}
