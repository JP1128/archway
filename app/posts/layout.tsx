import { MainNavbar } from "@/components/navbar-main";
import MainSidebar from "@/components/posts/sidebar";

export default function SplashLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="h-screen">
      <MainNavbar />
      <MainSidebar />
      <main className="ml-64 h-auto p-4">{children}</main>
    </div>
  );
}
