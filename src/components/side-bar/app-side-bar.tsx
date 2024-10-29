import { Calendar, Inbox, Search, Settings } from "lucide-react";
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
import { DomainMode } from "@/types";
import { RiDashboard2Fill } from "react-icons/ri";
import Link from "next/link";
import { Button } from "../ui/button";

type MenuItem = {
  title: string;
  url: string;
  icon: React.ComponentType<{ className?: string }>;
};

const items: MenuItem[] = [
  {
    title: DomainMode.DASHBOARD,
    url: `/${DomainMode.DASHBOARD.toLowerCase()}`,
    icon: RiDashboard2Fill,
  },
  {
    title: DomainMode.DEBTORS,
    url: `/${DomainMode.DEBTORS.toLowerCase()}`,
    icon: Inbox,
  },
  {
    title: DomainMode.PAYMENTS,
    url: `/${DomainMode.PAYMENTS.toLowerCase()}`,
    icon: Calendar,
  },
  {
    title: DomainMode.SETTINGS,
    url: `/${DomainMode.SETTINGS.toLowerCase()}/billing`,
    icon: Settings,
  },
];

export function AppSidebar() {
  return (
    <Sidebar className="z-50 bg-base">
      <SidebarContent className="bg-base">
        <SidebarGroup>
          <SidebarGroupLabel className="text-xl text-zinc-200 dark:text-zinc-900">
            CollectWise
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <Button className="w-full" variant="ghost" asChild>
                    <Link
                      href={item.url}
                      className="flex items-center gap-2 text-zinc-200 dark:text-zinc-900"
                    >
                      <item.icon className="h-5 w-5" />
                      <span>{item.title}</span>
                    </Link>
                  </Button>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
