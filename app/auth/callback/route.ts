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
          domain: '.gowithfund.com',
          secure: true,
          sameSite: 'lax'
        })
      })
    }
  }

  const supabase = createServerClient(supabaseUrl, supabaseAnonKey, { cookies })

  const code = url.searchParams.get("code")
  if (code) {
    const { data, error } = await supabase.auth.exchangeCodeForSession(code)
    console.log('exchangeCodeForSession result:', { data, error })
  }

  return response
}import { NextResponse } from "next/server"
import { createServerClient } from "@supabase/ssr"

export async function GET(request: Request) {
  const url = new URL(request.url)
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

  // Prepare the response (redirect to dashboard by default)
  const response = NextResponse.redirect(url.origin + "/dashboard")

  // Implement the cookies interface for @supabase/ssr
  const cookies = {
    getAll: () => [], // No cookies to read on callback
    setAll: (cookies: { name: string; value: string; options?: Record<string, any> }[]) => {
      cookies.forEach(({ name, value }) => {
        response.cookies.set(name, value)
      })
    }
  }

  const supabase = createServerClient(supabaseUrl, supabaseAnonKey, { cookies })

  // Exchange the code for a session
  const code = url.searchParams.get("code")
  if (code) {
    const { data, error } = await supabase.auth.exchangeCodeForSession(code)
    console.log('exchangeCodeForSession result:', { data, error })
  }

  return response
}
