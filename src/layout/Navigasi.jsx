import { useState } from 'react'
import logoImg from '../assets/logo.png'
import { GamepadIcon, ChatIcon, UserIcon } from '../components/Icons'
import { navLinks } from '../data'

export default function Navigasi({ onHome, onDonate, view = 'home' }) {
  const [menuOpen, setMenuOpen] = useState(false)

  const isDonateView = view === 'donate'

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/5 bg-void/85 backdrop-blur-md">
      <nav className="mx-auto flex h-[72px] max-w-7xl items-center justify-between gap-6 px-5 sm:px-8">
        <button type="button" onClick={onHome} className="flex shrink-0 items-center gap-3 text-left">
          <img
            src={logoImg}
            alt="NOVA STUDIO logo"
            className="h-10 w-auto drop-shadow-[0_0_14px_rgba(59,130,246,0.55)]"
          />
          <span className="leading-tight">
            <span className="block text-sm font-extrabold tracking-wide text-white">
              NOVA STUDIO
            </span>
            <span className="block text-[10px] font-medium uppercase tracking-[0.3em] text-slate-400">
              • Roblox Creators
            </span>
          </span>
        </button>

        <div className="hidden items-center gap-7 lg:flex">
          {navLinks.map((link) =>
            link.label === 'Donate' ? (
              <button
                key={link.label}
                type="button"
                onClick={onDonate}
                className={`text-sm font-medium transition-colors duration-300 ${isDonateView ? 'text-white' : 'text-slate-400 hover:text-white'
                  }`}
              >
                {link.label}
              </button>
            ) : (
              <a
                key={link.label}
                href={link.href}
                className={`text-sm font-medium transition-colors duration-300 ${link.href === '#features' && !isDonateView ? 'text-white' : 'text-slate-400 hover:text-white'
                  }`}
              >
                {link.label}
              </a>
            )
          )}
        </div>

        <div className="flex items-center gap-3 sm:gap-5">
          <a
            href="https://discord.gg/JbCRH4jyqR"
            target="_blank"
            rel="noreferrer"
            className="hidden text-sm font-medium text-slate-300 transition-colors duration-300 hover:text-white xl:block"
          >
            Discord
          </a>
          <div className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-400">
            <UserIcon className="h-4 w-4" />
          </div>

          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            className="rounded-md p-1.5 text-slate-200 transition-colors duration-300 hover:text-blue-400 lg:hidden"
          >
            {menuOpen ? (
              <svg
                className="h-6 w-6"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                aria-hidden="true"
              >
                <path d="M18 6 6 18" />
                <path d="m6 6 12 12" />
              </svg>
            ) : (
              <svg
                className="h-6 w-6"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                aria-hidden="true"
              >
                <path d="M4 6h16" />
                <path d="M4 12h16" />
                <path d="M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </nav>

      {menuOpen && (
        <div className="border-t border-white/5 bg-void/95 backdrop-blur-md lg:hidden">
          <div className="flex flex-col gap-2 px-4 py-3">
            {navLinks.map((link) =>
              link.label === 'Donate' ? (
                <button
                  key={link.label}
                  type="button"
                  onClick={() => {
                    onDonate()
                    setMenuOpen(false)
                  }}
                  className="block w-full rounded-md px-3 py-2 text-left text-sm font-medium text-slate-200 transition-colors duration-200 hover:bg-white/5 hover:text-blue-400"
                >
                  {link.label}
                </button>
              ) : (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="block w-full rounded-md px-3 py-2 text-sm font-medium text-slate-200 transition-colors duration-200 hover:bg-white/5 hover:text-blue-400"
                >
                  {link.label}
                </a>
              )
            )}
            <a
              href="https://discord.gg/JbCRH4jyqR"
              target="_blank"
              rel="noreferrer"
              onClick={() => setMenuOpen(false)}
              className="mt-2 inline-flex w-full items-center justify-center gap-2 rounded-md bg-black/30 px-4 py-2 text-sm font-semibold text-white transition-colors duration-200 hover:bg-black/50"
            >
              <ChatIcon className="h-4 w-4" />
              Join Discord
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
