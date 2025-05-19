import Link from "next/link"
import Image from "next/image"
import {
  Globe,
  Building,
  MapPin,
  Clock,
  Briefcase,
  Calendar,
  DollarSign,
  Users,
  Share2,
  Star,
  ArrowLeft,
  Bot,
  Search,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Input } from "@/components/ui/input"
import CompanyLogo from "@/components/company-logo"

export default function JobDetailPage({ params }: { params: { id: string } }) {
  // This would normally be fetched from an API based on the ID
  const job = {
    id: Number.parseInt(params.id),
    title: "Senior AI Engineer",
    company: "TechGlobal Inc.",
    companyLogo: "/placeholder.svg?height=100&width=100&text=TG",
    companyDescription:
      "TechGlobal Inc. is a leading technology company specializing in AI solutions for enterprise clients worldwide. With offices in 12 countries and over 5,000 employees, we're at the forefront of innovation in artificial intelligence and machine learning.",
    location: "Remote",
    salary: "$120K - $150K",
    employmentType: "Full-time",
    experienceLevel: "Senior (5+ years)",
    tags: ["AI", "Machine Learning", "Python", "TensorFlow", "Computer Vision", "NLP"],
    posted: "2 days ago",
    applicationDeadline: "June 15, 2025",
    isRemote: true,
    isFeatured: true,
    featureImage: "/placeholder.svg?height=400&width=800&text=AI+Engineer+Position",
    description: `
      <p>TechGlobal Inc. is seeking a Senior AI Engineer to join our growing team. In this role, you will design, develop, and deploy cutting-edge AI solutions for our enterprise clients.</p>
      
      <h3>Responsibilities:</h3>
      <ul>
        <li>Design and implement machine learning models to solve complex business problems</li>
        <li>Collaborate with cross-functional teams to integrate AI solutions into existing products</li>
        <li>Optimize machine learning algorithms for performance and scalability</li>
        <li>Stay current with the latest research and technologies in AI and machine learning</li>
        <li>Mentor junior engineers and data scientists</li>
      </ul>
      
      <h3>Requirements:</h3>
      <ul>
        <li>5+ years of experience in AI/ML engineering roles</li>
        <li>Strong programming skills in Python and familiarity with ML frameworks (TensorFlow, PyTorch)</li>
        <li>Experience with computer vision, NLP, or other specialized AI domains</li>
        <li>Bachelor's degree in Computer Science, Mathematics, or related field (Master's or PhD preferred)</li>
        <li>Excellent problem-solving and communication skills</li>
      </ul>
      
      <h3>Benefits:</h3>
      <ul>
        <li>Competitive salary and equity package</li>
        <li>Flexible remote work policy</li>
        <li>Comprehensive health, dental, and vision insurance</li>
        <li>401(k) matching</li>
        <li>Professional development budget</li>
        <li>Unlimited PTO policy</li>
      </ul>
    `,
    relatedJobs: [
      {
        id: 7,
        title: "Machine Learning Engineer",
        company: "AI Solutions Ltd",
        companyLogo: "/placeholder.svg?height=40&width=40&text=AI",
        location: "Remote",
        posted: "1 week ago",
        tags: ["Machine Learning", "Python", "AWS"],
        salary: "$110K - $140K",
      },
      {
        id: 8,
        title: "AI Research Scientist",
        company: "DataTech",
        companyLogo: "/placeholder.svg?height=40&width=40&text=DT",
        location: "San Francisco, USA",
        posted: "3 days ago",
        tags: ["Research", "AI", "PhD"],
        salary: "$130K - $160K",
      },
      {
        id: 9,
        title: "Computer Vision Engineer",
        company: "VisionAI",
        companyLogo: "/placeholder.svg?height=40&width=40&text=VA",
        location: "Remote",
        posted: "5 days ago",
        tags: ["Computer Vision", "Python", "OpenCV"],
        salary: "$115K - $145K",
      },
      {
        id: 10,
        title: "NLP Engineer",
        company: "LanguageTech",
        companyLogo: "/placeholder.svg?height=40&width=40&text=LT",
        location: "New York, USA",
        posted: "1 day ago",
        tags: ["NLP", "Python", "BERT"],
        salary: "$125K - $155K",
      },
    ],
  }

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

      <main className="flex-1 py-8">
        <div className="container px-4 md:px-6">
          <div className="mb-6">
            <Link href="/jobs" className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground">
              <ArrowLeft className="mr-1 h-4 w-4" />
              Back to jobs
            </Link>
          </div>

          {job.featureImage && (
            <div className="relative h-[300px] w-full mb-8 rounded-xl overflow-hidden">
              <Image src={job.featureImage || "/placeholder.svg"} alt={job.title} fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <div className="flex items-center gap-4">
                  <CompanyLogo name={job.company} logoUrl={job.companyLogo} size="lg" />
                  <div>
                    <h1 className="text-3xl font-bold">{job.title}</h1>
                    <div className="flex items-center mt-2">
                      <span className="text-white/90">{job.company}</span>
                      <span className="mx-2">•</span>
                      <span className="text-white/90">{job.location}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          <div className="grid gap-8 md:grid-cols-3">
            {/* Main Content */}
            <div className="md:col-span-2 space-y-8">
              {!job.featureImage && (
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <CompanyLogo name={job.company} logoUrl={job.companyLogo} size="lg" />
                    <div>
                      <div className="flex items-center gap-2">
                        {job.isFeatured && <Badge variant="default">Featured</Badge>}
                        <Badge variant="outline" className="font-normal">
                          {job.employmentType}
                        </Badge>
                        {job.isRemote && (
                          <Badge variant="outline" className="font-normal">
                            Remote
                          </Badge>
                        )}
                      </div>
                      <h1 className="text-3xl font-bold mt-2">{job.title}</h1>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-y-2 text-sm text-muted-foreground">
                    <div className="flex items-center mr-4">
                      <Building className="mr-1 h-4 w-4" />
                      {job.company}
                    </div>
                    <div className="flex items-center mr-4">
                      <MapPin className="mr-1 h-4 w-4" />
                      {job.location}
                    </div>
                    <div className="flex items-center mr-4">
                      <Clock className="mr-1 h-4 w-4" />
                      Posted {job.posted}
                    </div>
                    <div className="flex items-center mr-4">
                      <Briefcase className="mr-1 h-4 w-4" />
                      {job.experienceLevel}
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {job.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="font-normal">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              )}

              <Separator />

              {/* Job Description */}
              <div className="space-y-4">
                <h2 className="text-xl font-bold">Job Description</h2>
                <div className="prose max-w-none" dangerouslySetInnerHTML={{ __html: job.description }} />
              </div>

              <Separator />

              {/* Company Info */}
              <div className="space-y-4">
                <h2 className="text-xl font-bold">About {job.company}</h2>
                <p>{job.companyDescription}</p>
              </div>

              {/* Related Jobs Section (Mobile Only) */}
              <div className="md:hidden space-y-6">
                <h2 className="text-xl font-bold">Related Jobs</h2>
                <div className="grid gap-4">
                  {job.relatedJobs.slice(0, 2).map((relatedJob) => (
                    <Link href={`/jobs/${relatedJob.id}`} key={relatedJob.id}>
                      <Card className="hover:bg-muted/50 transition-colors">
                        <CardContent className="p-4">
                          <div className="flex items-start gap-3">
                            <CompanyLogo name={relatedJob.company} logoUrl={relatedJob.companyLogo} size="sm" />
                            <div className="flex-1">
                              <h3 className="font-bold">{relatedJob.title}</h3>
                              <div className="mt-1 flex flex-wrap gap-y-1 text-sm text-muted-foreground">
                                <div className="flex items-center mr-4">
                                  <Building className="mr-1 h-3.5 w-3.5" />
                                  {relatedJob.company}
                                </div>
                                <div className="flex items-center mr-4">
                                  <MapPin className="mr-1 h-3.5 w-3.5" />
                                  {relatedJob.location}
                                </div>
                                <div className="flex items-center">
                                  <Clock className="mr-1 h-3.5 w-3.5" />
                                  Posted {relatedJob.posted}
                                </div>
                              </div>
                              <div className="mt-2 text-sm font-medium">{relatedJob.salary}</div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar - Now Sticky */}
            <div>
              <div className="sticky top-24 space-y-6">
                {/* Apply Card */}
                <Card>
                  <CardContent className="p-6 space-y-4">
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <DollarSign className="mr-1 h-5 w-5 text-muted-foreground" />
                          <span className="font-medium">Salary</span>
                        </div>
                        <span>{job.salary}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <Calendar className="mr-1 h-5 w-5 text-muted-foreground" />
                          <span className="font-medium">Deadline</span>
                        </div>
                        <span>{job.applicationDeadline}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <Users className="mr-1 h-5 w-5 text-muted-foreground" />
                          <span className="font-medium">Applicants</span>
                        </div>
                        <span>24 applied</span>
                      </div>
                    </div>

                    <div className="flex flex-col gap-3">
                      <Button size="lg" className="w-full">
                        Apply Now
                      </Button>
                      <div className="flex gap-2">
                        <Button variant="outline" size="icon" className="flex-1">
                          <Star className="h-5 w-5" />
                          <span className="sr-only">Save job</span>
                        </Button>
                        <Button variant="outline" size="icon" className="flex-1">
                          <Share2 className="h-5 w-5" />
                          <span className="sr-only">Share job</span>
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* AI Job Match */}
                <Card className="bg-primary/5 border-primary/20">
                  <CardContent className="p-6 space-y-4">
                    <div className="flex items-center gap-2">
                      <Bot className="h-5 w-5 text-primary" />
                      <h3 className="font-bold">AI Job Match</h3>
                    </div>
                    <p className="text-sm">
                      Our AI has determined this job is a <span className="font-bold">92% match</span> for your skills
                      and experience.
                    </p>
                    <Button variant="outline" className="w-full border-primary/20 hover:bg-primary/10">
                      View Match Details
                    </Button>
                  </CardContent>
                </Card>

                {/* Related Jobs (Desktop Only) - Enhanced */}
                <div className="hidden md:block space-y-4">
                  <h2 className="text-xl font-bold">Related Jobs</h2>
                  <div className="space-y-4">
                    {job.relatedJobs.map((relatedJob) => (
                      <Link href={`/jobs/${relatedJob.id}`} key={relatedJob.id} className="block">
                        <Card className="hover:bg-muted/50 transition-colors border-l-4 border-l-primary/70">
                          <CardContent className="p-4">
                            <div className="flex items-start gap-3">
                              <CompanyLogo name={relatedJob.company} logoUrl={relatedJob.companyLogo} size="sm" />
                              <div>
                                <h3 className="font-bold">{relatedJob.title}</h3>
                                <div className="mt-1 flex flex-col gap-1 text-sm text-muted-foreground">
                                  <div className="flex items-center">
                                    <Building className="mr-1 h-3.5 w-3.5" />
                                    {relatedJob.company}
                                  </div>
                                  <div className="flex items-center">
                                    <MapPin className="mr-1 h-3.5 w-3.5" />
                                    {relatedJob.location}
                                  </div>
                                </div>
                                <div className="mt-2 flex flex-wrap gap-1">
                                  {relatedJob.tags.slice(0, 2).map((tag) => (
                                    <Badge key={tag} variant="secondary" className="font-normal text-xs">
                                      {tag}
                                    </Badge>
                                  ))}
                                </div>
                                <div className="mt-2 text-sm font-medium">{relatedJob.salary}</div>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      </Link>
                    ))}
                  </div>
                </div>
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
