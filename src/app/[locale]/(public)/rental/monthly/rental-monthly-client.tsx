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
import { LuCalendar, LuGift, LuPhone } from "react-icons/lu";
import { useTranslations } from "next-intl";
import { Link, Routes } from "@/i18n/routing";
import NextImage from "next/image";

export default function RentalMonthlyClient() {
    const t = useTranslations("apps.rental-monthly");

    return (
        <Box w="full" bg={"bg.panel"}>
            {/* Hero Section */}
            <Box position="relative" overflow="hidden" pt={{ base: 20, md: 32 }} pb={{ base: 16, md: 24 }} bg="bg.muted">
                <Container maxW="7xl">
                    <SimpleGrid columns={{ base: 1, lg: 2 }} gap={{ base: "12", md: "16" }} alignItems="center">
                        <Stack gap={{ base: "6", md: "8" }} maxW="2xl">
                            <Badge size="lg" colorPalette="orange" alignSelf="flex-start">
                                <Icon size="sm"><LuCalendar /></Icon>
                                {t('badge')}
                            </Badge>
                            <Heading size={{ base: "5xl", md: "7xl" }} fontWeight="extrabold" lineHeight="tight">
                                {t("title")}
                            </Heading>

                            <Box p="6" bg="bg.panel" rounded="xl" shadow="md" borderWidth="1px" borderColor="orange.200">
                                <Stack direction={{ base: "column", sm: "row" }} justify="space-between" align={{ sm: "center" }} gap="4">
                                    <Box>
                                        <Text color="fg.muted" fontWeight="semibold" textTransform="uppercase" fontSize="sm">{t('pricePrefix')}</Text>
                                        <Heading size="3xl" color="orange.500">{t('priceValue')} <Text as="span" fontSize="lg" color="fg.muted" fontWeight="normal">{t('priceSuffix')}</Text></Heading>
                                        <Text mt="1" fontWeight="medium" color="orange.600">{t('priceNote')}</Text>
                                    </Box>
                                    <Link href={Routes.BOOKING}>
                                        <Button size="xl" colorPalette="orange" w={{ base: "full", sm: "auto" }}>
                                            <Icon><LuPhone /></Icon>
                                            {t("ContactUs")}
                                        </Button>
                                    </Link>
                                </Stack>
                            </Box>
                        </Stack>

                        <Box position="relative" height="400px" rounded="2xl" overflow="hidden" boxShadow="2xl">
                            <ChakraImage asChild objectFit="cover">
                                <NextImage
                                    src="/images/kegator.png"
                                    alt="Location au mois"
                                    fill
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                    priority
                                />
                            </ChakraImage>
                        </Box>
                    </SimpleGrid>
                </Container>
            </Box>

            {/* Kombu Offer Section */}
            <Box py={{ base: "16", md: "24" }}>
                <Container maxW="7xl">
                    <Box textAlign="center" mb={{ base: "12", md: "16" }}>
                        <Heading size="4xl" fontWeight="bold" mb="6">{t("KombuOffer")}</Heading>
                        <Box
                            maxW="3xl"
                            mx="auto"
                            dangerouslySetInnerHTML={{ __html: t.raw("KombuOfferExplain").replaceAll('<text>', '<p>').replaceAll('</text>', '</p>') }}
                            css={{ 'p': { fontSize: 'xl', color: 'fg.muted' } }}
                        />
                    </Box>

                    <SimpleGrid columns={{ base: 1, lg: 2 }} gap={{ base: "12", md: "16" }} alignItems="start">
                        <Stack gap="8">
                            <Box p="8" bg="bg.muted" rounded="3xl" shadow="sm">
                                <Box p="3" bg="bg.panel" color="orange.500" rounded="lg" w="fit-content" shadow="sm" mb="6">
                                    <LuGift size={28} />
                                </Box>
                                <Box
                                    dangerouslySetInnerHTML={{ __html: t.raw("KombuOfferPitch").replaceAll('<text>', '<p>').replaceAll('</text>', '</p>') }}
                                    css={{ 'p': { fontSize: 'lg', color: 'fg.muted', lineHeight: 'tall', mb: 4 } }}
                                />
                            </Box>
                        </Stack>

                        <Stack gap="8">
                            {/* Content 1 */}
                            <Box p="8" bg="bg.panel" rounded="3xl" shadow="md" borderWidth="1px" borderColor="orange.100">
                                <Box
                                    className="monthly-list"
                                    dangerouslySetInnerHTML={{ __html: t.raw("KombuOfferContent1").replaceAll('<b>', '<h3 class="listTitle">').replaceAll('</b>', '</h3>') }}
                                    css={{
                                        '.listTitle': { fontSize: '2xl', fontWeight: 'bold', mb: 6, color: 'fg' },
                                        'li': { mb: 4, display: 'flex', alignItems: 'center', fontSize: 'lg', color: 'fg.muted' },
                                        'li::before': { content: '"✓"', color: 'orange.500', fontWeight: 'bold', mr: 3, fontSize: 'xl' },
                                        'a': { color: 'orange.500', fontWeight: 'semibold', textDecoration: 'underline' }
                                    }}
                                />
                            </Box>

                            {/* Content 2 */}
                            <Box p="8" bg="bg.panel" rounded="3xl" shadow="md" borderWidth="1px" borderColor="green.100">
                                <Box
                                    className="monthly-list"
                                    dangerouslySetInnerHTML={{ __html: t.raw("KombuOfferContent2").replaceAll('<b>', '<h3 class="listTitle">').replaceAll('</b>', '</h3>') }}
                                    css={{
                                        '.listTitle': { fontSize: '2xl', fontWeight: 'bold', mb: 6, color: 'fg' },
                                        'li': { mb: 4, display: 'flex', alignItems: 'center', fontSize: 'lg', color: 'fg.muted' },
                                        'li::before': { content: '"✦"', color: 'green.500', fontWeight: 'bold', mr: 3, fontSize: 'xl' }
                                    }}
                                />
                            </Box>
                        </Stack>
                    </SimpleGrid>
                </Container>
            </Box>
        </Box>
    );
}
