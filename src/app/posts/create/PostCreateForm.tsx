"use client";

import { useState } from "react";
import { CloudUpload } from "lucide-react";
import Link from "next/link";

const CreatePostForm = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [topic, setTopic] = useState("");
  const [thumbnail, setThumbnail] = useState("");

  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="py-8 px-4 mx-auto max-w-5xl lg:py-16">
        <form
          onSubmit={(event) => {
            event.preventDefault();
            console.log("Title: ", title);
            console.log("Description: ", description);
            console.log("Topic:", topic);
            console.log("Thumbnail:", thumbnail);
            setTitle("");
            setDescription("");
            setTopic("");
            setThumbnail("");
          }}
        >
          <div id="create-product-accordion-collapse-body-1" className="" aria-labelledby="create-product-accordion-collapse-heading-1">
            <div className="py-4 border-gray-200 sm:py-5 dark:border-gray-700">
              <div className="grid gap-4 md:gap-6 md:grid-cols-2">
                <div className="space-y-4 sm:space-y-6">
                  <div>
                    <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                      Post Title
                    </label>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      onChange={(event) => {
                        setTitle(event.target.value);
                      }}
                      value={title}
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                      placeholder="e.g. How to be an awesome bulldog"
                      required
                    />
                  </div>
                  <div className="sm:col-span-2">
                    <label htmlFor="description" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                      Short Description
                    </label>
                    <textarea
                      id="description"
                      rows={5}
                      value={description}
                      className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500"
                      onChange={(event) => {
                        setDescription(event.target.value);
                      }}
                      placeholder="e.g. Use Archway!"
                    ></textarea>
                  </div>
                  <div className="w-full">
                    <label htmlFor="topic" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                      Topic
                    </label>
                    <select
                      id="topic"
                      required
                      value={topic}
                      onChange={(event) => {
                        setTopic(event.target.value);
                      }}
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    >
                      <option value="Food">Foods</option>
                      <option value="Courses">Courses & Classes</option>
                      <option value="Technology">Technology</option>
                      <option value="Places">Places</option>
                      <option value="Sports">Sports & Activities</option>
                      <option value="Health">Wellness & Health</option>
                      <option value="History">UGA History</option>
                    </select>
                  </div>
                </div>
                <div className="space-y-4 sm:space-y-6">
                  <div>
                    <label htmlFor="dropzone-file" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                      Thumbnail
                    </label>
                    <div className="flex justify-center items-center w-full">
                      <label
                        htmlFor="dropzone-file"
                        className="flex flex-col justify-center items-center w-full h-64 bg-gray-50 rounded-lg border-2 border-gray-300 border-dashed cursor-pointer dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
                      >
                        <div className="flex flex-col justify-center items-center pt-5 pb-6">
                          <CloudUpload className="w-16 h-16 text-gray-500" />
                          <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                            <span className="font-semibold">Click to upload</span> or drag and drop
                          </p>
                          <p className="mb-4 text-xs text-gray-500 dark:text-gray-400">Max. File Size: 30MB</p>
                        </div>
                        <input
                          id="dropzone-file"
                          type="file"
                          value={thumbnail}
                          onChange={(event) => {
                            setThumbnail(event.target.value);
                          }}
                          className="hidden"
                        />
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <button
            type="submit"
            className="w-full items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-white border-2 border-primary-700 bg-primary-700 rounded-lg focus:ring-4 focus:ring-primary-200 hover:bg-white hover:text-primary-700"
          >
            Create post
          </button>
          <Link href="/posts">
            <div className="w-full items-center px-5 py-2.5 mt-2 sm:mt-4 text-sm font-medium text-center border-2 text-primary-700 rounded-lg focus:ring-4 focus:ring-primary-200  hover:bg-primary-900 hover:text-white">
              Go back
            </div>
          </Link>
        </form>
      </div>
    </section>
  );
};

export default CreatePostForm;
