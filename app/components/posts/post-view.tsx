"use client";

import { PostDocument } from "@/models/Post";
import { UserDocument } from "@/models/User";
import { Avatar, Badge } from "flowbite-react";
import { Pencil } from "lucide-react";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { useEffect, useState } from "react";
import ArticleView from "./article-view";

export default function PostView({ id }) {
  const { data: session, status } = useSession();

  const [post, setPost] = useState<PostDocument>();
  const [author, setAuthor] = useState<UserDocument>();

  useEffect(() => {
    fetch(`/api/posts/${id}`, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((data) => setPost(data));
  }, [id]);

  useEffect(() => {
    if (post)
      fetch(`/api/user/${post.author}`)
        .then((response) => response.json())
        .then((data) => setAuthor(data));
  }, [post]);

  if (!post) {
    return <></>;
  }

  return (
    <div className="mx-auto mt-5 flex max-w-screen-xl justify-between px-4">
      <article className="format format-md format-blue dark:format-invert sm:format-sm lg:format-lg mx-auto w-full max-w-3xl">
        <header className="not-format mb-4 lg:mb-6">
          {status === "authenticated" &&
            session.user?.email === post?.author && (
              <Link
                href={`/posts/${id}/edit`}
                className="space-2 mb-5 flex w-fit flex-row items-center gap-2 rounded-sm border-1 border-gray-400 px-2 py-1 font-medium hover:bg-gray-100"
              >
                <Pencil className="h-4 w-4 font-medium text-gray-600" />
                Edit
              </Link>
            )}
          <address className="mb-6 flex items-center not-italic">
            <div className="mr-3 inline-flex items-center text-sm text-gray-900 dark:text-white">
              {author && (
                <Avatar img={author.avatar_uri} rounded size="lg">
                  <p className="text-xl font-bold text-gray-900 dark:text-white">
                    {author.fullname}
                  </p>
                  <p className="text-base text-gray-500 dark:text-gray-400">
                    {author.email}
                  </p>
                  <p className="text-base text-gray-500 dark:text-gray-400">
                    {post.createdAt.toString()}
                  </p>
                </Avatar>
              )}
            </div>
          </address>
          <Badge color="gray" className="inline">
            {post.topic}
          </Badge>

          <h1 className="mb-4 text-3xl leading-tight font-extrabold text-gray-900 lg:mb-6 lg:text-4xl dark:text-white">
            {post.title}
          </h1>
        </header>
        <ArticleView html={post.content} />
      </article>
    </div>
  );
}
