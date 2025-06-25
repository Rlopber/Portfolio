import { useEffect, useState } from 'react'

export default function ThemeToggle() {
  const [dark, setDark] = useState(true)

  useEffect(() => {
    const root = document.documentElement
    dark ? root.classList.add('dark') : root.classList.remove('dark')
  }, [dark])

  return (
    <button
      onClick={() => setDark(!dark)}
      className="text-sm border border-gray-400 px-3 py-1 rounded hover:bg-white hover:text-black transition"
    >
      {dark ? '☀️' : '🌙'}
    </button>
  )
}