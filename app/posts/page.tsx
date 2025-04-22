"use client";

import PostCard from "@/components/posts/post-card";
import { PostDocument } from "@/models/Post";
import { useEffect, useState } from "react";

export default function Page() {
  const [posts, setPosts] = useState<PostDocument[]>([]);

  useEffect(() => {
    fetch("/api/posts")
      .then((res) => res.json())
      .then((data) => {
        const { posts } = data;
        setPosts(posts);
      });
  }, []);

  if (posts.length == 0) {
    return (
      <section className="bg-white dark:bg-gray-900">
        <div className="mx-auto max-w-screen-md px-4 py-8 text-center lg:px-12 lg:py-16">
          <h1 className="mb-4 text-4xl leading-none font-bold tracking-tight text-gray-900 md:text-5xl lg:mb-6 xl:text-6xl dark:text-white">
            No posts to show :(
          </h1>
          <p className="text-gray-500 md:text-lg xl:text-xl dark:text-gray-400">
            Be the first one to post!
          </p>
        </div>
      </section>
    );
  }

  return (
    <div className="grid gap-8 sm:grid-cols-3 lg:grid-cols-4">
      {posts.map((post) => (
        <PostCard
          key={post._id}
          post_id={post._id}
          thumnail_src={post.thumbnail}
          topic={post.topic}
          title={post.title}
          description={post.description}
          author={post.author}
          date={post.createdAt.toString()}
        />
      ))}
    </div>
  );
}
