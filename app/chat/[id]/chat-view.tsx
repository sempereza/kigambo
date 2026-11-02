"use client"

import Image from "next/image"
import Link from "next/link"
import { FormEvent, KeyboardEvent, useEffect, useRef, useState } from "react"
import { matches } from "@/lib/matches"
import { ThemeToggle } from "../../theme-toggle"

type Message = {
  id: number
  sender: "them" | "me"
  text: string
  time: string
}

const startingThreads: Record<string, Message[]> = {
  "1": [
    { id: 1, sender: "them", text: "Hey Abdul! Thanks for the like 💜", time: "10:24" },
    { id: 2, sender: "me", text: "Hi Kembabazi! Your Lake Mburo photos are beautiful. Is that your favourite spot?", time: "10:26" },
    { id: 3, sender: "them", text: "It really is. I love a quiet weekend away from the city.", time: "10:31" },
    { id: 4, sender: "me", text: "That sounds like a perfect weekend ☀️", time: "10:33" },
  ],
  "2": [
    { id: 1, sender: "them", text: "I found a little coffee place by the water that you would love.", time: "09:12" },
    { id: 2, sender: "me", text: "We should check it out sometime", time: "09:18" },
  ],
  "3": [{ id: 1, sender: "them", text: "Hi! I think we both have a soft spot for good music 🎶", time: "Yesterday" }],
}

