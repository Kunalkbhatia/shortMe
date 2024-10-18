"use server";
import prisma from "@/lib/db";

export async function createUser(formData: FormData) {
  const username = formData.get("username") as string | undefined;
  const email = formData.get("email") as string | undefined;
  const password = formData.get("password") as string | undefined;
  try {
    if (!username) throw new Error("Please enter a usernmae");
    if (!email || !password) throw new Error("please enter email and password");
    
    const existingUser = await prisma.user.findUnique({
      where: {
        email,
      },
    });
    if (existingUser) throw new Error("User already exist with this email");
    await prisma.user.create({
      data: {
        username,
        email,
        password,
      },
    });
  } catch (error) {
    if (error instanceof Error) return error.message;
  }
}
