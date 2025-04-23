import Image from "next/image";

export default function CtaSection() {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="mx-auto max-w-screen-xl space-y-12 px-4 py-8 sm:py-16 lg:space-y-20 lg:px-6">
        <div className="items-center gap-8 lg:grid lg:grid-cols-2 xl:gap-16">
          <Image
            src="/memphis1.jpg"
            alt="Placeholder image 1"
            width={1000}
            height={1000}
            className="mb-4 hidden w-full rounded-lg lg:mb-0 lg:flex"
          />
          <div className="text-gray-500 sm:text-lg dark:text-gray-400">
            <h2 className="mb-4 text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white">
              Master Your Academic Life
            </h2>
            <p className="mb-8 lg:text-xl">
              From course planning to exam prep, Archway brings together the
              insights students wish they had sooner. You can explore or
              contribute to class guides that break down what to expect, who to
              take, and how to survive both core and major classes. Find
              registration tips to help you beat the system (legally) and
              actually get the classes you want. Discover upperclassmen-approved
              study spots—hidden campus gems with strong Wi-Fi, reliable
              charging ports, and the quiet you didn’t know you needed. Whether
              you’re navigating your first semester or planning your final year,
              Archway helps you stay ahead—without the stress.
            </p>
          </div>
        </div>

        <div className="items-center gap-8 lg:grid lg:grid-cols-2 xl:gap-16">
          <div className="text-gray-500 sm:text-lg dark:text-gray-400">
            <h2 className="mb-4 text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white">
              Thrive Beyond the Classroom
            </h2>
            <p className="mb-8 lg:text-xl">
              UGA isn’t just about grades–it’s about growing, connecting, and
              making it count. Archway points you to essential campus resources
              like mental health services, tutoring, and financial support,
              while also helping you find your people through clubs, events, and
              student orgs. You’ll get everyday hacks for surviving (and
              thriving in) student life—think meal plan tips, bus routes
              decoded, and laundry room strategies. But it doesn’t stop at
              campus. Discover the city of Athens: its cozy coffee shops, local
              music scene, farmers markets, and hidden study spots off the
              beaten path. Being a student here is more than just showing up to
              class—it’s about building a life that feels like yours.
            </p>
          </div>
          <Image
            src="/memphis2.jpg"
            alt="Placeholder image 2"
            width={1000}
            height={1000}
            className="mb-4 hidden w-full rounded-lg lg:mb-0 lg:flex"
          />
        </div>
      </div>
    </section>
  );
}
