import { NextResponse } from "next/server"
import { createServerClient } from "@supabase/ssr"

export async function GET(request: Request) {
  const url = new URL(request.url)
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

  // Get the redirect URL from params or default to dashboard
  const redirectPath = url.searchParams.get('redirect_') || '/dashboard'
  const response = NextResponse.redirect(new URL(redirectPath, url.origin))

  // Configure cookies with proper domain settings
  const cookies = {
    getAll: () => [],
    setAll: (cookies: { name: string; value: string; options?: Record<string, any> }[]) => {
      cookies.forEach(({ name, value, options }) => {
        response.cookies.set({
          name,
          value,
          ...options,
          // domain: '.gowithfund.com', // Domain should not be set for localhost or if using Vercel's default domains
          secure: process.env.NODE_ENV === 'production',
          sameSite: 'lax',
          path: '/'
        })
      })
    }
  }

  const supabase = createServerClient(supabaseUrl, supabaseAnonKey, { cookies })

  const code = url.searchParams.get("code")
  if (code) {
    // Ensure that Supabase client is configured to handle cookies correctly for SSR
    const { data, error } = await supabase.auth.exchangeCodeForSession(code)
    console.log('exchangeCodeForSession result (auth/callback):', { data: data?.session?.user?.id, error: error?.message })
  }

  return response
}
