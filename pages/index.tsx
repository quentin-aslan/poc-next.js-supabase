import Login from "@/pages/Login";
import {useSession, useSupabaseClient} from '@supabase/auth-helpers-react'
import Chat from "@/components/Chat";
import ChatGPT from "@/components/ChatGPT";

export default function Home() {
    const session = useSession()
    const supabaseClient = useSupabaseClient()
  return (
    <>
        {!session ? (
            <Login />
        ) : (
            <div className={"flex flex-col space-y-5 items-center"}>
                <Chat></Chat>
                <button onClick={() => supabaseClient.auth.signOut()} className="btn btn-primary">Sign out</button>
                <ChatGPT></ChatGPT>
            </div>
        )}
    </>
  )
}
