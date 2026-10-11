"use client"
import { auth } from "@/lib/firebase"
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth"
import { useState } from "react"

export default function Login() {
  const [user, setUser] = useState<any>(null)

  const login = async () => {
    const provider = new GoogleAuthProvider()
    const result = await signInWithPopup(auth, provider)
    setUser(result.user)
  }

  return (
    <div className="min-h-screen bg-[#fdf2f8] flex flex-col items-center justify-center">
      <div className="bg-white p-8 rounded-[2rem] shadow-xl w-80 text-center">
        <h1 className="text-3xl font-black text-purple-900">Kigambo</h1>
        {!user? (
          <div>
            <p className="mt-2 text-gray-600">Sign in to find love</p>
            <button onClick={login} className="mt-6 w-full py-3 bg-white border-2 border-gray-300 text-gray-900 rounded-full font-bold">Continue with Google</button>
            <a href="/discover" className="block mt-4 text-sm text-purple-600">Skip for now</a>
          </div>
        ) : (
          <div>
            <p className="mt-4 text-gray-900 font-bold">Welcome {user.displayName}</p>
            <a href="/discover" className="mt-4 block py-3 bg-gradient-to-r from-purple-600 to-pink-500 text-white rounded-full font-bold text-center">Start Discovering</a>
          </div>
        )}
      </div>
    </div>
  )
}