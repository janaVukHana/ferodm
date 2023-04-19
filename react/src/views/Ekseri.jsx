import Hero from "../components/Hero"
import Breadcrumb from "../components/Breadcrumb"
import AsortimanCard from "../components/AsortimanCard"

export default function Ekseri() {
    return (
        <>
            <Hero title="Ekseri">
                {/* <p></p> */}
            </Hero>
            <Breadcrumb currentPage="ekseri" />
            <AsortimanCard 
                title="Ponuda"
                listElements={[
                    'Građevinski ekseri: dimenzija Ø2.8 ÷ 6.0mm (od 50mm do 240mm)',
                    'Sitni ekseri : od Ø1.2 ÷ 2.5mm (od 16mm do 50mm)',
                    'Specijalni ekseri  Ø1.0mm (od 13mm do 16mm)',
                    'Cu i Zn ekseri za tegole',
                    '“U”,"G", plavi ekseri',
                    'Spiralni ekseri (za palete)',
                    'Šaržirani ekseri (za palete)',
                    'Ukrasni ekser (mesing,bronza)',
                    'NAPOMENA: Ekseri se prodaju po kg ili na pakovanje.'
                ]}
                image="ekseri.png"
            />
        </>
    )
}