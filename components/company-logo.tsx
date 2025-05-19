import Image from "next/image"

interface CompanyLogoProps {
  name: string
  logoUrl?: string
  size?: "sm" | "md" | "lg"
}

export default function CompanyLogo({ name, logoUrl, size = "md" }: CompanyLogoProps) {
  const sizes = {
    sm: "h-8 w-8",
    md: "h-12 w-12",
    lg: "h-16 w-16",
  }

  const initials = name
    .split(" ")
    .map((word) => word[0])
    .join("")
    .toUpperCase()
    .slice(0, 2)

  if (logoUrl) {
    return (
      <div
        className={`relative rounded-md border bg-white ${sizes[size]} overflow-hidden flex items-center justify-center`}
      >
        <Image src={logoUrl || "/placeholder.svg"} alt={`${name} logo`} fill className="object-contain p-1" />
      </div>
    )
  }

  return (
    <div
      className={`rounded-md bg-primary/10 ${sizes[size]} flex items-center justify-center text-primary font-semibold`}
    >
      {initials}
    </div>
  )
}
