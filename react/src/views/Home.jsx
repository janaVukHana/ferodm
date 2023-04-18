import Akcija from "../components/Akcija";
import Carousel from "../components/Carousel";
import Hero from "../components/Hero";
import Partner from "../components/Partner";
import ProizvodiIzdvojeno from "../components/ProizvodiIzdvojeno";

export default function Home() {
    return (
        <>
            <Hero title="Gvozdjara u tvom komsiluku">
                <p>Dobrodošli u svet žica, mreža, pletiva, sita, 
                kompletan asortiman gvožđarksog i farbarskog asortimana kao i 
                mnoge opreme za domaćinstvo.</p>
            </Hero>
            <Carousel />
            <ProizvodiIzdvojeno />
            <Partner />
        </>
    )
}