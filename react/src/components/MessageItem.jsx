import { Link } from "react-router-dom"

export default function MessageItem({id, name}) {
    return (
        <tr>
            <td>{id}</td>
            <td>{name}</td>
            <td>
                <Link className="btn btn-edit" to={'/messages/'+id}>Show</Link>
            </td>
        </tr>
    )
}