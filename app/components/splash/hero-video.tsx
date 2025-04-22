import Link from "next/link";

export default function HeroVideo() {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="mx-auto grid max-w-screen-xl px-4 py-8 lg:grid-cols-12 lg:gap-8 lg:py-16 xl:gap-0">
        <div className="mr-auto place-self-center lg:col-span-7">
          <h1 className="mb-4 max-w-2xl text-4xl leading-none font-extrabold tracking-tight md:text-5xl xl:text-6xl dark:text-white">
            Knowledge base for the{" "}
            <span className="text-primary-700">UGA Bulldogs</span>
          </h1>
          <p className="mb-6 max-w-2xl text-gray-500 md:text-lg lg:mb-8 lg:text-xl dark:text-gray-400">
            <span className="text-primary-700 font-medium">Archway</span>{" "}
            provides a platform for UGA students to post and share contents that
            can // benefit other UGA students. It could be tips, advices, or
            general information that can be useful for other students to know
            and apply.
          </p>
          <div className="flex w-fit items-center gap-5">
            <Link
              href="/signup"
              className="bg-primary-700 hover:bg-primary-800 focus:ring-primary-300 mr-2 rounded-lg px-4 py-2 text-sm font-medium text-white focus:ring-4 focus:outline-none lg:px-5 lg:py-2.5"
            >
              Get started
            </Link>
          </div>
        </div>
        <div className="hidden lg:col-span-5 lg:mt-0 lg:flex">
          <iframe
            className="mx-auto h-64 w-full max-w-xl rounded-lg sm:h-96"
            src="https://www.youtube.com/embed/8B1EtVPBSMw?si=dk9g4O_Pc7wnJoZj"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          ></iframe>
        </div>
      </div>
    </section>
  );
}
