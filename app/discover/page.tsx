"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ThemeToggle } from "../theme-toggle";

type User = {
  id: number;
  name: string;
  age: number;
  location: string;
  tribe: string;
  bio: string;
  image: string;
};

const users: User[] = [
  {
    id: 1,
    name: "Sarah",
    age: 24,
    location: "Ntinda, 1.2km from Acacia Mall",
    tribe: "Muganda",
    bio: "Love Lake Victoria sunsets 🌅",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=900&auto=format&fit=crop",
  },
  {
    id: 2,
    name: "Moses",
    age: 27,
    location: "Kololo, 0.5km away",
    tribe: "Munyankole",
    bio: "Makerere grad, loves Cafe Javas",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=900&auto=format&fit=crop",
  },
];

export default function Discover() {
  const router = useRouter();
  const [index, setIndex] = useState(0);
  const [speakingId, setSpeakingId] = useState<number | null>(null);
  const [voiceError, setVoiceError] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const person = users[index % users.length];

  useEffect(() => {
    return () => audioRef.current?.pause();
  }, []);

  const toggleVoiceIntro = (user: User) => {
    if (speakingId === user.id) {
      audioRef.current?.pause();
      audioRef.current = null;
      setSpeakingId(null);
      return;
    }

    audioRef.current?.pause();
    const audio = new Audio(`/api/voice-intro?id=${user.id}`);
    audioRef.current = audio;
    audio.onended = () => setSpeakingId(null);
    audio.onerror = () => {
      setSpeakingId(null);
      setVoiceError(true);
    };
    setVoiceError(false);
    setSpeakingId(user.id);
    void audio.play().catch(() => {
      setSpeakingId(null);
      setVoiceError(true);
    });
  };

  const showNextProfile = () => {
    audioRef.current?.pause();
    audioRef.current = null;
    setSpeakingId(null);
    setVoiceError(false);
    setIndex((current) => current + 1);
  };

  return (
    <main className="min-h-screen bg-[var(--background)] px-5 pb-10 pt-5 text-[var(--foreground)] sm:px-8">
      <div className="mx-auto w-full max-w-[480px]">
        <header className="flex items-center justify-between gap-3 py-3">
          <Link href="/" className="font-black tracking-[0.12em] text-[#8B5CF6]">KIGAMBO</Link>
          <nav aria-label="Main navigation" className="flex items-center gap-2">
            <ThemeToggle />
            <button
              type="button"
              onClick={() => router.push("/matches")}
              aria-label="Matches"
              title="Matches"
              className="grid size-10 place-items-center rounded-full border border-[var(--border)] bg-[var(--surface)] text-lg transition hover:border-[#8B5CF6]"
            >
              ♡
            </button>
          </nav>
        </header>

        <div className="mb-5 mt-5">
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#a75d49]">Meet someone new</p>
          <h1 className="mt-1 text-3xl font-black">Discover</h1>
        </div>

        <section aria-label={`Profile for ${person.name}`} className="overflow-hidden rounded-[1.5rem] border border-[var(--border)] bg-[var(--surface)] shadow-[0_16px_50px_rgba(33,26,34,0.12)]">
          <div className="relative h-[min(62vh,520px)] min-h-[360px] bg-[var(--surface-muted)]">
            <img
              src={person.image}
              alt={`${person.name}, ${person.age}`}
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent px-5 pb-5 pt-20 text-white">
              <p className="text-3xl font-black">{person.name}, {person.age}</p>
              <p className="mt-1 text-sm text-white/85">{person.location}</p>
            </div>
            <button
              type="button"
              onClick={() => toggleVoiceIntro(person)}
              aria-pressed={speakingId === person.id}
              className="absolute left-4 top-4 inline-flex min-h-11 items-center gap-2 rounded-full border border-white/40 bg-black/55 px-4 text-sm font-semibold text-white backdrop-blur transition hover:bg-black/75 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              <span aria-hidden="true">{speakingId === person.id ? "Ⅱ" : "▶"}</span>
              {speakingId === person.id ? "Stop intro" : "Hear voice intro"}
            </button>
          </div>

          <div className="p-5">
            <div className="flex items-center justify-between gap-3">
              <p className="text-sm font-semibold">{person.tribe}</p>
              <p className="text-sm text-[var(--muted)]">{index + 1} of {users.length}</p>
            </div>
            <p className="mt-2 text-sm text-[var(--muted)]">{person.bio}</p>
            <p className="sr-only" aria-live="polite">
              {voiceError ? "Voice intro could not be played. Check your connection and try again." : speakingId === person.id ? `Playing ${person.name}'s voice intro` : ""}
            </p>
            {voiceError && <p role="alert" className="mt-3 text-sm text-[#a75d49]">Voice intro could not be played. Check your connection and try again.</p>}

            <div className="mt-5 grid grid-cols-2 gap-3">
              <button
                type="button"
                onClick={showNextProfile}
                className="min-h-12 rounded-full border border-[var(--border)] bg-[var(--surface-muted)] px-4 font-bold transition hover:border-[var(--foreground)]"
              >
                <span aria-hidden="true" className="mr-2">×</span>Pass
              </button>
              <button
                type="button"
                onClick={() => {
                  showNextProfile();
                  router.push("/matches");
                }}
                className="min-h-12 rounded-full bg-gradient-to-r from-[#8B5CF6] to-[#FF4D6D] px-4 font-bold text-white shadow-md transition hover:brightness-105"
              >
                <span aria-hidden="true" className="mr-2">♥</span>Like
              </button>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}