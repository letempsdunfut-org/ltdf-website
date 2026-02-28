"use client";

import { Stack, Heading, Box } from "@chakra-ui/react";
import { useTranslations } from "next-intl";
import { Field } from "@/components/ui/field";
import { RadioCardItem, RadioCardLabel, RadioCardRoot } from "@/components/ui/radio-card";
import { LuBeer, LuCircleHelp } from "react-icons/lu";

export interface Step2EquipmentProps {
    equipment: string;
    onEquipmentChange: (val: string) => void;
}

export function DailyStep2Equipment({
    equipment,
    onEquipmentChange,
}: Step2EquipmentProps) {
    const t = useTranslations("apps.booking");

    return (
        <Stack gap="6">
            <Box mb="4">
                <Heading size="lg" mb="2">{t("chooseEquipment")}</Heading>
            </Box>

            <Field label={t("tapOption")} required>
                <RadioCardRoot
                    orientation="vertical"
                    value={equipment}
                    onValueChange={(e) => onEquipmentChange(e.value || "")}
                    align="center"
                    gap="4"
                    w="full"
                >
                    <RadioCardLabel display="none">Options</RadioCardLabel>
                    <RadioCardItem
                        label={t("pumpServiceOpt1")}
                        icon={<LuBeer size={32} />}
                        value="1_tap"
                        indicator={false}
                        flex="1"
                        bg="bg.panel"
                    />
                    <RadioCardItem
                        label={t("pumpServiceOpt2")}
                        icon={
                            <Stack direction="row" gap="1">
                                <LuBeer size={32} />
                                <LuBeer size={32} />
                            </Stack>
                        }
                        value="2_tap"
                        indicator={false}
                        flex="1"
                        bg="bg.panel"
                    />
                    <RadioCardItem
                        label={t("pumpServiceOpt3")}
                        icon={<LuCircleHelp size={32} />}
                        value="advice"
                        indicator={false}
                        flex="1"
                        bg="bg.panel"
                    />
                </RadioCardRoot>
            </Field>
        </Stack>
    );
}
