"use client";

import Link from "next/link";
import { ChartNoAxesCombined, Utensils, School, Laptop, MapPinCheckInside, Bike, HeartPulse, ScrollText, Plus } from "lucide-react";

const topics = [
  {
    href: "/posts/topic/utensils",
    icon: <Utensils />,
    name: "Foods",
  },
  {
    href: "/posts/topic/school",
    icon: <School />,
    name: "Courses & Classes",
  },
  {
    href: "/posts/topic/technology",
    icon: <Laptop />,
    name: "Technology",
  },
  {
    href: "/posts/topic/places",
    icon: <MapPinCheckInside />,
    name: "Places",
  },
  {
    href: "/posts/topic/activities",
    icon: <Bike />,
    name: "Sports & Activities",
  },
  {
    href: "/posts/topic/health",
    icon: <HeartPulse />,
    name: "Wellness & Health",
  },
  {
    href: "/posts/topic/history",
    icon: <ScrollText />,
    name: "UGA History",
  },
];

interface ISidebarProps {}

const Sidebar: React.FC<ISidebarProps> = () => {
  return (
    <aside
      className="fixed top-0 left-0 z-40 w-64 h-screen pt-14 transition-transform -translate-x-full bg-white border-r border-gray-200 md:translate-x-0"
      aria-label="Sidenav"
      id="drawer-navigation"
    >
      <div className="overflow-y-auto py-4 px-3 h-full bg-white dark:bg-gray-800">
        <Link
          href="/posts/popular"
          className="flex items-center ml-3 py-4 px-2 text-base font-medium text-gray-900 rounded-lg  hover:bg-gray-100 group"
        >
          <ChartNoAxesCombined />
          <span className="ml-3">Popular</span>
        </Link>
        <ul className="pt-5 mt-5 space-y-1 border-t border-gray-200 dark:border-gray-700">
          <h4 className="ml-3 mb-5 text-base font-medium text-gray-600">Topics</h4>
          {topics.map((topic, index) => (
            <li key={index}>
              <Link href={topic.href} className="flex items-center ml-5 p-1 text-sm font-medium text-gray-700 rounded-lg  hover:bg-gray-100 group">
                {topic.icon}
                <span className="ml-3">{topic.name}</span>
              </Link>
            </li>
          ))}
        </ul>
        <div className="absolute bottom-0 left-0 justify-center p-4 w-full bg-white dark:bg-gray-800 z-20">
          <Link
            href="/posts/create"
            className="flex items-center py-3 px-2 text-base font-medium border-2 border-primary-600 bg-primary-600 text-white rounded-lg  hover:bg-white hover:text-primary-600 group"
          >
            <Plus />
            <span className="ml-3">Create Post</span>
          </Link>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
