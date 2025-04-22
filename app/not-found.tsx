/* eslint-disable react/no-unescaped-entities */
import Link from "next/link";

export default function NotFound() {
  return (
    <main>
      <section className="bg-white dark:bg-gray-900">
        <div className="mx-auto max-w-screen-xl px-4 py-8 lg:px-6 lg:py-16">
          <div className="mx-auto max-w-screen-sm text-center">
            <h1 className="text-primary-600 dark:text-primary-500 mb-4 text-7xl font-extrabold tracking-tight lg:text-9xl">
              404
            </h1>
            <p className="mb-4 text-3xl font-bold tracking-tight text-gray-900 md:text-4xl dark:text-white">
              Something's missing.
            </p>
            <p className="mb-10 text-lg text-gray-500 dark:text-gray-400">
              Sorry, we can't find that page. You'll find lots to explore on the
              home page.
            </p>
            <Link
              href="/"
              className="bg-primary-700 focus:ring-primary-300 hover:text-primary-800 mr-2 rounded-lg px-4 py-2 text-sm font-medium text-white hover:bg-white focus:ring-4 focus:outline-none lg:px-5 lg:py-2.5"
            >
              Back to Homepage
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
