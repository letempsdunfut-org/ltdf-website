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
import { LuCheck, LuBeer, LuTruck, LuCalendarDays } from "react-icons/lu";
import { useTranslations } from "next-intl";
import { Link, Routes } from "@/i18n/routing";
import NextImage from "next/image";

export default function RentalDailyClient() {
    const t = useTranslations("apps.rental-daily");

    return (
        <Box w="full" bg={"bg.panel"}>
            {/* Hero Section */}
            <Box position="relative" overflow="hidden" pt={{ base: 20, md: 32 }} pb={{ base: 16, md: 24 }} bg="bg.muted">
                <Container maxW="7xl">
                    <SimpleGrid columns={{ base: 1, lg: 2 }} gap={{ base: "12", md: "16" }} alignItems="center">
                        <Stack gap={{ base: "6", md: "8" }} maxW="2xl">
                            <Badge size="lg" colorPalette="orange" alignSelf="flex-start">
                                <Icon size="sm"><LuCalendarDays /></Icon>
                                {t('badge')}
                            </Badge>
                            <Heading size={{ base: "5xl", md: "7xl" }} fontWeight="extrabold" lineHeight="tight">
                                {t("retntalDraftTitle")}
                            </Heading>

                            <Box
                                dangerouslySetInnerHTML={{ __html: t.raw("retntalDraftText").replaceAll('<text>', '<p>').replaceAll('</text>', '</p>') }}
                                css={{
                                    'p': { mb: 4, fontSize: 'lg', color: 'fg.muted' },
                                }}
                            />

                            <Box p="6" bg="bg.panel" rounded="xl" shadow="md" borderWidth="1px" borderColor="orange.200">
                                <Stack direction={{ base: "column", sm: "row" }} justify="space-between" align={{ sm: "center" }} gap="4">
                                    <Box>
                                        <Text color="fg.muted" fontWeight="semibold" textTransform="uppercase" fontSize="sm">{t('pricePrefix')}</Text>
                                        <Heading size="3xl" color="orange.500">{t('priceValue')} <Text as="span" fontSize="lg" color="fg.muted" fontWeight="normal">{t('priceSuffix')}</Text></Heading>
                                    </Box>
                                    <Link href={Routes.BOOKING}>
                                        <Button size="xl" colorPalette="orange" w={{ base: "full", sm: "auto" }}>
                                            {t("book")}
                                        </Button>
                                    </Link>
                                </Stack>
                            </Box>
                        </Stack>

                        <Box position="relative" height="500px" rounded="2xl" overflow="hidden" boxShadow="2xl">
                            <ChakraImage asChild objectFit="cover">
                                <NextImage
                                    src="/images/tireurse.png"
                                    alt="Location de tireuse"
                                    fill
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                    priority
                                />
                            </ChakraImage>
                        </Box>
                    </SimpleGrid>
                </Container>
            </Box>

            {/* Delivery Section */}
            <Box py={{ base: "10", md: "16" }} borderBottomWidth="1px">
                <Container maxW="3xl" textAlign="center">
                    <Icon as={LuTruck} fontSize="7xl" color="orange.500" mb="4" />
                    <Heading size="2xl" mb="4">{t("deliveryCta")}</Heading>
                    <Text color="fg.muted" fontSize="sm">{t("deliveryDisclaimer")}</Text>
                </Container>
            </Box>

            {/* Benefits Section */}
            <Box py={{ base: "16", md: "24" }}>
                <Container maxW="7xl">
                    <SimpleGrid columns={{ base: 1, lg: 2 }} gap="16">
                        <Stack gap="8">
                            <Box dangerouslySetInnerHTML={{ __html: t.raw("retntalDraftTextPros").replaceAll('<text>', '<p>').replaceAll('</text>', '</p>').replaceAll('<bold>', '<strong>').replaceAll('</bold>', '</strong>') }} css={{ fontSize: 'xl', fontWeight: 'medium' }} />

                            <Box
                                className="benefitsList"
                                dangerouslySetInnerHTML={{
                                    __html: t.raw("rentalDraftList")
                                        .replaceAll('<listItem>', '<li class="benefitItem">')
                                        .replaceAll('</listItem>', '</li>')
                                        .replaceAll('<listIcon/>', '✓')
                                        .replaceAll("<listIcon as={AddIcon} color='#FF893B' />", '✓')
                                        .replaceAll('<listIcon />', '✓')
                                }}
                                css={{
                                    'li': { mb: 4, display: 'flex', alignItems: 'flex-start', fontSize: 'lg', color: 'fg.muted' },
                                    'li::before': { content: '"✓"', color: 'orange.500', fontWeight: 'bold', mr: 3 }
                                }}
                            />

                            <Box p="6" bg="orange.50" rounded="xl" _dark={{ bg: "orange.900" }}>
                                <Box dangerouslySetInnerHTML={{ __html: t.raw("rentalDraftConclusion").replaceAll('<bold>', '<strong>').replaceAll('</bold>', '</strong>') }} />
                            </Box>
                        </Stack>

                        <Stack gap="12">
                            <Box p="8" bg="bg.muted" rounded="2xl" shadow="sm">
                                <Box p="3" bg="bg.panel" color="blue.500" rounded="lg" w="fit-content" shadow="sm" mb="6">
                                    <LuBeer size={28} />
                                </Box>
                                <Heading size="xl" mb="4">{t("rentalGlassTitle")}</Heading>
                                <Text color="fg.muted" fontSize="lg">{t("rentalGlassText")}</Text>
                            </Box>

                            <Box p="8" bg="bg.muted" rounded="2xl" shadow="sm">
                                <Box p="3" bg="bg.panel" color="green.500" rounded="lg" w="fit-content" shadow="sm" mb="6">
                                    <LuCheck size={28} />
                                </Box>
                                <Heading size="xl" mb="4">{t("rentalEventTitle")}</Heading>
                                <Box
                                    dangerouslySetInnerHTML={{ __html: t.raw("rentalEventText").replaceAll('<text>', '<p>').replaceAll('</text>', '</p>').replaceAll('<text >', '<p>').replaceAll('<bold>', '<strong>').replaceAll('</bold>', '</strong>') }}
                                    css={{ 'p': { mb: 4, color: 'fg.muted', fontSize: 'lg' } }}
                                />
                            </Box>
                        </Stack>
                    </SimpleGrid>
                </Container>
            </Box>
        </Box>
    );
}
