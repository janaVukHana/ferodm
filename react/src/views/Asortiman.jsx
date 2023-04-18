import Hero from "../components/Hero";

export default function Asortiman() {
    return (
        <>
            <Hero title="Asortiman proizvoda">
                <p>Zice, orgrade, lakovi, boje, alat ...</p>
            </Hero>
            <section className="light-section">
                <div className="inner-container">
                    <h2>Ovde idu kartice sa asortimanom</h2>
                    <div className="products-container">
                    <div className="card">
                        <img src="./images/products/kosilica.webp" alt="elektricna kosilica" />
                        <p>Elekticna kosilica</p>
                    </div>
                    <div className="card">
                        <img src="./images/products/sac-gusani.webp" alt="elektricna kosilica" />
                        <p>Sac gusani</p>
                    </div>
                    <div className="card">
                        <img src="./images/products/trimer.webp" alt="elektricna kosilica" />
                        <p>Trimer kosilica</p>
                    </div>
                    <div className="card">
                        <img src="./images/products/kosilica.webp" alt="elektricna kosilica" />
                        <p>Elekticna kosilica</p>
                    </div>
                    <div className="card">
                        <img src="./images/products/kosilica.webp" alt="elektricna kosilica" />
                        <p>Elekticna kosilica</p>
                    </div>
                    <div className="card">
                        <img src="./images/products/kosilica.webp" alt="elektricna kosilica" />
                        <p>Elekticna kosilica</p>
                    </div>
                </div>
                </div>
            </section>
            {/* osmisli kako ide asortiman show page */}
            {/* osmisli about us page */}
        </>
    )
}