import { useRef } from "react"
import Hero from "./Hero"
import axiosClient from "../axios-client"
import { useState } from "react"
import { useStateContext } from "../contexts/ContextProvider"
import { useNavigate } from "react-router-dom"
import { useParams } from "react-router-dom"
import { useEffect } from "react"

export default function ProductForm() {

    const { id } = useParams()
    const [loading, setLoading] = useState(false)
    const {setNotification} = useStateContext()
    const [errors, setErrors] = useState(null)

    const titleRef = useRef(null)
    const fileRef = useRef(null)
    const [currentImage, setCurrentImage] = useState(false)
    const [imageSelected, setImageSelected] = useState(false)
    // if user want to update title, save prev title so you can compare if user realy trying to update title.
    let [prevTitle, setPrevTitle] = useState(false);

    useEffect(() => {
        setLoading(true)
        id && axiosClient.get('/products/'+id)
            .then(({data}) => {
                // update info
                if(!prevTitle) {
                    setPrevTitle(data.data.title);
                }

                titleRef.current.value = data.data.title;
                setCurrentImage(data.data.image)
            })
            .catch((err) => {
                console.log(err);
            })
        setLoading(false)
    }, [])

    const navigate = useNavigate()


    const handleSubmit = (e) => {
        e.preventDefault()

        if(!id) {
            // create new product item
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
                        // THIS IS HOW TO RESET REF - ChatGPT
                        // titleRef.current.value = '';
                        // titleRef.current = null; 
                    }
                })
        }
        else {
            // update existing product

            // check if something is changed
            // if currentImage is false aka. null user is trying to change image
            // if prevTitle !== titleRef.current.value user is trying to change title
            if(prevTitle !== titleRef.current.value || !currentImage) {
                
                // update product item
                const payload = {
                    'title': titleRef.current.value,
                    'image': fileRef.current.files[0]
                }
                
                const formDataUpdate = new FormData();
                formDataUpdate.append('title', payload.title);

                // Only append the image field if a new image is selected
                if (payload.image) {
                    formDataUpdate.append('image', payload.image);
                }
        
                axiosClient
                // .put('/products/'+id, formDataUpdate)
                .post(`/products/${id}?_method=PUT`, formDataUpdate) // Use POST method with '_method=PUT' query parameter
                    .then(({data}) => {
                        console.log(data);
                        setNotification('Product updated...')
                        navigate('/dashboard')
                    })
                    .catch((err) => {
                        const response = err.response
        
                        if(response && response.status === 422) {
                            setErrors(response.data.errors)
                            // THIS IS HOW TO RESET REF - ChatGPT
                            // titleRef.current.value = '';
                            // titleRef.current = null; 
                        }
                    })
            } else {
                // user is in update section and not changing anything
                setErrors({'update':['You are not updating.']})
            }
        }
    }

    return (
        <Hero title={id ? 'Edit':'Add New'}>
            {loading && <p>Loading...</p>}
            {!loading && 
                <div className="contact-form">
                    <form onSubmit={handleSubmit}>
                        <input ref={titleRef} type="text" placeholder="Naziv proizvoda" />
                        
                        <div className="file-input">
                                <input
                                    ref={ fileRef }
                                    onChange={e => {
                                        setImageSelected(e.target.files[0])
                                        setCurrentImage(null)
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

                        {/* Display currentImage if available */}
                        {currentImage && 
                            <div style={{ width: '70px' }}>
                                <img 
                                    src={`http://localhost:8000/images/${currentImage}`}
                                    alt="current image" 
                                    className="edit-preview-img"
                                />
                            </div>
                        }
                        
                        <button>{id ? 'Update':'Dodaj'}</button>
                    </form>
                    {/* nije dobro zato sto je errors Object or something */}
                    {/* {errors && <p>{errors}</p>} */}
                    {errors && Object.values(errors).map((err, index) => {
                        return <div key={index} className='error'>{err[0]}</div>
                    })}
                </div>
            }
        </Hero>
    )
}
    
  
