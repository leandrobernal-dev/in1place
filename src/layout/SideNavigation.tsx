"use client";

import { useState } from "react";

import ProjectSelect from "@/components/ProjectSelect";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { LayoutDashboard, ListTodo, Menu, StickyNote } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import TopNavigation from "./TopNavigation";

export default function SideNavigation() {
  const pathName = usePathname();
  const menuLinks = [
    { href: "/app", name: "Dashboard", icon: <LayoutDashboard /> },
    { href: "/app/tasks", name: "Tasks", icon: <ListTodo /> },
    { href: "/app/notes", name: "Notes", icon: <StickyNote /> },
  ];

  const [open, setOpen] = useState(false);

  return (
    <>
      <TopNavigation open={open} setOpen={setOpen} />

      <aside
        className={`fixed bottom-0 left-0 top-16 w-full px-2 pt-4 dark:bg-black sm:w-64 ${
          open ? "block" : "hidden sm:block"
        }`}
      >
        <ProjectSelect />
        <Separator orientation="horizontal" className="my-4" />

        <ul className="flex flex-col gap-2">
          {menuLinks.map((link) => (
            <li
              key={link.href}
              className={`rounded hover:bg-zinc-900 ${
                pathName === link.href && "bg-zinc-900"
              }`}
            >
              <Link className="flex w-full gap-2 p-2" href={link.href}>
                <span>{link.icon}</span>
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </aside>
    </>
  );
}
