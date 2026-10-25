"use client"
import { useState } from "react"
import { useRouter } from "next/navigation"

const PROFILES = [
  { id: 1, name: "Aisha", age: 24, city: "Kampala • 2km", bio: "Loves storytelling, coffee & meaningful connection.", tags: ["Romance", "Music", "Travel"], img: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=600" },
  { id: 2, name: "Grace", age: 26, city: "Entebbe • 5km", bio: "Doctor by day, poet by night. Looking for real vibes.", tags: ["Books", "Yoga", "Honest"], img: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=600" },
  { id: 3, name: "Martha", age: 23, city: "Mukono • 8km", bio: "Makerere graduate. Let's build something real.", tags: ["Faith", "Family", "Dreams"], img: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=600" },
]

export default function Discover() {
  const router = useRouter()
  const [index, setIndex] = useState(0)
  const [direction, setDirection] = useState<"left" | "right" | null>(null)
  const profile = PROFILES[index % PROFILES.length]

  const swipe = (dir: "left" | "right") => {
    setDirection(dir)
    setTimeout(() => {
      setIndex(i => i + 1)
      setDirection(null)
      if (dir === "right") {
        // You can save match to Firebase here
        console.log("Liked", profile.name)
      }
    }, 300)
  }

  return (
    <div className="min-h-screen bg-[#0a0612] text-white flex justify-center">
      <div className="w-full max-w-[390px] min-h-screen flex flex-col relative bg-[#0a0612]">
        
        {/* Header */}
        <header className="flex justify-between items-center p-6">
          <h1 className="font-black tracking-[0.2em] text-sm">KIGAMBO</h1>
          <div className="flex gap-2">
            <button onClick={() => router.push('/matches')} className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">💬</button>
            <button className="w-8 h-8 rounded-full bg-purple-600"></button>
          </div>
        </header>

        {/* Card Stack */}
        <div className="flex-1 px-4 pb-28 relative">
          {/* Next card behind */}
          <div className="absolute top-2 left-6 right-6 h-[520px] rounded-[2.5rem] bg-[#1a102e] scale-[0.95]"></div>
          
          {/* Main card */}
          <div className={`relative h-[520px] rounded-[2.5rem] overflow-hidden border border-white/10 shadow-[0_20px_80px_rgba(139,92,246,0.3)] transition-all duration-300 ${direction === "left" ? "-translate-x-[150%] rotate-[-20deg]" : direction === "right" ? "translate-x-[150%] rotate-[20deg]" : ""}`}>
            <img src={profile.img} className="absolute inset-0 w-full h-full object-cover" alt="" />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"></div>
            
            {/* Top pills */}
            <div className="absolute top-4 left-4 right-4 flex gap-1">
              <div className="h-1 flex-1 bg-white rounded-full"></div>
              <div className="h-1 flex-1 bg-white/20 rounded-full"></div>
              <div className="h-1 flex-1 bg-white/20 rounded-full"></div>
            </div>

            {/* Info */}
            <div className="absolute bottom-0 p-6 w-full">
              <div className="flex items-end justify-between">
                <div>
                  <h2 className="text-3xl font-bold">{profile.name}, {profile.age}</h2>
                  <p className="text-xs text-white/60 mt-1">{profile.city}</p>
                </div>
                <button className="w-8 h-8 rounded-full bg-white/20 backdrop-blur flex items-center justify-center">ⓘ</button>
              </div>
              <p className="mt-3 text-sm text-white/80 leading-relaxed">{profile.bio}</p>
              <div className="mt-3 flex gap-2 flex-wrap">
                {profile.tags.map(t => (
                  <span key={t} className="px-3 py-1.5 rounded-full bg-white/10 backdrop-blur text-[10px] tracking-widest">{t.toUpperCase()}</span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Actions */}
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-4 bg-[#1a102e]/80 backdrop-blur-xl border border-white/10 rounded-full px-6 py-3">
          <button onClick={() => swipe("left")} className="w-14 h-14 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-xl hover:bg-white/10">✕</button>
          <button className="w-10 h-10 rounded-full bg-gradient-to-r from-purple-600 to-pink-500 flex items-center justify-center text-sm">★</button>
          <button onClick={() => swipe("right")} className="w-14 h-14 rounded-full bg-gradient-to-r from-purple-600 to-pink-500 flex items-center justify-center text-2xl shadow-[0_0_20px_rgba(168,85,247,0.6)]">♥</button>
        </div>

        <div className="text-center pb-4 text-[9px] text-white/20 tracking-widest">PRIVATE • SAFE • MADE FOR UGANDA</div>
      </div>
    </div>
  )
}