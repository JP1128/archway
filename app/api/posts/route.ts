import { createPost, getPosts, updatePost } from "@/lib/actions";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const posts = await getPosts();
  return NextResponse.json({
    length: posts.length,
    posts: posts,
  });
}

export async function POST(request: Request) {
  const form = await request.formData();
  const response = await createPost(form);

  return NextResponse.json({
    msg: "success",
    post_id: response.id,
  });
}

export async function UPDATE(request: Request) {
  const form = await request.formData();
  const response = await updatePost(form);

  return NextResponse.json({
    msg: "success",
  });
}
