import { useState, useEffect } from 'react'

export default function SearchInput({ onSearch }) {
  const [query, setQuery] = useState('')

  useEffect(() => {
    const timeout = setTimeout(() => {
      onSearch(query)
    }, 500    )

    return () => clearTimeout(timeout)
  }, [query, onSearch])

  return (
    <input
      className='w-full p-2 border border-gray-300 rounded shadow transition-all focus:outline-none focus:ring-2 focus:ring-blue-500'
      type="text"
      placeholder="Buscar por nombre, perfil o intereses"
      value={query}
      onChange={(e) => setQuery(e.target.value)}
    />
  )
}