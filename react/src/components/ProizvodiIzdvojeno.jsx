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
                                    <h3>{product.title}</h3>
                                </div>
                            )
                        })
                    }
                    {/* <div className="card">
                        <img src="./images/products/kosilica.webp" alt="elektricna kosilica" />
                        <h3>Elektična kosilica</h3>
                    </div> */}
                    {/* <div className="card">
                        <img src="./images/products/sac-gusani.webp" alt="elektricna kosilica" />
                        <h3>Sač gusani</h3>
                    </div>
                    <div className="card">
                        <img src="./images/products/trimer.webp" alt="elektricna kosilica" />
                        <h3>Trimer kosilica</h3>
                    </div>
                    <div className="card">
                        <img src="./images/products/kosilica.webp" alt="elektricna kosilica" />
                        <h3>Elektična kosilica</h3>
                    </div>
                    <div className="card">
                        <img src="./images/products/kosilica.webp" alt="elektricna kosilica" />
                        <h3>Elektična kosilica</h3>
                    </div>
                    <div className="card">
                        <img src="./images/products/kosilica.webp" alt="elektricna kosilica" />
                        <h3>Elekticna kosilica</h3>
                    </div> */}
                </div>
                
            </div>
        </section>
    )
}