import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import {SessionContextProvider, useSession} from "@supabase/auth-helpers-react"
import Login from './Login'
import supabase from "@/lib/initSupabase";

export default function App({ Component, pageProps }: AppProps) {
    const session = useSession()
  return (
      <div>
          {!session ? (
              <Login></Login>
          ) : (
              <SessionContextProvider supabaseClient={supabase} initialSession={pageProps.initialSession}>
                  <Component {...pageProps} />
              </SessionContextProvider>
          )}
      </div>
  )
}
