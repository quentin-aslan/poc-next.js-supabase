import {useEffect, useState} from "react";
import PhoneChat from "@/components/PhoneChat";
import {Message} from "@/types/Message";

export default function FakeChat () {
    const generateRandomSentence = () => {
        const words = ['Hi', 'Hello', 'How are you?', 'I am fine', 'What are you doing?', 'I am working']
        return words[Math.floor(Math.random() * words.length)]
    }
    const generateFakeMessages = () => {
        const messages: Message[] = []
        for (let i = 0; i < 20; i++) {
            messages.push({
                message: generateRandomSentence(),
                isMe: i % 2 === 0
            })
        }
        setMessages(messages)
    }

    const [messages, setMessages] = useState<Message[]>([])

    // Call generateFakeMessages when the component is mounted
    useEffect(() => {
        generateFakeMessages()
    }, [])

    const handleSendMessage = async (message: string) => {
        if (message.length === 0) return
        setMessages([...messages, ...[
            { message, isMe: true },
            { message: generateRandomSentence(), isMe: false }
        ]
    ])

    }

    return (
        <PhoneChat title={"FakeChat"} messages={messages} onSendMessage={handleSendMessage} />
    )
}