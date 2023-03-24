export default function Chat () {
    const generateRandomSentence = () => {
        const words = ['Hi', 'Hello', 'How are you?', 'I am fine', 'What are you doing?', 'I am working']
        return words[Math.floor(Math.random() * words.length)]
    }
    const generateFakeMessages = () => {
        const messages = []
        for (let i = 0; i < 20; i++) {
            messages.push({
                id: i,
                message: generateRandomSentence(),
                isMe: i % 2 === 0
            })
        }
        return messages
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
                                        <input type="text" placeholder="Type a message" className="input input-bordered" />
                                    </div>
                                    <button className="btn btn-primary">Send</button>
                                </div>
                                <div className={"flex flex-col-reverse space-y-reverse space-y-2"}>
                                    {generateFakeMessages().map(message => (
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