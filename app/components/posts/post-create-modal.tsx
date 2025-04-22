"use client";

import {
  Button,
  Label,
  Modal,
  ModalBody,
  ModalHeader,
  Select,
  Textarea,
  TextInput,
} from "flowbite-react";
import { Plus } from "lucide-react";
import { useState } from "react";

export default function PostCreateModal() {
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <Button onClick={() => setOpenModal(true)}>
        <Plus className="mr-2" />
        Create Post
      </Button>
      <Modal onClose={() => setOpenModal(false)} show={openModal}>
        <ModalHeader>Create new post</ModalHeader>
        <ModalBody className="relative rounded-lg bg-white p-4 shadow sm:p-5 dark:bg-gray-800">
          <form action="#">
            <div className="mb-4 grid gap-4 sm:grid-cols-2">
              <div>
                <Label
                  htmlFor="name"
                  className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                >
                  Name
                </Label>
                <TextInput
                  id="name"
                  name="name"
                  placeholder="Type product name"
                  required
                />
              </div>
              <div>
                <Label
                  htmlFor="brand"
                  className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                >
                  Brand
                </Label>
                <TextInput
                  id="brand"
                  name="brand"
                  placeholder="Product brand"
                />
              </div>
              <div>
                <Label
                  htmlFor="price"
                  className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                >
                  Price
                </Label>
                <TextInput
                  id="price"
                  name="price"
                  placeholder="$2999"
                  type="number"
                />
              </div>
              <div>
                <Label
                  htmlFor="category"
                  className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                >
                  Category
                </Label>
                <Select id="category">
                  <option selected>Select category</option>
                  <option value="TV">TV/Monitors</option>
                  <option value="PC">PC</option>
                  <option value="GA">Gaming/Console</option>
                  <option value="PH">Phones</option>
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
                  rows={4}
                />
              </div>
            </div>
            <Button size="lg" className="[&>span]:text-sm">
              Add new product
            </Button>
          </form>
        </ModalBody>
      </Modal>
    </>
  );
}
