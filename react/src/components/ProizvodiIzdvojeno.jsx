import { useState, useEffect } from "react"
import axiosClient from "../axios-client"

export default function ProizvodiIzdvojeno() {

    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        getProducts()
    }, [])

    const getProducts = () => {
        setLoading(true)
        axiosClient.get('/products')
            .then(({data}) => {
                setLoading(false)
                setProducts(data.data)
            })
            .catch(() => {
                setLoading(false)
            })
    }

    return (
        <section className="izdvojeno dark-section">
            <div className="inner-container">
                <h2>Izdvajamo iz ponude</h2>

                <div className="cards-container">
                    {loading && <p>Loading...</p>}
                    {!loading &&
                        products.map(product => {
                            return (
                                <div key={product.id} className="card">
                                    <img src={`http://api.localhost:8000/images/${product.image}`} alt={product.title} />
                                    <div className="desc">
                                        <h3>{product.title}</h3>
                                        <p>
                                            Lorem ipsum opis proizvoda tralalal...
                                            Lorem ipsum opis proizvoda tralalal...
                                            Lorem ipsum opis proizvoda tralalal...
                                        </p>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
                
            </div>
        </section>
    )
}