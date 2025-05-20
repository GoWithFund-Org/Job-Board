// Client-side Supabase client (for use in React components, hooks, etc.)
import { createClient as createBrowserClient } from '@supabase/supabase-js'
import { createClient as createServerClient } from '@supabase/ssr'

// Use environment variables
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

// Log the URL for debugging (not the key for security reasons)
console.log("Supabase URL:", supabaseUrl)

if (!supabaseUrl || !supabaseAnonKey) {
  console.error(
    "Missing Supabase environment variables. Check your .env.local file."
  )
}

// Export the browser client for client-side usage
export const supabase = createBrowserClient(supabaseUrl!, supabaseAnonKey!)

// Export the server-side client for use in middleware, API routes, server components
export { createServerClient }
