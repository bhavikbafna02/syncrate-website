
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
        <div className="min-h-screen bg-background py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md mx-auto space-y-6 animate-slide-up">

                {/* Header Section */}
                <div className="text-center space-y-2">
                    <h1 className="text-2xl font-bold text-text-primary tracking-tight">
                        Account
                    </h1>
                    <p className="text-sm text-text-secondary">
                        Manage your profile settings
                    </p>
                </div>

                {/* User Profile Card */}
                <div className="bg-surface border border-border rounded-xl p-8 flex flex-col items-center text-center shadow-sm">
                    <div className="relative w-24 h-24 mb-6 rounded-full overflow-hidden border-2 border-border">
                        {avatar_url ? (
                            <Image
                                src={avatar_url}
                                alt={displayName}
                                fill
                                className="object-cover"
                            />
                        ) : (
                            <div className="w-full h-full bg-surface-highlight flex items-center justify-center text-3xl font-bold text-accent">
                                {displayName.charAt(0).toUpperCase()}
                            </div>
                        )}
                    </div>

                    <h2 className="text-xl font-bold text-text-primary mb-1">
                        {displayName}
                    </h2>
                    <p className="text-sm text-text-tertiary mb-8">
                        {displayEmail}
                    </p>

                    <form action="/auth/signout" method="post" className="w-full">
                        <button
                            type="submit"
                            className="w-full py-2.5 px-4 rounded-lg bg-red-500/10 text-red-600 dark:text-red-400 font-medium hover:bg-red-500/20 transition-colors text-sm"
                        >
                            Sign Out
                        </button>
                    </form>
                </div>

            </div>
        </div>
    )
}
