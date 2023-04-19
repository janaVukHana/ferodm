import { Link } from "react-router-dom"
import Hero from "../components/Hero"

export default function Alat() {
    return (
        <>
            <Hero title="Alat,...">
                <p>Some hero text</p>
            </Hero>
            {/* TODO: make breadcrumb component */}
            <section className="light-section" style={{padding: '0.5rem 3rem', position: 'absolute', bottom: '100px', left: '20px'}}>
                <div class="inner-container">
                    <Link to="/asortiman" style={{color: 'teal', textDecoration: 'underline'}}>asortiman</Link> / alati
                </div>
            </section>
            <div>Here goes some more text and images</div>
        </>
    )
}