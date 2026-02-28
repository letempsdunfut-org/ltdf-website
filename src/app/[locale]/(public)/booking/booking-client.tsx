"use client"

import {
    Box,
    Container,
    Heading,
    Stack,
    Text,
    Tabs,
} from "@chakra-ui/react";
import { LuCalendar } from "react-icons/lu";
import { useTranslations } from "next-intl";
import { useSearchParams } from "next/navigation";
import { MonthlyQuoteForm } from "./_components/monthly-quote-form";
import { DailyReservationWizard } from "./_components/daily-reservation-wizard";

export default function BookingClient() {
    const t = useTranslations("apps.booking");
    const searchParams = useSearchParams();

    // Check if the URL has ?type=monthly, otherwise default to daily
    const defaultTab = searchParams.get("type") === "monthly" ? "monthly" : "daily";

    return (
        <Box w="full" bg={"bg.panel"}>
            <Box pt={{ base: 20, md: 32 }} pb={{ base: 16, md: 24 }} bg="bg.muted">
                <Container maxW="4xl">
                    <Stack gap="10" align="center" textAlign="center">
                        <Box p="4" bg="orange.100" color="orange.600" rounded="full" _dark={{ bg: "orange.900", color: "orange.300" }}>
                            <LuCalendar size={32} />
                        </Box>
                        <Stack gap="4">
                            <Heading size="5xl" fontWeight="extrabold">{t("pageTitle")}</Heading>
                            <Text fontSize="lg" color="fg.muted">
                                {t("bookingInfo")}
                            </Text>
                        </Stack>
                    </Stack>

                    <Box mt="12">
                        <Tabs.Root defaultValue={defaultTab} variant="enclosed" size="lg" fitted>
                            <Tabs.List bg="bg.panel" rounded="xl" p="1" shadow="sm">
                                <Tabs.Trigger value="daily" rounded="lg" _selected={{ bg: "orange.500", color: "white" }}>
                                    {t("tabDaily")}
                                </Tabs.Trigger>
                                <Tabs.Trigger value="monthly" rounded="lg" _selected={{ bg: "orange.500", color: "white" }}>
                                    {t("tabMonthly")}
                                </Tabs.Trigger>
                            </Tabs.List>
                            <Tabs.Content value="daily" mt="6" p="0">
                                <DailyReservationWizard />
                            </Tabs.Content>
                            <Tabs.Content value="monthly" mt="6" p="0">
                                <MonthlyQuoteForm />
                            </Tabs.Content>
                        </Tabs.Root>
                    </Box>
                </Container>
            </Box>
        </Box>
    );
}
