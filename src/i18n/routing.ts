import { createNavigation } from "next-intl/navigation";
import { defineRouting, Pathnames } from "next-intl/routing";
import type { IconType } from "react-icons";
import { BsGear } from "react-icons/bs";
import { Roles } from "@/types/roles";

export enum Routes {
  HOME = "/",
  USERS = "/users",
  RENTAL_DAILY = "/rental/daily",
  RENTAL_MONTHLY = "/rental/monthly",
  PROFESSIONAL = "/professional",
  PRODUCT = "/product",
  BOOKING = "/booking",
}

export enum Locale {
  EN_CA = "en-CA",
  FR_CA = "fr-CA",
}

const locales = [Locale.EN_CA, Locale.FR_CA];

const pathnames = {
  [Routes.HOME]: "/",
  [Routes.USERS]: {
    [Locale.EN_CA]: "/users-management",
    [Locale.FR_CA]: "/gestion-des-utilisateurs",
  },
  [Routes.RENTAL_DAILY]: {
    [Locale.EN_CA]: "/rental/daily",
    [Locale.FR_CA]: "/location/journaliere",
  },
  [Routes.RENTAL_MONTHLY]: {
    [Locale.EN_CA]: "/rental/monthly",
    [Locale.FR_CA]: "/location/mensuelle",
  },
  [Routes.PROFESSIONAL]: {
    [Locale.EN_CA]: "/professional",
    [Locale.FR_CA]: "/professionnel",
  },
  [Routes.PRODUCT]: {
    [Locale.EN_CA]: "/product",
    [Locale.FR_CA]: "/produit",
  },
  [Routes.BOOKING]: {
    [Locale.EN_CA]: "/booking",
    [Locale.FR_CA]: "/reservation",
  },
} satisfies Pathnames<typeof locales>;

export const routing = defineRouting({
  defaultLocale: Locale.EN_CA,
  locales,
  localePrefix: "always",
  pathnames,
});

export const {
  Link,
  redirect,
  usePathname,
  useRouter,
  getPathname,
} = createNavigation(routing);

export const RoutesCollection: {
  icon: IconType,
  id: number,
  isDev?: boolean,
  key: string,
  route: Routes,
  accessRoles: Roles[],
}[] = [
    {
      icon: BsGear,
      id: 2,
      key: "apps.users-management.title",
      route: Routes.USERS,
      accessRoles: [Roles.ADMIN],
    },
  ];
