import { Text } from "@chakra-ui/react";
import type { CellContext } from "@tanstack/react-table";
import type { ZodEmail } from "zod";
import { ShowComponent } from "@/components/show-component";
import { TextCellEditor } from "@/components/ui/DataTable/cell-editors";
import { isEmpty } from "@/shared/utils";
import { User, UserBase } from "@/types/users";

const EmailCell = ({
   info,
   emailSchema,
   handleUserModifications,
   getUserModifications
 }: Readonly<{
  info: CellContext<User, string>;
  emailSchema: ZodEmail;
  handleUserModifications: (id: string, field: string, value: string) => void;
  getUserModifications: (rowId: string, field: keyof UserBase, defaultValue: string) => string;
}>) => {
  const row = info.row.original;
  const isNew = isEmpty(row.email);

  if (isNew) {
    const value = getUserModifications(row.id, "email", row.email);
    return (
      <TextCellEditor
        value={value}
        schema={emailSchema}
        onChangeAction={(v) => handleUserModifications(row.id, "email", v)}
      />
    );
  }
  return ShowComponent(info.getValue(), <Text>{info.getValue()}</Text>);
};

export default EmailCell;
