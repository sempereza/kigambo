"use client"
import { useRouter } from "next/navigation"

export default function Home() {
  const router = useRouter()
  return (
    <div className="min-h-screen bg-[#fff6f9] text-[#180D21]">
      {/* Header Pill */}
      <header className="sticky top-4 z-50 flex justify-center px-4">
        <div className="w-full max-w-6xl bg-white/90 backdrop-blur rounded-full px-6 py-3 flex justify-between items-center shadow-[0_8px_30px_rgba(0,0,0,0.06)] border border-black/5">
          <div className="font-black tracking-widest text-[#8B5CF6]">💜 KIGAMBO</div>
          <nav className="hidden md:flex gap-6 text-[13px] text-black/60">
            <b className="text-[#8B5CF6]">Home</b><span>Features</span><span>How it Works</span><span>Safety</span>
          </nav>
          <div className="flex gap-2">
            <button onClick={() => router.push('/login')} className="px-5 py-2 rounded-full border text-[13px]">Log In</button>
            <button onClick={() => router.push('/login')} className="px-5 py-2 rounded-full bg-gradient-to-r from-[#8B5CF6] to-[#FF4D6D] text-white font-bold text-[13px]">Join Now</button>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="px-6 pt-16 pb-12 flex justify-center">
        <div className="max-w-6xl w-full grid md:grid-cols-2 gap-10 items-center">
          <div>
            <div className="inline-flex px-3 py-1 rounded-full bg-[#f3e8ff] text-[10px] text-[#8B5CF6] font-bold tracking-widest">MADE FOR UGANDA • LUXURY DATING</div>
            <h1 className="mt-4 text-5xl font-black leading-[0.9]">Find Love.<br/>Share Stories.<br/><span className="text-[#8B5CF6]">Build Connection.</span></h1>
            <p className="mt-4 text-[15px] text-black/60 leading-relaxed">Kigambo — meaning "love talk" in Luganda. Connect meaningfully, chat privately, build real relationships in a safe sanctuary.</p>
            <div className="mt-6 flex gap-3">
              <button onClick={() => router.push('/login')} className="px-7 py-3.5 rounded-full bg-black text-white text-sm font-bold">Get Started — It's Free →</button>
              <button className="px-7 py-3.5 rounded-full bg-white border text-sm">Download App</button>
            </div>
            <div className="mt-6 flex gap-5 text-[11px]"><span>✅ Verified</span><span>🔒 256-Bit Encrypted</span><span>🇺🇬 Kampala</span></div>
          </div>
          <div className="h-[420px] rounded-[2.5rem] bg-gradient-to-br from-[#ffd6e8] to-[#d9c2ff] p-8 relative overflow-hidden">
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/40 rounded-full blur-2xl"></div>
            <div className="bg-white rounded-[1.5rem] p-4 w-[300px] shadow-2xl">
              <div className="flex justify-between"><p className="font-bold text-sm">New Matches</p><span className="text-[9px] px-2 py-1 bg-[#f3e8ff] rounded-full text-[#8B5CF6] font-bold">98% Match</span></div>
              <div className="flex gap-3 mt-4 items-center">
                <img src="https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=200" className="w-14 h-14 rounded-full object-cover" />
                <div><p className="font-bold text-sm">Aisha, 24 • Kampala</p><p className="text-[11px] text-black/50">Artist • Loves coffee & music</p><p className="text-[10px] text-pink-500 mt-1">❤️ Loves you</p></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Sarah & Dennis */}
      <section className="px-6 py-12 flex justify-center bg-white">
        <div className="max-w-4xl w-full bg-[#fff6f9] rounded-[2rem] p-8 flex gap-6 items-center border border-black/5">
          <img src="https://images.unsplash.com/photo-1529634597503-139d3726fed5?w=300" className="w-24 h-24 rounded-full object-cover" />
          <div>
            <p className="text-lg font-bold">"We met on Kigambo during lockdown. 2 years later, we're engaged!"</p>
            <p className="text-[13px] text-black/50 mt-2">— Sarah & Dennis, Kampala couple • Married Dec 2024 • 120k+ Ugandan matches</p>
          </div>
        </div>
      </section>

      {/* Footer - Rich Dark Luxury */}
      <footer className="bg-[#180D21] text-white px-6 py-12">
        <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-8">
          <div>
            <p className="font-black tracking-widest">KIGAMBO</p>
            <p className="text-[11px] text-white/40 mt-2">Luxury dating & intimacy, crafted for Uganda.</p>
            <p className="text-[11px] text-[#c084fc] mt-3">Crafted with 💜 in Kampala, Uganda</p>
          </div>
          <div className="text-[12px] space-y-2 text-white/60"><p className="text-white font-bold">Product</p><p>Discover</p><p>Matches</p><p>Voice Notes</p></div>
          <div className="text-[12px] space-y-2 text-white/60"><p className="text-white font-bold">Safety</p><p>256-Bit Encrypted</p><p>Strict 18+ Circle</p><p>Verified Profiles</p></div>
          <div className="text-[12px] space-y-2 text-white/60"><p className="text-white font-bold">Legal</p><p>Terms</p><p>Privacy</p><p>Contact</p></div>
        </div>
      </footer>
    </div>
  )
}