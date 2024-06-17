import { type Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import {
  GitHubIcon,
  InstagramIcon,
  LinkedInIcon,
  XIcon,
} from '@/components/SocialIcons'
import portraitImage from '@/images/portrait.jpg'

function SocialLink({
  className,
  href,
  children,
  icon: Icon,
}: {
  className?: string
  href: string
  icon: React.ComponentType<{ className?: string }>
  children: React.ReactNode
}) {
  return (
    <li className={clsx(className, 'flex')}>
      <Link
        href={href}
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  )
}

function MailIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
      />
    </svg>
  )
}

export const metadata: Metadata = {
  title: 'About',
  description:
    'I’m Dan. I live in Cebu City, where I develop innovative software solutions and mentor aspiring developers.',
}

export default function About() {
  return (
    <Container className="mt-16 sm:mt-32">
      <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
        <div className="lg:pl-20">
          <div className="max-w-xs px-2.5 lg:max-w-none">
            <Image
              src={portraitImage}
              alt=""
              sizes="(min-width: 1024px) 32rem, 20rem"
              className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
            />
          </div>
        </div>
        <div className="lg:order-first lg:row-span-2">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
            I&apos;m Dan. I live in Cebu City, where I develop innovative
            software solutions and mentor aspiring developers.
          </h1>
          <div className="mt-12 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
            <p>
              I&apos;ve loved creating things for as long as I can remember and
              wrote my first program when I was just <b>12 years old</b>. It all
              started when my school introduced us to basic coding, and I was
              instantly hooked.
            </p>
            <p>
              Growing up, my passion extended beyond computers to helping
              others. I often found myself assisting classmates with their
              projects and troubleshooting their tech problems. This passion for
              mentorship carried into my professional life.
            </p>
            <p>
              At <b>Arcanys</b>, I contribute to the development of Waterfall, a
              pioneering technology and investment platform dedicated to
              accelerating the establishment of sustainable infrastructure. Our
              goal is to redefine how these assets are valued, financed, and
              managed, shaping the infrastructure of tomorrow.
            </p>
            <p>
              Previously, at <b>Dealogikal</b>, I developed and maintained
              applications to elevate the supply chain, automating the
              procurement process through a transparent online marketplace.
            </p>
            <p>
              Before that, at <b>Accenture</b>, I published and deployed
              multiple projects, ensuring they met client needs while mentoring
              new team members to maintain coding standards.
            </p>
            <p>
              Earlier in my career at <b>Cerenimbus Inc.</b>, I modified
              existing software to improve performance and consulted with
              clients on project status and technical issues.
            </p>
            <p>
              Today, as a <em>software developer</em> and <em>mentor</em>, I
              continue to assist students with their capstone projects while
              innovating solutions at Arcanys. When I&apos;m not coding, you can
              find me playing badminton or exploring new opportunities to make a
              difference in the tech industry.
            </p>
          </div>
        </div>
        <div className="lg:pl-20">
          <ul role="list">
            <SocialLink href="#" icon={XIcon}>
              Follow on X
            </SocialLink>
            <SocialLink href="#" icon={InstagramIcon} className="mt-4">
              Follow on Instagram
            </SocialLink>
            <SocialLink href="#" icon={GitHubIcon} className="mt-4">
              Follow on GitHub
            </SocialLink>
            <SocialLink href="#" icon={LinkedInIcon} className="mt-4">
              Follow on LinkedIn
            </SocialLink>
            <SocialLink
              href="mailto:danielcatindoy@gmail.com"
              icon={MailIcon}
              className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40"
            >
              danielcatindoy@gmail.com
            </SocialLink>
          </ul>
        </div>
      </div>
    </Container>
  )
}
