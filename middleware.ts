import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { createServerClient } from '@supabase/ssr';

export async function middleware(req: NextRequest) {
  const res = NextResponse.next();

  let supabaseUrl: string | undefined;
  let supabaseAnonKey: string | undefined;

  const vercelEnv = process.env.VERCEL_ENV;

  if (vercelEnv === 'production') {
    supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_PROD_URL;
    supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_PROD_ANON_KEY;
  } else if (vercelEnv === 'preview' || vercelEnv === 'development') {
    supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_PREVIEW_URL;
    supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_PREVIEW_ANON_KEY;
  } else {
    supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_PREVIEW_URL;
    supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_PREVIEW_ANON_KEY;
  }

  if (!supabaseUrl || !supabaseAnonKey) {
    console.error(
      "CRITICAL - Middleware: Supabase URL or Anon Key is missing. Check Vercel environment variables and .env.local."
    );
    return res;
  }

  const cookies = {
    getAll: () => {
      return req.cookies.getAll().map(({ name, value }) => ({ name, value }));
    },
    setAll: (cookiesToSet: { name: string; value: string; options?: Record<string, any> }[]) => {
      cookiesToSet.forEach(({ name, value, options }) => {
        res.cookies.set({
          name,
          value,
          ...options,
          domain: '.gowithfund.com',
          secure: true,
          sameSite: 'lax',
          path: '/',
        });
      });
    },
  };

  const supabase = createServerClient(supabaseUrl, supabaseAnonKey, { cookies });
  const { data: { session } } = await supabase.auth.getSession();

  if (!session && req.nextUrl.pathname.startsWith('/dashboard')) {
    const redirectUrl = new URL('/login', req.url);
    redirectUrl.searchParams.set('redirect_', req.nextUrl.pathname);
    return NextResponse.redirect(redirectUrl);
  }

  return res;
}

export const config = {
  matcher: ['/dashboard/:path*'],
};
