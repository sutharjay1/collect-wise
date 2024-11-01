import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { BrushIcon, LogOut } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { P } from "../ui/typography";
import Hint from "./hint";
import { useTheme } from "next-themes";

const UserDropdownMenu = () => {
  const user = {
    image: "",
    username: "sutharjay1",
    email: "sutharjay3635@gmail.com",
    id: "1",
  };
  const { theme, setTheme } = useTheme();
  console.log("user", user);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          className="flex w-fit items-center gap-3 p-0 py-2 md:w-full md:px-3"
        >
          <Hint label={`Hello, ${user?.username}`} side="bottom">
            <div className="hidden min-w-0 flex-1 md:flex">
              <P className="truncate text-sm font-medium leading-none text-slate-900 dark:text-slate-200">
                {user?.email ?? "No Email"}
              </P>
            </div>
          </Hint>
          <Avatar className="h-8 w-8 md:h-7 md:w-7">
            {user?.image ? (
              <AvatarImage src={user.image} />
            ) : (
              <AvatarFallback className="bg-gradient-to-tl from-[#2BC0E4] to-[#EAECC6] text-zinc-900">
                {user?.username ? user.username[0].toUpperCase() : "?"}
              </AvatarFallback>
            )}
          </Avatar>
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent className="mb-2 ml-4 w-56" align="end">
        <DropdownMenuLabel className="font-normal">
          <div className="flex flex-col space-y-1">
            <P className="text-sm font-medium leading-none">{user?.username}</P>
            <P className="text-xs leading-none text-muted-foreground">
              {user?.email}
            </P>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        >
          <div className="flex w-full items-center">
            <BrushIcon className="mr-2 h-4 w-4" />
            <P className="text-sm [&:not(:first-child)]:mt-0">Toggle Theme</P>
          </div>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <P className="text-sm">✨ Upgrade to Premium</P>
        </DropdownMenuItem>
        <DropdownMenuSeparator />

        <DropdownMenuItem className="cursor-pointer">
          <LogOut className="mr-2 h-4 w-4" />
          <span>Sign Out</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default UserDropdownMenu;
