"use client"
import { useState } from "react"
import { useRouter } from "next/navigation"
import { auth } from "@/lib/firebase"
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth"

export default function Login() {
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  const handleGoogle = async () => {
    try {
      setLoading(true)
      const provider = new GoogleAuthProvider()
      await signInWithPopup(auth, provider)
      router.push('/discover')
    } catch (err) {
      console.error(err)
      alert("Login failed")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-[#0a0612] text-white flex justify-center p-4">
      <div className="w-full max-w-[390px] min-h-screen bg-gradient-to-b from-[#1a1033] to-[#0a0612] rounded-[2.5rem] border border-white/10 overflow-hidden flex flex-col">
        
        {/* Top glow */}
        <div className="h-24 bg-gradient-to-b from-purple-600/20 to-transparent relative">
          <div className="absolute top-8 left-1/2 -translate-x-1/2 text-center">
            <h1 className="font-black tracking-[0.3em] text-sm">KIGAMBO</h1>
            <p className="text-[8px] tracking-[0.3em] text-white/30 mt-1">LUXURY DATING & INTIMACY</p>
          </div>
        </div>

        <div className="px-8 py-6 flex-1 flex flex-col">
          <h2 className="text-2xl font-bold">Welcome back</h2>
          <p className="text-xs text-white/40 mt-2 leading-relaxed">You deserve a meaningful connection in a private sanctuary</p>

          <div className="mt-8 space-y-3">
            <button onClick={handleGoogle} disabled={loading} className="w-full py-3.5 rounded-full bg-white text-black font-bold text-sm flex items-center justify-center gap-2">
              <span className="text-lg">G</span> {loading ? "Please wait..." : "Continue with Google"}
            </button>
            <button onClick={() => router.push('/discover')} className="w-full py-3.5 rounded-full bg-white/5 border border-white/10 text-sm flex items-center justify-center gap-2">
               Continue with Apple
            </button>
            <button className="w-full py-3.5 rounded-full bg-white/5 border border-white/10 text-sm flex items-center justify-center gap-2">
              ✉ Continue with Email or Phone
            </button>
          </div>

          <button onClick={() => router.push('/discover')} className="mt-6 text-center w-full text-xs text-purple-300">
            Explore as Guest →
          </button>

          <p className="mt-4 text-[9px] text-center text-white/20 leading-relaxed">
            By continuing, you agree and accept<br/>Kigambo's Terms & Privacy Policy
          </p>

          <div className="mt-auto pt-6">
            <div className="h-[140px] rounded-2xl bg-gradient-to-t from-purple-900/30 to-transparent border border-purple-500/10 flex items-end justify-center p-4 relative overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_rgba(168,85,247,0.4),_transparent_70%)]"></div>
              <p className="text-[9px] text-white/30 relative">For Uganda, Designed with Love</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}