import {useEffect, useState} from "react";

type Message = {
    message: string
    isMe: boolean
}

export default function Chat () {
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

    const [message, setMessage] = useState('')
    const [messages, setMessages] = useState<Message[]>([])

    // Call generateFakeMessages when the component is mounted
    useEffect(() => {
        generateFakeMessages()
    }, [])

    const handleSendMessage = async () => {
        if (message.length === 0) return
        setMessages([...messages, { message, isMe: true }])
        setMessage('')
    }

    return (
        <>
            <div className="card max-w-md card-bordered shadow-xl">
                <div className="card-body">
                    <div className="mockup-phone shadow-xl border-primary">
                        <div className="camera"></div>
                        <div className="display">
                            <div className="artboard phone-1 mt-5 mb-5 flex flex-col-reverse space-y-4 space-y-reverse overflow-auto">
                                <div className="flex space-x-2 justify-center items-center">
                                    <div className="form-control">
                                        <input value={message} onChange={e => setMessage(e.target.value)} onKeyDown={e => (e.key === 'Enter') ? handleSendMessage() : undefined} type="text" placeholder="Type a message" className="input input-bordered" />
                                    </div>
                                    <button onClick={handleSendMessage} className="btn btn-primary">Send</button>
                                </div>
                                <div className={"flex flex-col space-y-2"}>
                                    {messages.map(message => (
                                        <div className={`chat ${(message.isMe) ? 'chat-end' : 'chat-start'}`}>
                                            <div className={`chat-bubble ${(message.isMe) ? 'chat-bubble-secondary' : 'chat-bubble-primary'}`}>{message.message}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}