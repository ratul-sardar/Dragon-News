import { Button } from "@heroui/react";
import Link from "next/link";
import NavLink from "../NavLink/NavLink";
import avatar from "@/assets/user.png";
import Image from "next/image";

const navLinkItems = [
  { name: "Home", link: "/" },
  { name: "About", link: "/about" },
  { name: "Career", link: "/career" },
];

export default function Navbar() {
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
          <Link href={"/login"}>
            <Image src={avatar} alt="avatar"></Image>
          </Link>
          <Button variant="tertiary" className={"rounded-none"}>
            <Link href={"/login"}>Login</Link>
          </Button>
        </div>
      </div>
    </nav>
  );
}
