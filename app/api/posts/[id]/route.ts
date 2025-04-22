import { getPost } from "@/lib/actions";
import { NextResponse } from "next/server";

export async function GET(request: Request, { params }) {
  const { id } = await params;
  const post = await getPost(id);
  return NextResponse.json(post);
}
