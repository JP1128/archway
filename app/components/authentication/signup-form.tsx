"use client";

// import { register } from "@/lib/actions";
import { Button, Checkbox, Label, Select, TextInput } from "flowbite-react";
import Link from "next/link";
import { FormEvent, useState } from "react";

export function SignUpForm() {
  const [fullname, setFullname] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [major, setMajor] = useState<string>("");
  const [year, setYear] = useState<string>("freshman");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");

  const [error, setError] = useState<string>("");

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
        Start Here!
      </h1>

      <div className="mb-4 grid gap-4 sm:mb-8 md:grid-cols-2 md:gap-6">
        <div>
          <Label
            htmlFor="fullname"
            className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
          >
            Full Name
          </Label>
          <TextInput
            className="border-green-600 ring-green-600"
            id="fullname"
            name="fullname"
            placeholder="John Smith"
            value={fullname}
            onChange={(event) => setFullname(event.target.value)}
            required
          />
        </div>

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
            htmlFor="major"
            className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
          >
            Major
          </Label>
          <TextInput
            id="major"
            name="major"
            placeholder="Computer Science"
            value={major}
            onChange={(event) => setMajor(event.target.value)}
            required
          />
        </div>

        <div>
          <Label
            htmlFor="year"
            className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
          >
            Year
          </Label>
          <Select
            id="year"
            name="year"
            value={year}
            onChange={(event) => setYear(event.target.value)}
            required
          >
            <option value="freshman">Freshman</option>
            <option value="sophomore">Sophomore</option>
            <option value="junior">Junior</option>
            <option value="senior">Senior</option>
            <option value="super senior">Super Senior</option>
          </Select>
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
            onChange={(event) => {
              const newPassword = event.target.value;
              setPassword(newPassword);

              if (confirmPassword && confirmPassword != newPassword) {
                setError("Passwords must match");
              } else {
                setError("");
              }
            }}
            required
          />
          {error && <p className="mt-1 ml-1 text-sm text-red-600">{error}</p>}
        </div>

        <div>
          <Label
            htmlFor="confirm-password"
            className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
          >
            Confirm password
          </Label>
          <TextInput
            id="confirm-password"
            name="confirm-password"
            placeholder="•••••••••"
            value={confirmPassword}
            type="password"
            onChange={(event) => {
              const newPassword = event.target.value;
              setConfirmPassword(newPassword);

              if (password != newPassword) {
                setError("Passwords must match");
              } else {
                setError("");
              }
            }}
            required
          />
        </div>
      </div>

      <div className="mb-6 space-y-3">
        <div className="flex items-start">
          <div className="flex gap-3">
            <Checkbox id="terms" required />
            <Label htmlFor="terms" className="text-gray-500 dark:text-gray-400">
              By signing up, you are creating a Archway account, and you agree
              to Archway&nbsp;
              <Link
                href="/terms-of-use"
                className="text-primary-600 dark:text-primary-500 font-medium hover:underline"
              >
                Terms of Use
              </Link>
              &nbsp;and&nbsp;
              <Link
                href="/privacy-policy"
                className="text-primary-600 dark:text-primary-500 font-medium hover:underline"
              >
                Privacy Policy
              </Link>
              .
            </Label>
          </div>
        </div>
      </div>

      <Button type="submit" className="w-full">
        Create an account
      </Button>

      <p className="text-sm font-medium text-gray-900 dark:text-white">
        Already have an account?&nbsp;
        <Link
          href="/login"
          className="text-primary-600 dark:text-primary-500 font-medium hover:underline"
        >
          Login here
        </Link>
      </p>
    </form>
  );
}
