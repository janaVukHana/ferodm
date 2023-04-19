import AsortimanCard from "../components/AsortimanCard"
import Breadcrumb from "../components/Breadcrumb"
import Hero from "../components/Hero"

export default function Basta() {
    return (
        <>
            <Hero title="Bastenski program">
                {/* <p>Some hero text</p> */}
            </Hero>
            <Breadcrumb currentPage="basta" />
            <AsortimanCard 
                title="Ponuda"
                listElements={[
                    'Lopatice, grabljice',
                    'Creva za zalivanje (kotur ili na merenje)',
                    'Prskalice ili kante za zalivanje',
                    'Ograde za bastu',
                    'Saksije i humus',
                    'Bastenski stapovi i pritke raznih dimenzija',
                    'Bastenske makaze (voce, ziva ograda, ruze...)'
                ]}
                image="bastenski_program_08.png"
            />
        </>
    )
}