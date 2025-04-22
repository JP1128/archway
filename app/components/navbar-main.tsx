"use client";

import { Navbar, NavbarBrand, NavbarToggle } from "flowbite-react";
import { SessionProvider, useSession } from "next-auth/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

function AuthenticatedNavbar() {
  const path = usePathname();

  return (
    <Navbar fluid>
      <NavbarBrand href="/">
        <span className="self-center text-xl font-black whitespace-nowrap dark:text-white">
          ARCHWAY
        </span>
      </NavbarBrand>
      <div className="flex items-center gap-3 lg:order-2">
        <Link
          key="posts"
          href="/posts"
          color="gray"
          className="hover:text-primary-800 mr-2 rounded-lg px-4 py-2 text-sm font-medium text-gray-800 lg:px-5 lg:py-2.5"
        >
          Go to application
        </Link>
        ,
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

  if (status === "loading" || !session?.user) {
    return <UnauthenticatedNavbar />;
  }

  return <AuthenticatedNavbar />;
}

export function MainNavbar() {
  return (
    <SessionProvider>
      <header className="border-b border-gray-200">
        <SessionManagedNavbar />
      </header>
    </SessionProvider>
  );
}
