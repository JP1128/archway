import { getUser } from "@/lib/actions";
import { NextResponse } from "next/server";

export async function GET(request: Request, { params }) {
  const { email } = await params;
  const user = await getUser(email);
  return NextResponse.json(user);
}
