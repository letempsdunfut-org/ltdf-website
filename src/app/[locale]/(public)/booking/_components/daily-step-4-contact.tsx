"use client";

import { Box, SimpleGrid, Stack, Heading, Input, Textarea } from "@chakra-ui/react";
import { useTranslations } from "next-intl";
import { Field } from "@/components/ui/field";

export interface Step4ContactProps {
    firstName: string;
    lastName: string;
    phone: string;
    email: string;
    city: string;
    postalCode: string;
    address: string;
    onFirstNameChange: (val: string) => void;
    onLastNameChange: (val: string) => void;
    onPhoneChange: (val: string) => void;
    onEmailChange: (val: string) => void;
    onCityChange: (val: string) => void;
    onPostalCodeChange: (val: string) => void;
    onAddressChange: (val: string) => void;
}

export function DailyStep4Contact({
    firstName,
    lastName,
    phone,
    email,
    city,
    postalCode,
    address,
    onFirstNameChange,
    onLastNameChange,
    onPhoneChange,
    onEmailChange,
    onCityChange,
    onPostalCodeChange,
    onAddressChange,
}: Step4ContactProps) {
    const t = useTranslations("apps.booking");

    return (
        <Stack gap="6">
            <Box mb="4">
                <Heading size="lg" mb="2">{t("billingInfo")}</Heading>
            </Box>

            <SimpleGrid columns={{ base: 1, sm: 2 }} gap="6">
                <Field label={t("firstname")} required>
                    <Input value={firstName} onChange={e => onFirstNameChange(e.target.value)} placeholder="Jean" focusRingColor="orange.500" />
                </Field>
                <Field label={t("lastname")} required>
                    <Input value={lastName} onChange={e => onLastNameChange(e.target.value)} placeholder="Dupont" focusRingColor="orange.500" />
                </Field>
            </SimpleGrid>

            <SimpleGrid columns={{ base: 1, sm: 2 }} gap="6">
                <Field label={t("phone")} required>
                    <Input value={phone} onChange={e => onPhoneChange(e.target.value)} placeholder="+1 514..." focusRingColor="orange.500" />
                </Field>
                <Field label={t("email")} required>
                    <Input type="email" value={email} onChange={e => onEmailChange(e.target.value)} placeholder="jean@example.com" focusRingColor="orange.500" />
                </Field>
            </SimpleGrid>

            <Field label={t("address")} required>
                <Textarea value={address} onChange={e => onAddressChange(e.target.value)} placeholder={t("addressPlaceholder")} focusRingColor="orange.500" rows={2} />
            </Field>

            <SimpleGrid columns={{ base: 1, sm: 2 }} gap="6">
                <Field label={t("city")} required>
                    <Input value={city} onChange={e => onCityChange(e.target.value)} placeholder="Montréal" focusRingColor="orange.500" />
                </Field>
                <Field label={t("postalCode")} required>
                    <Input value={postalCode} onChange={e => onPostalCodeChange(e.target.value)} placeholder="H2X 1Y1" focusRingColor="orange.500" />
                </Field>
            </SimpleGrid>

        </Stack>
    );
}
