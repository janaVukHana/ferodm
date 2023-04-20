import { Link } from "react-router-dom"
import axiosClient from "../axios-client"

export default function ProductItem({id, title, itemDelete}) {

    const onDelete = (e) => {
        e.preventDefault()

        if(!window.confirm('Da li si siguran da zelis da obrises ovaj proizvod?')) {
            return
        }
        
        axiosClient.delete('/products/'+id)
            .then(() => {
                console.log('product deleted')
                // show notification
                itemDelete()
            })
    }

    return (
        <tr>
            <td>{id}</td>
            <td>{title}</td>
            <td>Image</td>
            <td>
                <Link className="btn btn-edit" to={'/products/'+id}>Edit</Link>
                &nbsp;
                &nbsp;
                <button className="btn btn-delete" onClick={onDelete}>Delete</button>
            </td>
        </tr>
    )
}