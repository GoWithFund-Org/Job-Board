import Link from "next/link"
import { Search, Globe, ListFilter } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Checkbox } from "@/components/ui/checkbox"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import JobCard from "@/components/job-card"

export default function JobsPage() {
  // Sample jobs data
  const jobs = [
    {
      id: 1,
      title: "Senior AI Engineer",
      company: "TechGlobal Inc.",
      companyLogo: "/placeholder.svg?height=100&width=100&text=TG",
      location: "Remote",
      salary: "$120K - $150K",
      tags: ["AI", "Machine Learning", "Python"],
      posted: "2 days ago",
      isRemote: true,
      isFeatured: true,
      featureImage: "/placeholder.svg?height=300&width=600&text=AI+Engineer+Position",
    },
    {
      id: 2,
      title: "Full Stack Developer",
      company: "InnovateSoft",
      companyLogo: "/placeholder.svg?height=100&width=100&text=IS",
      location: "Berlin, Germany",
      salary: "€70K - €90K",
      tags: ["React", "Node.js", "TypeScript"],
      posted: "1 day ago",
      isRemote: false,
      isFeatured: true,
    },
    {
      id: 3,
      title: "Product Manager",
      company: "GlobalTech Solutions",
      companyLogo: "/placeholder.svg?height=100&width=100&text=GT",
      location: "New York, USA",
      salary: "$110K - $130K",
      tags: ["Product", "Agile", "SaaS"],
      posted: "3 days ago",
      isRemote: true,
      isFeatured: false,
    },
    {
      id: 4,
      title: "UX/UI Designer",
      company: "DesignHub",
      companyLogo: "/placeholder.svg?height=100&width=100&text=DH",
      location: "Remote",
      salary: "$80K - $100K",
      tags: ["Figma", "UI Design", "User Research"],
      posted: "5 days ago",
      isRemote: true,
      isFeatured: false,
      featureImage: "/placeholder.svg?height=300&width=600&text=UX/UI+Designer+Position",
    },
    {
      id: 5,
      title: "DevOps Engineer",
      company: "CloudTech",
      companyLogo: "/placeholder.svg?height=100&width=100&text=CT",
      location: "Singapore",
      salary: "S$90K - S$120K",
      tags: ["AWS", "Kubernetes", "CI/CD"],
      posted: "1 week ago",
      isRemote: false,
      isFeatured: false,
    },
    {
      id: 6,
      title: "Data Scientist",
      company: "DataInsights",
      companyLogo: "/placeholder.svg?height=100&width=100&text=DI",
      location: "Remote",
      salary: "$100K - $130K",
      tags: ["Python", "Machine Learning", "SQL"],
      posted: "3 days ago",
      isRemote: true,
      isFeatured: false,
      featureImage: "/placeholder.svg?height=300&width=600&text=Data+Scientist+Position",
    },
  ]

  return (
    <div className="flex min-h-screen flex-col">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b bg-background/95 backdrop-blur">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Globe className="h-6 w-6 text-primary" />
            <span className="text-xl font-bold">GWF Jobs</span>
          </div>

          <div className="hidden md:flex items-center flex-1 max-w-md mx-4">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input placeholder="Search jobs..." className="pl-10 h-9" />
            </div>
          </div>

          <nav className="hidden md:flex items-center space-x-6">
            <Link href="/" className="text-sm font-medium">
              Home
            </Link>
            <Link href="/jobs" className="text-sm font-medium text-primary">
              Find Jobs
            </Link>
            <Link href="/employers" className="text-sm font-medium">
              For Employers
            </Link>
            <Link href="/about" className="text-sm font-medium">
              About
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Link href="/login">
              <Button variant="ghost" size="sm">
                Log in
              </Button>
            </Link>
            <Link href="/signup">
              <Button size="sm">Sign up</Button>
            </Link>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Search Bar */}
        <section className="border-b bg-muted/50 py-6">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col gap-4 md:flex-row">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
                <Input placeholder="Job title, skills or keywords" className="pl-10 h-12" />
              </div>
              <div className="relative flex-1">
                <Globe className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
                <Input placeholder="Location or 'Remote'" className="pl-10 h-12" />
              </div>
              <Button className="h-12 px-8">Search Jobs</Button>
            </div>
          </div>
        </section>

        <div className="container px-4 md:px-6 py-8">
          <div className="flex flex-col md:flex-row gap-8">
            {/* Filters Sidebar */}
            <div className="md:w-1/4 lg:w-1/5">
              <div className="sticky top-24 space-y-6">
                <div className="flex items-center justify-between">
                  <h2 className="text-lg font-semibold">Filters</h2>
                  <Button variant="ghost" size="sm" className="h-8 text-xs">
                    Clear All
                  </Button>
                </div>

                {/* Job Type */}
                <div className="space-y-3">
                  <h3 className="font-medium">Job Type</h3>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <Checkbox id="full-time" />
                      <label
                        htmlFor="full-time"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Full-time
                      </label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="part-time" />
                      <label
                        htmlFor="part-time"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Part-time
                      </label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="contract" />
                      <label
                        htmlFor="contract"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Contract
                      </label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="remote" />
                      <label
                        htmlFor="remote"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Remote
                      </label>
                    </div>
                  </div>
                </div>

                {/* Experience Level */}
                <div className="space-y-3">
                  <h3 className="font-medium">Experience Level</h3>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <Checkbox id="entry-level" />
                      <label
                        htmlFor="entry-level"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Entry Level
                      </label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="mid-level" />
                      <label
                        htmlFor="mid-level"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Mid Level
                      </label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="senior-level" />
                      <label
                        htmlFor="senior-level"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Senior Level
                      </label>
                    </div>
                  </div>
                </div>

                {/* Salary Range */}
                <div className="space-y-3">
                  <h3 className="font-medium">Salary Range</h3>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <Checkbox id="range-50k" />
                      <label
                        htmlFor="range-50k"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        $0 - $50K
                      </label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="range-100k" />
                      <label
                        htmlFor="range-100k"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        $50K - $100K
                      </label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="range-150k" />
                      <label
                        htmlFor="range-150k"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        $100K - $150K
                      </label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="range-150k-plus" />
                      <label
                        htmlFor="range-150k-plus"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        $150K+
                      </label>
                    </div>
                  </div>
                </div>

                {/* Skills */}
                <div className="space-y-3">
                  <h3 className="font-medium">Skills</h3>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline" className="cursor-pointer">
                      JavaScript
                    </Badge>
                    <Badge variant="outline" className="cursor-pointer">
                      Python
                    </Badge>
                    <Badge variant="outline" className="cursor-pointer">
                      React
                    </Badge>
                    <Badge variant="outline" className="cursor-pointer">
                      AI
                    </Badge>
                    <Badge variant="outline" className="cursor-pointer">
                      Machine Learning
                    </Badge>
                    <Badge variant="outline" className="cursor-pointer">
                      Cloud
                    </Badge>
                    <Badge variant="secondary" className="cursor-pointer">
                      + More
                    </Badge>
                  </div>
                </div>
              </div>
            </div>

            {/* Job Listings */}
            <div className="md:w-3/4 lg:w-4/5">
              <div className="mb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <h1 className="text-2xl font-bold">All Jobs</h1>
                  <p className="text-muted-foreground">Showing {jobs.length} jobs</p>
                </div>
                <div className="flex items-center gap-4">
                  <Button variant="outline" size="sm" className="h-8 lg:hidden">
                    <ListFilter className="mr-2 h-4 w-4" />
                    Filters
                  </Button>
                  <Select defaultValue="relevance">
                    <SelectTrigger className="h-8 w-[180px]">
                      <SelectValue placeholder="Sort by" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="relevance">Relevance</SelectItem>
                      <SelectItem value="recent">Most Recent</SelectItem>
                      <SelectItem value="salary-high">Salary (High to Low)</SelectItem>
                      <SelectItem value="salary-low">Salary (Low to High)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="grid gap-6">
                {jobs.map((job) => (
                  <JobCard key={job.id} job={job} />
                ))}
              </div>

              <div className="mt-8 flex justify-center">
                <Button variant="outline" className="mx-auto">
                  Load More Jobs
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t py-8">
        <div className="container px-4 md:px-6 text-center">
          <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} GWF Jobs. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
