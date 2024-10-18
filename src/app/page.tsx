// import {
//   Settings
// } from "lucide-react"

// import {
//   Drawer,
//   DrawerContent,
//   DrawerDescription,
//   DrawerHeader,
//   DrawerTitle,
//   DrawerTrigger,
// } from "@/components/ui/drawer"
import { Chart } from "@/components/Charts/chart1";
import CreateFolder from "@/components/CreateFolder";
import { Profile } from "@/components/Profile";
import SelectFolder from "@/components/SelectFolder";
import { Input } from "@/components/ui/input";
import URLContainer from "@/components/URLContainer";
import { auth } from "@/auth";
import { redirect } from "next/navigation";
import CreateURL from "@/components/CreateURL";
import { ManageTags } from "@/components/ManageTags";
import prisma from "@/lib/db";


async function Dashboard() {
  const session = await auth();
  if(!session?.user)redirect("/sign-in");

  const tags = await prisma.tag.findMany();

  return (
    <div className="grid h-screen w-full">
      <div className="flex flex-col">
        <header className="sticky top-0 z-10 flex justify-between h-[57px] items-center gap-1 bg-background px-4 border border-gray-200">
          <h1 className="text-xl font-semibold">ShortMe</h1>
          {/* <Drawer>
            <DrawerTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Settings className="size-4" />
                <span className="sr-only">Settings</span>
              </Button>
            </DrawerTrigger>
            <DrawerContent className="max-h-[80vh]">
              <DrawerHeader>
                <DrawerTitle>Configuration</DrawerTitle>
                <DrawerDescription>
                  Configure the settings for the model and messages.
                </DrawerDescription>
              </DrawerHeader>
              
            </DrawerContent>
          </Drawer> */}
          <Profile />
        </header>

        <main className="grid flex-1 gap-4 overflow-auto lg:grid-cols-3">
          <div className="relative flex h-full min-h-[50vh] flex-col rounded-xl bg-muted/50 lg:col-span-2">
            <div className="grid grid-cols-3 p-3 pt-7">
              <div className="col-span-1">
                <Input
                  placeholder="Search with Long URL"
                  className="w-[90%] focus-within:outline-none bg-gray-200"
                />
              </div>
              <div className="col-span-2 flex gap-2 justify-end items-center">
                <ManageTags tags={tags}/>
                <CreateFolder />
                <SelectFolder />
                <SelectFolder />
                <CreateURL tags={tags}/>
              </div>
            </div>
            <URLContainer />
          </div>

          <div
            className="relative hidden flex-col items-start gap-8 md:flex p-5"
            x-chunk="dashboard-03-chunk-0"
          >
            <Chart/>
          </div>
        </main>
      </div>
    </div>
  );
}

export default Dashboard;
