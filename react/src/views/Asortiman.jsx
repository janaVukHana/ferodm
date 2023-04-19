import { Link } from "react-router-dom";
import Hero from "../components/Hero";

export default function Asortiman() {
    return (
        <>
            <Hero title="Asortiman proizvoda">
                <p>Zice, orgrade, lakovi, boje, alat ...</p>
            </Hero>
            <section className="asortiman light-section">
                <div className="inner-container">
                    <div className="cards-container">
                        <div className="card">
                            <img src="./images/asortiman/zica.jpg" alt="zica" />
                            <Link to="/asortiman/zice"><h3>Žica, pletiva, mreže, sita</h3></Link>
                        </div>
                        <div className="card">
                            <img src="./images/asortiman/stubovi.jpg" alt="stubovi" />
                            <Link to="/asortiman/stubovi"><h3>Stubovi, španeri, lanci, sajle</h3></Link>
                        </div>
                        <div className="card">
                            <img src="./images/asortiman/ekseri.png" alt="ekseri" />
                            <Link to="/asortiman/ekseri"><h3>Ekseri</h3></Link>
                        </div>
                        <div className="card">
                            <img src="./images/asortiman/srafovi_00.png" alt="srafovi" />
                            <Link to="/asortiman/srafovi"><h3>Šrafovska roba</h3></Link>
                        </div>
                        <div className="card">
                            <img src="./images/asortiman/stolarija_00.png" alt="stolarija" />
                            <Link to="/asortiman/stolarija"><h3>Stolarski i bravarski program</h3></Link>
                        </div>
                        <div className="card">
                            <img src="./images/asortiman/boje_farbe_01.jpg" alt="farbe i lakovi" />
                            <Link to="/asortiman/moleraj"><h3>Boje, farbe i molerski program</h3></Link>
                        </div>
                        <div className="card">
                            <img src="./images/asortiman/rucni_alat_01.jpeg" alt="rucni alat" />
                            <Link to="/asortiman/alat"><h3>Ručni alat</h3></Link>
                        </div>
                        <div className="card">
                            <img src="./images/asortiman/htz_01.jpeg" alt="htz oprema" />
                            <Link to="/asortiman/alat"><h3>HTZ oprema</h3></Link>
                        </div>
                        <div className="card">
                            <img src="./images/asortiman/bastenski_program_08.png" alt="bastenska oprema" />
                            <Link to="/asortiman/basta"><h3>Baštenski program</h3></Link>
                        </div>
                        <div className="card">
                            <img src="./images/asortiman/varilacki_program.jpeg" alt="varilac" />
                            <Link to="/asortiman/varenje"><h3>Brusno rezni i varilački program</h3></Link>
                        </div>
                        <div className="card">
                            <img src="./images/asortiman/domacinstvo_00.png" alt="plastikara" />
                            <Link to="/asortiman/plastika"><h3>Domaćinstvo i plastika</h3></Link>
                        </div>
                        <div className="card">
                            <img src="./images/asortiman/elektro_01.jpeg" alt="elektro oprema" />
                            <Link to="/asortiman/elektro"><h3>Elektromaterijal</h3></Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}