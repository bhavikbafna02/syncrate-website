import Link from 'next/link'

export default function AuthError() {
    return (
        <div className="flex h-screen w-full flex-col items-center justify-center bg-background relative overflow-hidden">
            {/* Minimal Grid Background */}
            <div className="absolute inset-0 pointer-events-none opacity-[0.03] dark:opacity-[0.05]"
                style={{
                    backgroundImage: `linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)`,
                    backgroundSize: '40px 40px'
                }}
            />

            <div className="relative z-10 flex flex-col items-center gap-6 p-8 text-center max-w-md animate-fade-in">
                <div className="h-16 w-16 rounded-full bg-red-500/10 flex items-center justify-center mb-2">
                    <svg className="h-8 w-8 text-red-600 dark:text-red-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    </svg>
                </div>

                <h1 className="text-2xl font-bold tracking-tight text-text-primary">
                    Authentication Failed
                </h1>

                <p className="text-base text-text-secondary">
                    We couldn't sign you in. This might be due to a configuration issue or a cancelled request.
                </p>

                <div className="flex gap-4 mt-2">
                    <Link
                        href="/login"
                        className="btn-primary"
                    >
                        Return to Login
                    </Link>
                </div>
            </div>
        </div>
    )
}
