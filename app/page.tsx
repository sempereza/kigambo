"use client"
import { useRouter } from "next/navigation"

export default function Home() {
  const router = useRouter()

  return (
    <div className="min-h-screen bg-[#fffafb] text-[#180D21]">
      {/* Header Pill */}
      <header className="sticky top-4 z-50 flex justify-center px-4">
        <div className="w-full max-w-6xl bg-white/90 backdrop-blur rounded-full px-6 py-3 flex justify-between items-center shadow-[0_8px_30px_rgba(0,0,0,0.06)] border border-black/5">
          <div className="font-black tracking-widest text-[#8B5CF6] flex items-center gap-2">
            💜 KIGAMBO
          </div>
          <nav className="hidden md:flex gap-6 text-[13px] text-black/60">
            <b className="text-[#8B5CF6] cursor-pointer">Home</b>
            <span className="cursor-pointer" onClick={() => router.push('/discover')}>Features</span>
            <span className="cursor-pointer">How it Works</span>
            <span className="cursor-pointer">Safety</span>
          </nav>
          <div className="flex gap-2">
            <button onClick={() => router.push('/login')} className="px-5 py-2 rounded-full border border-black/10 text-[13px] bg-white hover:bg-black/5">Log In</button>
            <button onClick={() => router.push('/login')} className="px-5 py-2 rounded-full bg-gradient-to-r from-[#8B5CF6] to-[#FF4D6D] text-white font-bold text-[13px] shadow-md">Join Now</button>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="px-6 pt-16 pb-12 flex justify-center">
        <div className="max-w-6xl w-full grid md:grid-cols-2 gap-10 items-center">
          <div>
            <div className="inline-flex px-3 py-1 rounded-full bg-[#f3e8ff] text-[10px] text-[#8B5CF6] font-bold tracking-widest">MADE FOR UGANDA • LUXURY DATING</div>
            <h1 className="mt-4 text-5xl md:text-[54px] font-black leading-[0.9] tracking-tight">
              Find Love.<br/>Share Stories.<br/><span className="text-[#8B5CF6]">Build Connection.</span>
            </h1>
            <p className="mt-4 text-[15px] text-black/60 leading-relaxed max-w-[480px]">
              Kigambo — meaning "love talk" in Luganda. Connect meaningfully, chat privately, and build real relationships in a safe sanctuary crafted for Uganda.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <button onClick={() => router.push('/login')} className="px-7 py-3.5 rounded-full bg-black text-white text-sm font-bold">Get Started — It's Free →</button>
              <button onClick={() => alert('Kigambo Android app coming to Play Store soon!')} className="px-7 py-3.5 rounded-full bg-white border border-black/10 text-sm font-bold">Download App</button>
            </div>
            <div className="mt-6 flex gap-4 text-[11px] text-black/50">
              <span>✅ Verified</span>
              <span>🔒 256-Bit Encrypted</span>
              <span>🇺🇬 Kampala</span>
            </div>
          </div>

          <div className="h-[440px] rounded-[2.5rem] bg-gradient-to-br from-[#ffd6e8] via-[#f3d1ff] to-[#c9a8ff] p-8 relative overflow-hidden flex items-center justify-center">
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/50 rounded-full blur-2xl"></div>
            <div className="bg-white rounded-[1.5rem] p-5 w-[320px] shadow-2xl border border-black/5">
              <div className="flex justify-between items-center">
                <p className="font-bold text-sm">New Matches</p>
                <span className="text-[9px] px-2.5 py-1 bg-[#f3e8ff] rounded-full text-[#8B5CF6] font-bold">98% Match</span>
              </div>
              <div className="flex gap-3 mt-4 items-center">
                <img src="https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=200" alt="Aisha" className="w-14 h-14 rounded-full object-cover" />
                <div>
                  <p className="font-bold text-sm">Aisha, 24 • Kampala</p>
                  <p className="text-[11px] text-black/50">Artist • Loves coffee, music</p>
                  <p className="text-[11px] text-[#FF4D6D] mt-1 font-bold">♡ Loves you</p>
                </div>
              </div>
              <div className="mt-4 flex gap-2">
                <button onClick={() => router.push('/discover')} className="flex-1 py-2 rounded-full bg-black text-white text-[12px] font-bold">Like</button>
                <button className="flex-1 py-2 rounded-full bg-[#f5f5f5] text-[12px] font-bold">Pass</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Discover CTA */}
      <section className="bg-white py-16 px-6 flex justify-center border-y border-black/5">
        <div className="max-w-6xl w-full text-center">
          <h2 className="text-3xl font-black">Discover People Near You</h2>
          <p className="text-sm text-black/50 mt-2">Browse, like, and connect with locals. Safe, fun, respectful.</p>
          <button onClick={() => router.push('/discover')} className="mt-6 px-8 py-3.5 rounded-full bg-black text-white text-sm font-bold">Start Swiping →</button>
        </div>
      </section>

      {/* Testimonial Sarah & Dennis */}
      <section className="px-6 py-14 flex justify-center bg-[#fffafb]">
        <div className="max-w-4xl w-full bg-[#fff1f5] rounded-[2rem] p-8 flex flex-col md:flex-row gap-6 items-center border border-[#ffd6e8]">
          <img src="https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=300" alt="engagement hands" className="w-24 h-24 rounded-full object-cover border-4 border-white shadow-sm" />
          <div>
            <p className="text-[18px] font-bold leading-tight">"We met on Kigambo during lockdown. 2 years later, we're engaged!"</p>
            <p className="text-[13px] text-black/50 mt-2">— Sarah & Dennis, Kampala couple • Married Dec 2024 • 120k+ Ugandan matches</p>
          </div>
        </div>
      </section>

      {/* Footer - Rich Dark Luxury #180D21 */}
      <footer className="bg-[#180D21] text-white px-6 py-14">
        <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-10">
          <div>
            <p className="font-black tracking-[0.2em] text-sm">KIGAMBO</p>
            <p className="text-[12px] text-white/40 mt-3 leading-relaxed">Luxury dating & intimacy, crafted for Uganda.</p>
            <p className="text-[11px] text-[#c084fc] mt-4 font-bold">Crafted with 💜 in Kampala, Uganda</p>
          </div>
          <div className="text-[13px] space-y-3 text-white/60">
            <p className="text-white font-bold text-[12px] tracking-widest">Product</p>
            <p className="cursor-pointer hover:text-white" onClick={() => router.push('/discover')}>Discover</p>
            <p className="cursor-pointer hover:text-white" onClick={() => router.push('/matches')}>Matches</p>
            <p className="cursor-pointer hover:text-white" onClick={() => router.push('/chat/1')}>Voice Notes</p>
          </div>
          <div className="text-[13px] space-y-3 text-white/60">
            <p className="text-white font-bold text-[12px] tracking-widest">Safety</p>
            <p>256-Bit Encrypted</p>
            <p>Strict 18+ Circle</p>
            <p>Verified Profiles</p>
          </div>
          <div className="text-[13px] space-y-3 text-white/60">
            <p className="text-white font-bold text-[12px] tracking-widest">Legal</p>
            <p className="cursor-pointer hover:text-white">Terms</p>
            <p className="cursor-pointer hover:text-white">Privacy</p>
            <p className="cursor-pointer hover:text-white">Contact</p>
          </div>
        </div>
        <div className="max-w-6xl mx-auto mt-10 pt-6 border-t border-white/10 flex justify-between text-[11px] text-white/30">
          <span>© 2025 Kigambo. All rights reserved.</span>
          <span>🇺🇬 Made for Uganda</span>
        </div>
      </footer>
    </div>
  )
}