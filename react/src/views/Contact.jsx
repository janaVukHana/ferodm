import Hero from "../components/Hero";
import KontaktForm from "../components/KontaktForm";
import KontaktInfo from "../components/KontaktInfo";
import RadnoVreme from "../components/RadnoVreme";

export default function Contact() {
    return (
        <>
            <Hero title="Kontaktiraj nas">
                <p>Potrebna ti je pomoc u izboru alata?</p>
                <p>Ograđuješ svoj plac?</p>
                <p>Posalji nam poruku.</p>
            </Hero>
            <section className="dark-section">
                <div className="inner-container">
                    <KontaktInfo />
                    <RadnoVreme />
                    <KontaktForm />
                </div>
            </section>
        </>
    )
}