import Login from "@/pages/Login";
import {useSession, useSupabaseClient} from '@supabase/auth-helpers-react'

export default function Home() {
    const session = useSession()
    const supabaseClient = useSupabaseClient()
    console.log(session)

    const logout = async () => {
        await supabaseClient.auth.signOut()
    }
  return (
    <>
        {!session ? (
            <Login />
        ) : (
            <div className="flex justify-center items-center h-screen">
                <div className="card-body card-bordered items-center text-center shadow-xl rounded-box max-w-max flex flex-col space-y-2">
                    <div className="card-title text-white">You are logged in!</div>
                    <div className="card-actions justify-end">
                        <button onClick={logout} className="btn error">Logout</button>
                    </div>
                </div>
            </div>
        )}
    </>
  )
}
