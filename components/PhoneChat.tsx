import {useEffect, useState} from "react";
import {Message} from "@/types/Message";
type Props = {
    title?: string,
    messages: Message[],
    onSendMessage: (message: string) => void,
}

export default function PhoneChat (props: Props) {
    const [input, setInput] = useState('')

    const handleSendMessage = async () => {
        props.onSendMessage(input)
        setInput('')
    }

    return (
        <>
            <div className="card max-w-md card-bordered shadow-xl">
                <div className="card-body">

                    {props.title && (
                        <div className="flex justify-center items-center">
                            <h2 className="card-title">{props.title}</h2>
                        </div>
                    )}

                    <div className="mockup-phone shadow-xl border-primary">
                        <div className="camera"></div>
                        <div className="display">
                            <div className="artboard phone-1 mt-5 mb-5 flex flex-col-reverse space-y-4 space-y-reverse overflow-auto">
                                <div className="flex space-x-2 justify-center items-center">
                                    <div className="form-control">
                                        <input value={input} onChange={e => setInput(e.target.value)} onKeyDown={e => (e.key === 'Enter') ? handleSendMessage() : undefined} type="text" placeholder="Type a message" className="input input-bordered" />
                                    </div>
                                    <button onClick={handleSendMessage} className="btn btn-primary">Send</button>
                                </div>
                                <div className={"flex flex-col space-y-2"}>
                                    {props.messages.map(message => (
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