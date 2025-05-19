import Link from "next/link"
import Image from "next/image"
import { Building, MapPin, Clock, Star } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import CompanyLogo from "@/components/company-logo"

interface JobCardProps {
  job: {
    id: number
    title: string
    company: string
    companyLogo?: string
    location: string
    salary: string
    tags: string[]
    posted: string
    isRemote: boolean
    isFeatured: boolean
    featureImage?: string
  }
}

export default function JobCard({ job }: JobCardProps) {
  return (
    <Card className="overflow-hidden transition-all hover:shadow-md">
      {job.isFeatured && (
        <div className="bg-primary px-3 py-1 text-xs font-medium text-primary-foreground text-center">Featured</div>
      )}

      {job.featureImage && (
        <div className="relative h-40 w-full">
          <Image src={job.featureImage || "/placeholder.svg"} alt={job.title} fill className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
          <div className="absolute bottom-3 left-3">
            <Badge variant="secondary" className="bg-white/90 text-foreground font-normal">
              {job.tags[0]}
            </Badge>
          </div>
        </div>
      )}

      <CardContent className={`p-6 ${job.featureImage ? "pt-4" : ""}`}>
        <div className="flex items-start gap-4">
          <CompanyLogo name={job.company} logoUrl={job.companyLogo} size="md" />

          <div className="flex-1">
            <h3 className="font-bold text-lg line-clamp-1">
              <Link href={`/jobs/${job.id}`} className="hover:text-primary">
                {job.title}
              </Link>
            </h3>
            <div className="flex items-center gap-1 mt-1 text-muted-foreground">
              <Building className="h-3.5 w-3.5" />
              <span className="text-sm">{job.company}</span>
            </div>
          </div>

          <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-primary">
            <Star className="h-5 w-5" />
            <span className="sr-only">Save job</span>
          </Button>
        </div>

        {!job.featureImage && (
          <div className="mt-4 flex flex-wrap gap-2">
            {job.tags.map((tag) => (
              <Badge key={tag} variant="secondary" className="font-normal">
                {tag}
              </Badge>
            ))}
          </div>
        )}

        <div className="mt-4 grid gap-2">
          <div className="flex items-center gap-1 text-sm text-muted-foreground">
            <MapPin className="h-3.5 w-3.5" />
            <span>{job.location}</span>
            {job.isRemote && (
              <Badge variant="outline" className="ml-2 font-normal">
                Remote
              </Badge>
            )}
          </div>
          <div className="flex items-center gap-1 text-sm text-muted-foreground">
            <Clock className="h-3.5 w-3.5" />
            <span>Posted {job.posted}</span>
          </div>
          <div className="text-sm font-medium">{job.salary}</div>
        </div>
      </CardContent>
      <CardFooter className="border-t bg-muted/50 px-6 py-3">
        <div className="flex w-full items-center justify-between">
          <Link href={`/jobs/${job.id}`}>
            <Button variant="link" className="h-auto p-0 text-primary">
              View Details
            </Button>
          </Link>
          <Link href={`/jobs/${job.id}/apply`}>
            <Button size="sm">Apply Now</Button>
          </Link>
        </div>
      </CardFooter>
    </Card>
  )
}
