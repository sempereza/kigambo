"use client"
import { useState } from "react"

const MOCK = [
  {id:1, name:"Olivia, 25 - Kampala", bio:"Teacher - Loves travel", match:"92%"},
  {id:2, name:"Joseph, 26 - Jinja", bio:"Entrepreneur - Foodie", match:"95%"},
  {id:3, name:"Aisha, 24 - Kampala", bio:"Artist - Coffee", match:"98%"},
]

export default function Discover() {
  const [i, setI] = useState(0)
  const user = MOCK[i % MOCK.length]

  const next = (liked: boolean) => {
    if(liked) alert("You liked " + user.name + " - Its a match!")
    setI(i+1)
  }

  return (
    <div className="min-h-screen bg-[#fdf2f8] flex flex-col items-center pt-20">
      <h1 className="text-3xl font-black text-purple-900 mb-8">Discover</h1>
      <div className="bg-white rounded-[2rem] p-6 shadow-2xl w-80">
        <div className="h-80 bg-gradient-to-br from-purple-200 to-pink-200 rounded-2xl flex items-center justify-center text-5xl">love</div>
        <h2 className="font-bold mt-4 text-lg text-gray-900">{user.name} <span className="text-xs bg-purple-100 px-2 py-1 rounded-full ml-2">{user.match}</span></h2>
        <p className="text-sm text-gray-500">{user.bio}</p>
        <div className="flex gap-4 mt-6">
          <button onClick={()=>next(false)} className="flex-1 py-3 border-2 rounded-full font-bold">X</button>
          <button onClick={()=>next(true)} className="flex-1 py-3 bg-gradient-to-r from-purple-600 to-pink-500 text-white rounded-full font-bold">Like</button>
        </div>
      </div>
      <a href="/" className="mt-8 text-purple-700 underline">Back to Home</a>
    </div>
  )
}