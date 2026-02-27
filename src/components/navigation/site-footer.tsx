"use client"

import { Box, Container, Stack, Text, Icon, HStack, Separator } from "@chakra-ui/react";
import { useTranslations } from "next-intl";
import { LuFacebook, LuInstagram, LuMail, LuPhone } from "react-icons/lu";

export function SiteFooter() {
    const t = useTranslations("apps.home");

    return (
        <Box as="footer" bg="bg.muted" borderTopWidth="1px">
            <Container maxW="7xl" py={{ base: "12", md: "16" }}>
                <Stack gap="8" direction={{ base: "column", md: "row" }} justify="space-between" align={{ base: "start", md: "center" }}>

                    {/* Brand Info */}
                    <Stack gap="4" maxW="sm">
                        <Text fontSize="xl" fontWeight="bold" color="fg">
                            {t("title") || "Le temps d'un fût"}
                        </Text>
                        <Text color="fg.muted" fontSize="sm">
                            {t("description")}
                        </Text>
                    </Stack>

                    {/* Contact Info */}
                    <Stack gap="4" align={{ base: "start", md: "end" }}>
                        <Text fontWeight="semibold" color="fg">{t("footerContact")}</Text>
                        <Stack gap="2">
                            <HStack color="fg.muted" _hover={{ color: "orange.500" }}>
                                <Icon><LuMail /></Icon>
                                <a href={`mailto:${t('footerEmail')}`}><Text fontSize="sm">{t("footerEmail")}</Text></a>
                            </HStack>
                            <HStack color="fg.muted" _hover={{ color: "orange.500" }}>
                                <Icon><LuPhone /></Icon>
                                <a href={`tel:${t('footerPhone')}`}><Text fontSize="sm">{t("footerPhone")}</Text></a>
                            </HStack>
                        </Stack>
                    </Stack>

                    {/* Socials */}
                    <Stack gap="4" align={{ base: "start", md: "end" }}>
                        <Text fontWeight="semibold" color="fg">{t("footerFollow")}</Text>
                        <HStack gap="4">
                            <Box color="fg.muted" _hover={{ color: "blue.500" }}>
                                <a href="https://www.facebook.com/letempsdunfut" target="_blank" rel="noreferrer">
                                    <Icon size="xl"><LuFacebook /></Icon>
                                </a>
                            </Box>
                            <Box color="fg.muted" _hover={{ color: "pink.500" }}>
                                <a href="https://www.instagram.com/letempsdunfut/" target="_blank" rel="noreferrer">
                                    <Icon size="xl"><LuInstagram /></Icon>
                                </a>
                            </Box>
                        </HStack>
                    </Stack>
                </Stack>

                <Separator my="8" />

                <Text textAlign="center" fontSize="sm" color="fg.muted">
                    {t("footerCopyright")}
                </Text>
            </Container>
        </Box>
    );
}
