// "use client";
// import { ReactNode } from "react";
// import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
// import { AppSidebar } from "@/components/side-bar/app-side-bar";
// import Layout from "@/components/global/inner-layout";
// import Hint from "@/components/global/hint";
// import { Button } from "@/components/ui/button";
// import { Bell } from "lucide-react";
// import UserDropdownMenu from "@/components/global/user-avatar";

// const queryClient = new QueryClient();

// export default function RootLayout({ children }: { children: ReactNode }) {
//   return (
//     <QueryClientProvider client={queryClient}>
//       <SidebarProvider>
//         <AppSidebar />

//         <main>
//           <SidebarTrigger />
//           <Layout>
//             <div className="flex flex-1 flex-col overflow-hidden w-full">

//               <header className="flex w-full items-center justify-between px-6 py-4  ">
//                 <div className="flex items-center">
//                   <img
//                     src="/src/assets/logo.svg"
//                     className="h-auto w-20"
//                     alt="logo"
//                   />
//                 </div>
//                 <div className="flex items-center justify-end gap-3">
//                   <Hint label="Notifications" side="bottom">
//                     <Button
//                       variant="ghost"
//                       size="icon"
//                       className="flex items-center justify-center"
//                     >
//                       <Bell className="h-5 w-5" />
//                     </Button>
//                   </Hint>
//                   <UserDropdownMenu />
//                 </div>
//               </header>

//               <main className="flex-1 overflow-y-auto">
//                 <div className="mx-auto max-w-7xl">
//                   <div className="rounded-lg pt-0 md:p-6">{children}</div>
//                 </div>
//               </main>
//             </div>

//           </Layout>
//         </main>
//       </SidebarProvider>
//     </QueryClientProvider>
//   );
// }

"use client";
import Layout from "@/components/global/layout";
import { AppSidebar } from "@/components/side-bar/app-side-bar";
import { SidebarProvider } from "@/components/ui/sidebar";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactNode } from "react";

const queryClient = new QueryClient();

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <QueryClientProvider client={queryClient}>
      <SidebarProvider>
        <div className="flex h-screen w-screen overflow-hidden">
          <AppSidebar />

          <Layout>{children}</Layout>
        </div>
      </SidebarProvider>
    </QueryClientProvider>
  );
}
