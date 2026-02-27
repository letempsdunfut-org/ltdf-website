import {
  HStack, Icon, IconButton
} from "@chakra-ui/react";
import type { CellContext } from "@tanstack/react-table";
import { useMemo } from "react";
import { LuSquarePen, LuTrash } from "react-icons/lu";
import { RowActionButtons } from "@/components/ui/DataTable/cell-editors";
import { User, UserBase } from "@/types/users";

const ActionsCell = ({
  info,
  editingRowId,
  t,
  onCancelEdit,
  onSaveUser,
  onStartEdit,
  onOpenDeleteDialog,
  disabled,
}: Readonly<{
  info: CellContext<User, string>;
  editingRowId: string | null;
  t: (key: string) => string;
  onCancelEdit: () => void;
  onSaveUser: (row: User) => void;
  onStartEdit: (id: string, initialValues: UserBase) => void;
  onOpenDeleteDialog: (row: User) => void;
  disabled: (email: string) => boolean;
}>) => {
  const row = info.row.original;
  const isEditing = editingRowId === row.id;

  const showButtons = useMemo(() => !disabled(row.email), [row.email, disabled]);

  if (isEditing) {
    return (
      <RowActionButtons
        onCancelAction={onCancelEdit}
        onSaveAction={() => onSaveUser(row)}
      />
    );
  }

  return showButtons && (
    <HStack gap={1} justifyContent="flex-end">
      <IconButton
        size="sm"
        aria-label={`${t("actions.edit")} ${row.name}`}
        variant="ghost"
        onClick={() =>
          onStartEdit(row.id, {
            name: row.name,
            email: row.email,
            role: row.role,
          })
        }
      >
        <Icon as={LuSquarePen} color="black.solid" />
      </IconButton>

      <IconButton
        size="sm"
        aria-label={`${t("actions.delete")} ${row.name}`}
        variant="ghost"
        onClick={() => onOpenDeleteDialog(row)}
      >
        <Icon as={LuTrash} color="red.solid" />
      </IconButton>
    </HStack>
  );
};

export default ActionsCell;
