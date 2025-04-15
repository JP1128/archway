"use client";

import Link from "next/link";

interface IFooterProps {}

const Footer: React.FC<IFooterProps> = () => {
  return (
    <footer className="bg-white rounded-lg shadow-sm m-4">
      <div className="w-full mx-auto max-w-screen-2xl p-4 md:flex md:items-center md:justify-between">
        <span className="text-sm text-gray-500 sm:text-center">© 2025 JP's Bus. All Rights Reserved.</span>
        <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 sm:mt-0">
          <li>
            <Link href="/about" className="hover:underline me-4 md:me-6">
              About
            </Link>
          </li>
          <li>
            <Link href="/terms" className="hover:underline me-4 md:me-6">
              Terms of Use
            </Link>
          </li>
          <li>
            <Link href="/privacy" className="hover:underline me-4 md:me-6">
              Privacy Policy
            </Link>
          </li>
          <li>
            <Link href="/contact" className="hover:underline me-4 md:me-6">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
