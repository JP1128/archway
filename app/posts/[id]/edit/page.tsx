import ArticleEdit from "@/components/posts/article-edit";

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  return (
    <div className="mx-auto mt-5 flex max-w-screen-2xl justify-between px-4">
      <ArticleEdit id={id} />
    </div>
  );
}
