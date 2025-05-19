import { type NextRequest, NextResponse } from "next/server"
import { supabase } from "@/lib/supabase"

export async function GET(request: NextRequest) {
  const requestUrl = new URL(request.url)
  console.log("Auth callback triggered, URL:", requestUrl.toString())
  
  // Extract code and any other parameters
  const code = requestUrl.searchParams.get("code")
  const type = requestUrl.searchParams.get("type")
  
  console.log("Auth parameters:", { code: !!code, type })

  if (code) {
    try {
      console.log("Attempting to exchange code for session...")
      const { data, error } = await supabase.auth.exchangeCodeForSession(code)
      
      console.log("Auth exchange result:", { 
        sessionExists: !!data.session,
        userId: data.session?.user?.id,
        error: error?.message,
        errorDetails: error
      })
      
      // If we have a session after exchanging the code, redirect to dashboard
      if (data.session) {
        const dashboardUrl = `${requestUrl.origin}/dashboard`
        console.log("Redirecting to dashboard:", dashboardUrl)
        return NextResponse.redirect(dashboardUrl)
      } else {
        console.error("No session available after code exchange")
      }
    } catch (err) {
      console.error("Error in auth callback:", err)
    }
  } else {
    console.warn("No code parameter found in auth callback URL")
  }

  // Fallback redirect to homepage
  console.log("Fallback: redirecting to homepage")
  // Fallback - redirect to homepage if no session
  return NextResponse.redirect(requestUrl.origin)
}
