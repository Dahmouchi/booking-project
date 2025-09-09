/* eslint-disable @typescript-eslint/no-unused-vars */

"use client";

import type * as React from "react";
import {
  House,
  BellElectric,
  Settings2,
  Users,
  SwatchBook,
  Tickets,
  PlaneTakeoff,
  Newspaper,
  ListStart,
  Star,
  MessagesSquare,
  Route,
  Headset,
  ListOrdered,
  StarHalf,
  Sparkle,
  Sparkles,
  Key,
  Shapes,
  LibraryBig,
  BookText,
  Boxes,
  Box,
} from "lucide-react";

import { NavMain } from "./nav-main";
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarRail,
  useSidebar,
} from "@/components/ui/sidebar";
import Image from "next/image";
import { title } from "process";

// This is sample data.
const datas = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  teams: [
    {
      name: "Alert Application",
      logo: BellElectric,
      plan: "Dark Mode",
    },
  ],
  navMain: [
    {
      title: "Accueil",
      url: "/host/dashboard",
      icon: House,
    },
    {
      title: "Les Publicité",
      url: "/host/dashboard/publicite",
      icon: Boxes,
    },
    {
      title: "Ajouter Publicité",
      url: "/host/dashboard/publicite/add",
      icon: Box,
    },
    {
      title: "Settings",
      url: "/host/dashboard/settings",
      icon: Settings2,
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const { state } = useSidebar();

  return (
    <Sidebar
      collapsible="icon"
      {...props}
      className={`bg-gradient-to-br my-1  from-slate-900 via-slate-800 to-slate-900 overflow-hidden border-r border-slate-700 flex flex-col items-center rounded-tr-2xl  shadow-lg ${state === "expanded" ? " p-4" : "p-2"}`}
    >
      {/* Glow Orbs */}
      <div className="absolute top-20 -left-20 w-72 h-72 bg-white/30 rounded-full blur-[120px] animate-pulse" />
      <div className="absolute bottom-20 right-0 w-96 h-96 bg-[#f76e19]/20 rounded-full blur-[150px]" />
      <div className="absolute top-1/2 left-1/3 w-80 h-80 bg-purple-500/10 rounded-full blur-[200px]" />

      {/* Logo */}
      <SidebarHeader className="flex items-center justify-center py-4 bg-white rounded-lg border-2 m-2">
        <Image
          src={`${state === "expanded" ? "/images/logo.png" : "/logo.png"}`}
          alt="logo"
          width={state === "expanded" ? 160 : 50}
          height={50}
          className="transition-all duration-300"
        />
      </SidebarHeader>

      {/* Navigation */}
      <SidebarContent className="mt-6 w-full">
        <NavMain items={datas.navMain} />
      </SidebarContent>

      {/* Footer (user) */}
      <div className="mt-auto py-6 text-center text-slate-400 text-sm">
        <span>© 2025 Booking</span>
      </div>

      <SidebarRail />
    </Sidebar>
  );
}
