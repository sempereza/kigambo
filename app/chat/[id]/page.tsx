"use client"
import { useState } from "react"
import { useRouter } from "next/navigation"

export default function DM() {
  const router = useRouter()
  const [text, setText] = useState("")
  const [msgs, setMsgs] = useState([
    { me: false, t: "You and Kembabazi matched 2 days ago from Kidebe • Both love Live Music & Cafe hopping" },
    { me: false, t: "Hey there! Still buzzing from the Blankets & Wine festival this weekend? 🎶" },
    { me: true, t: "Oh nice, you were there too?! That Main stage performance was pure magic! 🔥" },
    { me: false, t: "Right?! Best vibes ever. I was right near the main stage with my girls 😍" },
  ])

  const send = () => { if(!text.trim()) return; setMsgs([...msgs, { me: true, t: text }]); setText("") }

  return (
    <div className="min-h-screen bg-[#f5f3ff] flex justify-center">
      <div className="w-full max-w-[390px] min-h-screen bg-white flex flex-col">
        <div className="p-3 flex items-center gap-3 border-b">
          <button onClick={() => router.push('/matches')} className="w-8 h-8 rounded-full bg-black/5">←</button>
          <img src="https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=200" className="w-8 h-8 rounded-full" />
          <div className="flex-1"><p className="text-sm font-bold">Kembabazi, 24</p><p className="text-[10px] text-green-600">Online • Kampala</p></div>
        </div>

        <div className="flex-1 p-4 space-y-3 bg-[#faf8ff]">
          <p className="text-center text-[9px] text-black/30">Today</p>
          {msgs.map((m,i) => (
            <div key={i} className={`flex ${m.me ? 'justify-end' : 'justify-start'}`}>
              <div className={`max-w-[75%] px-3 py-2 rounded-2xl text-[12px] ${m.me ? 'bg-[#8B5CF6] text-white rounded-br-sm' : 'bg-white border shadow-sm rounded-bl-sm'}`}>{m.t}</div>
            </div>
          ))}
          <p className="text-[10px] text-black/30">Kembabazi is typing...</p>
        </div>

        <div className="p-3 border-t flex gap-2 items-center">
          <input value={text} onChange={e => setText(e.target.value)} onKeyDown={e => e.key==='Enter' && send()} placeholder="Message Kembabazi..." className="flex-1 bg-[#f5f3ff] rounded-full px-4 py-2.5 text-sm outline-none" />
          <button onClick={send} className="w-9 h-9 rounded-full bg-[#8B5CF6] text-white">↑</button>
        </div>
      </div>
    </div>
  )
}