"use client";

import { Button } from "@heroui/react";
import Link from "next/link";
import NavLink from "../NavLink/NavLink";
import avatar from "@/assets/user.png";
import Image from "next/image";
import { authClient } from "@/lib/auth-client";
import { router } from "better-auth/api";

const navLinkItems = [
  { name: "Home", link: "/" },
  { name: "About", link: "/about" },
  { name: "Career", link: "/career" },
];

export default function Navbar() {
  const { data: session } = authClient.useSession();
  const user = session?.user;
  console.log("user session data: ", session?.user);

  return (
    <nav>
      <div className="cssContainer flex items-center justify-between py-8">
        <div className=" "></div>
        <ul className="flex gap-4 items-center">
          {navLinkItems.map((item) => (
            <li key={item.name}>
              <NavLink navLink={item}></NavLink>
            </li>
          ))}
        </ul>

        <div className="flex gap-2 items-center">
          {user?.name && `Hi, ${user?.name}`}
          <Link href={"/login"}>
            <Image src={avatar} alt="avatar"></Image>
          </Link>

          {user ? (
            <Button
              onClick={async () =>
                await authClient.signOut({
                  fetchOptions: {
                    onSuccess: () => {
                      router.push("/login"); // redirect to login page
                    },
                  },
                })
              }
              variant="tertiary"
              className={"rounded-none"}
            >
              Logout
            </Button>
          ) : (
            <Button variant="tertiary" className={"rounded-none"}>
              <Link href={"/login"}>Login</Link>
            </Button>
          )}
        </div>
      </div>
    </nav>
  );
}
