"use client"

import {
 Box, Heading, Stack, Text
} from "@chakra-ui/react";
import { useTranslations } from "next-intl";
import { UsersDataTable } from "@/components/users/users-data-table";

export default function UsersPage() {
  const t = useTranslations("apps.users");

  return (
    <Box as="main" width="full" p={0}>
      <Box
        bg="bg.default"
        px={{ base: 4, md: 6 }}
        pt={{ base: 4, md: 4 }}
        pb={{ base: 4, md: 5 }}
        mx={{ base: -4, md: -6 }}
        mt={{ base: -4, md: -6 }}
        borderBottom="1px solid"
        borderColor="border.subtle"
        boxShadow="md"
      >
        <Heading size="2xl" fontWeight="semibold" color="fg.default">
          {t("title")}
        </Heading>
        <Text color="fg.muted">{t("description")}</Text>
      </Box>
      <Stack mb={6} mt={6} gap={8}>
        <UsersDataTable />
      </Stack>
    </Box>
  );
}
