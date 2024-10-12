"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import Logo from "./logo";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const routes = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "Events",
    path: "/events/all",
  },
];

export default function Header() {
  const currentPath = usePathname();

  return (
    <header className="flex items-center justify-between border-b border-white/10 h-14 px-3 md:px-9  ">
      <Logo />
      <nav className="h-full">
        <ul className="flex flex-row gap-x-6 h-full text-sm">
          {routes.map((route) => (
            <li
              key={route.path}
              className={cn(
                "hover:text-white flex items-center transition-all relative",
                {
                  "text-white": currentPath === route.path,
                  "text-white/50": currentPath !== route.path,
                }
              )}
            >
              <Link href={route.path}>{route.name}</Link>

              {currentPath === route.path && (
                <motion.div
                  layoutId="header-active-link"
                  className="bg-lime-300 h-1 w-full absolute bottom-0"
                ></motion.div>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
