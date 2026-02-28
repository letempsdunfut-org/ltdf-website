"use client";

import { Stack, Heading, Box, Textarea, Text } from "@chakra-ui/react";
import { useTranslations } from "next-intl";
import { Field } from "@/components/ui/field";

export interface Step3KegsProps {
    details: string;
    onDetailsChange: (val: string) => void;
}

export function DailyStep3Kegs({ details, onDetailsChange }: Step3KegsProps) {
    const t = useTranslations("apps.booking");

    return (
        <Stack gap="6">
            <Box mb="4">
                <Heading size="lg" mb="2">{t("kegsWanted")}</Heading>
                <Text color="fg.muted">
                    {t("kegsDesc")}
                </Text>
            </Box>

            <Field label={t("kegsDetailsLabel")}>
                <Textarea
                    placeholder={t("kegsPlaceholder")}
                    value={details}
                    onChange={(e) => onDetailsChange(e.target.value)}
                    rows={5}
                    focusRingColor="orange.500"
                />
            </Field>
        </Stack>
    );
}
