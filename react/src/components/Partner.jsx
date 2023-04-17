import PartnerIcon from "./PartnerIcon";
import toolsLogos from '../assets/toolsLogosData.js'

export default function Partner() {

    return (
        <section className="light-section">
            <div className="inner-container">
                <h2>Naši partneri</h2>
                <div className="partners-logos">
                {
                    toolsLogos.map(item => {
                        return (
                            <PartnerIcon key={item.id} img={item.img} alt={item.alt} />
                        )
                    })
                }
                </div>
            </div>
        </section>
    )
}