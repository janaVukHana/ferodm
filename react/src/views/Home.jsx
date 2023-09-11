import Hero from "../components/Hero";
import Ogradjivanje from "../components/Ogradjivanje";
import Partner from "../components/Partner";
import ProizvodiIzdvojeno from "../components/ProizvodiIzdvojeno";

export default function Home() {

    return (
        <>
            <Hero title="Gvožđara u tvom komšiluku" styles={{minHeight: '100vh'}}>
                <p>
                    Dobrodošli u našu gvožđaru! Kod nas možete pronaći sve vrste metalnih materijala 
                    za Vaše projekte, uključujući čelične šipke, cevi, limove, žice, ograde, kapije i 
                    još mnogo toga.
                </p>
                <p>
                    Naš tim stručnjaka je tu da Vam pomogne pronaći najbolje rešenje za Vaše potrebe. 
                    Posetite nas danas i uverite se u našu široku ponudu i kvalitet usluge.
                </p>
            </Hero>
            <Ogradjivanje />
            <ProizvodiIzdvojeno />
            <Partner />
        </>
    )
}