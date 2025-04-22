import { Badge, Card } from "flowbite-react";
import Link from "next/link";
import Image from "next/image";

export interface PostCardProps {
  post_id: string;
  thumnail_src: string;
  topic: string;
  title: string;
  description: string;
  author: string;
  date: string;
}

export default function PostCard({
  post_id,
  thumnail_src,
  topic,
  title,
  description,
  author,
  date,
}: PostCardProps) {
  return (
    <Card className="[&>div]:p-5">
      <Link href={`/posts/${post_id}/view`} className="relative h-40">
        <Image
          className="rounded-lg"
          src={thumnail_src}
          layout="fill"
          style={{
            objectFit: "fill",
          }}
          alt={`Thumnail for ${title}`}
        />
      </Link>
      <span>
        <Badge color="gray" className="inline">
          {topic}
        </Badge>
      </span>
      <h2 className="-my-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        <Link href={`/posts/${post_id}/view`}>{title}</Link>
      </h2>
      <p className="text-gray-500 dark:text-gray-400">{description}</p>
      <div className="flex items-center space-x-4">
        <div className="font-medium dark:text-white">
          <div>{author}</div>
          <div className="text-sm font-normal text-gray-500 dark:text-gray-400">
            {date}
          </div>
        </div>
      </div>
    </Card>
  );
}
