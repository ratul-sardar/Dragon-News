"use client";

import { Button } from "@heroui/react";

export default async function CatagorySelectorButton({ catagory, handleNews }) {
  const news = await handleNews(catagory.category_id);
  return (
    <Button
      onClick={() => news()}
      variant="tertiary"
      fullWidth={true}
      className={"rounded-none"}
    >
      {catagory.category_name}
    </Button>
  );
}
