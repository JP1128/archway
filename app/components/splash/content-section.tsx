import clsx from "clsx";
import Image from "next/image";

const items = [
  {
    imgSrc: "/memphis3b.png",
    imgAlt: "Placeholder 3",
    title: "Post your knowledge",
    description:
      "Share your own experiences, advice, or class breakdowns. Whether it's how you survived Organic Chemistry or a guide to the best spots for studying, your insights can help another Dawg thrive.",
  },
  {
    imgSrc: "/memphis4b.jpg",
    imgAlt: "Placeholder 4",
    title: "Find your community",
    description:
      "Looking for your people? From major-specific groups to hobby-based clubs, Archway connects you with organizations and events to find your niche.",
  },
  {
    imgSrc: "/memphis5b.png",
    imgAlt: "Placeholder 5",
    title: "Ace it all",
    description:
      "College life is full of unspoken rules. Archway helps you navigate them - from choosing the right meal plan to mastering campus shortcuts. It’s the stuff no one tells you, but everyone wishes they knew.",
  },
];

export default function ContentSection() {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="mx-auto max-w-screen-xl px-4 py-8 lg:px-6 lg:py-16">
        <div className="text-center text-gray-900">
          <h2 className="mb-4 text-4xl font-extrabold tracking-tight text-gray-900 lg:text-5xl dark:text-white">
            Something inspiring
          </h2>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-3 lg:mt-14 lg:gap-12">
          {items.map((item, index) => {
            const { imgSrc, imgAlt, title, description } = item;
            return (
              <div
                key={index}
                className={clsx(
                  "flex md:flex-col",
                  index < items.length && "mb-2 md:mb-0",
                )}
              >
                <Image
                  src={imgSrc}
                  alt={imgAlt}
                  width={1000}
                  height={1000}
                  className="mr-4 h-36 w-auto rounded-lg md:h-auto md:w-full"
                />
                <div>
                  <h3 className="mb-2.5 text-xl font-bold text-gray-900 md:mt-4 dark:text-white">
                    {title}
                  </h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    {description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
