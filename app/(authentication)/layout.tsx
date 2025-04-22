import Filler from "@/components/authentication/filler";
import { MainNavbar } from "@/components/navbar-main";

export default function AuthenticationLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex h-screen flex-col">
      <MainNavbar />
      <section className="grow bg-white dark:bg-gray-900">
        <div className="grid lg:h-full lg:grid-cols-2">
          <div className="flex items-center justify-center px-4 py-6 sm:px-0 lg:py-0">
            {children}
          </div>
          <Filler />
        </div>
      </section>
    </div>
  );
}
