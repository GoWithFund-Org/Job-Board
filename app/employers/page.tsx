import Link from "next/link"
import { Globe, CheckCircle, BarChart, Users, Bot, ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function EmployersPage() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b bg-background/95 backdrop-blur">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Globe className="h-6 w-6 text-primary" />
            <span className="text-xl font-bold">GWF Jobs</span>
          </div>
          <nav className="hidden md:flex items-center space-x-6">
            <Link href="/" className="text-sm font-medium">
              Home
            </Link>
            <Link href="/jobs" className="text-sm font-medium">
              Find Jobs
            </Link>
            <Link href="/employers" className="text-sm font-medium text-primary">
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
            <div className="grid gap-12 md:grid-cols-2 items-center">
              <div>
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Find the Perfect Talent <span className="text-primary">Globally</span>
                </h1>
                <p className="mt-4 text-muted-foreground md:text-xl">
                  Our AI-powered platform connects you with the best candidates worldwide, saving you time and
                  resources.
                </p>
                <div className="mt-8 flex flex-col sm:flex-row gap-4">
                  <Link href="/employers/signup">
                    <Button size="lg">Post a Job</Button>
                  </Link>
                  <Link href="/employers/pricing">
                    <Button variant="outline" size="lg">
                      View Pricing
                    </Button>
                  </Link>
                </div>
                <div className="mt-8 flex items-center gap-4">
                  <div className="flex -space-x-2">
                    <div className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center">
                      <CheckCircle className="h-5 w-5 text-primary" />
                    </div>
                    <div className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center">
                      <CheckCircle className="h-5 w-5 text-primary" />
                    </div>
                    <div className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center">
                      <CheckCircle className="h-5 w-5 text-primary" />
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Trusted by <span className="font-bold">2,500+</span> companies worldwide
                  </p>
                </div>
              </div>
              <div className="rounded-lg border bg-card p-8 shadow-sm">
                <h3 className="text-xl font-bold">Employer Dashboard Preview</h3>
                <div className="mt-6 space-y-4">
                  <div className="rounded-md bg-muted p-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="font-medium">Active Job Listings</div>
                        <div className="text-3xl font-bold mt-1">12</div>
                      </div>
                      <div className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center">
                        <BarChart className="h-5 w-5 text-primary" />
                      </div>
                    </div>
                  </div>
                  <div className="rounded-md bg-muted p-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="font-medium">Total Applications</div>
                        <div className="text-3xl font-bold mt-1">48</div>
                      </div>
                      <div className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center">
                        <Users className="h-5 w-5 text-primary" />
                      </div>
                    </div>
                  </div>
                  <div className="rounded-md bg-muted p-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="font-medium">AI-Matched Candidates</div>
                        <div className="text-3xl font-bold mt-1">24</div>
                      </div>
                      <div className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center">
                        <Bot className="h-5 w-5 text-primary" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-16">
          <div className="container px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-2xl font-bold tracking-tight md:text-3xl">Why Choose GWF Jobs?</h2>
              <p className="mt-4 text-muted-foreground md:text-lg">
                Our platform offers unique features designed to streamline your hiring process
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-3">
              <Card>
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 mb-4">
                    <Bot className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold">AI-Powered Matching</h3>
                  <p className="mt-2 text-muted-foreground">
                    Our advanced AI algorithms match your job requirements with the most qualified candidates globally.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 mb-4">
                    <Globe className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold">Global Talent Pool</h3>
                  <p className="mt-2 text-muted-foreground">
                    Access candidates from around the world, with support for remote work and international hiring.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 mb-4">
                    <BarChart className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold">Advanced Analytics</h3>
                  <p className="mt-2 text-muted-foreground">
                    Gain insights into your job postings' performance and candidate engagement with detailed analytics.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section className="bg-muted py-16">
          <div className="container px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-2xl font-bold tracking-tight md:text-3xl">Simple, Transparent Pricing</h2>
              <p className="mt-4 text-muted-foreground md:text-lg">
                Choose the plan that works best for your hiring needs
              </p>
            </div>

            <Tabs defaultValue="monthly" className="w-full">
              <div className="flex justify-center mb-8">
                <TabsList>
                  <TabsTrigger value="monthly">Monthly</TabsTrigger>
                  <TabsTrigger value="annual">Annual (Save 20%)</TabsTrigger>
                </TabsList>
              </div>

              <TabsContent value="monthly">
                <div className="grid gap-8 md:grid-cols-3">
                  <Card>
                    <CardContent className="p-6">
                      <div className="mb-4">
                        <h3 className="text-xl font-bold">Starter</h3>
                        <p className="text-muted-foreground mt-1">For small businesses</p>
                      </div>
                      <div className="mb-4">
                        <span className="text-3xl font-bold">$99</span>
                        <span className="text-muted-foreground">/month</span>
                      </div>
                      <ul className="space-y-2 mb-6">
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                          <span>3 active job postings</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                          <span>Basic AI candidate matching</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                          <span>Standard job visibility</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                          <span>Email support</span>
                        </li>
                      </ul>
                      <Button className="w-full">Get Started</Button>
                    </CardContent>
                  </Card>
                  <Card className="border-primary">
                    <CardContent className="p-6 relative">
                      <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-3 py-1 text-xs font-medium rounded-full">
                        Most Popular
                      </div>
                      <div className="mb-4">
                        <h3 className="text-xl font-bold">Professional</h3>
                        <p className="text-muted-foreground mt-1">For growing companies</p>
                      </div>
                      <div className="mb-4">
                        <span className="text-3xl font-bold">$199</span>
                        <span className="text-muted-foreground">/month</span>
                      </div>
                      <ul className="space-y-2 mb-6">
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                          <span>10 active job postings</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                          <span>Advanced AI candidate matching</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                          <span>Featured job listings</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                          <span>Candidate screening chatbot</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                          <span>Priority email & chat support</span>
                        </li>
                      </ul>
                      <Button className="w-full">Get Started</Button>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="p-6">
                      <div className="mb-4">
                        <h3 className="text-xl font-bold">Enterprise</h3>
                        <p className="text-muted-foreground mt-1">For large organizations</p>
                      </div>
                      <div className="mb-4">
                        <span className="text-3xl font-bold">$499</span>
                        <span className="text-muted-foreground">/month</span>
                      </div>
                      <ul className="space-y-2 mb-6">
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                          <span>Unlimited job postings</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                          <span>Premium AI candidate matching</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                          <span>Featured & promoted listings</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                          <span>Advanced analytics dashboard</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                          <span>Dedicated account manager</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                          <span>API access for integration</span>
                        </li>
                      </ul>
                      <Button className="w-full">Contact Sales</Button>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>

              <TabsContent value="annual">
                <div className="grid gap-8 md:grid-cols-3">
                  <Card>
                    <CardContent className="p-6">
                      <div className="mb-4">
                        <h3 className="text-xl font-bold">Starter</h3>
                        <p className="text-muted-foreground mt-1">For small businesses</p>
                      </div>
                      <div className="mb-4">
                        <span className="text-3xl font-bold">$79</span>
                        <span className="text-muted-foreground">/month</span>
                      </div>
                      <ul className="space-y-2 mb-6">
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                          <span>3 active job postings</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                          <span>Basic AI candidate matching</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                          <span>Standard job visibility</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                          <span>Email support</span>
                        </li>
                      </ul>
                      <Button className="w-full">Get Started</Button>
                    </CardContent>
                  </Card>
                  <Card className="border-primary">
                    <CardContent className="p-6 relative">
                      <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-3 py-1 text-xs font-medium rounded-full">
                        Most Popular
                      </div>
                      <div className="mb-4">
                        <h3 className="text-xl font-bold">Professional</h3>
                        <p className="text-muted-foreground mt-1">For growing companies</p>
                      </div>
                      <div className="mb-4">
                        <span className="text-3xl font-bold">$159</span>
                        <span className="text-muted-foreground">/month</span>
                      </div>
                      <ul className="space-y-2 mb-6">
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                          <span>10 active job postings</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                          <span>Advanced AI candidate matching</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                          <span>Featured job listings</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                          <span>Candidate screening chatbot</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                          <span>Priority email & chat support</span>
                        </li>
                      </ul>
                      <Button className="w-full">Get Started</Button>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="p-6">
                      <div className="mb-4">
                        <h3 className="text-xl font-bold">Enterprise</h3>
                        <p className="text-muted-foreground mt-1">For large organizations</p>
                      </div>
                      <div className="mb-4">
                        <span className="text-3xl font-bold">$399</span>
                        <span className="text-muted-foreground">/month</span>
                      </div>
                      <ul className="space-y-2 mb-6">
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                          <span>Unlimited job postings</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                          <span>Premium AI candidate matching</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                          <span>Featured & promoted listings</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                          <span>Advanced analytics dashboard</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                          <span>Dedicated account manager</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                          <span>API access for integration</span>
                        </li>
                      </ul>
                      <Button className="w-full">Contact Sales</Button>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-16">
          <div className="container px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-2xl font-bold tracking-tight md:text-3xl">What Our Clients Say</h2>
              <p className="mt-4 text-muted-foreground md:text-lg">
                Hear from companies that have found their perfect candidates through GWF Jobs
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-3">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <Users className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-bold">Sarah Johnson</h4>
                      <p className="text-sm text-muted-foreground">HR Director, TechSolutions</p>
                    </div>
                  </div>
                  <p className="italic">
                    "GWF Jobs has transformed our hiring process. The AI matching technology helped us find qualified
                    candidates we wouldn't have discovered otherwise. We've reduced our time-to-hire by 40%."
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <Users className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-bold">Michael Chen</h4>
                      <p className="text-sm text-muted-foreground">CEO, StartupX</p>
                    </div>
                  </div>
                  <p className="italic">
                    "As a startup, finding the right talent is crucial. GWF Jobs helped us build our remote team across
                    three continents. The global reach and AI matching were game-changers for our growth."
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <Users className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-bold">Emma Rodriguez</h4>
                      <p className="text-sm text-muted-foreground">Talent Acquisition, Global Corp</p>
                    </div>
                  </div>
                  <p className="italic">
                    "The analytics dashboard gives us valuable insights into our recruitment process. We've optimized
                    our job descriptions and improved our candidate experience based on the data from GWF Jobs."
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-primary text-primary-foreground py-16">
          <div className="container px-4 md:px-6 text-center">
            <h2 className="text-2xl font-bold tracking-tight md:text-3xl">Ready to Find Your Perfect Candidates?</h2>
            <p className="mt-4 text-primary-foreground/80 md:text-lg">
              Join thousands of companies hiring global talent through GWF Jobs
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/employers/signup">
                <Button variant="secondary" size="lg">
                  Post a Job
                </Button>
              </Link>
              <Link href="/employers/demo">
                <Button
                  variant="outline"
                  size="lg"
                  className="bg-transparent text-primary-foreground border-primary-foreground/20 hover:bg-primary-foreground/10"
                >
                  Request a Demo
                  <ArrowRight className="ml-2 h-4 w-4" />
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
                  <Link href="/career-resources" className="text-muted-foreground hover:text-foreground">
                    Career Resources
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
