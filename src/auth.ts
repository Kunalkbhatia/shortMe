import NextAuth, { CredentialsSignin } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import prisma from "./lib/db";
import { PrismaAdapter } from "@auth/prisma-adapter";

export const { handlers, signIn, signOut, auth } = NextAuth({
  adapter: PrismaAdapter(prisma),
  session: {
    strategy: "jwt",
  },
  pages: {
    signIn: "/sign-in",
  },
  callbacks: {
    session: async ({session, token}) => {
      if(token.sub && session.user){
        session.user.id = token.sub;
      }
      return session;
    },
    jwt: async({token}) => {
      return token;
    }
  },
  providers: [
    Credentials({
      name: "Credentials",
      credentials: {
        email: { type: "email", label: "Email" },
        password: { type: "password", label: "Password" },
      },
      authorize: async (credentials) => {
        const email = credentials.email as string | undefined;
        const password = credentials.password as string | undefined;
        if (!email || !password)
          throw new CredentialsSignin({
            cause: "Please Provide your credentials",
          });

        // Fetch user from the database
        const user = await prisma.user.findUnique({
          where: { email },
        });

        if (!user) {
          throw new CredentialsSignin({
            cause: "User with given credentials not found",
          });
        }

        // Compare provided password with the password in the database
        const isPasswordValid = user.password === password;

        if (!isPasswordValid) {
          throw new CredentialsSignin({ cause: "Invalid Email and Password" });
        }

        // Remove password before returning the user object
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        return user;
      },
    }),
  ],
});
