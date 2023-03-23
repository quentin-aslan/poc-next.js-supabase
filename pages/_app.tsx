import '@/styles/globals.css'
import { useState } from 'react'
import type { AppProps } from 'next/app'
import { createBrowserSupabaseClient } from '@supabase/auth-helpers-nextjs'
import {SessionContextProvider} from "@supabase/auth-helpers-react"

export default function App({ Component, pageProps }: AppProps) {
    const [supabaseClient] = useState(() => createBrowserSupabaseClient())
  return (
      <div>
          <SessionContextProvider supabaseClient={supabaseClient} initialSession={pageProps.initialSession}>
              <Component {...pageProps} />
          </SessionContextProvider>
      </div>
  )
}
