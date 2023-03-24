import React, {useState, useMemo} from 'react'
import { useSupabaseClient } from '@supabase/auth-helpers-react'
import Toast from "@/components/Toast";
export default function Login() {
    const supabaseClient = useSupabaseClient()
    const [email, setEmail] = useState('')
    const [isWaitingForEmail, setIsWaitingForEmail] = useState(false)
    const [isInputError, setIsInputError] = useState(false)
    const [isToastVisible, setIsToastVisible] = useState(false)

    const isValidEmail = useMemo<boolean>(() => {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
    }, [email])

    const handleLogin = async () => {
        setIsWaitingForEmail(true)
        if (!isValidEmail) {
            setIsWaitingForEmail(false)
            setIsInputError(true)
            setIsToastVisible(true)
            setTimeout(() => setIsToastVisible(false), 3000)
            return
        }

        const {data, error} = await supabaseClient.auth.signInWithOtp({ email, options: { emailRedirectTo: process.env.NEXT_PUBLIC_APP_URL } })
        
        if (error) {
            setIsWaitingForEmail(false)
            return alert(error.message)
        }

        setIsWaitingForEmail(true)
    }

    return (
        <>
            {isToastVisible && <Toast type={'error'} message={"Email must be valid !"} />}
            <div className="flex justify-center items-center h-screen">
                <div className="card-body card-bordered items-center text-center shadow-xl rounded-box max-w-max flex flex-col space-y-2">
                    {isWaitingForEmail ? (
                        <div className="card-title text-white">Check your email for a magic link.</div>
                    ) : (
                        <>
                            <div className="card-title text-white">Fill in your email, we'll send you a magic link.</div>
                            <div className="form-control w-full max-w-xs">
                                <input onKeyDown={e => (e.key === 'Enter') ? handleLogin() : undefined} value={email} onChange={e => setEmail(e.target.value)} type="email" placeholder="your@email.com" className={`input w-full max-w-xs input-bordered ${(isInputError && !isValidEmail) ? 'input-error' : ''}`} />
                            </div>
                            <div className="card-actions justify-end">
                                <button onClick={handleLogin} className="btn btn-primary">Send me a link</button>
                            </div>
                        </>
                    )}
                </div>
            </div>
        </>
    )
}