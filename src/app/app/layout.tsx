import SideNavigation from "@/layout/SideNavigation";
import TopNavigation from "@/layout/TopNavigation";
import React from "react";

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <main className="mt-16 p-2 sm:ml-64">
      <SideNavigation />
      {children}
    </main>
  );
}
