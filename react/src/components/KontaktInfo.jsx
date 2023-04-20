import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faHouse, faMobile } from '@fortawesome/free-solid-svg-icons'

export default function KontaktInfo() {
    return (
        <section className="contact-info">
            {/* NOVI SAD */}
            <div className="city-info">
                <h2>Novi Sad</h2>
                <div className="info address-info">
                    <div className="icon">
                        <div className="circle">
                            <FontAwesomeIcon icon={faHouse} size="lg" />
                        </div>
                    </div>
                    <div>
                        <p className='info-title'>Adresa</p>
                        <p className='info-details'>
                            <a 
                                href="https://www.google.com/maps/place/%D0%A0%D1%83%D0%BC%D0%B5%D0%BD%D0%B0%D1%87%D0%BA%D0%B8+%D0%BF%D1%83%D1%82+55,+%D0%9D%D0%BE%D0%B2%D0%B8+%D0%A1%D0%B0%D0%B4+21000/@45.2756659,19.7977013,17z/data=!3m1!4b1!4m5!3m4!1s0x475b117552e9bcd5:0x5e9cae3e822ca493!8m2!3d45.2756659!4d19.8002762"
                                target='_blank'
                            >
                                Rumenački put 55b, Novi Sad
                            </a>
                        </p>
                    </div>
                </div>
                <div className="info phone-info">
                    <div className="icon">
                        <div className="circle">
                            <FontAwesomeIcon icon={faMobile} size="lg" />  
                        </div>
                    </div>
                    <div>
                        <p className='info-title'>Telefon</p>
                        <p className='info-details'>
                            <a href="tel:0216311183">0216311183</a>, 
                            <a href="tel:0616133301">0616133301</a>
                        </p>
                    </div>
                </div>
                <div className="info email-info">
                    <div className="icon">
                        <div className="circle">
                            <FontAwesomeIcon icon={faEnvelope} size="lg" />
                        </div>
                    </div>
                    <div>
                        <p className='info-title'>Email</p>
                        <p className='info-details'>
                            <a href="mailto:dm.fero@yahoo.com">dm.fero@yahoo.com</a>
                        </p>
                    </div>
                </div>
            </div>
            {/* KIKINDA */}
            <div className="city-info">
                <h2>Kikinda</h2>
                <div className="info address-info">
                    <div className="icon">
                        <div className="circle">
                            <FontAwesomeIcon icon={faHouse} size="lg" />
                        </div>
                    </div>
                    <div>
                        <p className='info-title'>Adresa</p>
                        <p className='info-details'>
                            <a 
                                href="https://www.google.com/maps/place/%D0%9D%D0%B8%D0%BA%D0%BE%D0%BB%D0%B5+%D0%9F%D0%B0%D1%88%D0%B8%D1%9B%D0%B0+6,+%D0%9A%D0%B8%D0%BA%D0%B8%D0%BD%D0%B4%D0%B0/@45.8373357,20.4712666,17z/data=!3m1!4b1!4m6!3m5!1s0x4744df21be671b6b:0x45572ffe840f6f53!8m2!3d45.8373358!4d20.47588!16s%2Fg%2F11dzpmm406"
                                target='_blank'
                            >
                                Nikole Pašića 6, Kikinda
                            </a>
                        </p>
                    </div>
                </div>
                <div className="info phone-info">
                    <div className="icon">
                        <div className="circle">
                            <FontAwesomeIcon icon={faMobile} size="lg" />  
                        </div>
                    </div>
                    <div>
                        <p className='info-title'>Telefon</p>
                        <p className='info-details'>
                            <a href="tel:0606133307">0606133307</a>
                        </p>
                    </div>
                </div>
                <div className="info email-info">
                    <div className="icon">
                        <div className="circle">
                            <FontAwesomeIcon icon={faEnvelope} size="lg" />
                        </div>
                    </div>
                    <div>
                        <p className='info-title'>Email</p>
                        <p className='info-details'>
                            <a href="mailto:dm.feroki@yahoo.com">dm.feroki@yahoo.com</a>
                        </p>
                    </div>
                </div>
            </div>
           
        </section>
    )
}