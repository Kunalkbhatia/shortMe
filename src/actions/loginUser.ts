"use server";

import { signIn } from "@/auth";
import { CredentialsSignin } from "next-auth";

export const loginUser = async (email: string, password: string) => {
  try {
    await signIn("credentials", {
      email,
      password,
    });
  } catch (error) {
    if (error instanceof CredentialsSignin) {
      return error.cause;
    }
  }
};
