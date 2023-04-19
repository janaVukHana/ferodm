import Hero from "../components/Hero"
import Breadcrumb from "../components/Breadcrumb"
import AsortimanCard from "../components/AsortimanCard"

export default function Stolarija() {
    return (
        <>
            <Hero title="Stolarski i bravarski program">
                <p>U ponudi imamo brave i okove poznatih proizvođača kao što su FOM, Rapid, BANE</p>
            </Hero>
            <Breadcrumb currentPage="stolarija" />
            <AsortimanCard 
                title="Ponuda"
                listElements={[
                    'Okovi',
                    'Kvake',
                    'Brave',
                    'Cilindri',
                    'Katanci'
                ]}
                image="stolarija_00.png"
            />
        </>
    )
}