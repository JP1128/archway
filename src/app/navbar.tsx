import Link from "next/link";

interface INavbarProps {}

const Navbar: React.FC<INavbarProps> = () => {
  return (
    <nav className="fixed top-0 z-50 w-full border-b border-gray-200 bg-white px-4 lg:px-6 py-2.5">
      <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-2xl">
        <Link href="/" className="flex items-center">
          <span className="self-center text-xl font-black whitespace-nowrap">ARCHWAY</span>
        </Link>
        <div className="flex items-center lg:order-2">
          <Link
            href="/login"
            className="text-gray-800 hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
          >
            Log in
          </Link>
          <Link
            href="/signup"
            className="text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
          >
            Sign up
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
