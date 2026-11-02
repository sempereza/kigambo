"use client"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { matches } from "@/lib/matches"
import { ThemeToggle } from "../theme-toggle"

export default function Matches(){
  const router = useRouter()
  return (
    <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)] flex justify-center px-6 pt-6">
      <div className="w-full max-w-[500px]">
        <div className="flex justify-between items-center py-4">
          <p className="font-black text-xl">Matches 💜</p>
          <div className="flex items-center gap-3">
            <ThemeToggle />
            <button onClick={()=>router.push('/discover')} className="px-4 py-2 rounded-full bg-[var(--foreground)] text-[var(--background)] text-sm">Discover →</button>
          </div>
        </div>
        <div className="mt-4 space-y-3">
          {matches.map(m=>(
            <div key={m.id} onClick={()=>router.push(`/chat/${m.id}`)} className="bg-[var(--surface)] p-4 rounded-[1.5rem] flex gap-4 items-center shadow-[0_4px_20px_rgba(0,0,0,0.04)] border border-[var(--border)] cursor-pointer hover:shadow-lg transition">
              <Image src={m.image} alt={`${m.name}'s profile`} width={56} height={56} unoptimized className="w-14 h-14 rounded-full object-cover" />
              <div className="flex-1">
                <p className="font-bold text-sm">{m.name}, {m.age} • {m.location}</p>
                <p className="text-[12px] text-[var(--muted)]">{m.preview}</p>
              </div>
              <span className="text-[#8B5CF6]">→</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}