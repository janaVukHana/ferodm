import Hero from "../components/Hero";

export default function AboutUs() {
    return (
        <>
            <Hero title="O nama">
                <p>
                "Osnivanje maloprodajnog objekta i formiranje specijalizovane prodavnice u vidu gvožđare-farbare 
                bio je logičan potez osnivača koji je dugo godina usko povezan sa proizvodnjom svih žičanih proizvoda, 
                raznih mreža (sita) i eksera. Sve je počelo samo idejom, a onda i realizacijom 2012. godine. 
                Trenutno imamo troje zaposlenih, a ako bude mogućnosti taj broj će se u budućnosti povećavati..."
                </p>
            </Hero>
            <section className="light-section">
                <div className="inner-container">
                    <div className="about">
                        <div className="desc">
                            <p>Prodajni objekat je površine 35m2, a raspolažemo sa istom tolikom površinom magacinskog prostora.</p>
                            <p>
                                "U ovom trenutku raspolažemo sa preko 3000 artikala, a u ponudi možemo posebno
                                istaći žičane proizvode, koje odmeravamo po želji ili se
                                poručuju i izrađuj u po specijalnim zahtevima cenjenih potrošača."
                            </p>
                        </div>

                        <div className="images">
                            <div className="image">
                                <img src="./images/shop/fero_shop.jpg" alt="slika prodavnice" />
                                <span>Novi Sad</span>
                            </div>
                            <div className="image">
                                <img src="./images/shop/fero_shop.jpg" alt="slika prodavnice" />
                                <span>Kikinda</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}