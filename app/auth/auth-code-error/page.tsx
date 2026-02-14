import Link from 'next/link'

export default function AuthError() {
    return (
        <div className="flex h-screen w-full flex-col items-center justify-center bg-gray-50 dark:bg-[#0a0a0a] relative overflow-hidden">
            {/* Background Gradients */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] rounded-full bg-red-500/10 blur-[100px]" />
                <div className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] rounded-full bg-orange-500/10 blur-[100px]" />
            </div>

            <div className="relative z-10 flex flex-col items-center gap-6 p-8 text-center max-w-md">
                <div className="h-20 w-20 rounded-full bg-red-100 dark:bg-red-900/30 flex items-center justify-center mb-2">
                    <svg className="h-10 w-10 text-red-600 dark:text-red-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    </svg>
                </div>

                <h1 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
                    Authentication Failed
                </h1>

                <p className="text-base text-gray-500 dark:text-gray-400">
                    We couldn't sign you in. This might be due to a configuration issue or a cancelled request.
                </p>

                <div className="flex gap-4 mt-4">
                    <Link
                        href="/login"
                        className="rounded-lg bg-gray-900 px-6 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-gray-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900 dark:bg-white dark:text-gray-900 dark:hover:bg-gray-100"
                    >
                        Return to Login
                    </Link>
                </div>
            </div>
        </div>
    )
}
