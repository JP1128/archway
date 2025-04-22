import PostCard from "@/components/posts/post-card";

export default function Page() {
  return (
    <div className="grid gap-8 sm:grid-cols-3 lg:grid-cols-4">
      <PostCard />
    </div>
  );
}
