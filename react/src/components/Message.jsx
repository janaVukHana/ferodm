import { useState, useEffect } from "react"
import axiosClient from "../axios-client"
import MessageItem from "./MessageItem"

export default function Message() {

    const [messages, setMessages] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        getMessages()
    }, [])

    const getMessages = () => {
        setLoading(true)
        axiosClient.get('/messages')
            .then(({data}) => {
                setLoading(false)
                setMessages(data.data)
            })
            .catch(() => setLoading(false))
    }

    return (
        <>
            <div className="row">
                <h2>My Messages</h2>
            </div>
            {loading && <p>Loading...</p>}
            {!loading &&
                <table>
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>From</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {messages.map(message => {
                            return (
                                <MessageItem 
                                    key={message.id} 
                                    id={message.id} 
                                    name={message.name} 
                                />
                            )
                        })}
                    </tbody>
                </table>
            }
        </>
    )
}