import Hero from "../components/Hero"
import Breadcrumb from "../components/Breadcrumb"
import AsortimanCard from "../components/AsortimanCard"

export default function Srafovi() {
    return (
        <>
            <Hero title="Srafovska roba">
                <p>U našoj ponudi imamo vijke raznih proizvođača i različitog kvaliteta 5.6, 8.8, 10.9</p>
            </Hero>
            <Breadcrumb currentPage="srafovi" />
            <AsortimanCard 
                title="Ponuda"
                listElements={[
                    'Masinski vijak 5.6 ili 8.8 (051 ili 053)',
                    'Torban vijak',
                    'Iver vijak',
                    'Vijak za drvo',
                    'Gips vijci',
                    'Lim vijci',
                    'Anker vijci',
                    'SPECIJALNE VRSTE VIJAKA:',
                    'Matice, podloske, kuke razlicitih dimenzija',
                    'Navojne sipke od M4 do M32',
                    'TIPLE RAZLICITIH DIMENZIJA I PROIZVODJACA'
                ]}
                image="srafovi_00.png"
            />
        </>
    )
}