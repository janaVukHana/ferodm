import { Link } from "react-router-dom"

export default function Breadcrumb({currentPage}) {
    return (
        <section className="light-section" style={{padding: '0.5rem 3rem', position: 'absolute', bottom: '100px', left: '20px'}}>
            <div className="inner-container">
                <Link to="/asortiman" style={{color: 'teal', textDecoration: 'underline'}}>asortiman</Link> / {currentPage}
            </div>
        </section>
    )
}