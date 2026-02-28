import type { WithId } from "mongodb";
import { Roles } from "@/types/roles";

export type User = {
  id: string;
  name: string;
  email: string;
  role: Roles;
};

export type UserBase = Omit<User, "id">;
export type UserEntity = WithId<UserBase>

export type UserBaseTypes = string | Roles;
