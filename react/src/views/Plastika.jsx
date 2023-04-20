import Hero from "../components/Hero"
import Breadcrumb from "../components/Breadcrumb"
import AsortimanCard from "../components/AsortimanCard"

export default function Plastika() {
    return (
        <>
            <Hero title="Plastika">
                {/* <p>Some hero text</p> */}
            </Hero>
            <Breadcrumb currentPage="plastika" />
            <AsortimanCard 
                title="Ponuda"
                listElements={[
                    'Dimovodni program',
                    'Burad, baloni, kace',
                    'Merdevine AL i sa širokim gazištima',
                    'Kolica i delovi za kolica',
                    'Metle, četke',
                    'Plastične posude, kofe, skafovi',
                    'Kotlići, oranije, breneri, plamenici',
                    'Pojilice, hranilice, PVC posude'
                ]}
                image="domacinstvo_00.png"
            />
        </>
    )
}