import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import SignInForm from "@/components/Forms/Sign-in";
import Image from "next/image";
import mySvg from "../../assests/cloud.svg";
import { auth } from "@/auth";
import { redirect } from "next/navigation";

async function SignIn() {
  const session = await auth();
  if(session?.user)redirect("/shortme");

  return (
    <div className="grid lg:grid-cols-3 h-screen">
      <div className="col-span-1 hidden lg:flex lg:flex-col gap-6 justify-center bg-gradient-to-b from-white to-[#9599ff] p-8 rounded-lg shadow-lg">
        <div className="relative">
          <div className="text-7xl text-white text-center font-extrabold drop-shadow-md">
            ShortMe
          </div>
          <Image
            src={mySvg}
            alt="My Icon"
            className="absolute bottom-1/3 left-1/4 transform -translate-x-1/2 -translate-y-1/2"
            width={100}
          />
        </div>
        <div className="text-md text-center font-semibold text-primaryBorder px-6">
          Supercharge your URLs with ShortMe! We provide in-depth analytics that
          deliver actionable insights, empowering you to drive effective
          strategic growth for your brand.
        </div>
      </div>

      <div className="col-span-2 flex justify-center items-center">
        <Card className="flex-1 max-w-md border-2 border-b-4 border-r-4 border-primaryBorder">
          <CardHeader>
            <CardTitle className="text-xl">Login to ShortMe</CardTitle>
            <CardDescription>
              Enter your information to create an account
            </CardDescription>
          </CardHeader>
          <CardContent>
            <SignInForm/>
            <div className="mt-4 text-center text-sm">
              Already have an account?{" "}
              <Link href="/sign-up" className="underline">
                Sign up
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

export default SignIn;
