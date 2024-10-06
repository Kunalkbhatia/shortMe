import { notifications } from "@mantine/notifications";
import { CredentialsSignin } from "next-auth";
import { z } from "zod";

export const sendError = (error: unknown): string => {
  console.log(error);
  let errorMessage: string;
  if (error instanceof z.ZodError) {
    errorMessage = error.errors[0].message;
  }
  else if(error instanceof CredentialsSignin){
    errorMessage = error.message;
  } else if (error instanceof Error) {
    errorMessage = error.message;
  } else errorMessage = "Somethin went wrong";
  return errorMessage;
};

export const handleError = (error: string) => {
  console.log(error);
  notifications.show({
    message: error,
    position: "top-center",
  });
};