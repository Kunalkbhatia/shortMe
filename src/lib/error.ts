import { z } from "zod";

export const sendError = (error: unknown): string => {
  let errorMessage: string;
  if (error instanceof z.ZodError) {
    errorMessage = error.errors[0].message;
  } else if (error instanceof Error) {
    errorMessage = error.message;
  } else errorMessage = "Somethin went wrong";
  return errorMessage;
};
