import { useRef } from "react"
import Hero from "./Hero"
import axiosClient from "../axios-client"
import { useState } from "react"

export default function ProductForm() {

    const titleRef = useRef()

    const [errors, setErrors] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()

        const payload = {
            'title': titleRef.current.value
        }

        axiosClient.post('/products', payload)
            .then(({data}) => {
                // todo: notification
                // todo: navigate to other page
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
        <Hero title="Add New Product">
            <div className="contact-form">
                <form onSubmit={handleSubmit}>
                    <input ref={titleRef} type="text" placeholder="Naziv proizvoda" />
                    
                    <button>Dodaj</button>
                </form>
                {/* nije dobro zato sto je errors Object or something */}
                {/* {errors && <p>{errors}</p>} */}
                {errors && Object.values(errors).map(err => {
                    return <div className='error'>{err[0]}</div>
                })}
            </div>
        </Hero>
    )
}
    
  
