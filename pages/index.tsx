import Login from "@/pages/Login";
import {useSession} from '@supabase/auth-helpers-react'
import Chat from "@/components/Chat";

export default function Home() {
    const session = useSession()
  return (
    <>
        {!session ? (
            <Login />
        ) : (
            <Chat></Chat>
        )}
    </>
  )
}
