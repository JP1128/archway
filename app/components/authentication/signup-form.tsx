"use client";

import { register } from "@/lib/actions";
import { Button, Checkbox, Label, Select, TextInput } from "flowbite-react";
import { TriangleAlert } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";

export function SignUpForm() {
  const [form, setForm] = useState({
    fullname: "",
    email: "",
    major: "",
    year: "freshman",
    password: "",
    confirmPassword: "",
  });

  const [error, setError] = useState<string>("");
  const [pending, setPending] = useState<boolean>(false);

  const router = useRouter();

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setPending(true);

    if (!validatePassword(form.password, form.confirmPassword)) return;

    try {
      const formData = new FormData(event.currentTarget);
      const response = await register(formData);

      if (response?.error) {
        setError(response.error);
      } else {
        router.push("/login");
      }
    } catch (error) {
      console.log(error);
    }

    setPending(false);
  }

  function validatePassword(password: string, confirmPassword: string) {
    if (confirmPassword && password != confirmPassword) {
      setError("Passwords must match");
      return false;
    }

    if (confirmPassword.length < 6) {
      setError("Password must be at least 6 characters long");
      return false;
    }

    setError("");
    return true;
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="w-xl max-w-md space-y-4 md:space-y-6 xl:max-w-xl"
    >
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
            value={form.fullname}
            disabled={pending}
            onChange={(event) =>
              setForm({ ...form, fullname: event.target.value })
            }
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
            value={form.email}
            disabled={pending}
            onChange={(event) =>
              setForm({ ...form, email: event.target.value })
            }
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
            value={form.major}
            disabled={pending}
            onChange={(event) =>
              setForm({ ...form, major: event.target.value })
            }
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
            value={form.year}
            disabled={pending}
            onChange={(event) => setForm({ ...form, year: event.target.value })}
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
            value={form.password}
            disabled={pending}
            type="password"
            onChange={(event) => {
              const newPassword = event.target.value;
              setForm({ ...form, password: newPassword });
              validatePassword(newPassword, form.confirmPassword);
            }}
            required
          />
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
            value={form.confirmPassword}
            disabled={pending}
            type="password"
            onChange={(event) => {
              const newPassword = event.target.value;
              setForm({ ...form, confirmPassword: newPassword });
              validatePassword(form.password, newPassword);
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

      <Button type="submit" disabled={pending} className="w-full">
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

      {error && (
        <div className="flex flex-row items-end space-x-2">
          <TriangleAlert className="h-5 w-5 text-red-600" />{" "}
          <p className="mt-1 ml-1 text-sm font-medium text-red-600">{error}</p>
        </div>
      )}
    </form>
  );
}
