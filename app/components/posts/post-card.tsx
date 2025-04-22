import { Badge, Card } from "flowbite-react";
import Link from "next/link";
import Image from "next/image";

export interface PostCardProps {
  post_id: string;
  thumnail_src: string;
  tag: string;
  title: string;
  description: string;
  author: string;
  date: string;
}

export default function PostCard({
  post_id,
  thumnail_src = "https://birejeyjfeqjibpq.public.blob.vercel-storage.com/placeholder-0mHyvQBnOcM4NsEpOrZzpOa3bP2x6b.png",
  tag,
  title,
  description,
  author,
  date,
}: PostCardProps) {
  return (
    <Card className="[&>div]:p-5">
      <Link href={`/posts/${post_id}`}>
        <Image
          className="rounded-lg"
          src={thumnail_src}
          width={600}
          height={300}
          alt={`Thumnail for ${title}`}
        />
      </Link>
      <span>
        <Badge color="purple" className="inline">
          {tag}
        </Badge>
      </span>
      <h2 className="-my-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        <Link href={`/posts/${post_id}`}>{title}</Link>
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
