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
    <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
      {theme === "dark" ? <SunIcon /> : <MoonIcon />}
    </button>
  )
}

export default ThemeSwitch
