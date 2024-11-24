import NextAuth, { AuthError, CredentialsSignin } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
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
    },
    signIn: async ({user, account}) => {
      if(account?.provider === "google"){
        try {
          const {email, name, image, id} = user;
          const exist = prisma.user.findUnique({
            where: {
              email: email ?? ""
            }
          });
          if(!exist) {
            await prisma.user.create({
              data: {
                username: name,
                email,
                googleId: id,
                image,  
              }
            })
          }
          else return true;
        } catch (error: unknown) {
          console.log(error);
          throw new AuthError("Erro while creating account");
        }
      }
      if(account?.provider === "credentials") return true;
      return false;
    }
  },
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
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
