"use client"
import { Button } from "@mantine/core";
import { redirect } from "next/navigation";

export default function page() {
  return (
    <Button bg={"green"} onClick={() => redirect("/home")}>hi there</Button>
  );
}
