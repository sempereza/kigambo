"use client"

import { useEffect, useSyncExternalStore } from "react"

type Theme = "light" | "dark"

const listeners = new Set<() => void>()

function subscribe(listener: () => void) {
  listeners.add(listener)
  return () => listeners.delete(listener)
}

function getTheme(): Theme {
  return document.documentElement.dataset.theme === "dark" ? "dark" : "light"
}

function getServerTheme(): Theme {
  return "light"
}

function notifyThemeChange() {
  listeners.forEach((listener) => listener())
}

export function ThemeToggle() {
  const theme = useSyncExternalStore(subscribe, getTheme, getServerTheme)

  useEffect(() => {
    const storedTheme = window.localStorage.getItem("kigambo-theme")
    const initialTheme = storedTheme === "dark" ? "dark" : "light"
    document.documentElement.dataset.theme = initialTheme
    notifyThemeChange()
  }, [])

  const toggleTheme = () => {
    const nextTheme = theme === "dark" ? "light" : "dark"
    document.documentElement.dataset.theme = nextTheme
    window.localStorage.setItem("kigambo-theme", nextTheme)
    notifyThemeChange()
  }

  return (
    <label className="inline-flex min-h-10 cursor-pointer items-center gap-2.5 rounded-full border border-[var(--border)] bg-[var(--surface)] px-3 text-xs font-semibold text-[var(--foreground)] shadow-sm">
      <span aria-hidden="true" className="text-sm">☼</span>
      <input
        type="checkbox"
        role="switch"
        aria-label="Dark mode"
        checked={theme === "dark"}
        onChange={toggleTheme}
        className="peer sr-only"
      />
      <span className="relative h-5 w-9 rounded-full bg-black/15 transition-colors peer-checked:bg-[#8B5CF6] peer-checked:[&>span]:translate-x-4 peer-focus-visible:outline peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-[#8B5CF6]">
        <span className="absolute left-0.5 top-0.5 h-4 w-4 rounded-full bg-white shadow transition-transform" />
      </span>
      <span>{theme === "dark" ? "Dark" : "Light"}</span>
    </label>
  )
}