import { useState } from 'react'

import { useAuth } from '../context/AuthContext'

export default function Login() {
  const { login } = useAuth();
  const [form, setForm] = useState({ username: '', password: '' })
  const [error, setError] = useState('')

  const onChange = (e) => {
    const { name, value } = e.target
    setForm((f) => ({
      ...f,
      [name]: value,
    }))
  }

  const onSubmit = (e) => {
    e.preventDefault()
    setError('')

    const res = login(form.username, form.password)

    if (!res?.ok) setError(res?.message || 'no se puedo inciar sesión')
  }

  return (
    <div className="min-h-screen w-auto grid place-items-center bg-gray-100 p-4">
      <form
        onSubmit={onSubmit}
        className="bg-white rounded-2xl p-6 w-full mx-w-sm shadow"
        action=""
      >
        <h1 className="text-2xl font-semibold mb-4 text-center">
          INICIAR SESION
        </h1>
        <label className="block mb2">
          <span className="text-sm text-gray-600">Usuario</span>
          <input
            className="mt-1 w-full border rounded p-2"
            type="text"
            name="username"
            value={form.username}
            onChange={onChange}
            placeholder="admin"
          />
        </label>
        <label className="block mb2 ">
          <span className="text-sm text-gray-600">Contraseña</span>
          <input
            className="mt-1 w-full border rounded p-2"
            type="password"
            name="password"
            autoComplete="current-password"
            value={form.password}
            onChange={onChange}
            placeholder='1234'
          />
        </label>

        <button className="w-full rounded bg-blue-600 text-white py-2">
          LOGIN
        </button>
      </form>
    </div>
  )
}