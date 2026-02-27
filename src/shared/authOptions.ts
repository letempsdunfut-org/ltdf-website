import type {
  Session as AuthSession, CallbacksOptions, NextAuthOptions,
} from "next-auth";
import { JWT } from "next-auth/jwt";
import Auth0Provider from "next-auth/providers/auth0";
import env from "@/shared/env";

export type AppJwt = JWT & {
  id_token: string | undefined
};

export type AppSession = AuthSession & {
  user?: AuthSession["user"] & {
    id?: string,
  },
  jwt: AppJwt
};

const auth0Provider = Auth0Provider({
  clientId: env.auth0ClientId,
  clientSecret: env.auth0ClientSecret,
  issuer: env.auth0Issuer,
});

const callbacks: Partial<CallbacksOptions> = {
  async jwt({ token, account }) {
    if (token.id_token && token.scopes) return token;

    const newToken = { ...token };

    if (account) {
      // eslint-disable-next-line camelcase
      newToken.id_token = account.id_token;
    }

    return newToken;
  },

  async redirect({ url, baseUrl }) {
    if (url.startsWith("/")) {
      return `${baseUrl}${url}`;
    }

    if (new URL(url).origin === baseUrl) {
      return url;
    }

    return baseUrl;
  },

  async session({ session, token }) {
    const newSession: AppSession = { ...session, jwt: token as AppJwt };
    return newSession;
  },
};

const authOptions: NextAuthOptions = {
  callbacks,
  providers: [auth0Provider],
  secret: env.secret,
  session: {
    strategy: "jwt",
  },
  pages: {
    signIn: "/login",
  },
};

export default authOptions;
