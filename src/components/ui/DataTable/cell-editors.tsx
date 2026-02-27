"use client";

import {
  Box,
  createListCollection,
  HStack,
  IconButton,
  Input,
} from "@chakra-ui/react";
import type { ChangeEvent } from "react";
import { LuCheck, LuX } from "react-icons/lu";
import type { ZodType } from "zod";
import {
  SelectContent,
  SelectItem,
  SelectRoot,
  SelectTrigger,
  SelectValueText,
} from "../select";

export type TextCellEditorProps = {
  value: string;
  placeholder?: string;
  onChangeAction: (value: string) => void;
  schema?: ZodType<string>;
  maxW?: string;
};

export type SelectOptions = { label: string; value: string };

export type RowActionButtonsProps = {
  onCancelAction: () => void;
  onSaveAction: () => void;
  isDisabled?: boolean;
};

export type SelectCellEditorProps = {
  value: string;
  options: SelectOptions[];
  onChangeAction: (value: string) => void;
  maxW?: string;
};

export function TextCellEditor({
  value,
  placeholder,
  onChangeAction,
  schema,
  maxW = "150px",
}: TextCellEditorProps) {
  const parseResult = schema ? schema.safeParse(value) : { success: true };
  const invalid = !parseResult.success;
  const ariaInvalid = invalid ? true : undefined;

  return (
    <Box maxW={maxW}>
      <Input
        size="sm"
        value={value}
        placeholder={placeholder}
        aria-invalid={ariaInvalid}
        onChange={(e: ChangeEvent<HTMLInputElement>) => onChangeAction(e.target.value)}
        w="full"
      />
    </Box>
  );
}


export function SelectCellEditor({
  value,
  options,
  onChangeAction,
  maxW = "full",
}: SelectCellEditorProps) {
  const collection = createListCollection({
    items: options.map((item) => ({
      label: item.label,
      value: item.value,
    })),
  });
  return (
    <Box w="full" maxW={maxW}>
      <SelectRoot
        size="sm"
        value={[value]}
        onValueChange={(details: { value: string[] }) => onChangeAction(details.value?.[0] ?? value)}
        collection={collection}
        w="full"
      >
        <SelectTrigger w="full">
          <SelectValueText />
        </SelectTrigger>
        <SelectContent>
          {collection.items.map((item) => (
            <SelectItem key={item.value} item={item}>
              {item.label}
            </SelectItem>
          ))}
        </SelectContent>
      </SelectRoot>
    </Box>
  );
}


export function RowActionButtons({
  onCancelAction,
  onSaveAction,
  isDisabled,
}: RowActionButtonsProps) {
  return (
    <HStack gap={1} justifyContent="flex-end">
      <IconButton size="sm" aria-label="Cancel" variant="ghost" onClick={onCancelAction} disabled={isDisabled}>
        <LuX color="red" />
      </IconButton>
      <IconButton size="sm" aria-label="Save" variant="ghost" onClick={onSaveAction} disabled={isDisabled}>
        <LuCheck color="green" />
      </IconButton>
    </HStack>
  );
}


