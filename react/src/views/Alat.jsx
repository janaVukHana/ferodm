import Hero from "../components/Hero"
import Breadcrumb from "../components/Breadcrumb"
import AsortimanCard from "../components/AsortimanCard"

export default function Alat() {
    return (
        <>
            <Hero title="Rucni alat">
                <p>
                    U ponudi imamo ručni alat poznatih proizvođača kao što su Modex, Festa, 
                    Topex, Muta, Unior…
                </p>
            </Hero>
            <Breadcrumb currentPage="alati" />
            <AsortimanCard 
                title="Ponuda alata"
                listElements={[
                    'Zidarski (fangle, ferdaske, kofe, mistrije...)',
                    'Keramicarski alati',
                    'Bastenski (lopate, asovi, sekire, grablje...)',
                    'Elektricarski alati',
                    'Mehanicarski alati'
                ]}
                image="rucni_alat.jpeg"
                order=""
            />
            {/* <AsortimanCard 
                title="Ponuda alata"
                listElements={[
                    'Zidarski (fangle, ferdaske, kofe, mistrije...)',
                    'Keramicarski alati',
                    'Bastenski (lopate, asovi, sekire, grablje...)',
                    'Elektricarski alati',
                    'Mehanicarski alati'
                ]}
                image="rucni_alat.jpeg"
                order="1"
            /> */}
        </>
    )
}