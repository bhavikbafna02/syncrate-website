
import { createClient } from '@/utils/supabase/server'
import { redirect } from 'next/navigation'
import Image from 'next/image'

export default async function Dashboard() {
    const supabase = await createClient()

    const {
        data: { user },
    } = await supabase.auth.getUser()

    if (!user) {
        return redirect('/login')
    }

    const { full_name, email, avatar_url } = user.user_metadata || {}
    const displayName = full_name || user.email?.split('@')[0] || 'User'
    const displayEmail = email || user.email

    return (
        <div className="min-h-screen bg-slate-50 dark:bg-[#0a0a0a] py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md mx-auto space-y-8">

                {/* Header Section */}
                <div className="text-center">
                    <h1 className="text-3xl font-bold text-slate-900 dark:text-white tracking-tight">
                        Dashboard
                    </h1>
                    <p className="text-slate-500 dark:text-slate-400 mt-1">
                        Manage your account
                    </p>
                </div>

                {/* User Profile Card */}
                <div className="bg-white dark:bg-zinc-900/50 backdrop-blur-sm border border-slate-200 dark:border-white/10 rounded-2xl p-8 shadow-sm flex flex-col items-center text-center">
                    <div className="relative w-32 h-32 mb-6 rounded-full overflow-hidden border-4 border-slate-100 dark:border-zinc-800 shadow-inner">
                        {avatar_url ? (
                            <Image
                                src={avatar_url}
                                alt={displayName}
                                fill
                                className="object-cover"
                            />
                        ) : (
                            <div className="w-full h-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-4xl font-bold text-white">
                                {displayName.charAt(0).toUpperCase()}
                            </div>
                        )}
                    </div>

                    <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-1">
                        {displayName}
                    </h2>
                    <p className="text-slate-500 dark:text-slate-400 mb-8">
                        {displayEmail}
                    </p>

                    <form action="/auth/signout" method="post" className="w-full">
                        <button
                            type="submit"
                            className="w-full py-3 px-4 rounded-xl bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 font-medium hover:bg-red-100 dark:hover:bg-red-900/30 transition-colors border border-red-100 dark:border-red-900/30"
                        >
                            Sign Out
                        </button>
                    </form>
                </div>

            </div>
        </div>
    )
}
