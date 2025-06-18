"use client";

import { ReactNode } from "react";
import { Sidebar } from "@/components/layouts/sidebar";
import { Header } from "@/components/layouts/header";
import { SidebarProvider } from "@/components/layouts/sidebar/sidebar-context";

interface DashboardLayoutProps {
  children: ReactNode;
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <SidebarProvider>
      <div className="flex h-screen w-full overflow-hidden">
        <Sidebar />
        <main className="flex-1 overflow-y-auto overflow-x-hidden bg-gray-50 dark:bg-gray-dark">
          <Header />
          <div className="p-4 md:p-6 2xl:p-10 max-w-[1440px] mx-auto">
            {children}
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
}