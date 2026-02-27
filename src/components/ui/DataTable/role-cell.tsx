import type { CellContext } from "@tanstack/react-table";
import { useTranslations } from "next-intl";
import { ShowComponent } from "@/components/show-component";
import { SelectCellEditor, SelectOptions } from "@/components/ui/DataTable/cell-editors";
import RoleBadge from "@/components/ui/role-badge";
import { isEmpty } from "@/shared/utils";
import { User, UserBase } from "@/types/users";

const RoleCell = ({
  info,
  editingRowId,
  roles,
  handleUserModifications,
  getUserModifications,
}: Readonly<{
  info: CellContext<User, string>;
  editingRowId: string | null;
  roles: SelectOptions[];
  handleUserModifications: (id: string, field: string, value: string) => void;
  getUserModifications: (rowId: string, field: keyof UserBase, defaultValue: string) => string;
}>) => {
  const t = useTranslations();
  const row = info.row.original;
  const isEditing = editingRowId === row.id;
  const value = isEditing
    ? getUserModifications(row.id, "role", row.role)
    : row.role;
  const isNew = isEmpty(row.email);

  if (isEditing || isNew) {
    return (
      <SelectCellEditor
        value={value}
        options={roles}
        onChangeAction={(v) => handleUserModifications(row.id, "role", v)}
      />
    );
  }

  return ShowComponent(
    info.getValue(),
    <RoleBadge variant="subtle" colorPalette={"bg"} role={row.role}>
      {t("user.role", { role: row.role })}
    </RoleBadge>
  );
};

export default RoleCell;
