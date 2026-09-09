import { HugeiconsIcon } from '@hugeicons/react'
import {
  UserMultiple02Icon,
  LibraryIcon,
  Folder01Icon,
  PaintBoardIcon,
  TranslateIcon,
  KeyboardIcon,
  ComputerIcon,
  HistoryIcon,
  GithubIcon,
  StarIcon,
  Mail01Icon,
  SmartPhone01Icon,
  Briefcase01Icon,
  ServerStackIcon,
  CpuIcon,
  GraduationCapIcon,
} from '@hugeicons/core-free-icons'

import Aurora from '@/components/Aurora'
import SplitText from '@/components/SplitText'
import AnimatedContent from '@/components/AnimatedContent'
import FadeContent from '@/components/FadeContent'
import SpotlightCard from '@/components/SpotlightCard'
import { useGitHub } from '@/lib/github'

import logo from '@/assets/logo.png'

const SPOTLIGHT = 'rgba(229, 72, 110, 0.16)' as const
const LINKEDIN_URL = 'https://linkedin.com/'
const INSTAGRAM_URL = 'https://instagram.com/juan.da.ferrer.2'

const SKILLS = [
  {
    icon: ServerStackIcon,
    title: 'Linux Systems Administration',
    body: 'Configuring bare-metal servers, Red Hat Enterprise Linux (RHEL 9.7), custom XFS filesystems, LVM, and SSH security.',
  },
  {
    icon: CpuIcon,
    title: 'Infrastructure & Automation',
    body: 'Preparing for EX200 (RHCSA) and EX294 (RHCE) certifications, focusing on scalable enterprise standards and automation.',
  },
  {
    icon: Folder01Icon,
    title: 'HandDesk Project',
    body: 'Led the architectural design of a custom Debian-based desktop configuration optimized for legacy hardware (currently on development freeze).',
  },
  {
    icon: PaintBoardIcon,
    title: 'Web Development & UI',
    body: 'Building high-performance web applications using React, TypeScript, Tailwind CSS, Vite, and static hosting via Cloudflare.',
  },
  {
    icon: LibraryIcon,
    title: 'Sovereignty & Open Source',
    body: 'Advocating for digital ownership, open-source tooling, and efficient optimization scripts to debloat systems.',
  },
  {
    icon: TranslateIcon,
    title: 'Multilingual Proficiency',
    body: 'Fluent in Spanish (native), intermediate English (B1), and beginner German (A1) aligned with international goals.',
  },
]

const EXTRAS = [
  { icon: KeyboardIcon, label: 'Bash & Shell Scripting' },
  { icon: ComputerIcon, label: 'Bare-Metal Lab Deployment' },
  { icon: HistoryIcon, label: 'System Troubleshooting' },
  { icon: UserMultiple02Icon, label: 'Technical Support & Advisory' },
]

const PROJECTS = [
  {
    eyebrow: 'Infrastructure',
    title: 'Bare-Metal RHEL 9.7 Lab',
    body: 'Deployed a local enterprise server environment featuring custom partition schemes, logical volume management, and robust security policies tailored for high availability and administrative proficiency.',
    tag: 'RHEL / Linux',
  },
  {
    eyebrow: 'Open Source',
    title: 'HandDesk Linux',
    body: 'Designed and led the technical architecture of a lightweight, customized desktop environment optimized for legacy hardware performance. Currently in a frozen development state.',
    tag: 'Debian / Shell',
  },
  {
    eyebrow: 'Literary Work',
    title: 'Una Carta para mi Amada Roxana',
    body: 'Authored an independent 48-page narrative piece exploring deep interpersonal bonds, identity, and resilience, demonstrating long-form creative discipline and execution.',
    tag: 'Publication · 2026',
  },
]

