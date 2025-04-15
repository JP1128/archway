import Link from "next/link";
import { cookies } from "next/headers";
import { Search } from "lucide-react";

interface INavbarProps {}

const Navbar: React.FC<INavbarProps> = () => {
  return (
    <nav className="fixed top-0 z-50 w-full border-b border-gray-200 bg-white px-4 lg:px-6 py-2.5">
      <div className="flex flex-wrap justify-between items-center w-full">
        <Link href="/" className="flex items-center">
          <span className="self-center text-xl font-black whitespace-nowrap">ARCHWAY</span>
        </Link>
        <div className="flex flex-row items-center">
          <form id="search-form" className="hidden mr-3 w-full lg:inline-block">
            <label htmlFor="search-bar" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300">
              Search
            </label>
            <div className="relative">
              <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                <Search className="w-4 h-4 text-gray-400"/>
              </div>
              <input
                type="search"
                id="search-bar"
                className="block py-2 px-4 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="Search"
                required
              />
            </div>
          </form>
          <div className="flex items-center lg:order-2">
            <Link
              href="/login"
              onClick={async () => {
                "use server";
                const cookieStore = await cookies();
                cookieStore.delete("authenticated");
              }}
              className="text-gray-600 border-2 border-gray-300 hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none text-nowrap"
            >
              Log out
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
