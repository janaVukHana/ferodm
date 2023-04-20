import Hero from "../components/Hero"
import Breadcrumb from "../components/Breadcrumb"
import AsortimanCard from "../components/AsortimanCard"

export default function Zice() {
    return (
        <>
            <Hero title="Zice, pletiva, mreze, sita">
                <p>
                Nudimo široku paletu žica, pletiva, mreža i sita za različite namene. Bilo da Vam treba 
                zaštitna ograda, ograđivanje dvorišta ili voćnjaka, zaštita od insekata ili neka 
                druga primena, mi imamo sve što Vam treba. 
                Naši proizvodi su visokog kvaliteta i ispunjavaju najviše standarde industrije.
                </p>
            </Hero>
            <Breadcrumb currentPage="žice" />
            <section className="light-section">
                <div className="inner-container">
                    <div className="asortiman-intro">
                        <div className="asortiman-content">
                            <h2 style={{textAlign: 'left', marginBottom: '.5rem'}}>Zica</h2>
                            <h3>Zica paljena</h3>
                            <ul style={{listStyleType: 'disc'}}>
                                <li>paljena žica Ø 0.8 mm (cvećarska)</li>
                                <li>paljena žica Ø 1.2 mm (armiracka)</li>
                                <li>paljena žica Ø 2.0 mm (tesarska)</li>
                                <li>paljena žica Ø 3.1 mm (tesarska)</li>
                            </ul>
                            <h3>Zica pocinkovana</h3>
                            <ul>
                                <li>pocinkovana žica Ø 0.7 - 4.0 mm</li>
                            </ul>
                            <h3>Zica PVC</h3>
                            <ul>
                                <li>plastificirana žica Ø 1.8 - 3.1 mm</li>
                            </ul>
                        </div>
                        <div className="asortiman-image">
                            <img src="/images/asortiman/zica.jpg" alt="asortiman image" />
                        </div>
                    </div>
                </div>
            </section>
            <section className="dark-section">
                <div className="inner-container">
                    <div className="asortiman-intro">
                        <div className="asortiman-content">
                            <h2 className="left mb-1">Pletiva</h2>
                            <p>
                                sa raznim debljinama žica - pocinkovana i plastificirana, 
                                dimenzija okaca od 18×18mm do 80×80mm
                            </p>
                            <p style={{fontStyle: 'italic'}}>
                                Sva pletiva izrađujemo po merama i želji naših kupaca... Visinu i dužinu
                                pletiva kao i ostale karakteristike određuju naši cenjeni potrošači, 
                                a mi smo tu da im te zahteve ispunimo i u potpunosti ispoštujemo.
                            </p>
                            <hr />
                            <h2 className="left mb-1">Metalne mreze</h2>
                            <h2 className="left mb-1">Grifovano pletivo</h2>
                            <p style={{fontStyle: 'italic'}}>Mreža u tablama za izradu ograda, kapija, boksova za pse, za razne manje ili veće životinje.</p>
                            <h4>Velicine okaca:</h4>
                            <ul>
                                <li>50×50 tabla 1×2 m ili specijal po želji kupca</li>
                                <li>30x30 tabla 1×2 m ili specijal po želji kupca</li>
                                <li>20x20 tabla 1×2 m ili specijal po želji kupca</li>
                            </ul>
                            <hr />
                            <h2 className="left mb-1">Sulc mreza</h2>
                            <p>Šulc mreža za košuljice i pregrade dimenzija 1×2 m.</p>
                            <hr />
                            <h2 className="left mb-1">Glatka armaturna mreza</h2>
                            <p>Glatka armaturna mreža Ø 4 mm za betoniranje i košuljice, okca 100×100 mm.</p>
                            <hr />
                            <h2 className="left mb-1">Mreze za kaveze</h2>
                            <ul>
                                <li>za sitne životinje (zečeve, činčile, prepelice, koke nosilje, piliće, papagaje, golubove...)</li>
                                <li>za prosejavanje zemlje, peska, šljunka i poljoprivrednih proizvoda (soja, kukuruz, pšenica ...)</li>
                            </ul>
                            <hr />
                            <h2 className="left mb-1">Rabic punktovani</h2>
                            <ul>
                                <li>Pocinkovana i PVC mreza</li>
                                <li>debljina žica od Ø 0.7 - 2.0 mm</li>
                                <li>veličina okca od 6×6 mm do 100×100 mm</li>
                            </ul>
                            <hr />
                            <h2 className="left mb-1">Heksagon pletiva</h2>
                            <ul>
                                <li>pocinkovana i PVC</li>
                                <li>veličina okca od 12×12 mm do 52×52 mm</li>
                            </ul>
                            <hr />
                            <h2 className="left mb-1">Mreza sa sitnim okcima i sita</h2>
                            <p style={{fontStyle: 'italic'}}>Zaštita od komaraca, u pčelarstvu, kod bušenja bunara, prosejavanje različitih materijala</p>
                            <ul>
                                <li>Komarnici (PVC, Fiber, Zn, Al )</li>
                                <li>Pčelarska sita dimenzija okca od 2×2 mm do 5×5 mm</li>
                                <li>SITA za bunare</li>
                                <li>Istegnuta sita ( Zn, Al ) dimenzija okca od 3×6 do 5×10</li>
                            </ul>
                        </div>
                        {/* <div className="asortiman-image">
                            <img src="/images/asortiman/zica.jpg" alt="asortiman image" />
                        </div> */}
                    </div>
                </div>
            </section>
        </>
    )
}