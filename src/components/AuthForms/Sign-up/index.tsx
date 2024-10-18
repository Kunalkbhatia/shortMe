"use client";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { redirect } from "next/navigation";
import { createUser } from "@/actions/createUser";
import { useToast } from "@/hooks/use-toast";

const SignUpForm = () => {
  const { toast } = useToast();
  return (
    <form
      action={async (formData: FormData) => {
        const error = await createUser(formData);
        if (error) {
          toast({
            title: error,
            variant: "destructive",
          });
        } else {
          toast({
            title: "Account created successfully",
            description: "Please Login to continue",
          });
          redirect("/sign-in");
        }
      }}
    >
      <div className="grid gap-4">
        <div className="grid gap-2">
          <Label htmlFor="first-name">Username</Label>
          <Input
            type="text"
            name="username"
            placeholder="durdenTaylor"
            className="border-2 border-b-4 border-primaryBorder focus-within:outline-none"
          />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="email">Email</Label>
          <Input
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
          Create an account
        </Button>
        <Button variant="outline" className="w-full">
          Sign up with Google
        </Button>
      </div>
    </form>
  );
};

export default SignUpForm;
