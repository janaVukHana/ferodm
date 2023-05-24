import { Link } from 'react-router-dom'

export default function AsortimanItem({link, src, alt, title}) {
    return (
        <div className="card">
            <Link to={'/asortiman/'+link}><img src={'./images/asortiman/'+src} alt={alt} /></Link>
            <h3>{title}</h3>
        </div>
    )
}