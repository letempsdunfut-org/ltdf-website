"use client";

import { Box, Button, Heading, Stack, ButtonGroup } from "@chakra-ui/react";
import { useTranslations } from "next-intl";
import { useState } from "react";
import { parseISO, differenceInDays } from "date-fns";
import {
    StepsRoot,
    StepsList,
    StepsItem,
    StepsContent,
    StepsCompletedContent,
    StepsNextTrigger,
    StepsPrevTrigger,
} from "@/components/ui/steps";
import { DailyStep1Date } from "./daily-step-1-date";
import { DailyStep2Equipment } from "./daily-step-2-equipment";
import { DailyStep3Kegs } from "./daily-step-3-kegs";
import { DailyStep4Contact } from "./daily-step-4-contact";
import { LuCircleCheck } from "react-icons/lu";
import { Alert } from "@chakra-ui/react";
import { sendDailyBooking } from "@/app/actions/send-daily-booking";

export function DailyReservationWizard() {
    const t = useTranslations("apps.booking");
    const [step, setStep] = useState(1);
    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");
    const [equipment, setEquipment] = useState("");
    const [kegDetails, setKegDetails] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [city, setCity] = useState("");
    const [postalCode, setPostalCode] = useState("");
    const [address, setAddress] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [mailSent, setMailSent] = useState(false);
    const [submitError, setSubmitError] = useState<string | null>(null);

    const isStep1Valid = !!startDate && !!endDate && differenceInDays(parseISO(endDate), parseISO(startDate)) >= 0 && differenceInDays(parseISO(endDate), parseISO(startDate)) <= 4;
    const isStep2Valid = !!equipment;
    const isStep4Valid = !!(firstName && lastName && phone && email && city && postalCode && address);

    const steps = [
        { title: t("step1Title"), description: t("step1Desc") },
        { title: t("step2Title"), description: t("step2Desc") },
        { title: t("step3Title"), description: t("step3Desc") },
        { title: t("step4Title"), description: t("step4Desc") },
    ];

    const handleSubmit = async () => {
        setIsSubmitting(true);
        setSubmitError(null);
        const result = await sendDailyBooking({
            startDate,
            endDate,
            equipment,
            kegDetails,
            firstName,
            lastName,
            phone,
            email,
            address,
            city,
            postalCode,
        });
        setIsSubmitting(false);
        if (result.success) {
            setMailSent(true);
        } else {
            setSubmitError(t("mailError"));
        }
    };

    if (mailSent) {
        return (
            <Box p={{ base: "4", md: "8" }} bg="bg.panel" rounded="3xl" shadow="2xl" borderWidth="1px">
                <Alert.Root status="success" variant="subtle" py="10" rounded="2xl" flexDir="column" alignItems="center" textAlign="center">
                    <Alert.Indicator mb="4">
                        <LuCircleCheck size={40} />
                    </Alert.Indicator>
                    <Alert.Title fontSize="2xl" mb="2">{t("mailSent")}</Alert.Title>
                    <Alert.Description fontSize="lg">
                        {t("mailSentDesc")}
                    </Alert.Description>
                </Alert.Root>
            </Box>
        );
    }

    return (
        <Box p={{ base: "4", md: "8" }} bg="bg.panel" rounded="3xl" shadow="2xl" borderWidth="1px">
            <Stack gap="8">
                <Heading size="2xl">{t("tabDaily")}</Heading>

                <StepsRoot
                    step={step}
                    onStepChange={(e) => {
                        const targetStep = e.step;
                        if (targetStep > 1 && !isStep1Valid) return;
                        if (targetStep > 2 && !isStep2Valid) return;
                        setStep(targetStep);
                    }}
                    count={steps.length}
                >
                    <StepsList mb="8">
                        {steps.map((s, index) => (
                            <StepsItem key={index} index={index} title={s.title} description={s.description} />
                        ))}
                    </StepsList>

                    <StepsContent index={0}>
                        <Box p="6" borderWidth="1px" rounded="xl" bg="bg.muted">
                            <DailyStep1Date
                                startDate={startDate}
                                endDate={endDate}
                                onStartChange={setStartDate}
                                onEndChange={setEndDate}
                            />
                        </Box>
                    </StepsContent>

                    <StepsContent index={1}>
                        <Box p="6" borderWidth="1px" rounded="xl" bg="bg.muted">
                            <DailyStep2Equipment
                                equipment={equipment}
                                onEquipmentChange={setEquipment}
                            />
                        </Box>
                    </StepsContent>

                    <StepsContent index={2}>
                        <Box p="6" borderWidth="1px" rounded="xl" bg="bg.muted">
                            <DailyStep3Kegs
                                details={kegDetails}
                                onDetailsChange={setKegDetails}
                            />
                        </Box>
                    </StepsContent>

                    <StepsContent index={3}>
                        <Box p="6" borderWidth="1px" rounded="xl" bg="bg.muted">
                            <DailyStep4Contact
                                firstName={firstName} onFirstNameChange={setFirstName}
                                lastName={lastName} onLastNameChange={setLastName}
                                phone={phone} onPhoneChange={setPhone}
                                email={email} onEmailChange={setEmail}
                                city={city} onCityChange={setCity}
                                postalCode={postalCode} onPostalCodeChange={setPostalCode}
                                address={address} onAddressChange={setAddress}
                            />
                        </Box>
                    </StepsContent>

                    <StepsCompletedContent>
                        <Box p="6" borderWidth="1px" rounded="xl" bg="green.50" color="green.800" minH="40">
                            {t("sending")}
                        </Box>
                    </StepsCompletedContent>

                    <ButtonGroup size="sm" variant="outline" mt="8" w="full" justifyContent="space-between">
                        <StepsPrevTrigger asChild>
                            <Button disabled={step === 1 || isSubmitting}>{t("btnPrev")}</Button>
                        </StepsPrevTrigger>

                        {step < 4 ? (
                            <StepsNextTrigger asChild>
                                <Button
                                    colorPalette="orange"
                                    disabled={
                                        (step === 1 && !isStep1Valid) ||
                                        (step === 2 && !isStep2Valid)
                                    }
                                >
                                    {t("btnNext")}
                                </Button>
                            </StepsNextTrigger>
                        ) : (
                            <>
                                <Button
                                    colorPalette="orange"
                                    disabled={!isStep4Valid || isSubmitting}
                                    loading={isSubmitting}
                                    onClick={handleSubmit}
                                >
                                    {t("submit")}
                                </Button>
                            </>
                        )}
                    </ButtonGroup>

                    {submitError && (
                        <Alert.Root status="error" variant="surface" rounded="xl" mt="4">
                            <Alert.Indicator />
                            <Alert.Description>{submitError}</Alert.Description>
                        </Alert.Root>
                    )}
                </StepsRoot>
            </Stack>
        </Box>
    );
}
