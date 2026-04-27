"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavLink({ navLink }) {
  const { name, link } = navLink;

  // To get the current path name
  const path = usePathname();

  // Style according to the path
  const isActive = path == link;

  console.log(isActive);
  return (
    <Link href={link} className={`${isActive ? "border-b border-black" : ""}`}>
      {name}
    </Link>
  );
}
