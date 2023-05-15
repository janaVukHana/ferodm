import { useState, useEffect } from "react"
import { useParams, useNavigate } from "react-router-dom"
import Hero from "../components/Hero"
import axiosClient from "../axios-client"
import { useStateContext } from "../contexts/ContextProvider"

export default function MessageContent() {

    const navigate = useNavigate()

    const [message, setMessage] = useState(null)
    const [loading, setLoading] = useState(false)
    const { id } = useParams()
    const {setNotification} = useStateContext()

    useEffect(() => {
        getMessage()
    }, [])

    const getMessage = () => {
        setLoading(true)
        axiosClient.get('/messages/'+id)
            .then(({data}) => {
                setMessage(data.data)
                setLoading(false)
            })
            .catch(() => {
                setLoading(false)
            })
    }

    const onDelete = (e) => {
        e.preventDefault()

        if(!window.confirm('Da li si siguran da zelis da obrises ovu poruku?')) {
            return
        }
        
        axiosClient.delete('/messages/'+id)
            .then(() => {
                // show notification
                setNotification('Message deleted...')
                // navigate to prev page 
                navigate('/dashboard')
            })
    }

    return (
        <Hero title="">
            {loading && <p>Loading...</p>}
            {message && 
                <div style={{textAlign: 'left'}}>
                    <p><span className="bold italic underline">From:</span> {message.name}</p>
                    <p><span className="bold italic underline">Email:</span> {message.email}</p>
                    <p><span className="bold italic underline">Phone:</span> {message.phone}</p>
                    <p><span className="bold italic underline">Message:</span> {message.message}</p>
                    <p><span className="bold italic underline">Received:</span> {message.created_at}</p>
                    <div><button className="btn btn-delete" onClick={onDelete}>Delete</button></div>
                </div>
            }
        </Hero>
    )
}