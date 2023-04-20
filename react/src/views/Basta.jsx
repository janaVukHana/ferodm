import AsortimanCard from "../components/AsortimanCard"
import Breadcrumb from "../components/Breadcrumb"
import Hero from "../components/Hero"

export default function Basta() {
    return (
        <>
            <Hero title="Baštenski program">
                {/* <p>Some hero text</p> */}
            </Hero>
            <Breadcrumb currentPage="bašta" />
            <AsortimanCard 
                title="Ponuda"
                listElements={[
                    'Lopatice, grabljice',
                    'Creva za zalivanje (kotur ili na merenje)',
                    'Prskalice ili kante za zalivanje',
                    'Ograde za baštu',
                    'Saksije i humus',
                    'Baštenski stapovi i pritke raznih dimenzija',
                    'Baštenske makaze (voće, živa ograda, ruže...)'
                ]}
                image="bastenski_program_08.png"
            />
        </>
    )
}