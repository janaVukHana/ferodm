import Hero from "../components/Hero"
import Breadcrumb from "../components/Breadcrumb"
import AsortimanCard from "../components/AsortimanCard"

export default function Elektro() {
    return (
        <>
            <Hero title="Elektro materijal">
                <p>
                    U ponudi imamo elektro materijal 
                    poznatih proizvođača kao što su ELCO, ALING, OSRAM, TUNSGRAM…
                </p>
            </Hero>
            <Breadcrumb currentPage="elektro" />
            <AsortimanCard 
                title="Ponuda" 
                listElements={[
                    'Kablovi i produžni kablovi',
                    'Sijalice, grla i prekidači',
                    'Utičnice i osigurači'
                ]} 
                image="elektro_01.jpeg" 
            />
        </>
    )
}