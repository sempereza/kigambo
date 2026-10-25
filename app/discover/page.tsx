"use client"
import { useState } from "react"
import { useRouter } from "next/navigation"

const TOP_USERS = [
  { name: "DailySpark", img: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=200" },
  { name: "Maya, 24", img: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=200", online: true },
  { name: "Jordan, 27", img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200" },
  { name: "Elena, 25", img: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=200" },
  { name: "Lucas, 28", img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=200" },
]

const PROFILE = {
  name: "Amara", age: 26, distance: "3 miles away", location: "Williamsburg, NY",
  bio: "Knowing the best hidden vinyl listening bars & late-night spicy tonkotsu ramen",
  tags: ["Leo", "172 cm", "Cocktails", "Dog parent", "Film Photography", "Indie Rock", "Coffee"],
  img: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=800",
  match: "94% Match"
}

export default function DiscoverPage() {
  const router = useRouter()
  const [liked, setLiked] = useState(false)

  return (
    <div className="min-h-screen bg-[#0b0c10] text-white flex justify-center">
      <div className="w-full max-w-[390px] min-h-screen bg-[#0b0c10] flex flex-col">
        
        {/* Top */}
        <div className="px-4 pt-4 flex justify-between text-[10px] text-white/50">
          <span>Brooklyn, NY • 5 mi</span>
          <span className="w-7 h-7 rounded-full bg-white/10"></span>
        </div>

        {/* Stories Row */}
        <div className="flex gap-3 px-4 mt-4 overflow-x-auto scrollbar-hide">
          {TOP_USERS.map(u => (
            <div key={u.name} className="flex flex-col items-center gap-1 min-w-[56px]">
              <div className="w-14 h-14 rounded-full p-[2px] bg-gradient-to-tr from-pink-500 to-orange-400">
                <img src={u.img} className="w-full h-full rounded-full object-cover border-2 border-black" />
              </div>
              <span className="text-[9px] text-white/60">{u.name}</span>
            </div>
          ))}
        </div>

        {/* Main Card */}
        <div className="px-3 mt-5">
          <div className="relative h-[560px] rounded-[2rem] overflow-hidden bg-[#1a1a1a]">
            <img src={PROFILE.img} className="absolute inset-0 w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
            
            <div className="absolute top-3 left-3 flex gap-2">
              <span className="px-2 py-1 rounded-full bg-black/50 text-[9px] backdrop-blur">● Active now</span>
              <span className="px-2 py-1 rounded-full bg-[#FF4D6D] text-[9px] font-bold">{PROFILE.match}</span>
            </div>

            <div className="absolute bottom-0 p-5 w-full">
              <div className="flex items-center gap-2">
                <h2 className="text-2xl font-bold">{PROFILE.name} {PROFILE.age}</h2>
                <span className="w-5 h-5 rounded-full bg-[#FF4D6D] flex items-center justify-center text-[10px]">✓</span>
              </div>
              <p className="text-[10px] text-white/60 mt-1">📍 {PROFILE.distance} • {PROFILE.location}</p>
              
              <p className="mt-3 text-[11px] leading-relaxed text-white/80">
                <span className="text-[9px] opacity-50">THE KEY TO MY HEART IS...</span><br/>
                {PROFILE.bio} 🍜
              </p>

              <div className="mt-3 flex flex-wrap gap-1.5">
                {PROFILE.tags.map(tag => (
                  <span key={tag} className="px-2.5 py-1 rounded-full bg-white/10 backdrop-blur text-[9px] border border-white/10">{tag}</span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex justify-center gap-3 mt-4">
          <button className="w-11 h-11 rounded-full bg-white/10 flex items-center justify-center">↺</button>
          <button className="w-11 h-11 rounded-full bg-white/10 flex items-center justify-center">✕</button>
          <button className="w-11 h-11 rounded-full bg-[#FFE400] text-black flex items-center justify-center">⚡</button>
          <button onClick={() => setLiked(!liked)} className={`w-14 h-14 rounded-full flex items-center justify-center text-xl ${liked ? 'bg-[#FF4D6D]' : 'bg-[#FF4D6D]'} shadow-[0_0_20px_rgba(255,77,109,0.5)]`}>♥</button>
          <button className="w-11 h-11 rounded-full bg-white/10 flex items-center justify-center">✦</button>
        </div>

        {/* Bottom Nav */}
        <div className="mt-auto flex justify-around py-4 border-t border-white/5 text-[9px]">
          <button className="flex flex-col items-center gap-1 text-white/40"><span>◍</span>Sparks</button>
          <button onClick={() => router.push('/matches')} className="flex flex-col items-center gap-1"><span>💬</span>Messages</button>
          <button className="flex flex-col items-center gap-1 text-white/40"><span>👤</span>Profile</button>
        </div>
      </div>
    </div>
  )
}