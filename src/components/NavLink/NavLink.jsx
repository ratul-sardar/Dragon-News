import Link from "next/link";

export default function NavLink({ navLink }) {
  const { name, link } = navLink;
  return <Link href={link}>{name}</Link>;
}
