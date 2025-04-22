"use client";

import {
  Button,
  Label,
  Modal,
  ModalBody,
  Select,
  Textarea,
  TextInput,
} from "flowbite-react";
import { CloudUpload, Plus } from "lucide-react";
import { FormEvent, useEffect, useState } from "react";
import Image from "next/image";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function PostCreateModal() {
  const { data: session } = useSession();

  const [openModal, setOpenModal] = useState(false);

  const [form, setForm] = useState({
    title: "",
    description: "",
    topic: "",
  });

  const [selectedFile, setSelectedFile] = useState();
  const [preview, setPreview] = useState<string>("");

  const router = useRouter();

  useEffect(() => {
    if (!selectedFile) {
      setPreview("");
      return;
    }

    const objectUrl = URL.createObjectURL(selectedFile);
    setPreview(objectUrl);

    return () => URL.revokeObjectURL(objectUrl);
  }, [selectedFile]);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    try {
      const response = await fetch("/api/upload", {
        method: "PUT",
        body: formData,
      });

      if (response.ok) {
        const body = await response.json();
        const { url } = body;

        formData.append("thumbnail", url);
        formData.append("author", session.user.email);
        formData.append("content", "");

        const createPostResponse = await fetch("/api/posts", {
          method: "POST",
          body: formData,
        });

        if (createPostResponse.ok) {
          const { post_id } = await createPostResponse.json();
          router.push(`/posts/${post_id}/edit`);
        }
      }
    } catch (error) {
      console.log(error);
    }
  }

  async function onSelectFile(event) {
    if (!event.target.files || event.target.files.length === 0) {
      setSelectedFile(undefined);
      return;
    }

    setSelectedFile(event.target.files[0]);
  }

  return (
    <>
      <Button onClick={() => setOpenModal(true)}>
        <Plus className="mr-2" />
        Create Post
      </Button>
      <Modal onClose={() => setOpenModal(false)} show={openModal}>
        <ModalBody className="relative rounded-lg bg-white p-4 shadow sm:p-10 dark:bg-gray-800">
          <form onSubmit={handleSubmit}>
            <div className="mb-4 grid gap-4 sm:grid-cols-2">
              <div className="mb-4 sm:col-span-2">
                <div className="flex w-full items-center justify-center">
                  <Label
                    htmlFor="file"
                    className="flex h-42 w-full cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed border-gray-300 bg-gray-50 hover:bg-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:border-gray-500 dark:hover:bg-gray-600"
                  >
                    {selectedFile ? (
                      <div className="relative h-full w-full">
                        <Image
                          src={preview}
                          alt="Selected file"
                          layout="fill"
                          style={{ objectFit: "contain" }}
                        />
                      </div>
                    ) : (
                      <div className="flex flex-col items-center justify-center pt-5 pb-6">
                        <CloudUpload className="mb-3 h-10 w-10 text-gray-400" />
                        <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                          <span className="font-semibold">
                            Click to upload thumnail
                          </span>
                        </p>
                      </div>
                    )}

                    <input
                      id="file"
                      name="file"
                      type="file"
                      className="hidden"
                      onChange={onSelectFile}
                      required
                    />
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
            <div className="flex flex-row space-x-3">
              <Button type="submit">Create new post</Button>
              <Button
                className="bg-gray-400 hover:bg-gray-800"
                onClick={() => {
                  return setOpenModal(false);
                }}
              >
                Discard
              </Button>
            </div>
          </form>
        </ModalBody>
      </Modal>
    </>
  );
}
