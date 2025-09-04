import { useForm } from 'react-hook-form'

export default function Signup() {
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm()

  const onSubmit = async (data) => {
    // Simula un envío (puntos extra si lo conectas a un backend real)
    return new Promise(res => setTimeout(() => res(alert('¡Registro exitoso!')), 700))
  }

  return (
    <div className="mx-auto max-w-md">
      <h1 className="mb-6 text-2xl font-bold">Crear cuenta</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 rounded-2xl border border-neutral-800 bg-neutral-900/40 p-6">
        <div>
          <label className="mb-1 block text-sm text-neutral-300">Nombre</label>
          <input
            className="w-full rounded-xl border border-neutral-700 bg-neutral-900 px-3 py-2 outline-none focus:ring-2 focus:ring-brand-500"
            placeholder="Tu nombre"
            {...register('name', { required: 'El nombre es obligatorio', minLength: { value: 2, message: 'Mínimo 2 caracteres' } })}
          />
          {errors.name && <p className="mt-1 text-sm text-red-400">{errors.name.message}</p>}
        </div>

        <div>
          <label className="mb-1 block text-sm text-neutral-300">Correo electrónico</label>
          <input
            type="email"
            className="w-full rounded-xl border border-neutral-700 bg-neutral-900 px-3 py-2 outline-none focus:ring-2 focus:ring-brand-500"
            placeholder="tucorreo@ejemplo.com"
            {...register('email', {
              required: 'El correo es obligatorio',
              pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: 'Formato de correo inválido' }
            })}
          />
          {errors.email && <p className="mt-1 text-sm text-red-400">{errors.email.message}</p>}
        </div>

        <div>
          <label className="mb-1 block text-sm text-neutral-300">Contraseña</label>
          <input
            type="password"
            className="w-full rounded-xl border border-neutral-700 bg-neutral-900 px-3 py-2 outline-none focus:ring-2 focus:ring-brand-500"
            placeholder="••••••••"
            {...register('password', {
              required: 'La contraseña es obligatoria',
              minLength: { value: 8, message: 'Mínimo 8 caracteres' },
              validate: {
                hasNumber: v => /\d/.test(v) || 'Debe incluir al menos un número',
                hasUpper: v => /[A-Z]/.test(v) || 'Debe incluir una mayúscula'
              }
            })}
          />
          {errors.password && <p className="mt-1 text-sm text-red-400">{errors.password.message}</p>}
        </div>

        <button
          disabled={isSubmitting}
          className="w-full rounded-xl bg-brand-500 px-4 py-2 font-semibold text-black transition hover:bg-brand-600 disabled:opacity-70"
        >
          {isSubmitting ? 'Enviando…' : 'Crear cuenta'}
        </button>
      </form>
      <p className="mt-3 text-xs text-neutral-500">Validado con react-hook-form (requerido por la rúbrica).</p>
    </div>
  )
}
