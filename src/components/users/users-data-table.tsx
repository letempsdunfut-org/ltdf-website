"use client"

import {
  Box, Button, Card, createListCollection, HStack, Icon, Stack, Text,
} from "@chakra-ui/react";
import { type ColumnDef, createColumnHelper } from "@tanstack/react-table";
import { useTranslations } from "next-intl";
import {
  useCallback, useEffect, useMemo, useState
} from "react";
import { LuUserPlus } from "react-icons/lu";
import { useEffectOnce } from "react-use";
import { v4 as uuidv4 } from "uuid";
import { ShowComponent } from "@/components/show-component";
import ConfirmDialog from "@/components/ui/confirm-dialog";
import ActionsCell from "@/components/ui/DataTable/action-cell";
import { DataTable, headerCell } from "@/components/ui/DataTable/data-table";
import EmailCell from "@/components/ui/DataTable/email-cell";
import RoleCell from "@/components/ui/DataTable/role-cell";
import SearchInput from "@/components/ui/search-input";
import { FilterSelect } from "@/components/ui/select-filter";
import { toaster } from "@/components/ui/toaster";
import useUserSessionStore from "@/shared/stores/users/user-session-store";
import { useEditUser } from "@/shared/stores/users/users-edit";
import { useUserFilterStore } from "@/shared/stores/users/users-filter-store";
import useUsersManagementStore from "@/shared/stores/users/users-management-store";
import { emailSchema, isEmpty } from "@/shared/utils"
import { Roles } from "@/types/roles";
import { User } from "@/types/users";

type UserTableValue = string;
type UserTableColumn = ColumnDef<User, UserTableValue>;

