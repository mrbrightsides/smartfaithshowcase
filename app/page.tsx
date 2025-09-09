"use client";
import { ArrowRight, BookOpen, Landmark, Scale, Sparkles, Users, Wallet, Bot } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

// --- Simple shadcn/ui stand-ins --- //
const Card = ({ className = "", children }: any) => (
  <div className={`rounded-2xl border border-white/10 bg-white/5 shadow-sm ${className}`}>{children}</div>
);
const CardHeader = ({ children, className = "" }: any) => (
  <div className={`p-5 border-b border-white/10 ${className}`}>{children}</div>
);
const CardContent = ({ children, className = "" }: any) => (
  <div className={`p-5 ${className}`}>{children}</div>
);
const Button = ({ href, children, className = "", variant = "default" }: any) => {
  const base =
    "inline-flex items-center gap-2 rounded-xl px-4 py-2 text-sm font-medium transition hover:opacity-90";
  const styles =
    variant === "ghost"
      ? "bg-transparent border border-white/15"
      : "bg-white text-black";
  const Comp: any = href ? Link : "button";
  return (
    <Comp href={href} className={`${base} ${styles} ${className}`}>
      {children}
    </Comp>
  );
};

// --- Animations --- //
const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

// --- Data: 6 bots --- //
const BOTS = [
  {
    key: "fiqh",
    name: "FiqhBot",
    tagline: "Ibadah harian & fiqh praktis",
    icon: <Scale className="h-5 w-5" />,
    href: "https://my.artibot.ai/islamichat",
    bullets: ["Wudhu, shalat, puasa, zakat", "Jawaban ringkas + dalil"],
  },
  {
    key: "sirah",
    name: "SirahBot",
    tagline: "Kisah Nabi & sahabat (naratif)",
    icon: <BookOpen className="h-5 w-5" />,
    href: "https://tawk.to/chat/63f1709c4247f20fefe15b12/1gpjhvpnb",
    bullets: ["Storytelling hangat", "Hikmah singkat di akhir"],
  },
  {
    key: "tarikh",
    name: "TarikhBot",
    tagline: "Sejarah peradaban Islam",
    icon: <Landmark className="h-5 w-5" />,
    href: "https://www.chatbase.co/chatbot-iframe/Ho6CMtS7y0t5oM-Ktx9jU",
    bullets: ["Umayyah → Utsmani", "Timeline & tokoh penting"],
  },
  {
    key: "nusantara",
    name: "NusantaraBot",
    tagline: "Islam di Indonesia (Wali Songo, pesantren)",
    icon: <Users className="h-5 w-5" />,
    href: "https://denser.ai/u/embed/chatbot_pbix8pdjxk9brvund1afv",
    bullets: ["Sejarah lokal & tokoh", "Tarekat & budaya"],
  },
  {
    key: "muamalah",
    name: "MuamalahBot",
    tagline: "Ekonomi & transaksi syariah",
    icon: <Wallet className="h-5 w-5" />,
    href: "https://zenoembed.textcortex.com/?embed_id=emb_01k489emhkefvvsnhpxpqjtc7s",
    bullets: ["Akad, riba, fintech", "Rujukan DSN-MUI"],
  },
  {
    key: "genz",
    name: "GenZBot",
    tagline: "Ngobrol islami vibes kekinian",
    icon: <Sparkles className="h-5 w-5" />,
    href: "https://smartfaith.vercel.app",
    bullets: ["Cinta, game, medsos", "Powered by AI Gateway"],
  },
];

