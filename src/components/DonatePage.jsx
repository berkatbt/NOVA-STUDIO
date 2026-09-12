import { useState } from 'react'
import logoImg from '../assets/logo.png'
import { ArrowRightIcon, CheckIcon, ChatIcon, GamepadIcon } from './Icons'
import { ROX_URL } from '../data'

const tierCards = [
  {
    tag: 'COMMUNITY TIER',
    name: 'Supporter',
    price: 'R$ 250',
    sub: '/ Rp 45.000',
    description: 'Pondasi esensial untuk mendanai logistik harian dan bot server.',
    perks: [
      'Role Discord Khusus: @Hex-Supporter + Hex badge profil',
      'Nama tercatat abadi di Wall of Fame NOVA Web',
      'Akses channel rahasia #wip-showcase & sneak-peak asset',
    ],
    button: 'Pilih Tier Supporter',
    accent: 'text-blue-300',
    buttonClass: 'bg-[#1e293c] text-slate-100 hover:bg-slate-700',
  },
  {
    tag: 'STUDIO PRO',
    name: 'Pro Sponsor',
    price: 'R$ 1,500',
    sub: '/ Rp 275.000',
    description: 'Pemberdayaan substansial untuk hadiah Game Jam dan lisensi plugin.',
    perks: [
      'Semua perk Supporter Tier',
      'VIP Rank di Roblox Group resmi NOVA STUDIO',
      'Akses beta-tester eksklusif build game 7 hari sebelum rilis',
      'Hak suara voting tema Game Jam & kurasi modul open-source',
      'Akses repositori Luau UI & modular framework pack gratis',
    ],
    button: 'Pilih Pro Sponsor',
    accent: 'text-cyan-300',
    recommended: true,
    buttonClass: 'bg-blue-500 text-white shadow-[0_0_20px_rgba(77,142,255,0.4)] hover:bg-cyan-400',
  },
  {
    tag: 'ELITE PATRON',
    name: 'Studio Angel',
    price: 'R$ 5,000',
    sub: '/ Rp 890.000',
    description: 'Penyokong utama ekosistem dengan dampak langsung pada regenerasi dev.',
    perks: [
      'Seluruh hak istimewa Pro Sponsor',
      'Pencantuman nama / logo di Opening Splash Screen setiap game resmi Nova',
      'Akses private Discord Lounge langsung dengan Core Architects',
      'Holographic Digital Supporter Certificate',
    ],
    button: 'Dukung Sebagai Patron',
    accent: 'text-violet-300',
    buttonClass: 'bg-[#1e293c] text-slate-100 hover:bg-slate-700',
  },
]

const transparencyItems = [
  { label: 'Prize Pool & Game Jam', value: '50%', color: 'text-blue-300', bar: 'w-1/2 bg-blue-400', icon: 'emoji_events' },
  { label: 'Cloud & CI/CD Tooling', value: '25%', color: 'text-cyan-300', bar: 'w-1/4 bg-cyan-400', icon: 'dns' },
  { label: 'PBR Assets & Texture Packs', value: '15%', color: 'text-violet-300', bar: 'w-[15%] bg-violet-400', icon: 'view_in_ar' },
  { label: 'Community Events & Ops', value: '10%', color: 'text-sky-200', bar: 'w-[10%] bg-sky-300', icon: 'groups' },
]

const faqs = [
  'Bagaimana cara kerja donasi melalui Roblox Gamepass?',
  'Kapan role Discord dan rank Roblox Group saya aktif?',
  'Apakah developer muda bisa mengajukan proposal grant ke dana ini?',
  'Apakah ada opsi donasi langsung melalui Rupiah / QRIS?',
]

const impactCards = [
  {
    title: 'CyberVanguard 2099',
    subtitle: 'GAME JAM S2 WINNER',
    text: 'Dibuat dalam 48 jam oleh 3 developer pemula dengan hibah aset R$ 50,000.',
    metric: '120k+ Kunjungan Roblox',
    accentClass: 'from-blue-500/20 to-cyan-500/10',
  },
  {
    title: 'NovaECS Engine Architecture',
    subtitle: 'OPEN-SOURCE CORE',
    text: 'Framework Luau gratis open-source untuk performa 60 FPS di perangkat mobile.',
    metric: '1,400+ Developer Installs',
    accentClass: 'from-cyan-500/20 to-blue-500/10',
  },
  {
    title: 'Bootcamp Luau & Blender 3D',
    subtitle: 'COMMUNITY WORKSHOP',
    text: '4 seri kelas live interaktif membimbing 450+ kreator pemula secara 100% gratis.',
    metric: '450+ Alumnus Terlatih',
    accentClass: 'from-violet-500/20 to-cyan-500/10',
  },
]

