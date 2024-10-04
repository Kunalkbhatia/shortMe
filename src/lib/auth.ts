import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvder from "next-auth/providers/credentials";
 
export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    GoogleProvider({
        clientId: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    CredentialsProvder({
        name: "Credentials",
        credentials: {
            username: {
                label: "name",
                type: "text",
            },
            email: {
                label: "Email",
                type: "email",
            },
            password: {
                label: "password",
                type: "password",
            }
        },
        
    })
  ],
})