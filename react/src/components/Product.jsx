import { useState, useEffect } from "react"
import axiosClient from "../axios-client";

export default function Product() {

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
        <>
            <div className="row">
                <h2>My Products</h2>
                {/* <Link to="/projects/new" className="btn-add">Add New</Link> */}
                <span className="btn btn-add">Add New</span>
            </div>
            {loading && <p>Loading ...</p>}
            {!loading &&
                <table>
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Title</th>
                            <th>Image</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.map(product => {
                            return (
                                <tr key={product.id}>
                                    <td>{product.id}</td>
                                    <td>{product.title}</td>
                                    <td>Image</td>
                                    <td>Edit Delete</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            }
        </>
    )
}