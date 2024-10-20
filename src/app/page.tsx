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
import { auth } from "@/auth";
import { redirect } from "next/navigation";
import CreateURL from "@/components/CreateURL";
import { ManageTags } from "@/components/ManageTags";
import prisma from "@/lib/db";
import Link from "next/link";
import URLCard from "@/components/URLContainer";

async function Dashboard() {
  const session = await auth();
  if (!session?.user) redirect("/sign-in");

  const tags = await prisma.tag.findMany();
  const urls = await prisma.uRL.findMany();

  return (
    // <div className="flex flex-col h-screen overflow-hidden">
    //   <header className="sticky top-0 flex justify-between h-[60px] items-center gap-1 bg-background px-4 border border-gray-200">
    //     <h1 className="text-xl font-semibold">ShortMe</h1>
    //     <Link href="sign-in">Sign In</Link>

    //     <Profile />
    //   </header>

    //   <main className="h-[calc(100vh-60px)] grid lg:grid-cols-3 gap-4 border-red-900 border-8">
    //     <div className=" lg:col-span-2 flex flex-col h-full overflow-auto">
    //       <div className="grid grid-cols-3 p-3 pt-7">
    //         <div className="col-span-1">
    //           <Input
    //             placeholder="Search with Long URL"
    //             className="w-[90%] focus-within:outline-none bg-gray-200"
    //           />
    //         </div>
    //         <div className="col-span-2 flex gap-2 justify-end items-center">
    //           <ManageTags tags={tags} />
    //           <CreateFolder />
    //           <SelectFolder />
    //           <SelectFolder />
    //           <CreateURL tags={tags} />
    //         </div>
    //       </div>
    //       <div className="flex-1  hide-scrollbar p-3 grid grid-cols-1 md:grid-cols-2 gap-4">
    //         {urls.map((url) => (
    //           <URLCard url={url} key={url.id} />
    //         ))}
    //       </div>
    //     </div>

    //     {/* <div
    //       className="relative hidden flex-col items-start gap-8 md:flex p-5"
    //       x-chunk="dashboard-03-chunk-0"
    //     >
    //       <Chart />
    //     </div> */}
    //   </main>
    // </div>
    <div className="flex flex-col h-screen border-green-900 border-4">
      <header className="flex  justify-between items-center h-[60px] px-5 border-2 border-pink-600">
        <h1 className="text-xl font-semibold">ShortMe</h1>
        <Link href="sign-in">Sign In</Link>
        <Profile />
      </header>
      <main className="flex-1 grid grid-cols-3 border-4 border-red-900">
        <div className="col-span-2 flex flex-col border-4 border-purple-700">
          <div className="h-[60px] border-4 border-orange-500"></div>
          <div className="flex-1 overflow-y-auto border-4  border-teal-600">
            {urls.map((url) => (
              <div className="h-[200px] border-4 border-black" key={url.id}>
                {url.longURL}
              </div>
            ))}
          </div>
        </div>
        {/* <div className="col-span-1 border-4 border-blue-800"></div> */}
      </main>
    </div>
  );
}

export default Dashboard;
