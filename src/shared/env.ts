const env = {
  auth0ClientId: process.env.AUTH0_CLIENT_ID as string,
  auth0ClientSecret: process.env.AUTH0_CLIENT_SECRET as string,
  auth0Issuer: process.env.AUTH0_ISSUER as string,
  mongodbUri: process.env.DATABASE_URL as string,
  isDev: process.env.NODE_ENV === "development",
  secret: process.env.SECRET,
};

export default env;
