import { useState } from 'react'
import heroImg from '../assets/hero.png'
import logoImg from '../assets/logo.png'
import bannerImg from '../assets/banner.png'
import {
  GamepadIcon,
  ChatIcon,
  PenIcon,
  NetworkIcon,
  TrophyIcon,
  ChartIcon,
  UsersIcon,
  CheckIcon,
  ChevronDownIcon,
  ArrowRightIcon,
} from './Icons'
import Badge from './Badge'
import DonatePage from './DonatePage'
import Navigasi from '../layout/Navigasi'
import { ROX_URL, stats, capabilities, missionBullets, showcaseItems, footerLinks } from '../data'

function App() {
  const [view, setView] = useState('home')

  return (
    <div className="min-h-screen bg-void font-sans text-slate-300">
      {view === 'home' && <Navigasi onHome={() => setView('home')} onDonate={() => setView('donate')} view={view} />}

      {view === 'donate' && <DonatePage onBack={() => setView('home')} />}

      {view === 'home' && (
        <>
          <section id="home" className="relative overflow-hidden">
            <img
              src={heroImg}
              alt=""
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 h-full w-full object-contain opacity-50"
            />
            <div className="absolute inset-0 bg-black/40" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_55%_48%_at_50%_50%,rgba(11,15,26,0.5),transparent_72%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_38%,rgba(37,99,235,0.2),transparent_70%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_45%_28%_at_50%_0%,rgba(59,130,246,0.14),transparent_70%)]" />
            <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-b from-transparent to-void" />

            <div className="relative z-10 mx-auto flex min-h-screen max-w-4xl flex-col items-center justify-center px-6 pb-16 pt-24 text-center sm:pt-32">
              <div className="animate-fade-up">
                <Badge>Meta-Engineering Hub</Badge>
              </div>
              <h1 className="animate-fade-up mt-8 text-4xl font-extrabold tracking-tight text-blue-400 sm:text-5xl md:text-7xl [animation-delay:200ms]">
                NOVA<span className="text-white">STUDIO</span> <br className="hidden sm:block" />
                ROBLOX LEGACY
              </h1>
              <div className="animate-fade-up mt-10 flex flex-col items-center gap-4 sm:flex-row [animation-delay:500ms]">
                <a
                  href={ROX_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex w-full items-center justify-center gap-2.5 rounded-xl bg-blue-600 px-8 py-4 text-sm font-semibold text-white shadow-[0_0_30px_rgba(59,130,246,0.45)] transition-all duration-300 hover:scale-[1.03] hover:bg-blue-500 hover:shadow-[0_0_45px_rgba(59,130,246,0.7)] sm:w-auto"
                >
                  <GamepadIcon />
                  Join Roblox
                </a>
                <button
                  type="button"
                  onClick={() => setView('donate')}
                  className="inline-flex w-full items-center justify-center gap-2.5 rounded-xl border border-white/10 bg-white/5 px-8 py-4 text-sm font-semibold text-slate-200 backdrop-blur-sm transition-all duration-300 hover:scale-[1.03] hover:border-blue-400/40 hover:text-white sm:w-auto"
                >
                  Donate
                  <ChevronDownIcon />
                </button>
              </div>
            </div>

            <div className="relative z-10 mx-auto max-w-6xl px-6 pb-24">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded-2xl border border-white/[0.06] bg-[#0e1424]/80 p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-400/30 hover:shadow-[0_0_30px_rgba(59,130,246,0.15)]"
                  >
                    <p className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">{stat.value}</p>
                    <p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.25em] text-slate-500">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section id="features" className="relative scroll-mt-20 py-24 sm:py-32">
            <div className="pointer-events-none absolute inset-x-0 top-24 mx-auto h-72 max-w-3xl rounded-full bg-blue-600/10 blur-[120px]" />
            <div className="relative z-10 mx-auto max-w-6xl px-5 sm:px-8">
              <div className="mb-12 text-center">
                <Badge>Core capabilities</Badge>
                <h2 className="mt-6 text-3xl font-extrabold tracking-tight text-white sm:text-5xl">
                  Build worlds. Lead teams. Scale stories.
                </h2>
              </div>
              <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
                {capabilities.map(({ title, text, link, icon: Icon }) => (
                  <div
                    key={title}
                    className="group flex h-full flex-col rounded-3xl border border-white/5 bg-[#0d1628]/80 p-6 shadow-[0_0_24px_rgba(15,23,42,0.35)] transition-all duration-300 hover:-translate-y-1 hover:border-blue-400/30 hover:shadow-[0_0_35px_rgba(59,130,246,0.18)]"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-500/10 text-blue-300 ring-1 ring-blue-400/20">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="mt-6 text-xl font-bold text-white">{title}</h3>
                    <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-400">{text}</p>
                    <a href="#" className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-blue-300 transition-colors duration-300 hover:text-cyan-300">
                      {link}
                      <ArrowRightIcon />
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section id="about" className="scroll-mt-20 py-24 sm:py-28">
            <div className="mx-auto grid max-w-6xl gap-10 px-5 md:grid-cols-[1.05fr_0.95fr] md:items-center sm:px-8">
              <div>
                <Badge>Our mission</Badge>
                <h2 className="mt-6 text-3xl font-extrabold tracking-tight text-white sm:text-5xl">
                  We turn raw creator energy into launch-ready experiences.
                </h2>
                <p className="mt-5 max-w-xl text-base leading-relaxed text-slate-400">
                  NOVA STUDIO is a collaborative Roblox ecosystem built for ambitious creators, designers, and game operators who want to ship faster, build smarter, and grow stronger communities.
                </p>
                <ul className="mt-8 space-y-4">
                  {missionBullets.map((bullet) => (
                    <li key={bullet} className="flex items-start gap-3 text-slate-300">
                      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-blue-500/15 text-blue-300 ring-1 ring-blue-400/25">
                        <CheckIcon className="h-3 w-3" />
                      </span>
                      <span className="text-sm leading-relaxed text-slate-300">{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-[30px] border border-white/5 bg-[#0d1628]/80 p-5 shadow-[0_0_30px_rgba(15,23,42,0.45)] sm:p-8">
                <div className="overflow-hidden rounded-[24px] border border-white/5 bg-[#0a1019]">
                  <img src={bannerImg} alt="NOVA STUDIO showcase" className="h-full w-full object-cover" />
                </div>
                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  <div className="rounded-2xl border border-white/5 bg-white/5 p-4">
                    <p className="text-2xl font-extrabold text-white">3x</p>
                    <p className="mt-2 text-sm text-slate-400">Faster prototype iteration with reusable tooling.</p>
                  </div>
                  <div className="rounded-2xl border border-white/5 bg-white/5 p-4">
                    <p className="text-2xl font-extrabold text-white">12+</p>
                    <p className="mt-2 text-sm text-slate-400">Creator programs launched across the ecosystem.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section id="showcase" className="scroll-mt-20 py-24 sm:py-28">
            <div className="mx-auto max-w-6xl px-5 sm:px-8">
              <div className="mb-12 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
                <div>
                  <Badge>Showcase</Badge>
                  <h2 className="mt-5 text-3xl font-extrabold tracking-tight text-white sm:text-5xl">
                    Featured worlds and live builds.
                  </h2>
                </div>
                <a href={ROX_URL} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sm font-semibold text-blue-300 transition-colors duration-300 hover:text-cyan-300">
                  Open Roblox showcase
                  <ArrowRightIcon className="h-4 w-4" />
                </a>
              </div>
              <div className="grid gap-6 lg:grid-cols-3">
                {showcaseItems.map((item) => (
                  <article
                    key={item.title}
                    className="group overflow-hidden rounded-[28px] border border-white/5 bg-[#0d1628]/80 shadow-[0_0_24px_rgba(15,23,42,0.35)] transition-all duration-300 hover:-translate-y-1 hover:border-blue-400/20 hover:shadow-[0_0_40px_rgba(59,130,246,0.15)]"
                  >
                    <div className="h-56 overflow-hidden border-b border-white/5 bg-slate-900">
                      <img src={bannerImg} alt={item.title} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]" />
                    </div>
                    <div className="p-6">
                      <div className="flex items-center justify-between gap-3">
                        <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-blue-300">{item.tag}</p>
                        <span className="rounded-full border border-white/10 bg-white/5 px-2 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-slate-300">{item.stat}</span>
                      </div>
                      <h3 className="mt-4 text-2xl font-bold text-white">{item.title}</h3>
                      <p className="mt-3 text-sm leading-relaxed text-slate-400">{item.text}</p>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </section>

          <section id="join" className="scroll-mt-20 py-24 sm:py-28">
            <div className="mx-auto max-w-6xl px-5 sm:px-8">
              <div className="mb-12 text-center">
                <Badge>Community</Badge>
                <h2 className="mt-5 text-3xl font-extrabold tracking-tight text-white sm:text-5xl">
                  Join a network of creators shaping the next wave of Roblox experiences.
                </h2>
              </div>
              <div className="grid gap-5 lg:grid-cols-3">
                <div className="rounded-[28px] border border-white/5 bg-[#0d1628]/80 p-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-500/10 text-blue-300 ring-1 ring-blue-400/20">
                    <UsersIcon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-6 text-xl font-bold text-white">Creative Community</h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-400">Meet designers, coders, builders, and storytellers collaborating on high-impact, player-first ideas.</p>
                </div>
                <div className="rounded-[28px] border border-white/5 bg-[#0d1628]/80 p-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-500/10 text-blue-300 ring-1 ring-blue-400/20">
                    <TrophyIcon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-6 text-xl font-bold text-white">Event-Driven Growth</h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-400">Participate in contests, community sprints, and launch events that sharpen your production and branding skills.</p>
                </div>
                <div className="rounded-[28px] border border-white/5 bg-[#0d1628]/80 p-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-500/10 text-blue-300 ring-1 ring-blue-400/20">
                    <ChatIcon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-6 text-xl font-bold text-white">Peer Feedback</h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-400">Get actionable insight from builders already shipping experiences, testing retention loops, and scaling communities.</p>
                </div>
              </div>
            </div>
          </section>

          <section className="pb-24 sm:pb-28">
            <div className="mx-auto max-w-6xl px-5 sm:px-8">
              <div className="rounded-[32px] border border-white/5 bg-[#0d1628]/80 p-8 shadow-[0_0_40px_rgba(15,23,42,0.35)] sm:p-10">
                <div className="max-w-3xl">
                  <Badge>Why creators choose us</Badge>
                  <h2 className="mt-6 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
                    The support system behind bold Roblox ideas.
                  </h2>
                </div>
                <div className="mt-8 grid gap-6 lg:grid-cols-3">
                  {[
                    { title: 'Fast ideation', text: 'Prototype quickly with tools and workflows designed for creator velocity.' },
                    { title: 'Built for scaling', text: 'Turn a small community into a clear growth engine with a sustainable roadmap.' },
                    { title: 'Creator-first culture', text: 'We prioritize playability, retention, and authentic player engagement over noise.' },
                  ].map(({ title, text }) => (
                    <div key={title} className="rounded-2xl border border-white/5 bg-white/5 p-5">
                      <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-blue-500/10 text-blue-300 ring-1 ring-blue-400/25">
                        <CheckIcon className="h-4 w-4" />
                      </div>
                      <h3 className="text-xl font-bold text-white">{title}</h3>
                      <p className="mt-3 text-sm leading-relaxed text-slate-400">{text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <footer className="border-t border-white/5 bg-[#0a1019]/80 py-10">
            <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-5 text-center sm:px-8 lg:flex-row lg:text-left">
              <div className="flex items-center gap-3">
                <img src={logoImg} alt="NOVA STUDIO logo" className="h-8 w-auto" />
                <span className="text-sm font-extrabold uppercase tracking-[0.2em] text-white">NOVA STUDIO</span>
              </div>
              <div className="flex flex-wrap items-center justify-center gap-5 text-[11px] font-medium uppercase tracking-[0.2em] text-slate-400 lg:justify-end">
                {footerLinks.map((item) => (
                  <a key={item} href="#" className="transition-colors duration-300 hover:text-white">
                    {item}
                  </a>
                ))}
              </div>
            </div>
          </footer>
        </>
      )}
    </div>
  )
}

export default App
