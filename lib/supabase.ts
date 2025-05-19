import { createClient } from "@supabase/supabase-js"

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

// Create a single instance of the Supabase client
export const supabase = createClient(supabaseUrl!, supabaseAnonKey!)
