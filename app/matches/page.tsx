"use client"
import { useRouter } from "next/navigation"

const NEW_MATCHES = [
  { name: "Kembabazi", img: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=200" },
  { name: "Akiki, 26", img: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=200" },
  { name: "Brenda, 23", img: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=200" },
]

const CHATS = [
  { id: "kembabazi", name: "Kembabazi", age: 24, msg: "You and Kembabazi matched 2 days ago from Kidebe... Live Music & Cafe hopping", time: "Today", unread: true, online: true, img: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=200" },
  { id: "brenda", name: "Brenda", age: 21, msg: "Brenda: Hey there! Still buzzing from the Blankets & Wine festival this weekend? 😊", time: "Today", img: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=200" },
  { id: "akiki", name: "Akiki", age: 24, msg: "You: Oh nice, you were there too?! That Main stage...", time: "2h ago", img: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=200" },
  { id: "patricia", name: "Patricia", age: 27, msg: "Patricia: Photo: My weekend getaway in Jinja 🌊", time: "5h ago", img: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=200" },
]

export default function Matches() {
  const router = useRouter()
  return (
    <div className="min-h-screen bg-[#f5f3ff] flex justify-center">
      <div className="w-full max-w-[390px] min-h-screen bg-white flex flex-col">
        <div className="p-4 flex justify-between items-center">
          <h1 className="font-bold">Sula <span className="font-normal text-black/40">Chats</span></h1>
          <div className="flex gap-2"><div className="w-7 h-7 rounded-full bg-purple-100"></div><div className="w-7 h-7 rounded-full bg-black/5"></div></div>
        </div>

        <div className="px-4">
          <p className="text-[11px] font-bold">New Matches ❤️</p>
          <div className="flex gap-3 mt-3">
            <div className="w-14 h-14 rounded-full border-2 border-dashed border-purple-300 flex items-center justify-center text-[9px]">Likes You</div>
            {NEW_MATCHES.map(m => (
              <img key={m.name} src={m.img} className="w-14 h-14 rounded-full object-cover" />
            ))}
          </div>
        </div>

        <div className="px-4 mt-5 flex gap-2">
          <span className="px-3 py-1 rounded-full bg-[#8B5CF6] text-white text-[10px]">All (12)</span>
          <span className="px-3 py-1 rounded-full bg-black/5 text-[10px]">Unread (2)</span>
          <span className="px-3 py-1 rounded-full bg-black/5 text-[10px]">New Matches</span>
        </div>

        <div className="mt-3 px-4">
          <div className="bg-[#f5f3ff] rounded-full px-3 py-2 flex items-center gap-2">
            <span className="text-black/30 text-sm">🔍</span>
            <input placeholder="Search matches or conversations" className="bg-transparent text-[11px] flex-1 outline-none" />
          </div>
        </div>

        <div className="mt-2 flex-1">
          {CHATS.map(c => (
            <div key={c.id} onClick={() => router.push(`/chat/${c.id}`)} className="flex gap-3 px-4 py-3 hover:bg-purple-50 cursor-pointer border-b border-black/5">
              <img src={c.img} className="w-12 h-12 rounded-full" />
              <div className="flex-1 min-w-0">
                <p className="text-[13px] font-bold">{c.name} <span className="font-normal text-black/40">{c.age}</span> {c.online && "•"}</p>
                <p className="text-[11px] text-black/50 truncate mt-0.5">{c.msg}</p>
              </div>
              <span className="text-[9px] text-black/30">{c.time}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}