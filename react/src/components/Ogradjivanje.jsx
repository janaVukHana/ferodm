import Carousel from "./Carousel"

export default function Ogradjivanje() {
    return (
        <section className="light-section">
            <div className="inner-container">
                <div className="carousel-content">
                    <div className="carousel-description">
                        <h2>Ograđivanje</h2>
                        <p>Neki text o ogradjivanju, ogradama ....Neki text o ogradjivanju, ogradama ....Neki text o ogradjivanju, ogradama ....Neki text o ogradjivanju, ogradama ....Neki text o ogradjivanju, ogradama ....Neki text o ogradjivanju, ogradama ....</p>
                    </div>
                    <div className="carousel-image">
                        <Carousel />
                    </div>
                </div>
            </div>
        </section>
    )
}