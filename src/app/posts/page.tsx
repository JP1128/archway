import Link from "next/link";
import Sidebar from "./sidebar";
import PostCard from "./PostCard";
import Navbar from "./navbar";

const dummyPosts = [
  {
    imgSrc: "/card_img_1.png",
    title: "Connecting to the UGA Wi-Fi",
    short_description: "For those having trouble with VPN and connecting to the UGA's PAWS-Secure Wi-Fi",
    author: "JP",
    likes: 21,
    shares: 14,
  },
  {
    imgSrc: "/card_img_2.png",
    title: "How to fulfill History credit through transient program",
    short_description: "Walkthrough to teach you how to apply to NGTC as a transient student",
    author: "Josh",
    likes: 3,
    shares: 1,
  },
  {
    imgSrc: "/card_img_3.png",
    title: "Recommended Pre-Med Course Tracks",
    short_description: "Graduating pre-med student's guide to how to have a successfull pre-med during college!",
    author: "Grace",
    likes: 102,
    shares: 52,
  },
  {
    imgSrc: "/card_img_4.png",
    title: "How to turn on the lights at the Pickleball court",
    short_description: "Tired of playing pickleball in darkness?",
    author: "Esther",
    likes: 13,
    shares: 0,
  },
  {
    imgSrc: "/card_img_5.png",
    title: "Satisfy multiple Franklin college requirements",
    short_description:
      "I've compiled a list of courses that you can take to minimize the number of actual classes to take for Franklin requirements.",
    author: "Sophia",
    likes: 32,
    shares: 10,
  },
];

export default function PostsPage() {
  return (
    <>
      <Navbar />
      <Sidebar />
      <main className="p-4 md:ml-64 h-auto pt-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 mb-4">
          {dummyPosts.map((post, index) => (
            <PostCard
              imgSrc={post.imgSrc}
              title={post.title}
              short_description={post.short_description}
              author={post.author}
              likes={post.likes}
              shares={post.shares}
              key={index}
            />
          ))}
        </div>
      </main>
    </>
  );
}
