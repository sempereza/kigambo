"use client"
import { useState } from "react"
import { useRouter } from "next/navigation"
import { ThemeToggle } from "../theme-toggle"

const people = [
  { id:1, name:"Aisha", age:24, city:"Kampala", img:"https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=400", bio:"Artist • Loves coffee & music", match:98 },
  { id:2, name:"Kembabazi", age:22, city:"Mbarara", img:"https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400", bio:"Student • Dreamer • Loves travel", match:95 },
  { id:3, name:"Brenda", age:25, city:"Entebbe", img:"https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400", bio:"Nurse • Kind heart", match:92 },
]

export default function Discover(){
  const router = useRouter()
  const [index, setIndex] = useState(0)
  const person = people[index % people.length]

  return (
    <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)] flex flex-col items-center px-6 pt-6">
      <div className="w-full max-w-[400px] flex justify-between items-center py-4">
        <p className="font-black text-[#8B5CF6]">💜 KIGAMBO</p>
        <div className="flex items-center gap-2 text-sm">
          <ThemeToggle />
          <button onClick={()=>router.push('/matches')} aria-label="Matches" className="w-9 h-9 bg-[var(--surface)] text-[var(--foreground)] rounded-full shadow border border-[var(--border)]">💜</button>
          <button onClick={()=>router.push('/')} aria-label="Home" className="w-9 h-9 bg-[var(--surface)] text-[var(--foreground)] rounded-full shadow border border-[var(--border)]">⌂</button>
        </div>
      </div>

      <div className="w-full max-w-[400px] bg-[var(--surface)] rounded-[2.5rem] shadow-[0_20px_60px_rgba(0,0,0,0.12)] overflow-hidden border border-[var(--border)]">
        <div className="relative h-[480px]">
          <img src={person.img} className="w-full h-full object-cover" />
          <div className="absolute top-4 left-4 bg-black/60 backdrop-blur text-white text-[10px] px-3 py-1 rounded-full">{person.match}% Match</div>
          <div className="absolute bottom-0 w-full p-6 bg-gradient-to-t from-black/80 to-transparent text-white">
            <p className="text-2xl font-black">{person.name}, {person.age}</p>
            <p className="text-[12px] opacity-80">{person.city} • {person.bio}</p>
          </div>
        </div>
        <div className="p-5 flex gap-3">
          <button onClick={()=>setIndex(i=>i+1)} className="flex-1 h-14 rounded-full bg-[var(--surface-muted)] text-[var(--foreground)] font-bold">✕ Pass</button>
          <button onClick={()=>{setIndex(i=>i+1); if(person.match>94) router.push('/matches')}} className="flex-1 h-14 rounded-full bg-gradient-to-r from-[#8B5CF6] to-[#FF4D6D] text-white font-bold shadow-lg">♥ Like</button>
        </div>
      </div>
    </div>
  )
}