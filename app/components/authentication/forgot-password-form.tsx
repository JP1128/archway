"use client";

// import { register } from "@/lib/actions";
import { Button, Checkbox, Label, Select, TextInput } from "flowbite-react";
import Link from "next/link";
import { FormEvent, useState } from "react";

export function ForgotPasswordForm() {
  const [email, setEmail] = useState<string>("");

  //   async function handleSubmit(event: FormEvent<HTMLFormElement>) {
  //     event.preventDefault();

  //     try {
  //       const formData = new FormData(event.currentTarget);
  //       const response = await register(formData);

  //       if (response?.error) {
  //         console.log(response.error);
  //       }
  //     } catch (error) {
  //       console.log("Error while executing handleSubmit(event) in SignUpForm", error);
  //     }
  //   }

  return (
    <form className="w-xl max-w-md space-y-4 md:space-y-6 xl:max-w-xl">
      <h1 className="mb-1 text-xl leading-tight font-bold tracking-tight text-gray-900 sm:text-2xl dark:text-white">
        Reset your password
      </h1>
      <p className="text-gray-500 dark:text-gray-400">
        We’ll email you instructions to reset your password.
      </p>

      <div className="my-4 md:my-5">
        <Label
          htmlFor="email"
          className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
        >
          Email
        </Label>
        <TextInput
          id="email"
          name="email"
          placeholder="Enter your email"
          required
          type="email"
        />
      </div>

      <Button type="submit" className="w-full">
        Reset password
      </Button>
    </form>
  );
}
