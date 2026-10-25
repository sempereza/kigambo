"use client"
import { useRouter } from "next/navigation"

const matches = [
  { id:1, name:"Kembabazi", age:22, city:"Mbarara", img:"https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200", last:"You: Hey 😉" },
  { id:2, name:"Brenda", age:25, city:"Entebbe", img:"https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=200", last:"Seen • Wants to meet" },
  { id:3, name:"Aisha", age:24, city:"Kampala", img:"https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=200", last:"New Match! Say hi 💜" },
]

export default function Matches(){
  const router = useRouter()
  return (
    <div className="min-h-screen bg-[#fffafb] flex justify-center px-6 pt-6">
      <div className="w-full max-w-[500px]">
        <div className="flex justify-between items-center py-4">
          <p className="font-black text-xl">Matches 💜</p>
          <button onClick={()=>router.push('/discover')} className="px-4 py-2 rounded-full bg-black text-white text-sm">Discover →</button>
        </div>
        <div className="mt-4 space-y-3">
          {matches.map(m=>(
            <div key={m.id} onClick={()=>router.push(`/chat/${m.id}`)} className="bg-white p-4 rounded-[1.5rem] flex gap-4 items-center shadow-[0_4px_20px_rgba(0,0,0,0.04)] border border-black/5 cursor-pointer hover:shadow-lg transition">
              <img src={m.img} className="w-14 h-14 rounded-full object-cover" />
              <div className="flex-1">
                <p className="font-bold text-sm">{m.name}, {m.age} • {m.city}</p>
                <p className="text-[12px] text-black/50">{m.last}</p>
              </div>
              <span className="text-[#8B5CF6]">→</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}