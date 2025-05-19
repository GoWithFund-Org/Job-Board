"use client"

import { useAuth } from "@/contexts/auth-context"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"

export default function UserProfile() {
  const { user, signOut } = useAuth()
  const router = useRouter()

  const handleSignOut = async () => {
    await signOut()
    router.push("/")
  }

  if (!user) return null

  // Get user initials for avatar fallback
  const getInitials = () => {
    if (user.user_metadata?.first_name && user.user_metadata?.last_name) {
      return `${user.user_metadata.first_name[0]}${user.user_metadata.last_name[0]}`.toUpperCase()
    } else if (user.user_metadata?.company_name) {
      return user.user_metadata.company_name.substring(0, 2).toUpperCase()
    } else {
      return user.email?.substring(0, 2).toUpperCase() || "U"
    }
  }

  // Get display name
  const getDisplayName = () => {
    if (user.user_metadata?.first_name && user.user_metadata?.last_name) {
      return `${user.user_metadata.first_name} ${user.user_metadata.last_name}`
    } else if (user.user_metadata?.company_name) {
      return user.user_metadata.company_name
    } else {
      return user.email?.split("@")[0] || "User"
    }
  }

  return (
    <div className="flex items-center gap-4">
      <Avatar>
        <AvatarImage src={user.user_metadata?.avatar_url || "/placeholder.svg"} />
        <AvatarFallback>{getInitials()}</AvatarFallback>
      </Avatar>
      <div>
        <p className="font-medium">{getDisplayName()}</p>
        <p className="text-sm text-muted-foreground">{user.email}</p>
      </div>
      <Button variant="outline" size="sm" onClick={handleSignOut}>
        Sign out
      </Button>
    </div>
  )
}
