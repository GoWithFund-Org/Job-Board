import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { createServerClient } from '@supabase/ssr'

export async function middleware(req: NextRequest) {
  console.log(`Middleware triggered for: ${req.url}`);
  const res = NextResponse.next();

  let supabaseUrl: string | undefined;
  let supabaseAnonKey: string | undefined;
  const nodeEnv = process.env.NODE_ENV;
  const vercelEnv = process.env.VERCEL_ENV;

  console.log(`middleware.ts: NODE_ENV: ${nodeEnv}, VERCEL_ENV: ${vercelEnv}`);

  if (vercelEnv === 'production') {
    console.log("middleware.ts: Using Production Supabase variables (VERCEL_ENV=production)");
    supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_PROD_URL;
    supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_PROD_ANON_KEY;
  } else {
    // This will cover VERCEL_ENV === 'preview', VERCEL_ENV === 'development',
    // and local development (where VERCEL_ENV is undefined and NODE_ENV is typically 'development')
    console.log(`middleware.ts: Using Preview/Development Supabase variables (VERCEL_ENV: ${vercelEnv}, NODE_ENV: ${nodeEnv})`);
    supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_PREVIEW_URL;
    supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_PREVIEW_ANON_KEY;
  }

  console.log("middleware.ts: Selected Supabase URL (first 20 chars):", supabaseUrl ? supabaseUrl.substring(0, 20) + "..." : "undefined");
  // Keep the existing check:
  if (!supabaseUrl || !supabaseAnonKey) {
    console.error(
      "middleware.ts: Supabase URL or Anon Key is undefined after environment check. Ensure PROD or PREVIEW variables are set for the current environment."
    );
  }

  // Configure cookies with proper domain settings
  const cookies = {
    getAll: () => {
      return req.cookies.getAll().map(({ name, value }) => ({ name, value }))
    },
    setAll: (cookies: { name: string; value: string; options?: Record<string, any> }[]) => {
      cookies.forEach(({ name, value, options }) => {
        res.cookies.set({
          name,
          value,
          ...options,
          secure: process.env.NODE_ENV === 'production',
          sameSite: 'lax',
          path: '/'
        })
      })
    }
  }

  const supabase = createServerClient(supabaseUrl, supabaseAnonKey, { cookies })
  
  let session = null; 
  try {
    console.log("Attempting to get session...");
    const { data: sessionData, error: sessionError } = await supabase.auth.getSession();
    if (sessionError) {
      console.error("Error getting session from Supabase:", sessionError.message);
    }
    if (sessionData && sessionData.session) {
      session = sessionData.session;
    }
    console.log("Session object:", session);
    console.log(session ? "Session found" : "No session found");
  } catch (e) {
    console.error("Critical error during getSession call in middleware:", e);
  }

  if (!session && req.nextUrl.pathname.startsWith('/dashboard')) {
    const redirectUrl = new URL('/login', req.url)
    redirectUrl.searchParams.set('redirect_', req.nextUrl.pathname)
    return NextResponse.redirect(redirectUrl)
  }

  return res
}

export const config = {
  matcher: ['/dashboard/:path*'],
}

export { createServerClient }