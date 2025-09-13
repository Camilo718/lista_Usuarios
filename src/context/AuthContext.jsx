import { createContext, useContext, useMemo, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const AuthContext = createContext(null)

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null)
  const navigate = useNavigate()

  const login = (username, password) => {
    const ok = username.trim() === 'admin' && password === '1234'

    if (!ok) return { ok: false, message: 'credenciales inválidas' }

    const session = { username, name: 'Administrador' }
    setUser(session)
    navigate('/usuarios', { replace: true })

    return { ok: true }
  }

  const logout = () => {
    setUser(null)
    navigate('/login', { replace: true })
  }

  const value = useMemo(
    () => ({
      user,
      isAuthenticated: !!user,
      login,
      logout,
    }),
    [user]   // ✅ Aquí pasamos dependencias correctas
  )

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export function useAuth() {
  const ctx = useContext(AuthContext)
  if (!ctx) throw new Error('useAuth debe usarse dentro de <AuthProvider>')
  return ctx
}