// import ReactDOM from 'react-dom'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

export default function KontaktInfo() {
    return (
        <section className="contact-info">
            <div className="city-info">
                <h2>Novi Sad</h2>
                <div className="info address-info">
                    <div className="icon">Icon</div>
                    <div>
                        <p>Adresa</p>
                        <p>Rumenacka 55, Novi Sad</p>
                    </div>
                </div>
                <div className="info phone-info">
                    <div className="icon">Icon</div>
                    <div>
                        <p>Telefon</p>
                        <p>062421903</p>
                    </div>
                </div>
                <div className="info email-info">
                    <div className="icon">Icon</div>
                    <div>
                        <p>Email</p>
                        <p>ilija009@gmail.com</p>
                    </div>
                </div>
            </div>
            <div className="city-info">
                <h2>Kikinda</h2>
                <div className="info address-info">
                    <div className="icon">
                        {/* <FontAwesomeIcon icon="fa-solid fa-house" /> */}
                        {/* <FontAwesomeIcon icon={faEnvelope} /> */}
                    </div>
                    <div>
                        <p>Adresa</p>
                        <p>Rumenacka 55, Novi Sad</p>
                    </div>
                </div>
                <div className="info phone-info">
                    <div className="icon">Icon</div>
                    <div>
                        <p>Telefon</p>
                        <p>062421903</p>
                    </div>
                </div>
                <div className="info email-info">
                    <div className="icon">Icon</div>
                    <div>
                        <p>Email</p>
                        <p>ilija009@gmail.com</p>
                    </div>
                </div>
            </div>
           
        </section>
    )
}