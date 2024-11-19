"use client"
import {
  Link,
  ChartNoAxesColumn,
} from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { usePathname } from "next/navigation";

// Menu items.
const items = [
  {
    title: "Links",
    url: "links",
    icon: Link,
  },
  {
    title: "Analytics",
    url: "analytics",
    icon: ChartNoAxesColumn,
  },
];

export function AppSidebar() {
  const path = usePathname();
  console.log(path);
  
  return (
    <Sidebar variant="floating">
      <SidebarContent>
        <SidebarGroup className="space-y-5">
          <SidebarGroupLabel className="flex justify-between">
              <div className="text-2xl font-semibold text-primaryButton">Short Me</div>
              <div>
                <Avatar>
                  <AvatarImage src="https://github.com/shadcn.png" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
              </div>
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title} className="hover:font-bold hover:text-primaryButton">
                  <SidebarMenuButton asChild>
                    <a href={item.url} className={path === `/${item.url}` ? "text-primaryButton font-bold" : undefined}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
              <SidebarMenuItem>
                  <SidebarMenuButton className="font-bold text-center bg-primaryButton text-white w-fit mx-2">
                    Logout
                  </SidebarMenuButton>
                </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
