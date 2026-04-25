import Logo from "@/assets/logo.png";
import Image from "next/image";
import { format, compareAsc } from "date-fns";
import Marquee from "react-fast-marquee";
import { Button } from "@heroui/react";

export default function Header() {
  return (
    <header className="cssContainer grid justify-center pt-8 gap-3 text-center">
      <Image src={Logo} alt="Logo" width={400} className="mx-auto"></Image>
      <p className="text-center">Journalism Without Fear or Favour</p>
      <p className="">{format(new Date(), "eeee, MMMM dd, yyyy")} </p>
      <div className="flex bg-background-secondary p-2.5">
        <Button variant="danger" className={"rounded-none"}>
          Latest
        </Button>
        <Marquee pauseOnHover={true}>
          I can be a React component, multiple React components, or just some
          text.
        </Marquee>
      </div>
    </header>
  );
}
