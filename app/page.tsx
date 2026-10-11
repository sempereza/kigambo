export default function Home() {
  return (
    <div className="min-h-screen bg-[#fdf2f8] text-gray-900">
      {/* NAV */}
      <nav className="flex justify-between items-center p-4 max-w-7xl mx-auto bg-white rounded-full mt-4 shadow-sm px-8">
        <h1 className="text-2xl font-black text-purple-800">💜 Kigambo</h1>
        <div className="hidden md:flex gap-6 text-sm font-medium">
          <span className="text-purple-700">Home</span><span>Features</span><span>How it Works</span><span>Safety</span>
        </div>
        <div className="flex gap-2">
          <button className="px-4 py-2 rounded-full border">Log In</button>
          <button className="px-4 py-2 rounded-full bg-gradient-to-r from-purple-600 to-pink-500 text-white">Join Now</button>
        </div>
      </nav>

      {/* HERO */}
      <section className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 p-8 mt-8">
        <div>
          <h2 className="text-5xl font-black leading-tight text-purple-950">Find Love. Share Stories. Build Connection.</h2>
          <p className="mt-4 text-gray-600">Kigambo — meaning "love talk" • Made for Ugandans to connect meaningfully, chat, and build real relationships.</p>
          <div className="mt-6 flex gap-3">
            <button className="px-6 py-3 rounded-full bg-gradient-to-r from-purple-600 to-pink-500 text-white font-bold">Get Started — It's Free →</button>
            <button className="px-6 py-3 rounded-full border bg-white">Download App</button>
          </div>
          <div className="mt-6 flex gap-4 text-xs">
            <span>✅ Verified Profiles</span><span>🛡️ Secure & Private</span><span>📍 Made for Uganda</span>
          </div>
        </div>
        <div className="bg-gradient-to-br from-pink-200 to-purple-300 rounded-[2rem] p-6 flex items-center justify-center">
          <div className="bg-white rounded-2xl p-4 shadow-xl w-80">
            <p className="font-bold">New Matches <span className="float-right bg-purple-100 text-purple-700 px-2 py-1 rounded-full text-xs">98% Match</span></p>
            <div className="mt-3 flex gap-3 items-center">
              <div className="w-12 h-12 bg-pink-200 rounded-full"></div>
              <div><p className="font-bold">Aisha, 24 • Kampala</p><p className="text-xs text-gray-500">Artist • Loves coffee, music</p></div>
            </div>
            <div className="mt-3 flex justify-end gap-2"><button className="text-pink-500">♡</button></div>
          </div>
        </div>
      </section>

      {/* DISCOVER */}
      <section className="bg-white py-12">
        <h3 className="text-3xl font-bold text-center">Discover People Near You</h3>
        <p className="text-center text-gray-500">Browse, like, and connect with locals. Safe, fun, respectful.</p>
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-6 p-6 mt-6">
          {[
            {name:"Olivia, 25 • Kampala", bio:"Teacher • Travel • Reading", match:"92%"},
            {name:"Joseph, 26 • Jinja", bio:"Entrepreneur • Foodie", match:"95%"},
            {name:"Naledi, 23 • Mbarara", bio:"Designer • Art • Hiking", match:"90%"},
            {name:"David, 27 • Kampala", bio:"Musician • Photographer", match:"94%"},
          ].map(p=>(
            <div key={p.name} className="border rounded-2xl p-4 flex gap-4">
              <div className="w-16 h-16 bg-gray-200 rounded-xl"></div>
              <div className="flex-1"><p className="font-bold">{p.name} <span className="text-xs bg-purple-100 text-purple-700 px-2 py-1 rounded-full">{p.match}</span></p><p className="text-xs text-gray-500">{p.bio}</p><div className="mt-2 flex gap-2"><button className="w-8 h-8 border rounded-full">✕</button><button className="w-8 h-8 bg-pink-100 text-pink-500 rounded-full">♡</button></div></div>
            </div>
          ))}
        </div>
      </section>
      <footer className="bg-[#2d1b4e] text-white p-8 text-center text-sm mt-8">© 2026 Kigambo. Made with ♥ in Uganda. All rights reserved.</footer>
    </div>
  )
}