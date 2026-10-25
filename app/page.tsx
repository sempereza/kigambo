"use client"
import { useRouter } from "next/navigation"

export default function Home() {
  const router = useRouter()

  return (
    <div className="min-h-screen bg-[#fff5f9] text-[#1a1a1a]">
      {/* Header */}
      <header className="p-4 flex justify-center">
        <div className="w-full max-w-6xl bg-white rounded-full px-6 py-3 flex justify-between items-center shadow-sm border border-black/5">
          <div className="flex items-center gap-2 font-bold text-[#8B5CF6]">
            <span>💜</span> Kigambo
          </div>
          <nav className="hidden md:flex gap-6 text-[13px]">
            <span className="text-[#8B5CF6] font-bold">Home</span>
            <span>Features</span>
            <span>How it Works</span>
            <span>Safety</span>
          </nav>
          <div className="flex gap-2">
            <button onClick={() => router.push('/login')} className="px-5 py-2 rounded-full border border-black text-[13px]">Log In</button>
            <button onClick={() => router.push('/login')} className="px-5 py-2 rounded-full bg-gradient-to-r from-[#8B5CF6] to-[#FF4D6D] text-white text-[13px] font-bold">Join Now</button>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="px-6 py-12 flex justify-center">
        <div className="max-w-6xl w-full grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-4xl md:text-[42px] font-black leading-tight text-[#2d0a4e]">
              Find Love. Share Stories.<br/>Build Connection.
            </h1>
            <p className="mt-4 text-sm text-black/60 leading-relaxed">
              Kigambo — meaning "love talk" • Made for Ugandans to connect meaningfully, chat, and build real relationships.
            </p>
            <div className="mt-6 flex gap-3">
              <button onClick={() => router.push('/login')} className="px-6 py-3 rounded-full bg-gradient-to-r from-[#8B5CF6] to-[#FF4D6D] text-white text-sm font-bold">
                Get Started — It's Free →
              </button>
              <button onClick={() => alert('Android app coming to Play Store soon!')} className="px-6 py-3 rounded-full border border-black text-sm bg-white">
                Download App
              </button>
            </div>
            <div className="mt-6 flex gap-4 text-[11px]">
              <span>✅ Verified Profiles</span>
              <span>🛡️ Secure & Private</span>
              <span>📍 Made for Uganda</span>
            </div>
          </div>

          <div className="h-[300px] rounded-[2rem] bg-gradient-to-br from-[#ffd6e8] to-[#c9a8ff] p-6 flex items-center justify-center">
            <div className="bg-white rounded-2xl p-4 w-[280px] shadow-xl">
              <div className="flex justify-between items-center">
                <p className="text-sm font-bold">New Matches</p>
                <span className="text-[9px] px-2 py-1 bg-[#f5f3ff] rounded-full text-[#8B5CF6]">98% Match</span>
              </div>
              <div className="flex gap-3 mt-3 items-center">
                <div className="w-12 h-12 rounded-full bg-pink-200"></div>
                <div>
                  <p className="text-sm font-bold">Aisha, 24 • Kampala</p>
                  <p className="text-[11px] text-black/50">Artist • Loves coffee, music</p>
                </div>
              </div>
              <p className="text-right mt-2 text-pink-400">♡</p>
            </div>
          </div>
        </div>
      </section>

      {/* Discover */}
      <section className="bg-white py-12 text-center">
        <h2 className="text-2xl font-bold">Discover People Near You</h2>
        <p className="text-sm text-black/50 mt-1">Browse, like, and connect with locals. Safe, fun, respectful.</p>
        <button onClick={() => router.push('/discover')} className="mt-6 px-6 py-3 rounded-full bg-black text-white text-sm">Start Swiping →</button>
      </section>
    </div>
  )
}