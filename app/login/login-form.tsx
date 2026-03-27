'use client'

import { createClient } from '@/utils/supabase/client'
import { Provider } from '@supabase/supabase-js'
import { useState } from 'react'
import { useRouter } from 'next/navigation'

export function Login() {
    const supabase = createClient()
    const router = useRouter()
    
    // UI state
    const [mode, setMode] = useState<'signin' | 'signup'>('signin')
    
    // Form state
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    
    const [isLoading, setIsLoading] = useState<Provider | 'email' | null>(null)
    const [errorMessage, setErrorMessage] = useState<string | null>(null)
    const [successMessage, setSuccessMessage] = useState<string | null>(null)

    const validateForm = () => {
        setErrorMessage(null)
        setSuccessMessage(null)
        
        if (!email) {
            setErrorMessage('Email is required')
            return false
        }
        
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        if (!emailRegex.test(email)) {
            setErrorMessage('Please enter a valid email address')
            return false
        }

        if (!password) {
            setErrorMessage('Password is required')
            return false
        }

        if (password.length < 6) {
            setErrorMessage('Password must be at least 6 characters')
            return false
        }

        if (mode === 'signup') {
            if (password !== confirmPassword) {
                setErrorMessage('Passwords do not match')
                return false
            }
        }

        return true
    }

    const handleEmailAuth = async (e: React.FormEvent) => {
        e.preventDefault()
        
        if (!validateForm()) return

        setIsLoading('email')
        setErrorMessage(null)
        setSuccessMessage(null)

        try {
            if (mode === 'signup') {
                const { error, data } = await supabase.auth.signUp({
                    email,
                    password,
                    options: {
                        emailRedirectTo: `${location.origin}/auth/callback`,
                    }
                })
                
                if (error) throw error
                
                if (data.user && data.session) {
                    router.push('/dashboard')
                } else if (data.user) {
                    // Usually this means email confirmation is required
                    setSuccessMessage('Registration successful! Please check your email to verify your account.')
                }
            } else {
                const { error } = await supabase.auth.signInWithPassword({
                    email,
                    password,
                })
                
                if (error) throw error
                
                router.push('/dashboard')
            }
        } catch (error: any) {
            setErrorMessage(error.message || 'An unexpected error occurred')
        } finally {
            setIsLoading(null)
        }
    }

    const signInWithProvider = async (provider: Provider) => {
        setIsLoading(provider)
        setErrorMessage(null)
        setSuccessMessage(null)
        try {
            const { error } = await supabase.auth.signInWithOAuth({
                provider: provider,
                options: {
                    redirectTo: `${location.origin}/auth/callback`,
                },
            })
            if (error) {
                setErrorMessage(error.message)
                setIsLoading(null)
            }
        } catch (error: any) {
            setErrorMessage('An unexpected error occurred')
            setIsLoading(null)
        }
    }

    const toggleMode = () => {
        setMode(prev => prev === 'signin' ? 'signup' : 'signin')
        setErrorMessage(null)
        setSuccessMessage(null)
        setPassword('')
        setConfirmPassword('')
    }

    return (
        <div className="flex min-h-screen w-full flex-col items-center justify-center bg-background relative overflow-hidden">
            {/* Minimal Grid Background */}
            <div className="absolute inset-0 pointer-events-none opacity-[0.03] dark:opacity-[0.05]"
                style={{
                    backgroundImage: `linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)`,
                    backgroundSize: '40px 40px'
                }}
            />

            <div className="relative z-10 w-full max-w-md px-6 my-12">
                <div className="flex flex-col items-center justify-center gap-6 rounded-xl border border-border bg-surface p-8 sm:p-10 shadow-sm animate-fade-in">
                    <div className="flex flex-col items-center gap-3 text-center w-full">
                        <div className="h-10 w-10 rounded-lg bg-accent flex items-center justify-center shadow-sm">
                            <span className="text-white font-bold text-lg">S</span>
                        </div>
                        <div>
                            <h1 className="text-2xl font-bold tracking-tight text-text-primary">
                                {mode === 'signin' ? 'Welcome Back' : 'Create an Account'}
                            </h1>
                            <p className="text-sm text-text-secondary mt-1">
                                {mode === 'signin' ? 'Sign in to your account to continue' : 'Sign up to get started'}
                            </p>
                        </div>
                        
                        {/* Toggle Tab */}
                        <div className="flex w-full mt-2 rounded-lg bg-background p-1 border border-border">
                            <button 
                                onClick={() => mode !== 'signin' && toggleMode()}
                                className={`flex-1 rounded-md py-2 text-sm font-medium transition-all ${mode === 'signin' ? 'bg-surface shadow-sm text-text-primary' : 'text-text-secondary hover:text-text-primary'}`}
                                type="button"
                            >
                                Sign In
                            </button>
                            <button 
                                onClick={() => mode !== 'signup' && toggleMode()}
                                className={`flex-1 rounded-md py-2 text-sm font-medium transition-all ${mode === 'signup' ? 'bg-surface shadow-sm text-text-primary' : 'text-text-secondary hover:text-text-primary'}`}
                                type="button"
                            >
                                Sign Up
                            </button>
                        </div>
                    </div>

                    {errorMessage && (
                        <div className="w-full rounded-md bg-red-500/10 p-3 text-sm text-red-500 border border-red-500/20 text-center animate-fade-in">
                            {errorMessage}
                        </div>
                    )}
                    
                    {successMessage && (
                        <div className="w-full rounded-md bg-green-500/10 p-3 text-sm text-green-500 border border-green-500/20 text-center animate-fade-in">
                            {successMessage}
                        </div>
                    )}

                    <form onSubmit={handleEmailAuth} className="flex w-full flex-col gap-4">
                        <div className="flex flex-col gap-1.5">
                            <label className="text-sm font-medium text-text-secondary" htmlFor="email">Email</label>
                            <input
                                id="email"
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="you@example.com"
                                className="w-full rounded-md border border-border bg-background px-3 py-2 text-sm placeholder:text-text-tertiary focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent transition-all text-text-primary"
                                disabled={isLoading !== null}
                                required
                            />
                        </div>
                        
                        <div className="flex flex-col gap-1.5">
                            <label className="text-sm font-medium text-text-secondary" htmlFor="password">Password</label>
                            <input
                                id="password"
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="••••••••"
                                className="w-full rounded-md border border-border bg-background px-3 py-2 text-sm placeholder:text-text-tertiary focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent transition-all text-text-primary"
                                disabled={isLoading !== null}
                                required
                            />
                        </div>

                        {mode === 'signup' && (
                            <div className="flex flex-col gap-1.5 animate-fade-in">
                                <label className="text-sm font-medium text-text-secondary" htmlFor="confirmPassword">Confirm Password</label>
                                <input
                                    id="confirmPassword"
                                    type="password"
                                    value={confirmPassword}
                                    onChange={(e) => setConfirmPassword(e.target.value)}
                                    placeholder="••••••••"
                                    className="w-full rounded-md border border-border bg-background px-3 py-2 text-sm placeholder:text-text-tertiary focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent transition-all text-text-primary"
                                    disabled={isLoading !== null}
                                    required
                                />
                            </div>
                        )}

                        <button
                            type="submit"
                            disabled={isLoading !== null}
                            className="bg-accent hover:bg-accent/90 text-white w-full justify-center py-2.5 h-11 mt-2 flex items-center transition-all rounded-md font-medium px-4"
                        >
                            {isLoading === 'email' ? (
                                <div className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
                            ) : (
                                mode === 'signin' ? 'Sign In' : 'Create Account'
                            )}
                        </button>
                    </form>

                    <div className="relative w-full">
                        <div className="absolute inset-0 flex items-center">
                            <div className="w-full border-t border-border" />
                        </div>
                        <div className="relative flex justify-center text-xs uppercase">
                            <span className="bg-surface px-2 text-text-tertiary">Or continue with</span>
                        </div>
                    </div>

                    <div className="flex w-full flex-col gap-3">
                        <button
                            type="button"
                            onClick={() => signInWithProvider('google')}
                            disabled={isLoading !== null}
                            className="bg-background hover:bg-surface text-text-primary border border-border w-full justify-center gap-3 py-2.5 h-11 flex items-center rounded-md transition-all px-4"
                        >
                            {isLoading === 'google' ? (
                                <div className="h-4 w-4 animate-spin rounded-full border-2 border-text-primary border-t-transparent" />
                            ) : (
                                <svg className="h-5 w-5" viewBox="0 0 24 24">
                                   <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                                   <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                                   <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                                   <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                                </svg>
                            )}
                            <span className="font-medium text-sm">Google</span>
                        </button>
                    </div>

                    <div className="w-full text-center">
                        <button 
                            type="button"
                            onClick={toggleMode}
                            className="text-sm text-text-secondary hover:text-accent font-medium transition-colors"
                        >
                            {mode === 'signin' ? "Don't have an account? Sign up" : "Already have an account? Sign in"}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
