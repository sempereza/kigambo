"use client"
import { useRouter } from "next/navigation"

export default function Home() {
  const router = useRouter()

  return (
    <div className="min-h-screen bg-[#0a0612] text-white overflow-hidden">
      {/* HEADER */}
      <header className="flex justify-between items-center p-6 max-w-7xl mx-auto">
        <h1 className="text-2xl font-black tracking-widest">KIGAMBO</h1>
        <div className="flex gap-3">
          <button onClick={() => router.push('/login')} className="px-6 py-2 rounded-full border border-white/20 hover:bg-white/10">
            Log In
          </button>
          <button onClick={() => router.push('/login')} className="px-6 py-2 rounded-full bg-gradient-to-r from-purple-600 to-pink-500 font-bold">
            Join Now
          </button>
        </div>
      </header>

      {/* HERO */}
      <main className="max-w-7xl mx-auto px-6 pt-10 md:flex items-center gap-10">
        <div className="flex-1">
          <h2 className="text-5xl md:text-7xl font-black leading-[0.9]">Find Love.<br/>Share Stories.<br/><span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Build Connection.</span></h2>
          <p className="mt-6 text-white/60 text-lg max-w-lg">Uganda's most trusted dating app. Real people, real stories, safe connections made for Uganda.</p>
          <button onClick={() => router.push('/login')} className="mt-8 px-8 py-4 rounded-full bg-gradient-to-r from-purple-600 to-pink-500 font-bold text-lg shadow-[0_0_30px_rgba(168,85,247,0.5)]">
            Get Started — It's Free →
          </button>
          <p className="mt-3 text-[10px] text-purple-300/50 tracking-widest">© 2025 Kigambo. All rights reserved.</p>
        </div>
        <div className="flex-1 mt-10 md:mt-0">
          <div className="relative mx-auto w-[320px] h-[650px] rounded-[3rem] bg-gradient-to-b from-purple-900/50 to-black border border-white/10 p-3 shadow-2xl">
            <div className="w-full h-full rounded-[2.5rem] bg-[#1a102e] overflow-hidden p-4">
              <div className="space-y-4">
                <div className="h-40 rounded-2xl bg-gradient-to-r from-purple-600 to-pink-500 p-4">
                  <p className="text-sm opacity-80">New Matches</p>
                  <div className="mt-3 flex gap-2">
                    <div className="w-12 h-12 rounded-full bg-white/20"></div>
                    <div><p className="font-bold">Aisha, 24</p><p className="text-xs opacity-60">Kampala • 2km away</p></div>
                  </div>
                </div>
                <div className="h-20 rounded-2xl bg-white/5 p-3"></div>
                <div className="h-20 rounded-2xl bg-white/5 p-3"></div>
                <div className="h-12 rounded-full bg-white/10"></div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}