export function UsersDataTable() {
  const t = useTranslations("apps.users")
  const tCommon = useTranslations("common")

  const [isDeleteOpen, setIsDeleteOpen] = useState(false);
  const [userToDelete, setUserToDelete] = useState<User | null>(null);
  const userEmail = useUserSessionStore((s) => s.userEmail);
  const [query, setQuery] = useState("");

  const {
    rowId, startEdit, cancelEdit, handleUserModifications, getUserModifications
  } = useEditUser();

  const {
    rows, load, addUser, updateUser, deleteUser
  } = useUsersManagementStore();

  const {
    filters: { roleFilter },
    userItems: { roles },
    setFilter,
    fetchUserFilterItems,
  } = useUserFilterStore();

  useEffectOnce(() => {
    // Optimistic store-backed loading; no need to await here
    load();
  });

  useEffect(() => {
    fetchUserFilterItems();
  }, [fetchUserFilterItems]);

  const handleAddUser = useCallback(() => {
    const newId = uuidv4();
    const newUser: User = {
      id: String(newId),
      name: "",
      email: "",
      role: Roles.USER,
    };
    startEdit(newUser.id, {
      name: newUser.name,
      email: newUser.email,
      role: newUser.role,
    });
    addUser(newUser);
  }, [startEdit, addUser]);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return rows.filter(
      (u) =>
        (!roleFilter || u.role === roleFilter) &&
        (q.length === 0 || u.name.toLowerCase().includes(q) || u.email.toLowerCase().includes(q)),
    )
      .sort((a, b) => {
        // First sort by current user
        const isCurrentUserA = a.email === userEmail;
        const isCurrentUserB = b.email === userEmail;

        if (isCurrentUserA && !isCurrentUserB) return -1;
        if (!isCurrentUserA && isCurrentUserB) return 1;

        // Then sort by name
        return a.name.localeCompare(b.name);
      });
  }, [query, rows, roleFilter, userEmail]);

  const handleSaveUser = useCallback(
    (row: User) => {
      const isNewUser = isEmpty(row.email);

      const updatedUser: User = {
        ...row,
        name: getUserModifications(row.id, "name", row.name) as string,
        role: getUserModifications(row.id, "role", row.role),
        email: getUserModifications(row.id, "email", row.email),
      };

      if (isNewUser) {
        const userMail = String(updatedUser.email);
        const validateMail = emailSchema.safeParse(userMail);
        if (!validateMail.success) {
          toaster.error({
            duration: 5000,
            title: t("toaster.error.title"),
            description: t("toaster.error.message"),
            closable: true,
          });
          return;
        }
        updatedUser.email = validateMail.data;
        addUser(updatedUser);
      } else {
        updateUser(updatedUser);
      }

      cancelEdit();
    },
    [cancelEdit, addUser, updateUser, t, getUserModifications],
  );

  const closeDeleteDialog = useCallback(() => {
    setIsDeleteOpen(false);
    setUserToDelete(null);
  }, []);

  const confirmDelete = useCallback(() => {
    if (!userToDelete) return;

    if (rowId === userToDelete.id) {
      cancelEdit();
    }

    deleteUser(userToDelete.id);
    closeDeleteDialog();
  }, [userToDelete, rowId, cancelEdit, deleteUser, closeDeleteDialog]);

  const shouldDisableDeletion = useCallback((email: string): boolean => {
    return email === userEmail;
  }, [userEmail]);

  const openDeleteDialog = useCallback((row: User) => {
    setUserToDelete(row);
    setIsDeleteOpen(true);
  }, []);

  const roleItems = useMemo(
    () =>
      createListCollection({
        items: [
          { label: t("filters.all"), value: "ALL" },
          ...roles.map((role) => ({
            label: t("role", { role: role.value }) ?? role,
            value: role.value,
          })),
        ],
      }),
    [roles, t],
  );

  const columns = useMemo<UserTableColumn[]>(() => {
    const columnHelper = createColumnHelper<User>()

    return [
      columnHelper.accessor((row) => row.name, {
        id: "name",
        header: () => headerCell({ id: "columns.user", tAction: t }),
        cell: (info) => (
          ShowComponent(info.getValue(), <Text>{info.getValue()}</Text>)
        )
      }),
      columnHelper.accessor((row) => row.email, {
        id: "email",
        header: () => headerCell({ id: "columns.mail", tAction: t }),
        cell: (info) => (
          <EmailCell
            info={info}
            emailSchema={emailSchema}
            handleUserModifications={handleUserModifications}
            getUserModifications={getUserModifications}
          />
        )
      }),
      columnHelper.accessor((row) => row.role.valueOf(), {
        id: "role",
        header: () => headerCell({ id: "columns.role", tAction: t }),
        cell: (info) => (
          <RoleCell
            info={info}
            editingRowId={rowId}
            roles={roleItems.items.filter((item) => item.value !== "ALL")}
            handleUserModifications={handleUserModifications}
            getUserModifications={getUserModifications}
          />
        ),
      }),
      columnHelper.display({
        id: "actions",
        enableSorting: false,
        header: () =>
          headerCell({
            id: "columns.actions",
            tAction: t,
            textProps: { textAlign: "right" },
          }),
        cell: (info) => (
          <ActionsCell
            info={info}
            editingRowId={rowId}
            t={t}
            onCancelEdit={cancelEdit}
            onSaveUser={handleSaveUser}
            onStartEdit={startEdit}
            onOpenDeleteDialog={openDeleteDialog}
            disabled={shouldDisableDeletion}
          />
        ),
      }),
    ]
  }, [
    cancelEdit,
    getUserModifications,
    handleSaveUser,
    handleUserModifications,
    openDeleteDialog,
    roleItems.items,
    rowId,
    shouldDisableDeletion,
    startEdit,
    t
  ]);

  return (
    <Stack gap={4}>
      <Card.Root
        variant="outline"
        overflow="hidden"
        borderColor="border.subtle"
        borderRadius="4xl"
        boxShadow="sm"
        py={6}
      >
        <Stack gap={4} px={4}>
          <HStack justify="space-between">
            <SearchInput
              borderRadius="4xl"
              width="20vw"
              value={query}
              onChange={setQuery}
              placeholder={t("filters.search")}
            />
            <FilterSelect
              value={roleFilter ?? "ALL"}
              items={roleItems.items}
              placeholder={t("filters.all")}
              onChange={(value) => setFilter("roleFilter", value === "ALL" ? null : value)}
            />
            <Button colorPalette="brand" variant="solid" rounded="4xl" gap={2} onClick={handleAddUser} disabled={!!rowId}>
              <Icon as={LuUserPlus} boxSize={5} />
              <Text fontWeight="bold">
                {t("add")}
              </Text>
            </Button>
          </HStack>
          {/* Table */}
          <Box overflowX="auto">
            <DataTable<User, UserTableValue>
              tableId="users"
              data={filtered}
              columns={columns}
              emptyMessage={<Text color="subtitleColor">{tCommon("noResults")}</Text>}
              getRowCanExpand={() => false}
              isSortable={false}
            />
          </Box>
          <ConfirmDialog
            title={t("confirmations.deleteUserTitle")}
            text={t("confirmations.deleteUser")}
            isDialogOpen={isDeleteOpen}
            confirmButtonText={tCommon("actions.delete")}
            closeButtonText={tCommon("actions.cancel")}
            onOpenChange={(e) => setIsDeleteOpen(e.open)}
            closeDialog={closeDeleteDialog}
            confirmDialog={confirmDelete}
          />
        </Stack>
      </Card.Root>
    </Stack>
  );
}
