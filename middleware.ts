import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export function middleware(req: NextRequest) {
  // Supabase session cookies start with "sb-"
  const hasSupabaseSession = req.cookies.getAll().some((cookie) =>
    cookie.name.startsWith("sb-")
  );

  if (!hasSupabaseSession && req.nextUrl.pathname.startsWith("/dashboard")) {
    const redirectUrl = new URL("/login", req.url);
    redirectUrl.searchParams.set("redirect_", req.nextUrl.pathname);
    return NextResponse.redirect(redirectUrl);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard/:path*"], // Only apply middleware to dashboard routes
}
