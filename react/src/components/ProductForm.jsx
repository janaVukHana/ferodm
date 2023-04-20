import { useRef } from "react"
import Hero from "./Hero"
import axiosClient from "../axios-client"
import { useState } from "react"
import { useStateContext } from "../contexts/ContextProvider"
import { useNavigate } from "react-router-dom"

export default function ProductForm() {

    const navigate = useNavigate()

    const titleRef = useRef()
    const fileRef = useRef()

    const {setNotification} = useStateContext()

    const [imageSelected, setImageSelected] = useState(false)

    const [errors, setErrors] = useState(null)

    const handleSubmit = (e) => {
        e.preventDefault()

        const payload = {
            'title': titleRef.current.value,
            'image': fileRef.current.files[0]
        }

        const formData = new FormData();
            formData.append('title', payload.title);
            payload.image && formData.append('image', payload.image);

        axiosClient.post('/products', formData)
            .then(({data}) => {
                setNotification('Product addedd...')
                // todo: navigate to other page
                navigate('/dashboard')
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
                    
                    <div className="file-input">
                            <input
                                ref={ fileRef }
                                onChange={e => {
                                    setImageSelected(e.target.files[0])
                                }}
                                type="file"
                                id="image"
                            />
                    </div>

                    {/* show selected aka. image preview */}
                    {imageSelected && 
                        <div style={{width: '70px'}}>
                            <img 
                                src={URL.createObjectURL(imageSelected)}
                                alt="project image preview" 
                                className="edit-preview-img"
                            />
                        </div>
                    }
                    
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
    
  
