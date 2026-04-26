import { Button, Card, CloseButton, Link } from "@heroui/react";
import Image from "next/image";

export function NewsCard({ news }) {
  console.log(news);
  const { _id, title, details, thumbnail_url } = news;
  return (
    <Card className="w-full items-stretch md:flex-row">
      <div className="relative h-[140px] w-full shrink-0 overflow-hidden rounded-2xl sm:h-[120px] sm:w-[120px]">
        <Image
          src={thumbnail_url}
          alt="card image"
          width={200}
          height={200}
          className="pointer-events-none absolute inset-0 h-full w-full scale-125 object-cover select-none"
          loading="lazy"
        ></Image>
      </div>
      <div className="flex flex-1 flex-col gap-3">
        <Card.Header className="gap-1">
          <Card.Title className="pr-8">{title}</Card.Title>
          <Card.Description className="line-clamp-3">
            {details}
          </Card.Description>
        </Card.Header>
        <Card.Footer className="mt-auto flex w-full flex-col items-start gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-col">
            <span className="text-sm font-medium text-foreground">
              Only 10 spots
            </span>
            <span className="text-xs text-muted">Submission ends Oct 10.</span>
          </div>
          <Button className="w-full sm:w-auto">
            <Link href={`/newsdetail/${_id}`}>Apply Now</Link>
          </Button>
        </Card.Footer>
      </div>
    </Card>
  );
}
