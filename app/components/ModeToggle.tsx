"use client"

import * as React from "react"
import { MoonIcon, SunIcon } from "@radix-ui/react-icons"
import { useTheme } from "next-themes"

export function ModeToggle() {
  const { theme, setTheme } = useTheme()

  return (
    <div>
      <button onClick={() => setTheme(theme === "light" ? "dark" : "light")} className="mt-1">
        {theme === "light" ? <SunIcon /> : <MoonIcon />}
      </button>
    </div>
  )
}
