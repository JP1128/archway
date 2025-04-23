import { deletePost, getPost } from "@/lib/actions";
import { NextResponse } from "next/server";

export async function GET(request: Request, { params }) {
  const { id } = await params;
  const post = await getPost(id);
  return NextResponse.json(post);
}

export async function DELETE(request: Request, { params }) {
  const { id } = await params;
  const post = await deletePost(id);
  return NextResponse.json(post);
}