function Nav({ stars }: { stars: number | null }) {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border bg-background/70 backdrop-blur-md">
      <nav className="mx-auto flex h-14 max-w-6xl items-center gap-6 px-4 sm:px-6">
        <a href="#" className="flex items-center gap-2.5 font-semibold tracking-wide text-foreground">
          <img src={logo} alt="" className="size-6 rounded-full" />
          Juan David Ferrer
        </a>
        <div className="ml-auto hidden items-center gap-6 text-sm text-muted-foreground sm:flex">
          <a href="#about" className="transition-colors hover:text-foreground">About</a>
          <a href="#skills" className="transition-colors hover:text-foreground">Skills</a>
          <a href="#projects" className="transition-colors hover:text-foreground">Projects</a>
          <a href="#contact" className="transition-colors hover:text-foreground">Contact</a>
        </div>
        <a
          href="https://github.com/juandaferrer"
          target="_blank"
          rel="noreferrer"
          className="ml-auto flex items-center gap-2 rounded-full border border-border px-3.5 py-1.5 text-sm text-muted-foreground transition-colors hover:border-primary/50 hover:text-foreground sm:ml-0"
        >
          <HugeiconsIcon icon={GithubIcon} size={16} strokeWidth={2} />
          <span className="hidden sm:inline">GitHub</span>
          {stars !== null && (
            <span className="flex items-center gap-1 text-xs">
              <HugeiconsIcon icon={StarIcon} size={12} strokeWidth={2} />
              {stars}
            </span>
          )}
        </a>
      </nav>
    </header>
  )
}

function Hero() {
  return (
    <section className="relative overflow-hidden">
      {!window.matchMedia('(prefers-reduced-motion: reduce)').matches && (
        <div className="absolute inset-0 opacity-50" aria-hidden>
          <Aurora colorStops={['#358ef3', '#358ef3', '#358ef3']} amplitude={1.1} blend={0.55} speed={0.6} />
        </div>
      )}
      <div className="absolute inset-0 opacity-50 [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_80%)]" aria-hidden>
        <Aurora colorStops={['#2563eb', '#60a5fa', '#3b82f6']} amplitude={1.1} blend={0.55} speed={0.6} />
      </div>
      <div className="relative mx-auto max-w-6xl px-4 pt-36 pb-20 text-center sm:px-6 sm:pt-44">
        <FadeContent duration={800}>
          <p className="mx-auto mb-6 w-fit rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs tracking-widest text-muted-foreground uppercase">
            Systems Administration · Linux Infrastructure · Chile
          </p>
        </FadeContent>

        <SplitText
          text="Juan David Ferrer"
          tag="h1"
          splitType="words"
          delay={120}
          duration={1}
          className="font-heading text-4xl font-bold tracking-tight text-balance sm:text-6xl md:text-7xl"
        />

        <FadeContent duration={900} delay={400}>
          <p className="mx-auto mt-6 max-w-2xl text-base text-muted-foreground sm:text-lg">
            Aspiring Infrastructure Architect focused on Linux systems administration, enterprise environments, and rigorous automation standards. Building robust technological foundations with an international vision.
          </p>
        </FadeContent>

        <FadeContent duration={900} delay={650}>
          <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
            <a
              href="#contact"
              className="flex items-center gap-2.5 rounded-full bg-primary-bright px-7 py-3.5 font-semibold text-primary-foreground shadow-lg shadow-primary/40 transition-transform hover:scale-105"
            >
              <HugeiconsIcon icon={Mail01Icon} size={20} strokeWidth={2} />
              Get in Touch
            </a>
            <a
              href="https://github.com/juandaferrer"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2.5 rounded-full border border-white/15 px-7 py-3.5 font-medium transition-colors hover:border-white/30 hover:bg-white/5"
            >
              <HugeiconsIcon icon={GithubIcon} size={20} strokeWidth={2} />
              Explore GitHub
            </a>
          </div>
          <p className="mt-4 text-sm text-muted-foreground">
            Based in Santiago, Chile · Preparing for EX200 &amp; EX294
          </p>
        </FadeContent>

        <AnimatedContent distance={80} duration={1.1} delay={0.25} scale={0.96} threshold={0}>
          <div className="mt-16 rounded-xl border border-white/10 bg-card/40 p-8 backdrop-blur-md shadow-[0_0_120px_-24px_var(--primary-bright)] text-left">
            <div className="flex items-center gap-3 mb-4">
              <div className="size-3 rounded-full bg-red-500/80" />
              <div className="size-3 rounded-full bg-yellow-500/80" />
              <div className="size-3 rounded-full bg-green-500/80" />
              <span className="text-xs text-muted-foreground ml-2 font-mono">juanda@rhel-node01 ~ </span>
            </div>
            <pre className="font-mono text-xs sm:text-sm text-muted-foreground overflow-x-auto">
              <code>
                <span className="text-primary-bright">$</span> hostnamectl status<br />
                Static hostname: rhel-node01.localdomain<br />
                Icon name: computer-server<br />
                Operating System: Red Hat Enterprise Linux 9.7 (Plow)<br />
                Kernel: Linux 5.14.0-427.el9.x86_64<br />
                Architecture: x86-64
              </code>
            </pre>
          </div>
        </AnimatedContent>
      </div>
    </section>
  )
}

