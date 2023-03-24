import PhoneChat from "@/components/PhoneChat";
import { useState } from "react";

export default function ChatGPT() {
    const [messages, setMessages] = useState([])
    const [output, setOutput] = useState('')
    const [loading, setLoading] = useState(false)

    // TODO : Add GPT-3 API
    const handleSendMessage = async (message: string) => {
        if (message === '') return
    }

    return (
        <PhoneChat title={"Chat GPT"} messages={messages} onSendMessage={handleSendMessage}></PhoneChat>
    )
}