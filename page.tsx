import { Instagram, Mail, Phone, MessageCircle } from "lucide-react"
import Image from "next/image"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <a className="flex items-center justify-center gap-2" href="#">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Purple%20Abstract%20A%20Letter%20Free%20Logo-JSxfBBRwKmYQLewEcY0ZlbJYyqZi43.png"
            alt="Aham Abid Logo"
            width={32}
            height={32}
            className="h-8 w-8"
          />
          <span className="font-semibold">Aham Abid</span>
        </a>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <a className="text-sm font-medium hover:underline underline-offset-4" href="#projects">
            Projects
          </a>
          <a className="text-sm font-medium hover:underline underline-offset-4" href="#skills">
            Skills
          </a>
          <a className="text-sm font-medium hover:underline underline-offset-4" href="#contact">
            Contact
          </a>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="mb-8">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/82f742795e46b677941176f7c0fda254.JPG-zLwaZ1f5CdOmKe3pHoCA5ddQ6aGyje.jpeg"
                    alt="Aham Abid"
                    width={300}
                    height={300}
                    className="rounded-full object-cover mx-auto w-64 h-64"
                    priority
                  />
                </div>
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Hi, I'm Aham Abid
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  A first-year student at Dhaka University and an entrepreneur, dedicated to bridging the gap between technology and business. With a keen eye for emerging trends and a hands-on approach, I empower teams to achieve extraordinary results.
                </p>
              </div>
              <div className="space-x-4">
                <Button>
                  <a href="#contact">Contact Me</a>
                </Button>
                <Button variant="outline">
                  <a href="#projects">View Projects</a>
                </Button>
              </div>
            </div>
          </div>
        </section>
        <section id="projects" className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">My Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-8 max-w-md mx-auto">
              <Card>
                <CardContent className="p-6">
                  <Image
                    src="/placeholder.svg?height=200&width=300"
                    alt="Portfolio Website"
                    className="w-full h-48 object-cover mb-4 rounded-lg"
                    width={300}
                    height={200}
                  />
                  <h3 className="text-2xl font-bold mb-2">Portfolio Website</h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    A responsive personal portfolio website built with Next.js and Tailwind CSS, showcasing my projects, skills, and contact information.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section id="skills" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">Skills</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
              <div className="flex flex-col items-center">
                <LayersIcon className="h-12 w-12 mb-2" />
                <h3 className="text-xl font-bold">Technical Manager</h3>
              </div>
              <div className="flex flex-col items-center">
                <GamepadIcon className="h-12 w-12 mb-2" />
                <h3 className="text-xl font-bold">Gamer</h3>
              </div>
              <div className="flex flex-col items-center">
                <CodeIcon className="h-12 w-12 mb-2" />
                <h3 className="text-xl font-bold">Programmer</h3>
              </div>
              <div className="flex flex-col items-center">
                <PenToolIcon className="h-12 w-12 mb-2" />
                <h3 className="text-xl font-bold">Digital Creator</h3>
              </div>
            </div>
          </div>
        </section>
        <section id="contact" className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">Contact Me</h2>
            <div className="flex justify-center space-x-4">
              <a href="https://wa.me/8801628774008" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" size="icon">
                  <MessageCircle className="h-4 w-4" />
                  <span className="sr-only">WhatsApp</span>
                </Button>
              </a>
              <a href="https://www.instagram.com/aham_abid/" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" size="icon">
                  <Instagram className="h-4 w-4" />
                  <span className="sr-only">Instagram</span>
                </Button>
              </a>
              <a href="mailto:ahamabid1@gmail.com">
                <Button variant="outline" size="icon">
                  <Mail className="h-4 w-4" />
                  <span className="sr-only">Email</span>
                </Button>
              </a>
              <a href="tel:+8801628774008">
                <Button variant="outline" size="icon">
                  <Phone className="h-4 w-4" />
                  <span className="sr-only">Phone</span>
                </Button>
              </a>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500 dark:text-gray-400">© 2024 Aham Abid. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <a className="text-xs hover:underline underline-offset-4" href="#projects">
            Projects
          </a>
          <a className="text-xs hover:underline underline-offset-4" href="#skills">
            Skills
          </a>
          <a className="text-xs hover:underline underline-offset-4" href="#contact">
            Contact
          </a>
        </nav>
      </footer>
    </div>
  )
}

function GamepadIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="6" x2="10" y1="12" y2="12" />
      <line x1="8" x2="8" y1="10" y2="14" />
      <line x1="15" x2="15.01" y1="13" y2="13" />
      <line x1="18" x2="18.01" y1="11" y2="11" />
      <rect width="20" height="12" x="2" y="6" rx="2" />
    </svg>
  )
}

function PenToolIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m12 19 7-7 3 3-7 7-3-3z" />
      <path d="m18 13-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" />
      <path d="m2 2 7.586 7.586" />
      <circle cx="11" cy="11" r="2" />
    </svg>
  )
}

function LayersIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="12 2 2 7 12 12 22 7 12 2" />
      <polyline points="2 17 12 22 22 17" />
      <polyline points="2 12 12 17 22 12" />
    </svg>
  )
}

function CodeIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  )
}