function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-6xl scroll-mt-20 px-4 py-24 sm:px-6">
      <FadeContent duration={800}>
        <p className="text-center text-xs font-semibold tracking-widest text-primary-bright uppercase">Expertise</p>
        <h2 className="mx-auto mt-3 max-w-2xl text-center font-heading text-3xl font-bold tracking-tight text-balance sm:text-4xl">
          Core competencies &amp; technical focus
        </h2>
      </FadeContent>

      <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {SKILLS.map((s, i) => (
          <AnimatedContent key={s.title} distance={40} duration={0.8} delay={(i % 3) * 0.1} threshold={0.15}>
            <SpotlightCard
              spotlightColor={SPOTLIGHT}
              className="h-full !rounded-xl !border-white/10 !bg-card/60 !p-6"
            >
              <div className="mb-4 flex size-11 items-center justify-center rounded-lg bg-primary/15 text-primary-bright">
                <HugeiconsIcon icon={s.icon} size={22} strokeWidth={1.8} />
              </div>
              <h3 className="font-heading text-lg font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.body}</p>
            </SpotlightCard>
          </AnimatedContent>
        ))}
      </div>

      <FadeContent duration={800} delay={150}>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          {EXTRAS.map(e => (
            <span
              key={e.label}
              className="flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 text-sm text-muted-foreground"
            >
              <HugeiconsIcon icon={e.icon} size={16} strokeWidth={1.8} className="text-primary-bright" />
              {e.label}
            </span>
          ))}
        </div>
      </FadeContent>
    </section>
  )
}

function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-6xl scroll-mt-20 px-4 py-8 sm:px-6">
      <FadeContent duration={800}>
        <p className="text-center text-xs font-semibold tracking-widest text-primary-bright uppercase">Portfolio</p>
        <h2 className="mx-auto mt-3 max-w-2xl text-center font-heading text-3xl font-bold tracking-tight text-balance sm:text-4xl">
          Featured works &amp; initiatives
        </h2>
      </FadeContent>

      <div className="mt-14 space-y-12">
        {PROJECTS.map((p) => (
          <AnimatedContent key={p.title} distance={60} duration={0.9} threshold={0.15}>
            <div className="rounded-xl border border-white/10 bg-card/60 p-6 sm:p-8">
              <div className="flex flex-wrap items-center justify-between gap-4 mb-3">
                <p className="text-xs font-semibold tracking-widest text-primary-bright uppercase">{p.eyebrow}</p>
                <span className="rounded-full bg-primary/20 px-3 py-1 text-xs text-primary-bright font-medium">{p.tag}</span>
              </div>
              <h3 className="font-heading text-2xl font-bold tracking-tight sm:text-3xl">{p.title}</h3>
              <p className="mt-4 leading-relaxed text-muted-foreground max-w-3xl">{p.body}</p>
            </div>
          </AnimatedContent>
        ))}
      </div>
    </section>
  )
}

