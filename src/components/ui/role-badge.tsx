"use client";

import { Badge } from "@chakra-ui/react";
import type { BadgeProps as ChakraBadgeProps } from "@chakra-ui/react";
import { ReactNode } from "react";
import { Roles } from "@/types/roles";

export type RoleBadgeProps = Omit<ChakraBadgeProps, "children"> & {
  role: Roles;
  children?: ReactNode;
};

const roleBadgeStyle: Record<Roles, { bg: string, color: string }>
  = {
  ADMIN: { bg: "bg.admin", color: "fg.admin" },
  USER: { bg: "bg.muted", color: "fg.muted" },
} as const;


export function RoleBadge({
                             role, children, ...rest
                           }: RoleBadgeProps) {
  const style = roleBadgeStyle[role];
  return (
    <Badge
      px={3}
      py={1}
      borderRadius="4xl"
      bg={style.bg}
      color={style.color}
      borderColor={style.color}
      borderWidth="medium"
      fontWeight="bold"
      textTransform="none"
      {...rest}
    >
      {children ?? role}
    </Badge>
  );
}

export default RoleBadge;