export default function SmartFaithLanding() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-zinc-950 via-zinc-900 to-zinc-950 text-zinc-100">
      {/* Nav */}
      <header className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-6">
        <Link href="/" className="flex items-center gap-2">
          <Bot className="h-6 w-6" />
          <span className="font-semibold tracking-wide">SmartFaith</span>
        </Link>
        <div className="flex items-center gap-3">
          <Button href="#bots" variant="ghost">Bot Showcase</Button>
          <Button href="https://github.com/mrbrightsides/islamichat" className="">GitHub</Button>
        </div>
      </header>

      {/* Hero */}
      <motion.section
        className="relative mx-auto flex w-full max-w-6xl flex-col items-center gap-6 px-6 pb-10 pt-8 text-center"
        variants={{ show: { transition: { staggerChildren: 0.1 } } }}
        initial="hidden"
        animate="show"
      >
        <motion.div variants={fadeUp} className="rounded-full border border-white/10 bg-white/5 px-4 py-1 text-xs uppercase tracking-wider text-white/80">
          Multi‑Bot Islami • Open Source
        </motion.div>
        <motion.h1 variants={fadeUp} className="text-4xl font-extrabold tracking-tight md:text-6xl">
          Satu Gerbang, Enam Cara Belajar Islam
        </motion.h1>
        <motion.p variants={fadeUp} className="max-w-2xl text-white/70">
          SmartFaith menghadirkan 6 chatbot spesialis: fiqh praktis, kisah sirah, sejarah peradaban, Islam Nusantara, muamalah syariah, dan Gen Z vibes. Pilih sesuai kebutuhanmu.
        </motion.p>
        <motion.div variants={fadeUp} className="flex flex-wrap items-center justify-center gap-3">
          <Button href="#bots" className="">Mulai Jelajah <ArrowRight className="h-4 w-4" /></Button>
          <Button href="/docs" variant="ghost">Dokumentasi</Button>
        </motion.div>
      </motion.section>

      {/* Bots grid */}
      <section id="bots" className="mx-auto w-full max-w-6xl px-6 pb-20">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {BOTS.map((b) => (
            <motion.div
              key={b.key}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              whileHover={{ y: -4 }}
              transition={{ type: "spring", stiffness: 260, damping: 20 }}
              className="group rounded-2xl border border-white/10 bg-white/5 shadow-sm hover:shadow-lg hover:shadow-black/20"
            >
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="rounded-xl bg-white/10 p-2 text-white">{b.icon}</div>
                  <div>
                    <h3 className="text-lg font-semibold">{b.name}</h3>
                    <p className="text-sm text-white/70">{b.tagline}</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="mb-4 list-disc space-y-1 pl-5 text-sm text-white/80">
                  {b.bullets.map((x, i) => (
                    <li key={i}>{x}</li>
                  ))}
                </ul>
                <div className="flex items-center justify-between">
                  <Button href={b.href}>Coba {b.name} <ArrowRight className="h-4 w-4" /></Button>
                  <Link href={`/about/${b.key}`} className="text-sm text-white/70 underline underline-offset-4">
                    Detail
                  </Link>
                </div>
              </CardContent>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Feature strip */}
      <motion.section
        className="mx-auto w-full max-w-6xl px-6 pb-24"
        variants={{ show: { transition: { staggerChildren: 0.1 } } }}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        <Card>
          <CardContent className="grid gap-6 p-6 md:grid-cols-3">
            <motion.div variants={fadeUp}>
              <h4 className="mb-1 font-semibold">Custom Prompt</h4>
              <p className="text-sm text-white/70">Setiap bot punya identitas & guardrails sendiri untuk jawaban yang aman dan fokus.</p>
            </motion.div>
            <motion.div variants={fadeUp}>
              <h4 className="mb-1 font-semibold">AI Gateway‑Ready</h4>
              <p className="text-sm text-white/70">GenZBot terhubung ke AI Gateway (Vercel) untuk eksplorasi multi‑model.</p>
            </motion.div>
            <motion.div variants={fadeUp}>
              <h4 className="mb-1 font-semibold">Knowledge Base</h4>
              <p className="text-sm text-white/70">Integrasi sumber kurasi: naskah sufi, arsip lokal, dan referensi populer.</p>
            </motion.div>
          </CardContent>
        </Card>
      </motion.section>

      {/* Footer */}
      <footer className="mx-auto w-full max-w-6xl px-6 pb-12 text-center text-sm text-white/60">
        <p className="mb-1">SmartFaith – Ruang belajar Islami berbasis multi‑bot.</p>
        <p>
          Code & issues di <Link href="https://github.com/mrbrightsides/landingsmartfaith" className="underline underline-offset-4">GitHub</Link>. Gen Z butuh arah, Islam kasih cahaya 🌙
        </p>
      </footer>
    </main>
  );
}
