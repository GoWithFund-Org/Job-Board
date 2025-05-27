// Client-side Supabase client (for use in React components, hooks, etc.)
import { createClient as createBrowserClient } from '@supabase/supabase-js'
import { createClient as createServerClient } from '@supabase/ssr'

// const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
// const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

let supabaseUrl: string | undefined;
let supabaseAnonKey: string | undefined;
const nodeEnv = process.env.NODE_ENV;
const vercelEnv = process.env.VERCEL_ENV; // Vercel specific

console.log(`lib/supabase.ts: NODE_ENV: ${nodeEnv}, VERCEL_ENV: ${vercelEnv}`);

if (nodeEnv === 'production' || vercelEnv === 'production') {
  console.log("lib/supabase.ts: Using Production Supabase variables");
  supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_PROD_URL;
  supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_PROD_ANON_KEY;
} else {
  console.log("lib/supabase.ts: Using Preview/Development Supabase variables");
  supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_PREVIEW_URL;
  supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_PREVIEW_ANON_KEY;
}

console.log("lib/supabase.ts: Selected Supabase URL (first 20 chars):", supabaseUrl ? supabaseUrl.substring(0, 20) + "..." : "undefined");

if (!supabaseUrl || !supabaseAnonKey) {
  console.error(
    "lib/supabase.ts: Missing Supabase environment variables after environment check. Ensure PROD or PREVIEW variables are set."
  );
  // Optionally, to make it very clear during build if vars are missing:
  // throw new Error("lib/supabase.ts: Supabase URL or Anon Key is undefined. Build cannot proceed.");
}

// Export the browser client for client-side usage
export const supabase = createBrowserClient(supabaseUrl!, supabaseAnonKey!)

// Export the server-side client for use in middleware, API routes, server components
export { createServerClient }
