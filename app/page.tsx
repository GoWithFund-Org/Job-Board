import Link from "next/link"
import { Globe, Search, Briefcase, Users, Bot, Filter } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import JobCard from "@/components/job-card"
import { Badge } from "@/components/ui/badge"

export default function HomePage() {
  // Sample featured jobs data
  const featuredJobs = [
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
      featureImage: "/placeholder.svg?height=300&width=600&text=Product+Manager+Position",
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
            <Link href="/jobs" className="text-sm font-medium">
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
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-primary/10 to-background py-16 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center text-center">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                Find Your Perfect Job <span className="text-primary">Globally</span>
              </h1>
              <p className="mt-4 max-w-[700px] text-muted-foreground md:text-xl">
                AI-powered job matching connecting talent with opportunities worldwide
              </p>
              <div className="mt-8 w-full max-w-3xl">
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
                <div className="mt-4 flex flex-wrap gap-2 justify-center">
                  <Badge variant="outline">Remote</Badge>
                  <Badge variant="outline">Full-time</Badge>
                  <Badge variant="outline">Part-time</Badge>
                  <Badge variant="outline">Contract</Badge>
                  <Badge variant="outline">Entry Level</Badge>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Jobs */}
        <section className="py-16">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
              <div>
                <h2 className="text-2xl font-bold tracking-tight md:text-3xl">Featured Jobs</h2>
                <p className="text-muted-foreground mt-1">
                  Discover opportunities matched to your skills and preferences
                </p>
              </div>
              <div className="mt-4 md:mt-0 flex items-center gap-2">
                <Button variant="outline" size="sm" className="flex items-center gap-1">
                  <Filter className="h-4 w-4" />
                  Filters
                </Button>
                <Link href="/jobs">
                  <Button variant="link" size="sm">
                    View all jobs
                  </Button>
                </Link>
              </div>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {featuredJobs.map((job) => (
                <JobCard key={job.id} job={job} />
              ))}
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="bg-muted py-16">
          <div className="container px-4 md:px-6">
            <h2 className="text-2xl font-bold tracking-tight text-center md:text-3xl mb-12">How GWF Jobs Works</h2>
            <div className="grid gap-8 md:grid-cols-3">
              <div className="flex flex-col items-center text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 mb-4">
                  <Briefcase className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Find Opportunities</h3>
                <p className="mt-2 text-muted-foreground">
                  Browse thousands of jobs from top companies worldwide or get AI-matched recommendations
                </p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 mb-4">
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Connect Globally</h3>
                <p className="mt-2 text-muted-foreground">
                  Apply to positions across borders with our streamlined application process
                </p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 mb-4">
                  <Bot className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold">AI-Powered Matching</h3>
                <p className="mt-2 text-muted-foreground">
                  Our AI analyzes your skills and preferences to find your perfect career match
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* For Employers */}
        <section className="py-16">
          <div className="container px-4 md:px-6">
            <div className="grid gap-12 md:grid-cols-2 items-center">
              <div>
                <h2 className="text-2xl font-bold tracking-tight md:text-3xl">For Employers</h2>
                <p className="mt-4 text-muted-foreground">
                  Find the perfect candidates for your open positions with our AI-powered matching system.
                </p>
                <ul className="mt-6 space-y-3">
                  <li className="flex items-start gap-2">
                    <div className="rounded-full bg-primary/10 p-1">
                      <svg
                        className="h-5 w-5 text-primary"
                        fill="none"
                        height="24"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        width="24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </div>
                    <span>Post jobs to a global talent pool</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="rounded-full bg-primary/10 p-1">
                      <svg
                        className="h-5 w-5 text-primary"
                        fill="none"
                        height="24"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        width="24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </div>
                    <span>AI-powered candidate screening and matching</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="rounded-full bg-primary/10 p-1">
                      <svg
                        className="h-5 w-5 text-primary"
                        fill="none"
                        height="24"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        width="24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </div>
                    <span>Comprehensive applicant tracking system</span>
                  </li>
                </ul>
                <div className="mt-8">
                  <Link href="/employers/signup">
                    <Button>Post a Job</Button>
                  </Link>
                </div>
              </div>
              <div className="rounded-lg border bg-card p-8 shadow-sm">
                <h3 className="text-xl font-bold">Employer Dashboard</h3>
                <div className="mt-6 space-y-4">
                  <div className="rounded-md bg-muted p-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="font-medium">Active Job Listings</div>
                        <div className="text-3xl font-bold mt-1">12</div>
                      </div>
                      <Briefcase className="h-10 w-10 text-primary/40" />
                    </div>
                  </div>
                  <div className="rounded-md bg-muted p-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="font-medium">Total Applications</div>
                        <div className="text-3xl font-bold mt-1">48</div>
                      </div>
                      <Users className="h-10 w-10 text-primary/40" />
                    </div>
                  </div>
                  <div className="rounded-md bg-muted p-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="font-medium">AI-Matched Candidates</div>
                        <div className="text-3xl font-bold mt-1">24</div>
                      </div>
                      <Bot className="h-10 w-10 text-primary/40" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-primary text-primary-foreground py-16">
          <div className="container px-4 md:px-6 text-center">
            <h2 className="text-2xl font-bold tracking-tight md:text-3xl">Ready to Find Your Next Opportunity?</h2>
            <p className="mt-4 text-primary-foreground/80 md:text-lg">
              Join thousands of professionals finding their dream jobs globally
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/signup">
                <Button variant="secondary" size="lg">
                  Create Account
                </Button>
              </Link>
              <Link href="/jobs">
                <Button
                  variant="outline"
                  size="lg"
                  className="bg-transparent text-primary-foreground border-primary-foreground/20 hover:bg-primary-foreground/10"
                >
                  Browse Jobs
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t py-12">
        <div className="container px-4 md:px-6">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div>
              <div className="flex items-center gap-2">
                <Globe className="h-6 w-6 text-primary" />
                <span className="text-xl font-bold">GWF Jobs</span>
              </div>
              <p className="mt-4 text-sm text-muted-foreground">
                AI-powered job board connecting global talent with opportunities worldwide.
              </p>
            </div>
            <div>
              <h3 className="text-sm font-medium">For Job Seekers</h3>
              <ul className="mt-4 space-y-2 text-sm">
                <li>
                  <Link href="/jobs" className="text-muted-foreground hover:text-foreground">
                    Browse Jobs
                  </Link>
                </li>
                <li>
                  <Link href="/profile" className="text-muted-foreground hover:text-foreground">
                    Create Profile
                  </Link>
                </li>
                <li>
                  <Link href="/saved-jobs" className="text-muted-foreground hover:text-foreground">
                    Saved Jobs
                  </Link>
                </li>
                <li>
                  <Link href="/career-resources" className="text-muted-foreground hover:text-foreground">
                    Career Resources
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-medium">For Employers</h3>
              <ul className="mt-4 space-y-2 text-sm">
                <li>
                  <Link href="/employers/post-job" className="text-muted-foreground hover:text-foreground">
                    Post a Job
                  </Link>
                </li>
                <li>
                  <Link href="/employers/pricing" className="text-muted-foreground hover:text-foreground">
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link href="/employers/resources" className="text-muted-foreground hover:text-foreground">
                    Employer Resources
                  </Link>
                </li>
                <li>
                  <Link href="/employers/success-stories" className="text-muted-foreground hover:text-foreground">
                    Success Stories
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-medium">Company</h3>
              <ul className="mt-4 space-y-2 text-sm">
                <li>
                  <Link href="/about" className="text-muted-foreground hover:text-foreground">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-muted-foreground hover:text-foreground">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link href="/privacy" className="text-muted-foreground hover:text-foreground">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="/terms" className="text-muted-foreground hover:text-foreground">
                    Terms of Service
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-12 border-t pt-8 text-center text-sm text-muted-foreground">
            <p>© {new Date().getFullYear()} GWF Jobs. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
