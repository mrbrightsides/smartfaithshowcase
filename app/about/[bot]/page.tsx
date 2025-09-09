import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

// Data detail per bot
const BOT_DETAILS: Record<string, any> = {
  fiqh: {
    name: "FiqhBot",
    desc: "Membantu ibadah harian & fiqh praktis dengan jawaban ringkas dan dalil terpercaya.",
    examples: [
      "Apa syarat sah shalat berjamaah?",
      "Bagaimana cara tayamum yang benar?",
      "Siapa saja mustahik zakat fitrah?"
    ],
  },
  sirah: {
    name: "SirahBot",
    desc: "Kisah Nabi & sahabat dengan gaya storytelling hangat dan hikmah di akhir.",
    examples: [
      "Ceritakan kisah hijrah Nabi Muhammad ﷺ.",
      "Siapa Abu Bakar Ash-Shiddiq?",
      "Bagaimana perjuangan Bilal bin Rabah?"
    ],
  },
  tarikh: {
    name: "TarikhBot",
    desc: "Sejarah peradaban Islam dari Umayyah hingga Utsmani.",
    examples: [
      "Apa yang dimaksud Daulah Abbasiyah?",
      "Siapa Sultan Mehmed II?",
      "Kapan masa keemasan ilmu pengetahuan Islam?"
    ],
  },
  nusantara: {
    name: "NusantaraBot",
    desc: "Islam di Indonesia: Wali Songo, pesantren, tarekat, dan tokoh lokal.",
    examples: [
      "Siapa Sunan Kalijaga?",
      "Bagaimana peran pesantren dalam sejarah Indonesia?",
      "Apa itu Tarekat Syattariyah di Nusantara?"
    ],
  },
  muamalah: {
    name: "MuamalahBot",
    desc: "Ekonomi & transaksi syariah: akad, riba, fintech, asuransi syariah.",
    examples: [
      "Apa itu akad murabahah?",
      "Kenapa riba dilarang dalam Islam?",
      "Bagaimana prinsip asuransi syariah?"
    ],
  },
  genz: {
    name: "GenZBot",
    desc: "Ngobrol islami vibes kekinian: cinta, game, medsos, dan dunia digital.",
    examples: [
      "Bagaimana cara menjaga iman di era digital?",
      "Apa hukum game online dalam Islam?",
      "Tips menjaga pergaulan ala Gen Z?"
    ],
  },
};

export default function BotDetailPage({ params }: { params: { bot: string } }) {
  const bot = BOT_DETAILS[params.bot];

  if (!bot) return notFound();

  return (
    <main className="min-h-screen bg-zinc-950 text-zinc-100 px-6 py-12">
      <div className="mx-auto max-w-3xl space-y-8">
        <h1 className="text-4xl font-bold">{bot.name}</h1>
        <p className="text-lg text-white/80">{bot.desc}</p>

        <section>
          <h2 className="mb-3 text-xl font-semibold">Contoh Pertanyaan</h2>
          <ul className="list-disc space-y-2 pl-6 text-white/80">
            {bot.examples.map((q: string, i: number) => (
              <li key={i}>{q}</li>
            ))}
          </ul>
        </section>

        <div className="flex gap-3">
          <Link
            href={`/${params.bot}`}
            className="inline-flex items-center gap-2 rounded-xl bg-white px-4 py-2 font-medium text-black hover:opacity-90"
          >
            Coba {bot.name} <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-xl border border-white/20 px-4 py-2 font-medium hover:opacity-90"
          >
            ← Kembali ke Landing
          </Link>
        </div>

        <footer className="pt-12 text-sm text-white/60">
          Disclaimer: {bot.name} adalah asisten Islami digital. Jawaban bersifat umum, bukan fatwa resmi. Untuk detail hukum, konsultasikan ke ustadz/kyai.
        </footer>
      </div>
    </main>
  );
}