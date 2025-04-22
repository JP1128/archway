import { MainFooter } from "@/components/footer-main";
import { MainNavbar } from "@/components/navbar-main";

export default function SplashLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex h-screen flex-col justify-between">
      <MainNavbar />
      {children}
      <MainFooter />
    </div>
  );
}
