export default function KontaktForm() {

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log('sending message like...');
    }

    return (
        <div className="contact-form">
            <h2>Pošalji poruku</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Ime" />
                <input type="email" placeholder="Email adresa" />
                <input type="tel" placeholder="Kontakt telefon" />
                <textarea placeholder="Poruka...." rows="5" cols="50"></textarea>
                <button>Pošalji</button>
            </form>
        </div>
    )
}