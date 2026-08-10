'use client'

import { useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { toast } from 'sonner'
import { useAuth } from '@/hooks/useAuth'
import { loginSchema, type LoginInput } from '@/lib/validations/auth'
import { FullPageSpinner } from '@/components/shared/LoadingSpinner'

export default function SignInPage() {
  const router = useRouter()
  const { user, loading, signInWithEmail } = useAuth()

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginInput>({
    resolver: zodResolver(loginSchema),
  })

  useEffect(() => {
    if (!loading && user) {
      router.replace('/team')
    }
  }, [loading, user, router])

  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    if (params.get('verification') === 'sent') {
      toast.success('Verification email sent. Verify your email, then sign in.')
    }
  }, [])

  if (loading) return <FullPageSpinner />

  const onSubmit = async (data: LoginInput) => {
    try {
      await signInWithEmail(data.email, data.password)
      toast.success('Signed in successfully')
      router.replace('/team')
      router.refresh()
    } catch (error: unknown) {
      if (error instanceof Error && error.message.includes('email-not-verified')) {
        toast.error('Please verify your email before signing in.')
      } else {
        toast.error('Invalid email or password')
      }
    }
  }

  return (
    <div className="signin-page fixed inset-0 flex items-center justify-center px-4">
      <div className="w-full max-w-sm space-y-8">
        <div className="flex items-center justify-center mb-20">
          <h1 className="text-5xl font-bold tracking-tight text-[#3DD7AA]">FieldCapture</h1>
        </div>
        <div className="space-y-2 text-center">
          <h1 className="text-2xl font-bold tracking-tight text-white">Sign in</h1>
          <p className="text-sm text-zinc-400">Enter your credentials to continue</p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          <div className="space-y-2">
            <label htmlFor="email" className="text-sm font-medium text-zinc-400">
              Email
            </label>
            <input
              id="email"
              type="email"
              autoComplete="email"
              aria-invalid={!!errors.email}
              aria-describedby={errors.email ? 'email-error' : undefined}
              className="w-full rounded-xl border-0 bg-white px-4 py-3 text-sm text-zinc-900 shadow-sm placeholder:text-zinc-400 focus:ring-2 focus:ring-[#3DD7AA] focus:outline-none aria-invalid:ring-2 aria-invalid:ring-red-500"
              placeholder="you@example.com"
              {...register('email')}
            />
            {errors.email && (
              <p id="email-error" className="text-xs text-red-400" role="alert">
                {errors.email.message}
              </p>
            )}
          </div>

          <div className="space-y-2">
            <label htmlFor="password" className="text-sm font-medium text-zinc-400">
              Password
            </label>
            <input
              id="password"
              type="password"
              autoComplete="current-password"
              aria-invalid={!!errors.password}
              aria-describedby={errors.password ? 'password-error' : undefined}
              className="w-full rounded-xl border-0 bg-white px-4 py-3 text-sm text-zinc-900 shadow-sm placeholder:text-zinc-400 focus:ring-2 focus:ring-[#3DD7AA] focus:outline-none aria-invalid:ring-2 aria-invalid:ring-red-500"
              placeholder="••••••••"
              {...register('password')}
            />
            {errors.password && (
              <p id="password-error" className="text-xs text-red-500" role="alert">
                {errors.password.message}
              </p>
            )}
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full rounded-xl bg-[#3DD7AA] px-4 py-3 text-sm font-semibold text-[#07070A] shadow-[0_8px_32px_rgb(61_215_170/0.35)] transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-50"
          >
            {isSubmitting ? 'Signing in…' : 'Sign in'}
          </button>
        </form>

        <p className="text-center text-sm text-zinc-400">
          Don&apos;t have an account?{' '}
          <Link
            href="/auth/signup"
            className="font-medium text-[#3DD7AA] underline underline-offset-2 hover:opacity-80"
          >
            Create one
          </Link>
        </p>
      </div>
    </div>
  )
}
