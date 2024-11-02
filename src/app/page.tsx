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
import SelectFolder from "@/components/SelectFolder";
import { Input } from "@/components/ui/input";
import { auth } from "@/auth";
import { redirect } from "next/navigation";
import CreateURL from "@/components/CreateURL";
import { ManageTags } from "@/components/ManageTags";
import prisma from "@/lib/db";
import URLCardRow from "@/components/URLCardRow";

async function Dashboard() {
  const session = await auth();
  if (!session?.user) redirect("/sign-in");

  const tags = await prisma.tag.findMany();
  const urls = await prisma.uRL.findMany({
    include: {
      tags: true,
    }
  });

  return (
    // <div className="flex flex-col gap-2 border-4 border-red-900">
    //   <header className="flex justify-between items-center h-[60px] p-8">
    //     <h1 className="text-3xl font-semibold">ShortMe</h1>
    //     <div className="flex gap-4">
    //       <div className="flex items-center gap-4">
    //         <ManageTags tags={tags} />
    //         <CreateFolder />
    //         <CreateURL tags={tags} />
    //       </div>
    //       <Profile />
    //     </div>
    //   </header>
    //   <main className="flex-1 grid lg:grid-cols-3 gap-4 p-4 overflow-hidden">
    //     <div className="lg:col-span-2 flex flex-col gap-4  overflow-hidden">
    //       <div className="flex justify-between gap-4">
    //         <Input
    //           placeholder="Search with Long URL"
    //           className="w-[50%] focus-within:outline-none bg-gray-200"
    //         />
    //         <div className="flex gap-2">
    //           <SelectFolder />
    //           <SelectFolder />
    //         </div>
    //       </div>
    //       <div className="flex-1 grid md:grid-cols-2 gap-2 overflow-y-auto  ">
    //         {urls.map((url) => (
    //           <URLCard url={url} key={url.id} />
    //         ))}
    //       </div>
    //     </div>
    //     <div className="hidden lg:block lg:col-span-1 overflow-auto space-y-5">
    //       <Chart />
    //       <Chart />
    //     </div>
    //   </main>
    // </div>
    <div className="flex-1 flex flex-col space-y-12 p-8 h-screen overflow-hidden">
      <div className="text-3xl font-bold text-prim">Links</div>
      <div className="grid lg:grid-cols-2 gap-5">
        <div className="flex gap-4">
          <SelectFolder />
          <Input
            placeholder="Search..."
            className="focus-within:outline-none bg-gray-200"
          />
        </div>
        <div className="flex justify-end items-center gap-5">
            <ManageTags tags={tags} />
            <CreateURL tags={tags} />
        </div>
      </div>
      <div className="flex-1 space-y-4 overflow-auto">
        {urls.map((url) => (
          <URLCardRow url={url} key={url.id} />
        ))}
      </div>
    </div>
  );
}

export default Dashboard;
