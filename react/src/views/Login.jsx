import { useRef, useState } from "react";
import { Navigate } from "react-router-dom";
import axiosClient from "../axios-client";
import { useStateContext } from "../contexts/ContextProvider";
import Hero from "../components/Hero";

export default function Login() {

    const emailRef = useRef()
    const passwordRef = useRef()

    const [errors, setErrors] = useState(null)

    const {token, setUser, setToken} = useStateContext()

    if(token) {
       return <Navigate to="/dashboard" />
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log('Login logic...')

        const payload = {
            'email': emailRef.current.value,
            'password': passwordRef.current.value
        }
        setErrors(null)
        
        axiosClient.post('/login', payload)
        .then(({data}) => {
                console.log(data)
                setUser(data.user)
                setToken(data.token)
            })
            .catch(err => {
                const response = err.response
                if(response &&  response.status === 422) {
                    if(response.data.errors) {
                        setErrors(response.data.errors);
                    } else {
                        setErrors({
                            email: [response.data.message]
                        })
                    }
                }
            })
    }

    return (
        <>
            <Hero title="Login page">
                <div className="contact-form">
                    <form onSubmit={handleSubmit}>
                        <input ref={emailRef} type="email" placeholder="Email adresa" />
                        <input ref={passwordRef} type="password" placeholder="Sifra" />
                        <button>Login</button>
                    </form>

                    {errors && <div className='error'>
                    {Object.keys(errors).map(key => (
                        <p key={key}>{errors[key][0]}</p>
                    ))}
                </div>}
                </div>
            </Hero>
            
        </>
    )
}