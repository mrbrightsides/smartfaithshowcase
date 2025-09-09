export default function DocsPage() {
  return (
    <main className="min-h-screen bg-zinc-950 text-zinc-100">
      <section className="mx-auto w-full max-w-4xl px-6 py-12">
        <h1 className="text-4xl font-bold">Dokumentasi SmartFaith</h1>
        <p className="mt-3 text-white/70">
          Halaman ini menjelaskan cara kerja SmartFaith versi multi-bot, tautan ke
          masing-masing bot, serta panduan integrasi singkat.
        </p>

        {/* Ringkasan */}
        <div className="mt-8 rounded-2xl border border-white/10 bg-white/5 p-5">
          <h2 className="text-xl font-semibold">Ringkasan</h2>
          <ul className="mt-3 list-disc space-y-1 pl-6 text-sm text-white/80">
            <li>6 bot spesialis: Fiqh, Sirah, Tarikh, Nusantara, Muamalah, GenZ.</li>
            <li>Setiap bot punya prompt/guardrails sendiri untuk menjaga fokus & adab.</li>
            <li>Landing page ini hanya showcase; setiap bot di-embed dari penyedia masing-masing.</li>
          </ul>
        </div>

        {/* Tautan Bot */}
        <div className="mt-8 rounded-2xl border border-white/10 bg-white/5 p-5">
          <h2 className="text-xl font-semibold">Tautan Bot</h2>
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            <a href="https://my.artibot.ai/islamichat" className="rounded-xl border border-white/10 bg-white/5 p-4 hover:opacity-90">FiqhBot → ArtiBot</a>
            <a href="https://tawk.to/chat/63f1709c4247f20fefe15b12/1gpjhvpnb" className="rounded-xl border border-white/10 bg-white/5 p-4 hover:opacity-90">SirahBot → Tawk.to</a>
            <a href="https://www.chatbase.co/chatbot-iframe/Ho6CMtS7y0t5oM-Ktx9jU" className="rounded-xl border border-white/10 bg-white/5 p-4 hover:opacity-90">TarikhBot → Chatbase</a>
            <a href="https://denser.ai/u/embed/chatbot_pbix8pdjxk9brvund1afv" className="rounded-xl border border-white/10 bg-white/5 p-4 hover:opacity-90">NusantaraBot → Denser</a>
            <a href="https://zenoembed.textcortex.com/?embed_id=emb_01k489emhkefvvsnhpxpqjtc7s" className="rounded-xl border border-white/10 bg-white/5 p-4 hover:opacity-90">MuamalahBot → TextCortex</a>
            <a href="https://smartfaith.vercel.app" className="rounded-xl border border-white/10 bg-white/5 p-4 hover:opacity-90">GenZBot → Vercel AI Gateway</a>
          </div>
        </div>

        {/* Integrasi & Struktur */}
        <div className="mt-8 rounded-2xl border border-white/10 bg-white/5 p-5">
          <h2 className="text-xl font-semibold">Struktur & Integrasi</h2>
          <pre className="mt-3 overflow-auto rounded-xl bg-black/40 p-4 text-xs leading-6 text-white/80">
{`landing/
├─ app/
│  ├─ page.tsx           # Landing utama
│  ├─ docs/page.tsx      # (file halaman ini)
│  └─ about/[bot]/page.tsx
├─ components/
│  └─ (ui, motion helper)
├─ public/
└─ styles/`}
          </pre>
          <p className="mt-3 text-sm text-white/70">
            Untuk menambah bot baru: tambahkan entri di array <code>BOTS</code> pada
            <code> app/page.tsx</code>, lalu (opsional) buat halaman detail di
            <code> about/[bot]/page.tsx</code>.
          </p>
        </div>

        {/* Disclaimer */}
        <div className="mt-8 rounded-2xl border border-white/10 bg-white/5 p-5">
          <h2 className="text-xl font-semibold">Disclaimer</h2>
          <p className="mt-2 text-sm text-white/70">
            SmartFaith adalah asisten Islami digital. Jawaban bersifat umum untuk membantu belajar.
            Untuk fatwa atau keputusan syariah detail, konsultasikan langsung dengan ustadz/kyai atau
            rujuk kepada otoritas resmi (mis. DSN-MUI).
          </p>
        </div>

        {/* Kontak/Repo */}
        <div className="mt-8 flex items-center justify-between gap-4">
          <a href="/" className="rounded-xl border border-white/15 px-4 py-2 text-sm hover:opacity-90">← Kembali</a>
          <a href="https://github.com/mrbrightsides/" className="rounded-xl bg-white px-4 py-2 text-sm font-medium text-black hover:opacity-90">GitHub Profil</a>
        </div>
      </section>
    </main>
  );
}
