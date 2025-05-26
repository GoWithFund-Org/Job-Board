// Client-side Supabase client (for use in React components, hooks, etc.)
import { createClient as createBrowserClient } from '@supabase/supabase-js'
import { createClient as createServerClient } from '@supabase/ssr'

let supabaseUrl: string | undefined;
let supabaseAnonKey: string | undefined;

// Check if running in a browser environment before accessing process.env.VERCEL_ENV
// VERCEL_ENV is primarily available during the build process and server-side.
// For client-side logic, NEXT_PUBLIC_ variables are directly available.
// However, for initializing the client which might be used server-side too (SSR), this check is fine.

const vercelEnv = typeof window === 'undefined' ? process.env.VERCEL_ENV : undefined;

if (vercelEnv === 'production') {
  supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_PROD_URL;
  supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_PROD_ANON_KEY;
  console.log("Using Production Supabase config.");
} else if (vercelEnv === 'preview' || vercelEnv === 'development') {
  supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_PREVIEW_URL;
  supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_PREVIEW_ANON_KEY;
  console.log(`Using Preview/Development Supabase config (VERCEL_ENV: ${vercelEnv}).`);
} else {
  // Fallback for local development when not using `vercel dev` or when VERCEL_ENV is not set.
  // It's often useful to default to preview/dev settings for local work.
  // Ensure these NEXT_PUBLIC_ variables are also in your .env.local for local runs.
  supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_PREVIEW_URL;
  supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_PREVIEW_ANON_KEY;
  console.log("VERCEL_ENV not set or not 'production'/'preview'/'development'. Defaulting to Preview/Development Supabase config for local/other environment.");
}

// Log the URL for debugging (not the key for security reasons)
// console.log("Supabase URL being used:", supabaseUrl); // Already logged above with context

if (!supabaseUrl || !supabaseAnonKey) {
  console.error(
    "CRITICAL: Supabase URL or Anon Key is missing. Check Vercel environment variables and .env.local. Ensure NEXT_PUBLIC_SUPABASE_PROD_URL/KEY or NEXT_PUBLIC_SUPABASE_PREVIEW_URL/KEY are correctly set and accessible."
  );
  // Depending on the application's needs, you might throw an error here
  // or allow the app to load if Supabase is not critical for all pages.
  // throw new Error("Supabase credentials are not configured.");
}

// Export the browser client for client-side usage
// The '!' asserts that supabaseUrl and supabaseAnonKey are defined.
// Add more robust error handling if they might still be undefined.
export const supabase = createBrowserClient(supabaseUrl!, supabaseAnonKey!)

// Export the server-side client for use in middleware, API routes, server components
export { createServerClient }
