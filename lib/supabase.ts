// Client-side Supabase client (for use in React components, hooks, etc.)
import { createClient as createBrowserClient } from '@supabase/supabase-js'
import { createClient as createServerClient } from '@supabase/ssr'

// const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
// const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

let supabaseUrl: string | undefined;
let supabaseAnonKey: string | undefined;
const nodeEnv = process.env.NODE_ENV;
const vercelEnv = process.env.VERCEL_ENV;

console.log(`lib/supabase.ts: NODE_ENV: ${nodeEnv}, VERCEL_ENV: ${vercelEnv}`);

if (vercelEnv === 'production') {
  console.log("lib/supabase.ts: Using Production Supabase variables (VERCEL_ENV=production)");
  supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_PROD_URL;
  supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_PROD_ANON_KEY;
} else {
  // This will cover VERCEL_ENV === 'preview', VERCEL_ENV === 'development',
  // and local development (where VERCEL_ENV is undefined and NODE_ENV is typically 'development')
  console.log(`lib/supabase.ts: Using Preview/Development Supabase variables (VERCEL_ENV: ${vercelEnv}, NODE_ENV: ${nodeEnv})`);
  supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_PREVIEW_URL;
  supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_PREVIEW_ANON_KEY;
}

console.log("lib/supabase.ts: Selected Supabase URL (first 20 chars):", supabaseUrl ? supabaseUrl.substring(0, 20) + "..." : "undefined");
// Keep the existing check:
if (!supabaseUrl || !supabaseAnonKey) {
  console.error(
    "lib/supabase.ts: Supabase URL or Anon Key is undefined after environment check. Ensure PROD or PREVIEW variables are set for the current environment."
  );
}

// Export the browser client for client-side usage
export const supabase = createBrowserClient(supabaseUrl!, supabaseAnonKey!)

// Export the server-side client for use in middleware, API routes, server components
export { createServerClient }
