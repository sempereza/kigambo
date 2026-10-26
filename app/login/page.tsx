"use client"
import { useEffect, useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { auth } from "@/lib/firebase"
import { ThemeToggle } from "../theme-toggle"
import {
  getRedirectResult,
  GoogleAuthProvider,
  signInWithPopup,
  signInWithRedirect,
} from "firebase/auth"

export default function Login() {
  const [loading, setLoading] = useState(false)
  const [loginError, setLoginError] = useState("")
  const router = useRouter()

  useEffect(() => {
    getRedirectResult(auth)
      .then((result) => {
        if (result) router.replace("/discover")
      })
      .catch((error) => {
        console.error(error)
        setLoginError("Google sign-in could not be completed. Please try again.")
      })
  }, [router])

  const handleGoogle = async () => {
    setLoginError("")
    try {
      setLoading(true)
      const provider = new GoogleAuthProvider()
      await signInWithPopup(auth, provider)
      router.push('/discover')
    } catch (err) {
      console.error(err)
      if (
        err instanceof Error &&
        "code" in err &&
        err.code === "auth/popup-blocked"
      ) {
        try {
          await signInWithRedirect(auth, new GoogleAuthProvider())
          return
        } catch (redirectError) {
          console.error(redirectError)
        }
      }
      setLoginError("Google sign-in failed. Please try again or explore as a guest.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <main className="relative min-h-screen bg-[var(--background)] text-[var(--foreground)] lg:grid lg:grid-cols-2">
      <div className="absolute right-6 top-6 z-20 lg:right-10 lg:top-9">
        <ThemeToggle />
      </div>
      <section className="relative min-h-[280px] h-[38vh] overflow-hidden text-white lg:h-screen">
        <div
          className="absolute inset-0 bg-cover bg-[center_42%]"
          style={{ backgroundImage: "url('/hero.jpg')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#100b11] via-black/15 to-black/35 lg:bg-gradient-to-r lg:from-transparent lg:via-black/10 lg:to-[#100b11]" />
        <Link href="/" className="absolute left-6 top-6 z-10 font-black tracking-[0.2em] text-sm lg:left-10 lg:top-9">
          <span className="bg-gradient-to-r from-[#8B5CF6] to-[#FF4D6D] bg-clip-text text-transparent">KIGAMBO</span>
        </Link>
        <div className="absolute bottom-7 left-6 right-6 lg:bottom-14 lg:left-12 lg:right-12">
          <p className="text-[10px] font-bold tracking-[0.22em] text-white/70">LUXURY DATING • UGANDA</p>
          <p className="mt-3 max-w-md text-3xl font-black leading-tight sm:text-4xl">
            Find your forever in Kampala.
          </p>
        </div>
      </section>

      <section className="flex min-h-[62vh] items-center justify-center px-6 pb-8 pt-5 sm:px-10 lg:min-h-screen lg:px-12 lg:py-12">
        <div className="w-full max-w-[400px]">
          <p className="text-[10px] font-bold tracking-[0.22em] text-[#FF8290]">YOUR STORY STARTS HERE</p>
          <h1 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">Welcome back</h1>
          <p className="mt-3 max-w-sm text-sm leading-relaxed text-[var(--muted)]">
            A meaningful connection is closer than you think.
          </p>

          <div className="mt-8 space-y-3">
            <button
              onClick={handleGoogle}
              disabled={loading}
              className="flex w-full items-center justify-center gap-3 rounded-full bg-gradient-to-r from-[#8B5CF6] to-[#FF4D6D] px-5 py-4 text-sm font-bold text-white transition-opacity hover:opacity-90 disabled:cursor-wait disabled:opacity-60"
            >
              <span className="text-base font-black" aria-hidden="true">G</span>
              {loading ? "Please wait..." : "Continue with Google"}
            </button>
            <button
              onClick={() => router.push('/discover')}
              className="flex w-full items-center justify-center gap-3 rounded-full border border-white/15 bg-white/[0.04] px-5 py-3.5 text-sm font-medium transition-colors hover:bg-white/10"
            >
              <span aria-hidden="true"></span> Continue with Apple
            </button>
            <button className="flex w-full items-center justify-center gap-3 rounded-full border border-white/15 bg-white/[0.04] px-5 py-3.5 text-sm font-medium transition-colors hover:bg-white/10">
              <span aria-hidden="true">✉</span> Continue with Email or Phone
            </button>
          </div>
          {loginError && (
            <p role="alert" className="mt-3 text-center text-xs text-[#FF8290]">
              {loginError}
            </p>
          )}

          <button
            onClick={() => router.push('/discover')}
            className="mt-6 w-full text-center text-sm font-semibold text-[#c7a8ff] transition-colors hover:text-white"
          >
            Explore as Guest <span aria-hidden="true">→</span>
          </button>

          <p className="mt-8 text-center text-[10px] leading-relaxed text-[var(--muted)]">
            By continuing, you agree to Kigambo&apos;s Terms &amp; Privacy Policy.
          </p>
        </div>
      </section>
    </main>
  )
}