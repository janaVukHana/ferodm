import { Link } from "react-router-dom"
import axiosClient from "../axios-client"
import { useStateContext } from "../contexts/ContextProvider"

export default function ProductItem({id, title, image, itemDelete}) {

    const {setNotification} = useStateContext()

    const onDelete = (e) => {
        e.preventDefault()

        if(!window.confirm('Da li si siguran da zelis da obrises ovaj proizvod?')) {
            return
        }
        
        axiosClient.delete('/products/'+id)
            .then(() => {
                // show notification
                setNotification('Product deleted...')
                itemDelete()
            })
    }

    return (
        <tr>
            <td>{id}</td>
            <td>{title}</td>
            <td><div className="thumbnail"><img src={`http://api.localhost:8000/images/${image}`} alt={title} /></div></td>
            <td>
                <Link className="btn btn-edit" to={'/products/'+id}>Edit</Link>
                &nbsp;
                &nbsp;
                <button className="btn btn-delete" onClick={onDelete}>Delete</button>
            </td>
        </tr>
    )
}