function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-6xl scroll-mt-20 px-4 py-24 sm:px-6">
      <FadeContent duration={800}>
        <p className="text-center text-xs font-semibold tracking-widest text-primary-bright uppercase">Contact</p>
        <h2 className="mt-3 text-center font-heading text-3xl font-bold tracking-tight sm:text-4xl">Let's Connect</h2>
        <p className="mx-auto mt-4 max-w-xl text-center text-muted-foreground">
          Direct communication is preferred. Reach out via email, phone, or professional networks for inquiries or technical proposals.
        </p>
      </FadeContent>

      <div className="mt-12 grid gap-5 md:grid-cols-3">
        <AnimatedContent distance={40} duration={0.8} delay={0} threshold={0.15}>
          <div className="flex h-full flex-col rounded-xl border border-white/10 bg-card/60 p-6">
            <div className="flex items-center gap-3">
              <HugeiconsIcon icon={Mail01Icon} size={24} strokeWidth={1.8} className="text-primary-bright" />
              <h3 className="font-heading text-lg font-semibold">Email</h3>
            </div>
            <div className="mt-5 flex flex-1 flex-col justify-center">
              <a
                href="mailto:messages@juandaferrer.xyz"
                className="rounded-lg border border-white/10 px-4 py-3 text-center text-sm font-medium transition-colors hover:border-primary-bright/50 hover:bg-primary/10 break-all"
              >
                messages@juandaferrer.xyz
              </a>
            </div>
            <p className="mt-4 text-xs text-muted-foreground">Check spam folder if reply is delayed.</p>
          </div>
        </AnimatedContent>

        <AnimatedContent distance={40} duration={0.8} delay={0.1} threshold={0.15}>
          <div className="flex h-full flex-col rounded-xl border border-white/10 bg-card/60 p-6">
            <div className="flex items-center gap-3">
              <HugeiconsIcon icon={SmartPhone01Icon} size={24} strokeWidth={1.8} className="text-primary-bright" />
              <h3 className="font-heading text-lg font-semibold">Phone / WhatsApp</h3>
            </div>
            <div className="mt-5 flex flex-1 flex-col justify-center">
              <a
                href="tel:+56923986590"
                className="rounded-lg border border-white/10 px-4 py-3 text-center text-sm font-medium transition-colors hover:border-primary-bright/50 hover:bg-primary/10"
              >
                +56 9 2398 6590
              </a>
            </div>
            <p className="mt-4 text-xs text-muted-foreground">• Calls: Spanish only<br />• Messaging: All languages</p>
          </div>
        </AnimatedContent>

        <AnimatedContent distance={40} duration={0.8} delay={0.2} threshold={0.15}>
          <div className="flex h-full flex-col rounded-xl border border-white/10 bg-card/60 p-6">
            <div className="flex items-center gap-3">
              <HugeiconsIcon icon={Briefcase01Icon} size={24} strokeWidth={1.8} className="text-primary-bright" />
              <h3 className="font-heading text-lg font-semibold">Social</h3>
            </div>
            <div className="mt-5 flex flex-1 flex-col gap-2.5">
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noreferrer"
                className="rounded-lg border border-white/10 px-4 py-2 text-center text-sm font-medium transition-colors hover:border-primary-bright/50 hover:bg-primary/10"
              >
                Instagram (@juan.da.ferrer.2)
              </a>
              <a
                href={LINKEDIN_URL}
                target="_blank"
                rel="noreferrer"
                className="rounded-lg border border-white/10 px-4 py-2 text-center text-sm font-medium transition-colors hover:border-primary-bright/50 hover:bg-primary/10"
              >
                LinkedIn Profile
              </a>
            </div>
          </div>
        </AnimatedContent>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="border-t border-white/5">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-4 py-10 text-center text-sm text-muted-foreground sm:px-6">
        <div className="flex items-center gap-2 font-semibold text-foreground">
          <img src={logo} alt="" className="size-5 rounded-full" />
          Juan David Ferrer
        </div>
        <p className="max-w-2xl text-xs leading-relaxed">
          © 2026 Juan David Ferrer. All rights reserved. Built with React, Tailwind CSS, and Vite.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-5">
          <a href="https://github.com/juandaferrer" target="_blank" rel="noreferrer" className="flex items-center gap-1.5 transition-colors hover:text-foreground">
            <HugeiconsIcon icon={GithubIcon} size={15} strokeWidth={2} /> GitHub
          </a>
          <a href={INSTAGRAM_URL} target="_blank" rel="noreferrer" className="flex items-center gap-1.5 transition-colors hover:text-foreground">
            <HugeiconsIcon icon={GraduationCapIcon} size={15} strokeWidth={2} /> Colegio Algarrobal
          </a>
        </div>
      </div>
    </footer>
  )
}

export default function App() {
  const info = useGitHub()

  return (
    <>
      <Nav stars={info.stars} />
      <main>
        <Hero />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  )
}