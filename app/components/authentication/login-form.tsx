"use client";

import { signIn } from "next-auth/react";
import { Button, Checkbox, Label, TextInput } from "flowbite-react";
import Link from "next/link";
import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import { TriangleAlert } from "lucide-react";

export function LogInForm() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const [pending, setPending] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  const router = useRouter();

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setPending(true);
    setError("");

    try {
      const response = await signIn("credentials", {
        redirect: false,
        email,
        password,
      });

      if (response?.error) {
        setError("Wrong password!");
      } else {
        router.push("/posts");
      }
    } catch (error) {
      console.log(error);
    }

    setPending(false);
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="w-xl max-w-md space-y-4 md:space-y-6 xl:max-w-xl"
    >
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
          disabled={pending}
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
          disabled={pending}
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

      <Button type="submit" disabled={pending} className="w-full">
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

      {error && (
        <div className="flex flex-row items-end space-x-2">
          <TriangleAlert className="h-5 w-5 text-red-600" />{" "}
          <p className="mt-1 ml-1 text-sm font-medium text-red-600">{error}</p>
        </div>
      )}
    </form>
  );
}
