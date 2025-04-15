import { NextRequest, NextResponse } from "next/server";


// TODO: delete this for the actual project
// It's only for the frontend submission.
export function middleware(request: NextRequest) {
    if (!request.cookies.has('authenticated')) {
        return NextResponse.redirect(new URL('/', request.url));
    }

    console.log(request.cookies.get('authenticated'))

    return NextResponse.next();
}

export const config = {
    matcher: [
        '/posts/:path*',
    ]
}