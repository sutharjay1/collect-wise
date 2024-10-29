import { Bell, Plus, Settings } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { SidebarTrigger } from "../ui/sidebar";
import { P } from "../ui/typography";
import Hint from "./hint";
import UserDropdownMenu from "./user-avatar";

type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <div className="flex flex-1 flex-col overflow-hidden">
      <header className="relative z-20 flex items-center justify-between border-b border-gray-200 px-6 py-4">
        <div className="flex items-center justify-start gap-x-2">
          <SidebarTrigger className="size-8" />
          <Image
            src="/logo.jpg"
            className="h-auto w-32"
            width={128}
            height={128}
            alt="logo"
          />
        </div>
        <div className="flex items-center gap-3">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="default" className="gap-x-1">
                <Plus className="h-5 w-5" />
                <P className="hidden text-zinc-100 dark:text-zinc-900 md:flex [&:not(:first-child)]:mt-0">
                  Create
                </P>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem>
                <Link href="/submit-debts">Add Debtors to Collection</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href="/invoice-submission">Create payment link</Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <Hint label="Settings" side="bottom">
            <Button
              variant="ghost"
              size="icon"
              className="flex items-center justify-center"
              asChild
            >
              <Link href="/settings/billing">
                <Settings className="h-5 w-5" />
              </Link>
            </Button>
          </Hint>
          <Hint label="Notifications" side="bottom">
            <Button
              variant="ghost"
              size="icon"
              className="flex items-center justify-center"
            >
              <Bell className="h-5 w-5" />
            </Button>
          </Hint>
          <UserDropdownMenu />
        </div>
      </header>

      <main className="flex-1 overflow-y-auto">
        <div className="relative z-20 mx-auto w-full max-w-5xl py-4">
          {children}
        </div>
      </main>
    </div>
  );
};

export default Layout;
