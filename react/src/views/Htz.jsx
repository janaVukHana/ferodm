import Hero from "../components/Hero"
import Breadcrumb from "../components/Breadcrumb"
import AsortimanCard from "../components/AsortimanCard"

export default function Htz() {
    return (
        <>
            <Hero title="Htz oprema">
                <p>U ponudi imamo HTZ opremu poznatih proizvođača kao što su Panda, NEO, Wurth, Springer…</p>
            </Hero>
            <Breadcrumb currentPage="htz" />
            <AsortimanCard 
                title="Ponuda"
                listElements={[
                    'Cipele (plitke, duboke)',
                    'Cizme (gumene, Tigar)',
                    'Zaštitne rukavice',
                    'Zaštitne naočare'
                ]}
                image="htz_01.jpeg"
            />
        </>
    )
}