"use client";

import {
  Box, Icon, Input
} from "@chakra-ui/react";
import type { InputProps as ChakraInputProps } from "@chakra-ui/react";
import { ComponentPropsWithoutRef, ComponentType } from "react";
import { LuSearch } from "react-icons/lu";

export type SearchInputProps = Omit<ChakraInputProps, "onChange"> & {
  value: string;
  onChange: (value: string) => void;
  icon?: ComponentType<ComponentPropsWithoutRef<typeof Icon>>;
};

/**
 * SearchInput — a small reusable search input with a left icon.
 * Chakra v3 primitives only; forwards common Input props.
 */
export function SearchInput({
                               value, onChange, placeholder, icon, ...rest
                             }: SearchInputProps) {
  const LeftIcon = icon ?? LuSearch;
  return (
    <Box position="relative" maxW="xl">
      <Input
        pl={4}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        bg="bg.default"
        borderRadius="md"
        _hover={{ borderColor: "border.default" }}
        {...rest}
      />
      <Icon
        as={LeftIcon}
        color="gray"
        position="absolute"
        right={5}
        top="50%"
        transform="translateY(-50%)"
        pointerEvents="none"
      />
    </Box>
  );
}

export default SearchInput;