export default function ChatView({ id }: { id: string }) {
  const activeId = id || "1"
  const person = matches.find((match) => match.id === activeId) ?? matches[0]
  const [draft, setDraft] = useState("")
  const [threads, setThreads] = useState(startingThreads)
  const messageEndRef = useRef<HTMLDivElement>(null)
  const messages = threads[activeId] ?? []

  useEffect(() => {
    messageEndRef.current?.scrollIntoView({ behavior: "smooth", block: "end" })
  }, [activeId, messages.length])

  function sendMessage(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const text = draft.trim()
    if (!text) return

    const time = new Intl.DateTimeFormat("en", {
      hour: "numeric",
      minute: "2-digit",
    }).format(new Date())

    setThreads((current) => ({
      ...current,
      [activeId]: [
        ...(current[activeId] ?? []),
        { id: Date.now(), sender: "me", text, time },
      ],
    }))
    setDraft("")
  }

  function handleComposerKeyDown(event: KeyboardEvent<HTMLTextAreaElement>) {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault()
      event.currentTarget.form?.requestSubmit()
    }
  }

  return (
    <main className="h-dvh min-h-[480px] overflow-hidden bg-[var(--background)] text-[var(--foreground)] sm:p-5 lg:p-8">
      <div className="mx-auto flex h-full w-full max-w-[1240px] overflow-hidden border-[var(--border)] bg-[var(--surface)] sm:rounded-2xl sm:border sm:shadow-[0_24px_80px_rgba(33,26,34,0.08)]">
        <aside className="hidden w-[320px] shrink-0 flex-col border-r border-[var(--border)] lg:flex xl:w-[360px]">
          <div className="flex h-[76px] items-center justify-between border-b border-[var(--border)] px-6">
            <Link href="/discover" className="text-sm font-black tracking-[0.16em] text-[#8B5CF6]">KIGAMBO</Link>
            <ThemeToggle />
          </div>
          <div className="px-6 pb-3 pt-6">
            <h1 className="text-2xl font-black">Messages</h1>
            <p className="mt-1 text-sm text-[var(--muted)]">Your connections, all in one place.</p>
          </div>
          <nav aria-label="Conversations" className="min-h-0 flex-1 overflow-y-auto px-3 pb-4 pt-2">
            {matches.map((match) => {
              const isActive = match.id === activeId
              return (
                <Link
                  key={match.id}
                  href={`/chat/${match.id}`}
                  aria-current={isActive ? "page" : undefined}
                  className={`flex items-center gap-3 rounded-xl px-3 py-3 transition-colors ${isActive ? "bg-[var(--surface-muted)]" : "hover:bg-[var(--surface-muted)]/70"}`}
                >
                  <span className="relative shrink-0">
                    <Image src={match.image} alt="" width={48} height={48} unoptimized className="size-12 rounded-full object-cover" />
                    {match.online && <span className="absolute bottom-0 right-0 size-3 rounded-full border-2 border-[var(--surface)] bg-[#39a875]" />}
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="flex items-baseline justify-between gap-2">
                      <span className="truncate text-sm font-bold">{match.name}, {match.age}</span>
                      <span className="shrink-0 text-[11px] text-[var(--muted)]">{match.time}</span>
                    </span>
                    <span className="mt-1 block truncate text-xs text-[var(--muted)]">{match.preview}</span>
                  </span>
                </Link>
              )
            })}
          </nav>
          <div className="border-t border-[var(--border)] p-4">
            <Link href="/matches" className="flex min-h-11 items-center justify-center rounded-full border border-[var(--border)] text-sm font-semibold transition-colors hover:bg-[var(--surface-muted)]">
              Back to matches
            </Link>
          </div>
        </aside>

        <section aria-label={`Conversation with ${person.name}`} className="flex min-w-0 flex-1 flex-col">
          <header className="z-10 flex min-h-[72px] shrink-0 items-center gap-3 border-b border-[var(--border)] bg-[var(--surface)] px-4 sm:px-6">
            <Link href="/matches" aria-label="Back to matches" className="grid size-10 shrink-0 place-items-center rounded-full text-xl text-[var(--muted)] transition-colors hover:bg-[var(--surface-muted)] lg:hidden">←</Link>
            <Image src={person.image} alt={`${person.name}'s profile`} width={44} height={44} unoptimized className="size-11 shrink-0 rounded-full object-cover" />
            <div className="min-w-0 flex-1">
              <p className="truncate text-sm font-bold">{person.name}, {person.age}</p>
              <p className="mt-0.5 flex items-center gap-1.5 text-xs text-[var(--muted)]">
                <span className={`size-1.5 rounded-full ${person.online ? "bg-[#39a875]" : "bg-[var(--muted)]/50"}`} />
                {person.online ? "Online now" : person.location}
              </p>
            </div>
            <div className="lg:hidden"><ThemeToggle /></div>
            <Link href="/matches" aria-label="View matches" title="Matches" className="hidden size-10 place-items-center rounded-full border border-[var(--border)] text-lg transition-colors hover:bg-[var(--surface-muted)] sm:grid">♡</Link>
          </header>

          <div className="flex min-h-0 flex-1 flex-col bg-[radial-gradient(ellipse_at_top,var(--surface-muted)_0%,var(--surface)_42%)]">
            <div className="flex min-h-0 flex-1 flex-col overflow-y-auto px-4 py-6 sm:px-8">
              <div className="mx-auto mb-7 max-w-[300px] text-center">
                <Image src={person.image} alt="" width={76} height={76} unoptimized className="mx-auto size-[76px] rounded-full object-cover ring-4 ring-[var(--surface)] shadow-md" />
                <p className="mt-3 text-base font-bold">You matched with {person.name}</p>
                <p className="mt-1 text-xs text-[var(--muted)]">{person.age} · {person.location}</p>
                <p className="mt-3 inline-flex rounded-full border border-[var(--border)] bg-[var(--surface)] px-3 py-1.5 text-[11px] font-medium text-[var(--muted)]">Say hello and start something good</p>
              </div>

              <div className="mb-5 flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.14em] text-[var(--muted)]">
                <span className="h-px flex-1 bg-[var(--border)]" />Today<span className="h-px flex-1 bg-[var(--border)]" />
              </div>

              <div role="log" aria-live="polite" aria-label="Messages" className="space-y-3">
                {messages.map((message, index) => {
                  const previous = messages[index - 1]
                  const grouped = previous?.sender === message.sender
                  return (
                    <div key={message.id} className={`flex ${message.sender === "me" ? "justify-end" : "justify-start"} ${grouped ? "mt-1" : "mt-4"}`}>
                      <div className={`max-w-[min(82%,480px)] sm:max-w-[75%] ${message.sender === "me" ? "text-right" : "text-left"}`}>
                        <p className={`break-words px-4 py-3 text-sm leading-relaxed ${message.sender === "me" ? "rounded-[20px] rounded-br-md bg-gradient-to-br from-[#8B5CF6] to-[#e04f7d] text-white" : "rounded-[20px] rounded-bl-md border border-[var(--border)] bg-[var(--surface)] shadow-[0_2px_8px_rgba(33,26,34,0.04)]"}`}>
                          {message.text}
                        </p>
                        <span className={`mt-1 block px-1 text-[10px] text-[var(--muted)] ${message.sender === "me" ? "text-right" : "text-left"}`}>{message.time}</span>
                      </div>
                    </div>
                  )
                })}
                <div ref={messageEndRef} />
              </div>
            </div>

            <form onSubmit={sendMessage} className="shrink-0 border-t border-[var(--border)] bg-[var(--surface)] px-3 pb-[calc(env(safe-area-inset-bottom)+12px)] pt-3 sm:px-6 sm:pb-4">
              <div className="mx-auto flex max-w-[860px] items-end gap-2 rounded-[24px] border border-[var(--border)] bg-[var(--surface-muted)] p-1.5 pl-4 transition-colors focus-within:border-[#a581ee]">
                <label htmlFor="message-input" className="sr-only">Write a message</label>
                <textarea
                  id="message-input"
                  value={draft}
                  onChange={(event) => setDraft(event.target.value)}
                  onKeyDown={handleComposerKeyDown}
                  placeholder={`Message ${person.name}...`}
                  rows={1}
                  className="max-h-32 min-h-10 flex-1 resize-none bg-transparent py-2.5 text-sm leading-5 text-[var(--foreground)] outline-none placeholder:text-[var(--muted)]"
                />
                <button type="submit" disabled={!draft.trim()} aria-label="Send message" className="grid size-10 shrink-0 place-items-center rounded-full bg-gradient-to-br from-[#8B5CF6] to-[#e04f7d] text-lg font-bold text-white transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-40">↑</button>
              </div>
              <p className="mt-2 hidden text-center text-[10px] text-[var(--muted)] sm:block">Press Enter to send · Shift + Enter for a new line</p>
            </form>
          </div>
        </section>
      </div>
    </main>
  )
}