"use client"
import { useRouter } from "next/navigation"
import { useState } from "react"
import { ThemeToggle } from "../../theme-toggle"

export default function Chat({params}:{params:{id:string}}){
  const router = useRouter()
  const [text, setText] = useState("")
  const [msgs, setMsgs] = useState([{from:"her", text:"Hey Abdul! Thanks for the like 💜"}, {from:"me", text:"Hi! How are you?"}])

  return (
    <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)] flex justify-center">
      <div className="w-full max-w-[500px] bg-[var(--surface)] min-h-screen flex flex-col border-x border-[var(--border)]">
        <div className="p-4 flex items-center gap-3 border-b border-[var(--border)]">
          <button onClick={()=>router.push('/matches')} aria-label="Back to matches">←</button>
          <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200" className="w-9 h-9 rounded-full" />
          <p className="font-bold text-sm flex-1">Kembabazi • Online</p>
          <ThemeToggle />
        </div>
        <div className="flex-1 p-4 space-y-3">
          {msgs.map((m,i)=>(
            <div key={i} className={`max-w-[75%] px-4 py-2.5 rounded-[1.2rem] text-[14px] ${m.from==='me' ? 'ml-auto bg-gradient-to-r from-[#8B5CF6] to-[#FF4D6D] text-white rounded-br-sm' : 'bg-[var(--surface-muted)] rounded-bl-sm'}`}>{m.text}</div>
          ))}
        </div>
        <div className="p-3 flex gap-2 border-t">
          <input value={text} onChange={e=>setText(e.target.value)} placeholder="Type a message..." className="flex-1 bg-[var(--surface-muted)] text-[var(--foreground)] placeholder:text-[var(--muted)] rounded-full px-4 py-3 text-sm outline-none" />
          <button onClick={()=>{if(text){setMsgs([...msgs,{from:"me", text}]); setText("")}}} className="w-11 h-11 rounded-full bg-[var(--foreground)] text-[var(--background)]">↑</button>
        </div>
      </div>
    </div>
  )
}