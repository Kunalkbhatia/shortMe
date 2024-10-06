"use server";
import { signIn } from "@/lib/auth";
import { sendError } from "@/lib/error";

export const loginUser = async (formData: FormData) => {
  const email = formData.get("email");
  const password = formData.get("password")
  try {
    await signIn("credentials", {
      email,
      password,
      redirect: true,
      redirectTo: "/home",
    });
  } catch (error) {
    console.log("main", error);
      const result = sendError(error);
      return result;
  }
};
