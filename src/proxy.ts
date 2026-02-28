import { NextRequest } from "next/server";
import { withAuth } from "next-auth/middleware";
import createI18NMiddleware from "next-intl/middleware";
import {
  Routes,
  routing,
} from "@/i18n/routing";

const intlMiddleware = createI18NMiddleware(routing);

export default async function proxy(req: NextRequest) {
  const publicPages = [
    Routes.RENTAL_DAILY,
    Routes.RENTAL_MONTHLY,
    Routes.PROFESSIONAL,
    Routes.PRODUCT,
    Routes.BOOKING,
    Routes.HOME,
    Routes.USERS
  ].flatMap(value => Object.values(routing.pathnames[value as keyof typeof routing.pathnames]));

  const publicPathnameRegex = RegExp(
    `^(/(${routing.locales.join("|")}))?(${publicPages
      .flatMap((p) => (p === "/" ? ["", "/"] : p))
      .join("|")})/?$`,
    "i",
  );
  const isPublicPage = publicPathnameRegex.test(req.nextUrl.pathname);

  if (isPublicPage) {
    return intlMiddleware(req);
  }
  const authMiddleware = withAuth(
    (inReg: NextRequest) => intlMiddleware(inReg),
    {
      pages: {
        signIn: "/login",
      },
    },
  );

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return (authMiddleware as any)(req);
}

export const config = {
  /**
   * next.js doesn't support dynamic expression for config
   * @see https://github.com/vercel/next.js/issues/56398
   * @see https://nextjs.org/docs/messages/invalid-page-config
   */
  // dynamic way (not working until next.js fix this)
  // matcher: ['/', `/(${i18nConfig.locales.join('|')})/:path*`],

  // static way (working)
  matcher: ["/((?!api|_next|.*\\..*).*)"],
};
