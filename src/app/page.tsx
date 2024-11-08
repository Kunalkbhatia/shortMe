import SelectFolder from "@/components/SelectFolder";
import { Input } from "@/components/ui/input";
import { auth } from "@/auth";
import { redirect } from "next/navigation";
import CreateURL from "@/components/CreateURL";
import { ManageTags } from "@/components/ManageTags";
import prisma from "@/lib/db";
import URLCardRow from "@/components/URLCardRow";
import { SidebarTrigger } from "@/components/ui/sidebar";

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
    <div className="flex-1 flex flex-col space-y-12 p-3 md:p-8 h-screen overflow-hidden">
      <div className="flex justify-between items-center">
      <div className="text-3xl font-bold text-prim">Links</div>
      <SidebarTrigger/>
      </div>
      <div className="grid md:grid-cols-2 gap-5">
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
