import Hero from "../components/Hero"
import Breadcrumb from "../components/Breadcrumb"
import AsortimanCard from "../components/AsortimanCard"

export default function Varenje() {
    return (
        <>
            <Hero title="Brusno rezni i varilacki program">
                <p>Flexco, Scorpio, Duke, Dronco, Jasenice, Oerlikon, Varstroj, Wurth…</p>
            </Hero>
            <Breadcrumb currentPage="varenje" />
            <AsortimanCard 
                title="Ponuda"
                listElements={[
                    'Brusne i rezne ploče svih dimenzija',
                    'Elektrode različitih vrsta',
                    'Maske, stakla, naočare',
                    'CO2 žica za varenje'
                ]}
                image="varilacki_program.jpeg"
            />        
        </>
    )
}