import { z } from "zod";

export const userSchema = z.object({
    username: z.string().min(1, { message: "Username is required" }),  // Length validation
    email: z.string().email({ message: "Invalid email format" }),  // Check for valid email format
    password: z.string().min(6, { message: "Password should be at least 6 characters long" })  // Length validation
  });

export type UserCreateInput = z.infer<typeof userSchema>;