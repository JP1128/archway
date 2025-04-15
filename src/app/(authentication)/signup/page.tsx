import Navbar from "@/app/navbar";
import Link from "next/link";

export default function SignupPage() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen flex flex-col">
        <section className="bg-white dark:bg-gray-900">
          <div className="grid lg:h-screen lg:grid-cols-2">
            <div className="flex justify-center items-center py-6 px-4 lg:py-0 sm:px-0">
              <form className="space-y-4 max-w-md md:space-y-6 xl:max-w-xl" action="#">
                <h2 className="text-xl font-bold text-gray-900 dark:text-white">Start Contributing Here!</h2>
                <div>
                  <label htmlFor="full-name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                    Full name
                  </label>
                  <input
                    type="text"
                    name="full-name"
                    id="email"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                    placeholder="e.g. JP Park"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                    Your email
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
                    Your password
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
                <div className="space-y-3">
                  <div className="flex items-start">
                    <div className="flex items-center h-5">
                      <input
                        id="terms"
                        aria-describedby="terms"
                        type="checkbox"
                        className="w-4 h-4 bg-gray-50 rounded border border-gray-300 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                        required
                      />
                    </div>
                    <div className="ml-3 text-sm">
                      <label htmlFor="terms" className="font-light text-gray-500 dark:text-gray-300">
                        By signing up, you are creating Archway account, and you agree to Archway's{" "}
                        <Link href="/terms" className="font-medium text-primary-600 dark:text-primary-500 hover:underline">
                          Terms of Use
                        </Link>{" "}
                        and{" "}
                        <Link href="/privacy" className="font-medium text-primary-600 dark:text-primary-500 hover:underline">
                          Privacy Policy
                        </Link>{" "}
                      </label>
                    </div>
                  </div>
                </div>
                <button
                  type="submit"
                  className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-700"
                >
                  Create an account
                </button>
                <p className="text-sm font-light text-gray-500 dark:text-gray-300">
                  Already have an account?{" "}
                  <Link href="/login" className="font-medium text-primary-600 hover:underline dark:text-primary-500">
                    Login here
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
