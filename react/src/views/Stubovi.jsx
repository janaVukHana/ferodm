import Hero from "../components/Hero"
import Breadcrumb from "../components/Breadcrumb"
import AsortimanCard from "../components/AsortimanCard"

export default function Stubovi() {
    return (
        <>
            <Hero title="Stubovi, spaneri, lance, sajle">
                <p>
                    Betonski stub je visoko kvalitetne izrade sa trostruko upredenim
                    čeličnim žicama, poseduje elastičnost koja doprinosi dužem veku 
                    trajanja i nije sklon pucanju pri velikim opterecenjima...
                </p>
            </Hero>
            <Breadcrumb currentPage="stubovi" />
            <AsortimanCard 
                title='"(a) Stub metalni plastificiran Ø 5/4" različitih visina:'
                listElements={[
                    '1.50 m - (za ogradu visine od 1.0 m do 1.2 m)',
                    '1.75 m - (za ogradu visine od 1.2 m do 1.5 m)',
                    '2.00 m - (za ogradu visine od 1.5 m)',
                    '2.50 m - (za ogradu visine od 2.0 m)'
                ]}
                image="stubovi.jpg"
            />
            <AsortimanCard 
                title='"(b) Betonski stubovi:'
                listElements={[
                    'Stub betonski 7×7×205 cm',
                    'Stub betonski 7x7x250'
                ]}
                image="stubovi.jpg"
                // order="1"
            >
                <p style={{fontSize: '1rem', color: 'red'}}>
                    Betonski stub je visoko kvalitetne izrade sa trostruko upredenim čeličnim 
                    žicama, poseduje elastičnost koja doprinosi dužem veku trajanja i nije
                     sklon pucanju pri velikim opterecenjima...
                </p>
            </AsortimanCard>
            <AsortimanCard 
                title="Ostalo"
                listElements={[
                    'Spaneri veci, manji, za sajle i razne namene...',
                    'Lanci',
                    'Sajle',
                    'Kanapi',
                    'Uzad',
                    'RAZNE VELICINE I NAMENE'
                ]}
                image="stubovi.jpg"
            />
            
        </>
    )
}