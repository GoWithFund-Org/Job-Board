import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { createServerClient } from '@supabase/ssr'

export async function middleware(req: NextRequest) {
  const res = NextResponse.next()
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

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
          domain: '.gowithfund.com',
          secure: true,
          sameSite: 'lax',
          path: '/'
        })
      })
    }
  }

  const supabase = createServerClient(supabaseUrl, supabaseAnonKey, { cookies })
  const { data: { session } } = await supabase.auth.getSession()

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