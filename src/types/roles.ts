export const enum Roles {
  ADMIN = "ADMIN",
  USER = "USER",
}

/**
 * This is equivalent to:
 * type RolesStrings = 'ADMIN' | 'USER';
 */
export type RolesStrings = keyof typeof Roles;

export const allRoles: ReadonlyArray<RolesStrings> = [Roles.ADMIN, Roles.USER] as const;

