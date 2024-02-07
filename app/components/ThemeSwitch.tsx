"use client"

import { MoonIcon, SunIcon } from "@/app/components/Icons"
import { useTheme } from "next-themes"
import React from "react"

const ThemeSwitch = () => {
  const [mounted, setMounted] = React.useState(false)
  const { theme, setTheme } = useTheme()

  React.useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <button
      className="border border-purple-500 rounded-2xl p-1 hover:bg-purple-500 hover:bg-opacity-10 dark:hover:bg-opacity-10 dark:hover:bg-amber-50"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      {theme === "dark" ? <SunIcon /> : <MoonIcon />}
    </button>
  )
}

export default ThemeSwitch
