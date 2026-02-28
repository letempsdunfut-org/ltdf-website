"use client";

import { Alert, Box, Stack, Input } from "@chakra-ui/react";
import { useTranslations } from "next-intl";
import { Field } from "@/components/ui/field";
import { parseISO, differenceInDays } from "date-fns";

export interface Step1DateProps {
    startDate: string;
    endDate: string;
    onStartChange: (val: string) => void;
    onEndChange: (val: string) => void;
}

export function DailyStep1Date({
    startDate,
    endDate,
    onStartChange,
    onEndChange,
}: Step1DateProps) {
    const t = useTranslations("apps.booking");

    const today = new Date().toISOString().split("T")[0];

    let daysDiff = 0;
    let errorMsg = null;

    if (startDate && endDate) {
        const start = parseISO(startDate);
        const end = parseISO(endDate);
        daysDiff = differenceInDays(end, start);

        if (daysDiff < 0) {
            errorMsg = t("errStartDateAfterEnd");
        } else if (daysDiff > 4) {
            errorMsg = t("errMaxDays");
        }
    }

    return (
        <Stack gap="6">
            <Box>
                <Alert.Root status="info" mb="6" variant="surface" rounded="xl">
                    <Alert.Indicator />
                    <Alert.Title>{t("noteTitle")}</Alert.Title>
                    <Alert.Description>
                        {t("noteDesc")}
                    </Alert.Description>
                </Alert.Root>
            </Box>

            <Stack direction={{ base: "column", sm: "row" }} gap="6">
                <Field label={t("startDate")} required>
                    <Input
                        type="date"
                        value={startDate}
                        onChange={(e) => onStartChange(e.target.value)}
                        focusRingColor="orange.500"
                        min={today}
                    />
                </Field>

                <Field label={t("endDate")} required invalid={!!errorMsg} errorText={errorMsg || undefined}>
                    <Input
                        type="date"
                        value={endDate}
                        onChange={(e) => onEndChange(e.target.value)}
                        focusRingColor="orange.500"
                        min={startDate || today}
                    />
                </Field>
            </Stack>

            {daysDiff >= 0 && daysDiff <= 4 && startDate && endDate && (
                <Alert.Root status="success" variant="surface" rounded="xl">
                    <Alert.Indicator />
                    <Alert.Title>{t("validDurationTitle")}</Alert.Title>
                    <Alert.Description>
                        {daysDiff === 0 ? t("validDurationDescOne") : t("validDurationDescDays", { days: daysDiff.toString() })}
                    </Alert.Description>
                </Alert.Root>
            )}
        </Stack>
    );
}
