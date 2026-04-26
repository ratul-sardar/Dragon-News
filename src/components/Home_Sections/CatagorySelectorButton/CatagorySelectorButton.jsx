"use client";

import { getCatagorys } from "@/api/getNewsData";
import { Button } from "@heroui/react";
import Link from "next/link";

// To get the news catagorys
const catagorys = await getCatagorys();

export default function CatagorySelectorButton() {
  return (
    <>
      {catagorys.map((catagory) => (
        <Button
          key={catagory.category_id}
          variant="tertiary"
          fullWidth={true}
          className={"rounded-none"}
        >
          <Link href={`/news/${catagory.category_id}`}>
            {catagory.category_name}
          </Link>
        </Button>
      ))}
    </>
  );
}
