import axiosClient from "../axios-client"
import { useState, useRef } from "react"
import { useStateContext } from "../contexts/ContextProvider"

export default function KontaktForm() {

    const {setNotification} = useStateContext()

    const nameRef = useRef()
    const emailRef = useRef()
    const phoneRef = useRef()
    const messageRef = useRef()

    const [errors, setErrors] = useState(null)

    const handleSubmit = (e) => {
        e.preventDefault()
        
        const payload = {
            'name': nameRef.current.value,
            'email': emailRef.current.value,
            'phone': phoneRef.current.value,
            'message': messageRef.current.value,
        }

        const formData = new FormData();
            formData.append('name', payload.name);
            formData.append('email', payload.email);
            formData.append('phone', payload.phone);
            formData.append('message', payload.message);

        axiosClient.post('/messages', formData)
            .then(({data}) => {
                console.log(data);
                setNotification('Message send...')
                // reset form fields
                nameRef.current.value = '';
                emailRef.current.value = '';
                phoneRef.current.value = '';
                messageRef.current.value = '';
                setErrors(null)

            })
            .catch((err) => {
                const response = err.response

                 if(response && response.status === 422) {
                    setErrors(response.data.errors)
                    // THIS IS HOT TO RESET REF - ChatGPT
                    // titleRef.current.value = '';
                    // titleRef.current = null; 
                }
            })
    }

    return (
        <div className="contact-form">
            <h2>Pošalji poruku</h2>
            <form onSubmit={handleSubmit}>
                <input ref={nameRef} type="text" placeholder="Ime" />
                <input ref={emailRef} type="email" placeholder="Email adresa" />
                <input ref={phoneRef} type="tel" placeholder="Kontakt telefon" />
                <textarea ref={messageRef} placeholder="Poruka...." rows="5" cols="50"></textarea>
                <button>Pošalji</button>
            </form>

            {errors && Object.values(errors).map((err, index) => {
                    return <div key={index} className='error'>{err[0]}</div>
                })}
        </div>
    )
}