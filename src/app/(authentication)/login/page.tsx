import Navbar from "@/app/navbar";
import { cookies } from "next/headers";
import Link from "next/link";

export default function LoginPage() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen flex flex-col">
        <section className="bg-white dark:bg-gray-900">
          <div className="grid lg:h-screen lg:grid-cols-2">
            <div className="flex items-center justify-center px-4 py-6 lg:py-0 sm:px-0">
              <form className="w-full max-w-md space-y-4 md:space-y-6 xl:max-w-xl" action="#">
                <h1 className="text-xl font-bold text-gray-900 dark:text-white">Welcome back!</h1>
                <div>
                  <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                    placeholder="Enter your email"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="Enter your password"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                    required
                  />
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-start">
                    <div className="flex items-center h-5">
                      <input
                        id="remember"
                        aria-describedby="remember"
                        type="checkbox"
                        className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                      />
                    </div>
                    <div className="ml-3 text-sm">
                      <label htmlFor="remember" className="text-gray-500 dark:text-gray-300">
                        Remember me
                      </label>
                    </div>
                  </div>
                  <Link href="/forgot" className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500">
                    Forgot password?
                  </Link>
                </div>
                <button
                  type="submit"
                  onClick={async () => {
                    "use server";
                    const cookieStore = await cookies();
                    cookieStore.set("authenticated", "true");
                  }}
                  className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                >
                  Log in
                </button>
                <div className="w-full">
                  {/* TODO DELETE THIS */}{" "}
                  <Link href="/posts" className="w-full rounded-lg text-center px-5 py-2.5 border-2 border-primary-600 text-primary-600">
                    Go to /posts
                  </Link>
                </div>
                <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                  Don't have an account?{" "}
                  <Link href="/signup" className="font-medium text-primary-600 hover:underline dark:text-primary-500">
                    Sign up
                  </Link>
                </p>
              </form>
            </div>
            <div className="flex items-center justify-center px-4 py-6 bg-primary-600 lg:py-0 sm:px-0">
              <div className="max-w-md xl:max-w-xl">
                <h1 className="mb-4 text-3xl font-extrabold leading-none tracking-tight text-white xl:text-5xl">
                  Think of something clever to put here.
                </h1>
                <p className="mb-4 font-light text-primary-200 lg:mb-8">Here too. Think of something clever.</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
