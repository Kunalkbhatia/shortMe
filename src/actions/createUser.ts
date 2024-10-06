"use server";

import prisma from "@/lib/db";
import { sendError } from "@/lib/error";
import { userSchema } from "@/schema";

export const createUser = async (formData: FormData) => {
  const userData = {
    username: formData.get("username"),
    email: formData.get("email"),
    password: formData.get("password"),
  };
  try {
    const newUser = userSchema.parse(userData);
    const existing = await prisma.user.findUnique({
      where: {
        email: newUser.email,
      },
    });
    if (existing) {
      throw new Error("User with same email already exist");
    }
    await prisma.user.create({
      data: {
        username: newUser.username,
        email: newUser.email,
        password: newUser.password,
      },
    });
  } catch (error) {
    const result = sendError(error);
    return result;
  }
};
