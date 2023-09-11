import Carousel from "./Carousel"

export default function Ogradjivanje() {
    return (
        <section className="light-section">
            <div className="inner-container">
                <h2>Ograde i ograđivanje</h2>
                <div className="carousel-content">
                    <div className="carousel-description">
                        <p>
                        U našem asortimanu proizvoda nudimo <span>kompletan program materijala za 
                        ograđivanje</span> (stubove, žice, pletiva, španere...).
                        </p>
                        <p>
                        Kao posebnu uslugu za naše kupce nudimo mogućnost kompletnog ograđivanja prostora 
                        i izradu kapija ukoliko kupci nisu već unapred obezbedili izvođača radova.
                        </p>
                    </div>
                    <div className="carousel-image">
                        <Carousel />
                    </div>
                </div>
            </div>
        </section>
    )
}