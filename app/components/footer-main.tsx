import {
  Footer,
  FooterBrand,
  FooterCopyright,
  FooterLink,
  FooterLinkGroup,
} from "flowbite-react";

export function MainFooter() {
  return (
    <Footer className="rounded-none">
      <div className="mx-auto flex max-w-screen-xl flex-col items-center p-4 text-center md:p-8 lg:p-10 [&>div]:w-fit">
        <FooterBrand href="/" src="">
          <span className="self-center text-2xl font-black whitespace-nowrap dark:text-white">
            ARCHWAY
          </span>
        </FooterBrand>
        <p className="my-6 text-gray-500 dark:text-gray-400">
          Lorem ipsum dolor sit amet consectetur adipiscing elit. Dolor sit amet
          consectetur adipiscing elit quisque faucibus.
        </p>
        <FooterLinkGroup className="mb-6 flex flex-wrap items-center justify-center text-base text-gray-900 dark:text-white">
          <FooterLink href="/" className="mr-4 hover:underline md:mr-6">
            Home
          </FooterLink>
          <FooterLink href="/login" className="mr-4 hover:underline md:mr-6">
            Login
          </FooterLink>
          <FooterLink href="/signup" className="mr-4 hover:underline md:mr-6">
            Register
          </FooterLink>
          <FooterLink href="/posts" className="mr-4 hover:underline md:mr-6">
            Application
          </FooterLink>
          <FooterLink
            href="/terms-of-use"
            className="mr-4 hover:underline md:mr-6"
          >
            Terms of Use
          </FooterLink>
          <FooterLink
            href="/privacy-policy"
            className="mr-4 hover:underline md:mr-6"
          >
            Privacy Policy
          </FooterLink>
        </FooterLinkGroup>

        <FooterCopyright
          by="JP's Bus™. All Rights Reserved."
          href="/"
          year={2025}
        ></FooterCopyright>
      </div>
    </Footer>
  );
}
