"use client"
import { useRouter } from "next/navigation"
import { useState } from "react"

export default function Chat({params}:{params:{id:string}}){
  const router = useRouter()
  const [text, setText] = useState("")
  const [msgs, setMsgs] = useState([{from:"her", text:"Hey Abdul! Thanks for the like 💜"}, {from:"me", text:"Hi! How are you?"}])

  return (
    <div className="min-h-screen bg-[#fffafb] flex justify-center">
      <div className="w-full max-w-[500px] bg-white min-h-screen flex flex-col border-x border-black/5">
        <div className="p-4 flex items-center gap-3 border-b">
          <button onClick={()=>router.push('/matches')}>←</button>
          <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200" className="w-9 h-9 rounded-full" />
          <p className="font-bold text-sm">Kembabazi • Online</p>
        </div>
        <div className="flex-1 p-4 space-y-3">
          {msgs.map((m,i)=>(
            <div key={i} className={`max-w-[75%] px-4 py-2.5 rounded-[1.2rem] text-[14px] ${m.from==='me' ? 'ml-auto bg-gradient-to-r from-[#8B5CF6] to-[#FF4D6D] text-white rounded-br-sm' : 'bg-[#f5f5f5] rounded-bl-sm'}`}>{m.text}</div>
          ))}
        </div>
        <div className="p-3 flex gap-2 border-t">
          <input value={text} onChange={e=>setText(e.target.value)} placeholder="Type a message..." className="flex-1 bg-[#f5f5f5] rounded-full px-4 py-3 text-sm outline-none" />
          <button onClick={()=>{if(text){setMsgs([...msgs,{from:"me", text}]); setText("")}}} className="w-11 h-11 rounded-full bg-black text-white">↑</button>
        </div>
      </div>
    </div>
  )
}