"use client";

import {
  Avatar,
  Dropdown,
  DropdownHeader,
  DropdownItem,
  Navbar,
  NavbarBrand,
  NavbarToggle,
  theme,
} from "flowbite-react";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React from "react";
import { Loader } from "lucide-react";
import { twMerge } from "tailwind-merge";
import PostCreateModal from "./posts/post-create-modal";

function AuthenticatedNavbar({ user }) {
  const pathname = usePathname();
  const router = useRouter();

  async function handleSignOut() {
    await signOut({
      redirect: false,
    });
    router.push("/");
  }

  return (
    <Navbar fluid>
      <NavbarBrand href="/">
        <span className="self-center text-xl font-black whitespace-nowrap dark:text-white">
          ARCHWAY
        </span>
      </NavbarBrand>
      <div></div>
      <div className="flex items-center gap-3 lg:order-2">
        {!pathname.match("/posts/*") && (
          <Link
            key="posts"
            href="/posts"
            color="gray"
            className="hover:text-primary-800 mr-2 rounded-lg px-4 py-2 text-sm font-medium text-gray-800 lg:px-5 lg:py-2.5"
          >
            Go to application
          </Link>
        )}
        {pathname == "/posts" && <PostCreateModal />}
        <Dropdown
          arrowIcon={false}
          inline
          label={
            <div className="flex flex-row items-center gap-2">
              <div className="font-medium text-gray-700">
                Welcome, {user.email}
              </div>

              <Avatar
                img={user.image}
                className="border-1 border-gray-500"
                rounded
              />
            </div>
          }
          theme={{
            floating: {
              base: twMerge(theme.dropdown.floating.base, "w-56"),
            },
          }}
        >
          <DropdownHeader>
            <span className="block truncate text-sm font-medium text-gray-500 dark:text-gray-400">
              {user.email}
            </span>
          </DropdownHeader>
          <DropdownItem
            className="bg-gray-100 font-bold text-gray-500 dark:text-gray-400"
            onClick={handleSignOut}
          >
            Logout
          </DropdownItem>
        </Dropdown>

        <NavbarToggle theme={{ icon: "h-5 w-5 shrink-0" }} />
      </div>
    </Navbar>
  );
}

function UnauthenticatedNavbar() {
  const path = usePathname();

  const hideSignUp = ["/signup"];
  const hideLogIn = ["/login"];

  const links = [
    <Link
      key="posts"
      href="/posts"
      color="gray"
      className="hover:text-primary-800 mr-2 rounded-lg px-4 py-2 text-sm font-medium text-gray-800 lg:px-5 lg:py-2.5"
    >
      Go to application
    </Link>,
    !hideLogIn.includes(path) && (
      <Link
        key="login"
        href="/login"
        className="bg-primary-700 hover:bg-primary-900 mr-2 rounded-lg border-2 px-4 py-2 text-sm font-medium text-white lg:px-5 lg:py-2.5"
      >
        Log in
      </Link>
    ),
    !hideSignUp.includes(path) && (
      <Link
        key="signup"
        href="/signup"
        className="border-primary-700 text-primary-700 hover:border-primary-900 hover:text-primary-900 mr-2 rounded-lg border-2 bg-white px-4 py-2 text-sm font-medium lg:px-5 lg:py-2.5"
      >
        Sign up
      </Link>
    ),
  ];

  return (
    <Navbar fluid>
      <NavbarBrand href="/">
        <span className="self-center text-xl font-black whitespace-nowrap dark:text-white">
          ARCHWAY
        </span>
      </NavbarBrand>
      <div className="flex items-center gap-3 lg:order-2">
        {links}
        <NavbarToggle theme={{ icon: "h-5 w-5 shrink-0" }} />
      </div>
    </Navbar>
  );
}

function SessionManagedNavbar() {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return (
      <Loader className="m-4 flex w-full animate-spin flex-row justify-center" />
    );
  }

  if (!session?.user) {
    return <UnauthenticatedNavbar />;
  }

  return <AuthenticatedNavbar user={session.user} />;
}

export function MainNavbar() {
  return (
    <header className="border-b border-gray-200">
      <SessionManagedNavbar />
    </header>
  );
}
