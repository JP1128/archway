"use client";

// import { register } from "@/lib/actions";
import { Button, Checkbox, Label, Select, TextInput } from "flowbite-react";
import Link from "next/link";
import { FormEvent, useState } from "react";

export function LogInForm() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

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
      <h1 className="mb-5 text-xl leading-tight font-bold tracking-tight text-gray-900 sm:text-2xl dark:text-white">
        Welcome Back!
      </h1>

      <div>
        <Label
          htmlFor="email"
          className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
        >
          Email
        </Label>
        <TextInput
          id="email"
          name="email"
          placeholder="john.smith@gmail.com"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          type="email"
          required
        />
      </div>

      <div>
        <Label
          htmlFor="password"
          className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
        >
          Password
        </Label>
        <TextInput
          id="password"
          name="password"
          placeholder="•••••••••"
          value={password}
          type="password"
          onChange={(event) => setPassword(event.target.value)}
          required
        />
      </div>

      <div className="flex items-center justify-between">
        <div className="flex items-start">
          <div className="flex h-5 items-center">
            <Checkbox id="remember" />
          </div>
          <div className="ml-3 text-sm">
            <Label
              htmlFor="remember"
              className="text-gray-500 dark:text-gray-300"
            >
              Remember me (wip)
            </Label>
          </div>
        </div>
        <Link
          href="/forgot-password"
          className="text-primary-600 dark:text-primary-500 text-sm font-medium hover:underline"
        >
          Forgot password?
        </Link>
      </div>

      <Button type="submit" className="w-full">
        Sign in to account
      </Button>

      <p className="text-sm font-medium text-gray-900 dark:text-white">
        Don&apos;t have an account?&nbsp;
        <Link
          href="/signup"
          className="text-primary-600 dark:text-primary-500 font-medium hover:underline"
        >
          Sign up
        </Link>
      </p>
    </form>
  );
}
