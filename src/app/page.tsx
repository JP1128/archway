import Image from "next/image";
import Link from "next/link";
import Navbar from "./navbar";
import Footer from "./footer";

const FirstSection = () => (
  <section className="bg-white">
    <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16">
      <div className="grid gap-8 items-center mb-8 lg:mb-24 lg:gap-12 lg:grid-cols-12">
        <div className="col-span-6 text-center sm:mb-6 lg:text-left lg:mb-0">
          <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl xl:text-6xl">
            Knowledge base for the <span className="text-primary-700">UGA Bulldogs</span>
          </h1>
          <p className="mx-auto mb-6 max-w-xl font-normal text-gray-500 lg:mx-0 xl:mb-8 md:text-lg xl:text-xl">
            <span className="text-primary-700 font-medium">Archway</span> provides a platform for UGA students to post and share contents that can
            benefit other UGA students. It could be tips, advices, or general information that can be useful for other students to know and apply.
          </p>
          <div className="justify-center items-center mx-auto mb-3 space-y-4 sm:flex lg:justify-start sm:space-y-0 sm:space-x-4">
            <Link
              href="/signup"
              className="text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
            >
              Sign up
            </Link>
          </div>
        </div>
        <div className="col-span-6">
          <iframe
            className="mx-auto w-full max-w-xl h-64 rounded-lg sm:h-96"
            src="https://www.youtube.com/embed/8B1EtVPBSMw?si=dk9g4O_Pc7wnJoZj"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          ></iframe>
        </div>
      </div>
    </div>
  </section>
);

const SecondSection = () => (
  <section className="bg-white dark:bg-gray-900">
    <div className="py-8 px-4 mx-auto space-y-12 max-w-screen-xl lg:space-y-20 sm:py-16 lg:px-6">
      <div className="gap-8 items-center lg:grid lg:grid-cols-2 xl:gap-16">
        <Image src="/splash_img_1.png" width={900} height={900} className="hidden mb-4 w-full lg:mb-0 lg:flex rounded-lg" alt="First splash image" />
        <div className="text-gray-500 sm:text-lg dark:text-gray-400">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Master Your Academic Life</h2>
          <p className="mb-8 font-light lg:text-xl">
            From course planning to exam prep, Archway brings together the insights students wish they had sooner. You can explore or contribute to
            class guides that break down what to expect, who to take, and how to survive both core and major classes. Find registration tips to help
            you beat the system (legally) and actually get the classes you want. Discover upperclassmen-approved study spots—hidden campus gems with
            strong Wi-Fi, reliable charging ports, and the quiet you didn’t know you needed. Whether you’re navigating your first semester or planning
            your final year, Archway helps you stay ahead—without the stress.
          </p>
        </div>
      </div>
      <div className="gap-8 items-center lg:grid lg:grid-cols-2 xl:gap-16">
        <div className="text-gray-500 sm:text-lg dark:text-gray-400">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Thrive Beyond the Classroom</h2>
          <p className="mb-8 font-light lg:text-xl">
            UGA isn’t just about grades–it’s about growing, connecting, and making it count. Archway points you to essential campus resources like
            mental health services, tutoring, and financial support, while also helping you find your people through clubs, events, and student orgs.
            You’ll get everyday hacks for surviving (and thriving in) student life—think meal plan tips, bus routes decoded, and laundry room
            strategies. But it doesn’t stop at campus. Discover the city of Athens: its cozy coffee shops, local music scene, farmers markets, and
            hidden study spots off the beaten path. Being a student here is more than just showing up to class—it’s about building a life that feels
            like yours.
          </p>
        </div>
        <Image src="/splash_img_2.png" width={900} height={900} className="hidden mb-4 w-full lg:mb-0 lg:flex rounded-lg" alt="Second splash image" />
      </div>
    </div>
  </section>
);

const items = [
  {
    imgSrc: "/splash_img_3.png",
    imgAlt: "Third splash image",
    title: "Post Articles",
    description:
      "Share your own experiences, advice, or class breakdowns. Whether it's how you survived Organic Chemistry or a guide to the best spots for studying, your insights can help another Dawg thrive.",
  },
  {
    imgSrc: "/splash_img_4.png",
    imgAlt: "Fourth splash image",
    title: "Find Your Community",
    description:
      "Looking for your people? From major-specific groups to hobby-based clubs, Archway connects you with organizations and events to find your niche.",
  },
  {
    imgSrc: "/splash_img_5.png",
    imgAlt: "Fifth splash image",
    title: "Ace the Little Things",
    description:
      "College life is full of unspoken rules. Archway helps you navigate them - from choosing the right meal plan to mastering campus shortcuts. It’s the stuff no one tells you, but everyone wishes they knew.",
  },
  {
    imgSrc: "/splash_img_5.png",
    imgAlt: "Fifth splash image",
    title: "Give Back, Stay Connected",
    description:
      "You’ve figured out a thing or two, why not pass it on? Contribute your own tips, write for Archway, and help make UGA even better for the next Dawg after you.",
  },
];

const ThirdSection = () => (
  <section className="bg-white ">
    <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
      <div className="text-center text-gray-900">
        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 lg:text-5xl dark:text-white">Something inspiring</h2>
      </div>
      <div className="grid gap-6 mt-12 h-fit lg:mt-14 lg:gap-12 md:grid-cols-2">
        {items.map((item, index) => (
          <div className="flex flex-col w-md mb-2 md:mb-0 mx-auto" key={index}>
            <Image className="hidden w-full mb-4 lg:mb-0 lg:flex rounded-lg" src={item.imgSrc} alt={item.imgAlt} width={1000} height={1000} />
            <h3 className="text-xl font-bold md:mt-4 mb-2.5 text-gray-900 dark:text-white">{item.title}</h3>
            <p className="text-gray-500">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen mt-16 flex flex-col">
        <main>
          <FirstSection />
          <SecondSection />
          <ThirdSection />
        </main>
      </div>
      <Footer />
    </>
  );
}
