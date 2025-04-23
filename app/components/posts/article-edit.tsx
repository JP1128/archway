"use client";

import { useEffect, useState } from "react";
import ContentEditor from "./editor";
import { PostDocument } from "@/models/Post";
import { useSession } from "next-auth/react";
import { CloudUpload, Loader, Trash2 } from "lucide-react";
import { Button, Label, Select, Textarea, TextInput } from "flowbite-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function ArticleEdit({ id }) {
  const { data: session, status } = useSession();

  const [post, setPost] = useState<PostDocument>();

  const [form, setForm] = useState({
    title: "",
    description: "",
    topic: "",
    content: "",
  });

  const router = useRouter();

  useEffect(() => {
    if (session) {
      if (post && session.user.email != post.author) {
        router.push("/posts");
      }
    }

    if (status === "unauthenticated") {
      router.push("/login");
    }
  });

  useEffect(() => {
    fetch(`/api/posts/${id}`, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((data) => {
        setPost(data);
        setForm({
          title: data.title,
          description: data.description,
          topic: data.topic,
          content: data.content,
        });
      });
  }, [id]);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    formData.append("author", session.user.email);
    formData.append("content", form.content);
    formData.append("id", id);

    try {
      const createPostResponse = await fetch("/api/posts", {
        method: "PUT",
        body: formData,
      });

      if (createPostResponse.ok) {
        console.log("Success!");
        router.push(`/posts/${id}/view`);
      }
    } catch (error) {
      console.log(error);
    }
  }

  async function handleDelete(event) {
    event.preventDefault();

    try {
      const response = await fetch(`/api/posts/${id}`, {
        method: "DELETE",
      });

      if (response.ok) {
        console.log("Success!");
        router.push("/posts");
      }
    } catch (error) {
      console.log(error);
    }
  }

  if (!post || status === "loading") {
    return (
      <Loader className="m-4 flex w-full animate-spin flex-row justify-center" />
    );
  }

  return (
    <div className="m-auto flex flex-row gap-5">
      <form onSubmit={handleSubmit}>
        <div className="m-auto flex flex-row gap-5">
          <div className="w-md rounded-lg border-2 border-gray-200 p-5">
            <div className="mb-4 grid gap-4 sm:grid-cols-2">
              <div className="mb-4 sm:col-span-2">
                <div className="flex w-full items-center justify-center">
                  <Label
                    htmlFor="file"
                    className="flex h-42 w-full cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed border-gray-300 bg-gray-50 hover:bg-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:border-gray-500 dark:hover:bg-gray-600"
                  >
                    {post.thumbnail && (
                      <div className="relative h-full w-full">
                        <Image
                          src={post.thumbnail}
                          alt="Selected file"
                          layout="fill"
                          style={{ objectFit: "contain" }}
                        />
                      </div>
                    )}
                  </Label>
                </div>
              </div>
              <div>
                <Label
                  htmlFor="title"
                  className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                >
                  Title
                </Label>
                <TextInput
                  id="title"
                  name="title"
                  value={form.title}
                  onChange={(event) =>
                    setForm({ ...form, title: event.target.value })
                  }
                  placeholder="How to be an awesome bulldog"
                  required
                />
              </div>
              <div>
                <Label
                  htmlFor="topic"
                  className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                >
                  Topic
                </Label>
                <Select
                  id="topic"
                  name="topic"
                  value={form.topic}
                  onChange={(event) =>
                    setForm({ ...form, topic: event.target.value })
                  }
                  required
                >
                  <option value="">Choose a topic</option>
                  <option value="school">Courses & Classes</option>
                  <option value="activities">Sports & Activities</option>
                  <option value="health">Wellness & Health</option>
                  <option value="technology">Technology</option>
                  <option value="foods">Foods</option>
                  <option value="places">Places</option>
                  <option value="history">UGA History</option>
                </Select>
              </div>
              <div className="sm:col-span-2">
                <Label
                  htmlFor="description"
                  className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                >
                  Description
                </Label>
                <Textarea
                  id="description"
                  name="description"
                  placeholder="Write product description here"
                  value={form.description}
                  onChange={(event) =>
                    setForm({ ...form, description: event.target.value })
                  }
                  rows={4}
                  required
                />
              </div>
            </div>
            <div className="flex flex-row items-center space-x-3">
              <Button type="submit">Save</Button>
              <Button
                type="button"
                onClick={handleDelete}
                className="text-primary-800 bg-fit hover:bg-primary-800 w-fit border-2 hover:text-white"
              >
                <Trash2 className="h-5 w-5" />
              </Button>
              <Link
                href={`/posts/${id}/view`}
                className="text-primary-700 font-medium hover:underline"
              >
                Go back
              </Link>
            </div>
          </div>
          <ContentEditor
            content={form.content}
            setContent={(event) =>
              setForm({ ...form, content: event.target.value })
            }
          />
        </div>
      </form>
    </div>
  );
}