export default function DonatePage({ onBack }) {
  const [selectedAmount, setSelectedAmount] = useState('500')

  return (
    <div className="min-h-screen bg-[#040d1a] font-sans text-slate-200">
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute left-1/2 top-[-12%] h-[420px] w-[760px] -translate-x-1/2 rounded-full bg-blue-500/10 blur-[140px]" />
        <div className="absolute right-[-10%] top-[35%] h-[280px] w-[520px] rounded-full bg-cyan-400/8 blur-[120px]" />
        <div className="absolute inset-0 opacity-50 [background-image:radial-gradient(rgba(255,255,255,0.04)_1px,transparent_1px)] [background-size:34px_34px]" />
      </div>

      <div className="relative z-20 mx-auto max-w-6xl px-4 pt-5 sm:px-6 lg:px-8">
        <button
          type="button"
          onClick={onBack}
          className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-slate-900/70 px-3 py-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-200 backdrop-blur-md transition hover:border-blue-400/40 hover:text-white"
        >
          <span className="material-symbols-outlined text-base text-cyan-300">arrow_back</span>
          Kembali
        </button>
      </div>

      <main className="relative z-10 w-full pt-6 sm:pt-8">
        <section className="mx-auto max-w-6xl px-4 pb-6 pt-6 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-blue-400/20 bg-slate-900/60 px-3 py-1.5 text-[9px] font-semibold uppercase tracking-[0.28em] text-cyan-300 backdrop-blur-md shadow-[0_0_18px_rgba(59,130,246,0.12)]">
              <span className="h-1.5 w-1.5 rounded-full bg-cyan-300 shadow-[0_0_8px_#7bd0ff]" />
              FUEL THE METAVERSE // CREATOR BACKING FUND
            </div>

            <div className="mb-4 flex items-center justify-center">
              <div className="rounded-full border border-blue-400/20 bg-slate-900/70 p-3 shadow-[0_0_22px_rgba(59,130,246,0.18)] backdrop-blur-md">
                <img src={logoImg} alt="NOVA Studio" className="h-9 w-9 rounded-full object-contain drop-shadow-[0_0_14px_rgba(59,130,246,0.4)]" />
              </div>
            </div>

            <h1 className="mx-auto max-w-4xl text-[26px] font-extrabold uppercase leading-[1.05] tracking-[-0.04em] text-white sm:text-[38px] lg:text-[58px]">
              Back the next wave of <span className="bg-gradient-to-r from-blue-300 via-cyan-300 to-violet-300 bg-clip-text text-transparent">creative builders</span>
            </h1>

            <p className="mx-auto mt-4 max-w-3xl text-sm leading-relaxed text-slate-300/80 sm:text-base">
              Setiap kontribusi langsung mendanai Robux Developer Grants, hadiah 48-Hour Game Jam, server riset open-source Luau, dan mentorship intensif tanpa biaya bagi kreator game Roblox generasi baru.
            </p>

            <div className="mt-7 flex flex-wrap items-center justify-center gap-3 text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-300/80">
              {['Open-source support', 'Game jam funding', 'Creator mentorship'].map((item) => (
                <span key={item} className="rounded-full border border-white/10 bg-slate-900/60 px-3 py-2 backdrop-blur-md">
                  {item}
                </span>
              ))}
            </div>

            <div className="mt-7 grid gap-3 sm:grid-cols-3">
              {[
                { value: 'R$ 425K', label: 'Dana Terkumpul' },
                { value: '450+', label: 'Creator Terbangun' },
                { value: '12 Hari', label: 'Sisa Kampanye' },
              ].map((stat) => (
                <div key={stat.label} className="rounded-2xl border border-blue-400/15 bg-slate-900/60 px-4 py-3 shadow-[0_0_18px_rgba(59,130,246,0.08)] backdrop-blur-md transition duration-300 hover:-translate-y-0.5 hover:border-cyan-400/30">
                  <div className="text-xl font-extrabold text-white sm:text-2xl">{stat.value}</div>
                  <div className="mt-1 text-[9px] font-semibold uppercase tracking-[0.22em] text-slate-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="mx-auto mt-8 max-w-5xl rounded-2xl border border-blue-400/15 bg-gradient-to-br from-[#0c1627]/95 via-[#0c1627]/90 to-[#0b1321]/95 p-4 shadow-[0_15px_40px_rgba(2,6,23,0.7)] backdrop-blur-xl sm:p-5">
            <div className="mb-3 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
              <div>
                <div className="text-[9px] font-semibold uppercase tracking-[0.28em] text-cyan-300">Target Pendanaan Season 3 Jam</div>
                <div className="mt-2 flex items-baseline gap-2">
                  <span className="text-[26px] font-extrabold text-white sm:text-[36px]">R$ 425,000</span>
                  <span className="text-sm text-slate-300/80">/ R$ 500,000 Target</span>
                </div>
              </div>

              <div className="flex items-center gap-4 rounded-lg border border-white/5 bg-slate-800/60 px-3 py-2">
                <div>
                  <div className="text-[8px] font-semibold uppercase tracking-[0.2em] text-slate-400">Backers</div>
                  <div className="text-xl font-bold text-white">128</div>
                </div>
                <div className="h-8 w-px bg-slate-600" />
                <div>
                  <div className="text-[8px] font-semibold uppercase tracking-[0.2em] text-slate-400">Sisa Waktu</div>
                  <div className="text-xl font-bold text-cyan-300">12 Hari</div>
                </div>
              </div>
            </div>

            <div className="h-3 overflow-hidden rounded-full bg-slate-700 p-[2px]">
              <div className="h-full w-[85%] rounded-full bg-gradient-to-r from-blue-400 via-cyan-400 to-cyan-300 shadow-[0_0_16px_rgba(123,208,255,0.7)]" />
            </div>
            <div className="mt-2 flex flex-col justify-between gap-1 text-[11px] text-slate-300/80 sm:flex-row">
              <span className="flex items-center gap-2 text-cyan-300">
                <span className="material-symbols-outlined text-[14px]">bolt</span>
                85% Target Terpenuhi
              </span>
              <span className="text-slate-400">Kebutuhan sisa: R$ 75,000 untuk 1st Place Pool</span>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-4 py-6 sm:px-6 lg:px-8">
          <div className="mb-5 text-center">
            <div className="text-[9px] font-semibold uppercase tracking-[0.3em] text-blue-300">Membership Tiers</div>
            <h2 className="mt-2 text-[24px] font-bold text-white sm:text-[32px]">Pilih Level Dukungan Kreatif</h2>
            <p className="mx-auto mt-2 max-w-2xl text-sm text-slate-300/70">
              Dukungan fleksibel melalui Roblox Gamepass resmi, Rupiah (QRIS/Saweria), atau kartu internasional.
            </p>
          </div>

          <div className="grid gap-4 lg:grid-cols-3">
            {tierCards.map((tier) => (
              <div
                key={tier.name}
                className={`relative rounded-2xl border border-white/10 bg-[#0d1728]/80 p-4 shadow-[0_8px_24px_rgba(0,0,0,0.35)] transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/25 ${tier.recommended ? 'ring-1 ring-cyan-400/30 shadow-[0_0_30px_rgba(77,142,255,0.18)]' : ''}`}
              >
                {tier.recommended && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400 px-2.5 py-1 text-[8px] font-bold uppercase tracking-[0.24em] text-slate-950">
                    Recommended Tier
                  </div>
                )}

                <div className="mb-4 flex items-center justify-between">
                  <span className="rounded-full bg-blue-500/10 px-2 py-1 text-[8px] font-semibold uppercase tracking-[0.22em] text-cyan-300">
                    {tier.tag}
                  </span>
                  <span className={`material-symbols-outlined text-2xl ${tier.accent}`}>
                    {tier.name === 'Supporter' ? 'token' : tier.name === 'Pro Sponsor' ? 'star' : 'military_tech'}
                  </span>
                </div>

                <h3 className="text-[18px] font-bold text-white">{tier.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-300/70">{tier.description}</p>
                <div className="mt-4 flex items-baseline gap-2">
                  <span className="text-[28px] font-extrabold text-white">{tier.price}</span>
                  <span className="text-sm text-slate-400">{tier.sub}</span>
                </div>

                <div className="mt-4 space-y-2.5">
                  {tier.perks.map((perk) => (
                    <div key={perk} className="flex items-start gap-2 text-sm text-slate-200/80">
                      <span className="material-symbols-outlined mt-0.5 text-base text-cyan-300">check_circle</span>
                      <span>{perk}</span>
                    </div>
                  ))}
                </div>

                <a href="#payment-custom" className={`mt-5 inline-flex w-full items-center justify-center gap-2 rounded-xl px-4 py-2.5 text-xs font-semibold uppercase tracking-[0.12em] transition-all duration-300 ${tier.buttonClass}`}>
                  <span>{tier.button}</span>
                  <ArrowRightIcon className="h-3.5 w-3.5" />
                </a>
              </div>
            ))}
          </div>

          <div id="payment-custom" className="mt-8 rounded-2xl border border-blue-400/15 bg-gradient-to-r from-[#0d1728]/95 via-[#101d31]/90 to-[#0c1627]/90 p-4 shadow-[0_12px_28px_rgba(0,0,0,0.38)] ring-1 ring-white/5 sm:p-5">
            <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-md">
                <div className="text-[9px] font-semibold uppercase tracking-[0.28em] text-cyan-300">Custom Backing Engine</div>
                <h3 className="mt-2 text-[20px] font-bold text-white">Donasi Fleksibel &amp; Nominal Bebas</h3>
                <p className="mt-2 text-sm text-slate-300/70">
                  Ingin berkontribusi dengan nominal lain? Pilih cepat atau masukkan jumlah Robux/IDR kustom yang Anda inginkan.
                </p>
              </div>

              <div className="w-full max-w-2xl">
                <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
                  {['100', '500', '1000', '2500'].map((amount) => (
                    <button
                      key={amount}
                      type="button"
                      onClick={() => setSelectedAmount(amount)}
                      className={`rounded-lg px-3 py-2 text-sm font-semibold transition ${selectedAmount === amount ? 'bg-blue-500 text-white shadow-[0_0_20px_rgba(102,153,255,0.5)]' : 'bg-slate-800 text-slate-200 hover:bg-slate-700'}`}
                    >
                      R$ {Number(amount).toLocaleString('id-ID')}
                    </button>
                  ))}
                </div>

                <div className="mt-4 flex flex-col gap-3 sm:flex-row">
                  <div className="relative w-full">
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-xl font-extrabold text-blue-300">R$</span>
                    <input
                      type="number"
                      value={selectedAmount}
                      onChange={(event) => setSelectedAmount(event.target.value || '0')}
                      className="w-full rounded-lg border border-white/10 bg-slate-950/80 py-2.5 pl-10 pr-3 text-lg font-semibold text-white outline-none ring-0 placeholder:text-slate-500 focus:border-blue-400"
                      placeholder="Nominal Lain (Min. 50)"
                    />
                  </div>

                  <a href={ROX_URL} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 rounded-lg bg-blue-500 px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.12em] text-white shadow-[0_0_20px_rgba(77,142,255,0.4)] transition hover:bg-cyan-400">
                    <span className="material-symbols-outlined text-base">shopping_cart_checkout</span>
                    Checkout Gamepass
                  </a>
                </div>

                <div className="mt-3 flex flex-wrap items-center gap-2 text-[8px] font-semibold uppercase tracking-[0.12em] text-slate-400">
                  <span>Metode Terverifikasi:</span>
                  {['Roblox Gamepass Pass', 'QRIS / GoPay / OVO', 'Saweria', 'Stripe / Card'].map((item) => (
                    <span key={item} className="rounded bg-slate-800 px-2 py-1 text-slate-300">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-4 py-6 sm:px-6 lg:px-8">
          <div className="mb-5 text-center">
            <div className="text-[9px] font-semibold uppercase tracking-[0.3em] text-cyan-300">Allocation Telemetry</div>
            <h2 className="mt-2 text-[24px] font-bold text-white sm:text-[32px]">Transparansi Penggunaan Dana 100%</h2>
            <p className="mx-auto mt-2 max-w-2xl text-sm text-slate-300/70">
              Seluruh donasi yang diterima diaudit berkala dan disalurkan secara transparan untuk memajukan ekosistem pengembang di komunitas kami.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {transparencyItems.map((item) => (
              <div key={item.label} className="rounded-xl border border-white/10 bg-[#0d1728]/80 p-4 transition hover:bg-[#111d31]">
                <div className="mb-4 flex items-center justify-between">
                  <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-slate-800 text-cyan-300">
                    <span className="material-symbols-outlined text-[24px]">{item.icon}</span>
                  </div>
                  <span className={`text-[32px] font-extrabold ${item.color}`}>{item.value}</span>
                </div>
                <h3 className="text-base font-bold text-white">{item.label}</h3>
                <div className="mt-4 h-2 w-full overflow-hidden rounded-full bg-slate-700">
                  <div className={`h-full rounded-full ${item.bar}`} />
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-4 py-6 sm:px-6 lg:px-8">
          <div className="rounded-xl border border-white/10 bg-[#07111d]/80 p-4 sm:p-5">
            <div className="mb-4 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
              <div>
                <div className="flex items-center gap-2 text-[9px] font-semibold uppercase tracking-[0.28em] text-cyan-300">
                  <span className="h-1.5 w-1.5 rounded-full bg-cyan-300 shadow-[0_0_8px_#7bd0ff]" />
                  Live Wall of Fame
                </div>
                <h3 className="mt-2 text-[20px] font-bold text-white">Donatur &amp; Pendukung Terbaru</h3>
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-400">
                Real-time sync
                <span className="material-symbols-outlined text-cyan-300">sync</span>
              </div>
            </div>

            <div className="grid gap-3 md:grid-cols-3">
              {[
                { name: 'Vortex_Dev', amount: 'R$ 2,500', tag: 'PRO SPONSOR', quote: 'Maju terus ekosistem Roblox ID! Ditunggu Game Jam bulan depan!', color: 'text-blue-300' },
                { name: 'Kaelen3D', amount: 'R$ 500', tag: 'SUPPORTER', quote: 'Kecil-kecilan buat server Luau CI/CD Nova. Semangat mentor-mentor!', color: 'text-cyan-300' },
                { name: 'AetherScript', amount: 'R$ 1,500', tag: 'PRO SPONSOR', quote: 'Support open-source framework luau. Sangat ngebantu buat game solo dev.', color: 'text-violet-300' },
              ].map((backer) => (
                <div key={backer.name} className="rounded-lg border border-white/10 bg-[#0b1726]/80 p-3">
                  <div className="mb-3 flex items-center justify-between gap-2">
                    <div className="flex items-center gap-3">
                      <div className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-800 text-cyan-300">
                        <span className="material-symbols-outlined text-lg">smart_toy</span>
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-white">{backer.name}</div>
                        <div className="text-[8px] font-semibold uppercase tracking-[0.2em] text-slate-400">{backer.tag}</div>
                      </div>
                    </div>
                    <span className={`text-lg font-extrabold ${backer.color}`}>{backer.amount}</span>
                  </div>
                  <p className="rounded bg-slate-950/60 p-2 text-xs italic leading-relaxed text-slate-300/80">“{backer.quote}”</p>
                  <div className="mt-2 text-right text-[9px] text-slate-500">30 menit lalu</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-4 py-6 sm:px-6 lg:px-8">
          <div className="mb-5 flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
            <div>
              <div className="text-[9px] font-semibold uppercase tracking-[0.3em] text-blue-300">Proven Impact</div>
              <h3 className="mt-2 text-[24px] font-bold text-white sm:text-[30px]">Hasil Nyata Dana Komunitas</h3>
            </div>
            <p className="max-w-xl text-sm text-slate-300/70">
              Setiap Robux diinvestasikan kembali ke game kreasi talenta muda yang berhasil dipublikasikan di platform Roblox global.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {impactCards.map((card) => (
              <div key={card.title} className="overflow-hidden rounded-xl border border-white/10 bg-[#0d1728]/80">
                <div className={`h-36 bg-gradient-to-br ${card.accentClass}`} />
                <div className="p-4">
                  <div className="mb-2 text-[8px] font-semibold uppercase tracking-[0.2em] text-cyan-300">{card.subtitle}</div>
                  <h4 className="text-lg font-bold text-white">{card.title}</h4>
                  <p className="mt-2 text-sm leading-relaxed text-slate-300/70">{card.text}</p>
                  <div className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-blue-300">
                    <span className="material-symbols-outlined text-base">visibility</span>
                    {card.metric}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-4xl px-4 py-6 sm:px-6 lg:px-8">
          <div className="mb-4 text-center">
            <div className="text-[9px] font-semibold uppercase tracking-[0.3em] text-cyan-300">FAQ &amp; Verification</div>
            <h3 className="mt-2 text-[24px] font-bold text-white sm:text-[30px]">Pertanyaan yang Sering Diajukan</h3>
          </div>

          <div className="space-y-2.5">
            {faqs.map((faq, index) => (
              <details key={faq} className="group rounded-xl border border-white/10 bg-[#0d1728]/80 p-3 text-slate-200" open={index === 0}>
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-left text-base font-semibold text-white">
                  <span>{faq}</span>
                  <span className="material-symbols-outlined text-xl text-blue-300 transition group-open:rotate-180">expand_more</span>
                </summary>
                <p className="mt-2 text-sm leading-relaxed text-slate-300/75">
                  {index === 0 && 'Anda cukup memilih tier atau nominal kustom di atas, klik tombol checkout Gamepass, dan selesaikan transaksi resmi di Roblox Store NOVA STUDIO. Bot audit kami mendeteksi inventaris akun Anda secara otomatis.'}
                  {index === 1 && 'Setelah pembelian, kunjungi channel #claim-donator di Discord Hub NOVA STUDIO dan jalankan perintah /verify. Bot akan memvalidasi inventaris Anda dalam waktu kurang dari 60 detik.'}
                  {index === 2 && 'Tentu saja! Setiap kuartal kami membuka pendaftaran NOVA Creator Micro-Grants. Developer dengan prototipe game yang fungsional berhak menerima alokasi pendanaan mulai dari R$ 20,000 hingga R$ 100,000 serta pendampingan teknis.'}
                  {index === 3 && 'Ya. Untuk kreator di Indonesia, Anda dapat menggunakan tautan Saweria resmi NOVA STUDIO yang terintegrasi dengan QRIS, GoPay, OVO, Dana, dan transfer bank. Nilai kontribusi akan dikonversi setara Robux pool secara otomatis.'}
                </p>
              </details>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-4 py-6 pb-14 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-r from-slate-900 via-slate-900 to-slate-800 p-6 text-center shadow-[0_0_40px_rgba(59,130,246,0.2)] sm:p-8">
            <div className="absolute -top-32 left-1/2 h-64 w-[600px] -translate-x-1/2 rounded-full bg-blue-500/15 blur-[100px]" />
            <div className="relative z-10">
              <img src={logoImg} alt="NOVA STUDIO" className="mx-auto mb-4 h-8 w-8 object-contain drop-shadow-[0_0_14px_rgba(120,210,255,0.8)]" />
              <h2 className="mx-auto max-w-2xl text-[24px] font-extrabold leading-tight text-white sm:text-[32px]">
                Bantu Ciptakan Game Roblox Impian Bersama NOVA STUDIO
              </h2>
              <p className="mx-auto mt-3 max-w-xl text-sm text-slate-300/75 sm:text-base">
                Dukungan Anda menggerakkan puluhan developer independen berprestasi. Transparansi penuh diaudit di Roblox group log dan Discord terbuka.
              </p>
              <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <a href={ROX_URL} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 rounded-full bg-blue-500 px-6 py-3 text-xs font-bold uppercase tracking-[0.12em] text-white shadow-[0_0_25px_rgba(77,142,255,0.5)] transition hover:bg-cyan-400">
                  <GamepadIcon className="h-4 w-4" />
                  Beli Gamepass Donasi di Roblox
                </a>
                <a href="https://discord.gg/JbCRH4jyqR" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 rounded-full bg-slate-800 px-6 py-3 text-xs font-bold uppercase tracking-[0.12em] text-white transition hover:bg-slate-700">
                  <ChatIcon className="h-4 w-4" />
                  Konfirmasi di Discord Hub
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="relative z-10 border-t border-white/5 bg-[#040d1a]/90 py-8 text-center backdrop-blur-md">
        <div className="mx-auto flex max-w-5xl flex-col items-center gap-4 px-4">
          <div className="flex items-center gap-3">
            <img src={logoImg} alt="NOVA STUDIO" className="h-5 w-auto opacity-80" />
            <span className="text-[10px] font-extrabold uppercase tracking-[0.25em] text-slate-300">NOVA STUDIO</span>
          </div>

          <nav className="flex flex-wrap items-center justify-center gap-4 text-[9px] uppercase tracking-[0.2em] text-slate-400">
            <a href="#" className="hover:text-blue-300">Roblox Group</a>
            <a href="#" className="hover:text-blue-300">Discord Hub</a>
            <a href="#" className="hover:text-blue-300">Community Feed</a>
            <a href="#" className="hover:text-blue-300">Developer Streams</a>
            <a href="#" className="hover:text-blue-300">Community Guidelines</a>
          </nav>

          <div className="text-xs text-slate-500">
            © 2025 NOVA STUDIO. Empowering next-generation Roblox creators.
          </div>
        </div>
      </footer>
    </div>
  )
}
