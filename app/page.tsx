import { ThemeToggle } from "./theme-toggle"

export default function Home(){
  return (
    <div className="home-page min-h-screen relative flex flex-col bg-[var(--background)] text-[var(--foreground)]">
      <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('/hero.jpg')" }} />
      <div className="home-image-shade absolute inset-0" />
      <div className="home-image-gradient absolute inset-0" />

      <div className="relative z-10 flex flex-col min-h-screen">
        <header className="p-6 flex justify-between items-center">
          <p className="font-black tracking-widest">💜 KIGAMBO</p>
          <div className="flex items-center gap-3">
            <ThemeToggle />
            <a href="/login" className="bg-[var(--surface)] text-[var(--foreground)] px-5 py-2 rounded-full text-sm font-bold">Log In</a>
          </div>
        </header>

        <div className="flex-1 flex flex-col justify-center px-6 max-w-[600px] mx-auto text-center">
          <p className="text-[var(--muted)] text-[11px] tracking-[0.2em] font-bold">LUXURY DATING • UGANDA</p>
          <h1 className="text-[42px] md:text-[56px] font-black leading-[0.9] mt-4">
            Find Your <br/>
            <span className="bg-gradient-to-r from-[#8B5CF6] to-[#FF4D6D] bg-clip-text text-transparent">Forever</span> <br/>
            in Kampala
          </h1>
          <p className="text-[var(--muted)] mt-4 text-[15px]">Join 10,000+ Ugandans finding love at sunset.</p>
          
          <a href="/login" className="mt-8 w-full py-4 rounded-full bg-gradient-to-r from-[#8B5CF6] to-[#FF4D6D] text-white font-bold text-center block">
            Start Your Story →
          </a>
          <p className="text-[var(--muted)] text-[11px] mt-3">18+ • Private & Secure • Made for Uganda 🇺🇬</p>
        </div>
        <p className="text-center text-[var(--muted)] text-[10px] pb-6">© 2026 Kigambo</p>
      </div>
    </div>
  )
}