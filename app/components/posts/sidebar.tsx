"use client";

import {
  Sidebar,
  SidebarItem,
  SidebarItemGroup,
  SidebarItems,
} from "flowbite-react";

import {
  ChartSpline,
  Utensils,
  School,
  Laptop,
  MapPinCheckInside,
  Bike,
  HeartPulse,
  ScrollText,
} from "lucide-react";

const topics = [
  {
    href: "/posts/topic/school",
    icon: School,
    name: "Courses & Classes",
  },
  {
    href: "/posts/topic/activities",
    icon: Bike,
    name: "Sports & Activities",
  },
  {
    href: "/posts/topic/health",
    icon: HeartPulse,
    name: "Wellness & Health",
  },
  {
    href: "/posts/topic/technology",
    icon: Laptop,
    name: "Technology",
  },
  {
    href: "/posts/topic/foods",
    icon: Utensils,
    name: "Foods",
  },
  {
    href: "/posts/topic/places",
    icon: MapPinCheckInside,
    name: "Places",
  },
  {
    href: "/posts/topic/history",
    icon: ScrollText,
    name: "UGA History",
  },
];

export default function MainSidebar() {
  return (
    <Sidebar
      aria-label="Default side navigation"
      className="fixed left-0 z-40 h-full w-64 border-r border-gray-200 [&_*]:font-medium [&>div]:bg-white [&>div]:p-0"
    >
      <div className="h-full p-5">
        <SidebarItems>
          <SidebarItemGroup>
            <SidebarItem href="/posts" icon={ChartSpline}>
              Popular
            </SidebarItem>
          </SidebarItemGroup>
          <SidebarItemGroup>
            <h1 className="mb-4 ml-2 text-sm text-gray-600">Topics</h1>
            {topics.map((topic, index) => (
              <SidebarItem key={index} href={topic.href} icon={topic.icon}>
                <span className="text-gray-800">{topic.name}</span>
              </SidebarItem>
            ))}
          </SidebarItemGroup>
        </SidebarItems>
      </div>
    </Sidebar>
  );
}
