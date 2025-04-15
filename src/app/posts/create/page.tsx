
import Navbar from "../navbar";
import CreatePostForm from "./PostCreateForm";

export default function PostCreatePage() {
  return (
    <>
      <Navbar />
      <main className="p-4 h-auto pt-20">
        <CreatePostForm />
      </main>
    </>
  );
}
