"use client"
import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { auth, db } from "@/lib/firebase"
import { onAuthStateChanged } from "firebase/auth"
import { collection, query, where, getDocs } from "firebase/firestore"

export default function Matches() {
  const [likes, setLikes] = useState<any[]>([])
  const [loading, setLoading] = useState(true)
  const router = useRouter()

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, async (user) => {
      if (!user) {
        router.push("/login")
      } else {
        // Get likes for this user
        const q = query(collection(db, "likes"), where("userId", "==", user.uid))
        const snap = await getDocs(q)
        const data = snap.docs.map(d => d.data())
        setLikes(data)
        setLoading(false)
      }
    })
    return () => unsub()
  }, [router])

  if (loading) return <div className="min-h-screen flex items-center justify-center bg-[#fdf2f8]"><p className="font-bold text-purple-700">Loading your Kigambo matches...</p></div>

  return (
    <div className="min-h-screen bg-[#fdf2f8] p-6">
      <div className="max-w-md mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-black text-purple-900">My Likes ❤️</h1>
          <button onClick={() => router.push("/discover")} className="bg-white border px-4 py-2 rounded-full font-bold text-sm">Back to Discover</button>
        </div>
        
        {likes.length === 0 ? (
          <div className="bg-white p-10 rounded-3xl text-center shadow">
            <p className="text-5xl mb-4">💔</p>
            <p className="font-bold">No likes yet</p>
            <p className="text-gray-500 text-sm">Go to Discover and tap ❤️</p>
          </div>
        ) : (
          <div className="grid gap-4">
            {likes.map((like, idx) => (
              <div key={idx} className="bg-white p-4 rounded-2xl shadow flex gap-4 items-center">
                <img src={like.likedImage} className="w-16 h-16 rounded-full object-cover" />
                <div>
                  <p className="font-bold text-purple-900">{like.likedName}</p>
                  <p className="text-xs text-gray-500">You liked this person</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}