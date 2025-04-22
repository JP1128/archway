import PostView from "@/components/posts/post-view";

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  return <PostView id={id} />;
}
