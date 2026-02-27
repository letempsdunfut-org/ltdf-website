"use client"

import {
    Box,
    Button,
    Container,
    Heading,
    Icon,
    SimpleGrid,
    Stack,
    Text,
    Input,
    Textarea,
    Alert,
} from "@chakra-ui/react";
import { LuPhone, LuMail, LuCircleCheck } from "react-icons/lu";
import { useTranslations } from "next-intl";
import { useState } from "react";
import { Field } from "@/components/ui/field";

export default function BookingClient() {
    const t = useTranslations("apps.booking");
    const [mailSent, setMailSent] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        // Simulate mail sending
        setTimeout(() => {
            setIsSubmitting(false);
            setMailSent(true);
            setTimeout(() => setMailSent(false), 5000);
        }, 1500);
    };

    return (
        <Box w="full" bg={"bg.panel"}>
            <Box pt={{ base: 20, md: 32 }} pb={{ base: 16, md: 24 }} bg="bg.muted">
                <Container maxW="3xl">
                    <Stack gap="10" align="center" textAlign="center">
                        <Box p="4" bg="orange.100" color="orange.600" rounded="full" _dark={{ bg: "orange.900", color: "orange.300" }}>
                            <LuPhone size={32} />
                        </Box>
                        <Stack gap="4">
                            <Heading size="5xl" fontWeight="extrabold">{t("pageTitle")}</Heading>
                            <Text fontSize="lg" color="fg.muted">
                                {t("bookingInfo")}
                            </Text>
                        </Stack>
                    </Stack>

                    <Box mt="12" p={{ base: "6", md: "10" }} bg="bg.panel" rounded="3xl" shadow="2xl" borderWidth="1px">
                        {mailSent ? (
                            <Alert.Root status="success" variant="subtle" py="10" rounded="2xl" flexDir="column" alignItems="center" textAlign="center">
                                <Alert.Indicator mb="4">
                                    <LuCircleCheck size={40} />
                                </Alert.Indicator>
                                <Alert.Title fontSize="2xl" mb="2">{t("mailSent")}</Alert.Title>
                                <Alert.Description fontSize="lg">
                                    Merci pour votre message. Notre équipe vous contactera dans les plus brefs délais.
                                </Alert.Description>
                            </Alert.Root>
                        ) : (
                            <form onSubmit={handleSubmit}>
                                <Stack gap="6">
                                    <SimpleGrid columns={{ base: 1, sm: 2 }} gap="6">
                                        <Field label={t("firstname")} required>
                                            <Input placeholder="Jean" focusRingColor="orange.500" />
                                        </Field>
                                        <Field label={t("lastname")} required>
                                            <Input placeholder="Dupont" focusRingColor="orange.500" />
                                        </Field>
                                    </SimpleGrid>

                                    <SimpleGrid columns={{ base: 1, sm: 2 }} gap="6">
                                        <Field label={t("phone")} required>
                                            <Input placeholder="+1 514..." focusRingColor="orange.500" />
                                        </Field>
                                        <Field label={t("email")} required>
                                            <Input type="email" placeholder="jean@example.com" focusRingColor="orange.500" />
                                        </Field>
                                    </SimpleGrid>

                                    <SimpleGrid columns={{ base: 1, sm: 2 }} gap="6">
                                        <Field label={t("city")} required>
                                            <Input placeholder="Montréal" focusRingColor="orange.500" />
                                        </Field>
                                        <Field label={t("postalCode")} required>
                                            <Input placeholder="H2X 1Y1" focusRingColor="orange.500" />
                                        </Field>
                                    </SimpleGrid>

                                    <Field label={t("detail")}>
                                        <Textarea placeholder="Parlez-nous de votre événement..." rows={5} focusRingColor="orange.500" />
                                    </Field>

                                    <Button type="submit" size="xl" colorPalette="orange" loading={isSubmitting} width="full" mt="4">
                                        <Icon mr="2"><LuMail /></Icon>
                                        {t("submit")}
                                    </Button>
                                </Stack>
                            </form>
                        )}
                    </Box>
                </Container>
            </Box>
        </Box>
    );
}
