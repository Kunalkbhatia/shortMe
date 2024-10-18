"use client";
import { loginUser } from "@/actions/loginUser";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { redirect } from "next/navigation";

const SignInForm = () => {
  return (
    <form
      action={async (formData) => {
        const email = formData.get("email") as string | undefined;
        const password = formData.get("password") as string | undefined;
        if (!email || !password) return alert("Enter your credentials");
        const error = await loginUser(email, password);
        if (error) alert(error);
        else redirect("/");
      }}
    >
      <div className="grid gap-4">
        <div className="grid gap-2">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            type="email"
            name="email"
            placeholder="mayhen@taylor.com"
            className="border-2 border-b-4 border-primaryBorder focus-within:outline-none"
            required
          />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="password">Password</Label>
          <Input
            id="password"
            type="password"
            name="password"
            placeholder="************"
            className="border-2 border-b-4 border-primaryBorder focus-within:outline-none"
          />
        </div>
        <Button
          type="submit"
          className="w-full bg-primaryButton hover:bg-hoverButton"
        >
          Login
        </Button>
        <Button variant="outline" className="w-full">
          Login with Google
        </Button>
      </div>
    </form>
  );
};

export default SignInForm;
