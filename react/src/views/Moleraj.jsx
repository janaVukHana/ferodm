import Hero from "../components/Hero"
import Breadcrumb from "../components/Breadcrumb"
import AsortimanCard from "../components/AsortimanCard"

export default function Moleraj() {
    return (
        <>
            <Hero title="Boje, farbe i molerski program">
                <p>U ponudi imamo boje i farbe poznatih proizvođača kao što su TKK, Mimont, Tesa, Henkel, Chemax, JUB, Irkom, HGP…</p>
            </Hero>
            <Breadcrumb currentPage="moleraj" />
            <AsortimanCard 
                title="Ponuda"
                listElements={[
                    'Silikoni, pur pene, razni lepkovi',
                    'Boje i lakovi raznih namena',
                    'Cetke, valjci, spahtle',
                    'Poludisperzije, disperzije, fasadne boje',
                    'Krep tranke, izolir trake i trake za druge namene',
                    'Premazi, podloge, ispune, sprejevi, smirgle',
                    'Razredjivaci'
                ]}
                image="boje_farbe_01.jpg"
            />
        </>
    )
}