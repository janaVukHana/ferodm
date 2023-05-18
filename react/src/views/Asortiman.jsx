import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';

export default function Asortiman() {
  useEffect(() => {
    const handleScroll = () => {
    //   const cards = document.getElementsByClassName('card');
      const asortimanContainer = document.querySelector('.asortiman .inner-container');
      const cards = asortimanContainer.getElementsByClassName('card');

      for (let i = 0; i < cards.length; i++) {
        const rect = cards[i].getBoundingClientRect();
        const isVisible = rect.top >= 0 && rect.bottom <= window.innerHeight;
        const isNearBottom = rect.bottom - window.innerHeight <= 0;

        if (isVisible && isNearBottom) {
          cards[i].style.transform = 'translateY(0px)';
          cards[i].style.opacity = '1';
        } 
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
    return (
        <>
            <Hero title="Asortiman proizvoda">
                <p>
                    Naša gvožđara nudi širok asortiman metalnih materijala visokog kvaliteta - čelične 
                    šipke, cevi, limove, žice, ograde, kapije i još mnogo toga. Naš stručni tim Vam je 
                    na raspolaganju da Vam pomogne pronaći idealno rešenje za Vaš projekat.
                </p>
                <p style={{fontSize: '1.6rem'}}>
                    Posetite nas danas i uverite se u našu ponudu.
                </p>
            </Hero>
            <section className="asortiman light-section">
                <div className="inner-container">
                    <div className="cards-container">
                        <div className="card">
                            <Link to="/asortiman/zice"><img src="./images/asortiman/zica.jpg" alt="zica" /></Link>
                            <h3>Žica, pletiva, mreže, sita</h3>
                        </div>
                        <div className="card">
                            <Link to="/asortiman/stubovi"><img src="./images/asortiman/stubovi.jpg" alt="stubovi" /></Link>
                            <h3>Stubovi, španeri, lanci, sajle</h3>
                        </div>
                        <div className="card">
                            <Link to="/asortiman/ekseri"><img src="./images/asortiman/ekseri.png" alt="ekseri" /></Link>
                            <h3>Ekseri</h3>
                        </div>
                        <div className="card">
                            <Link to="/asortiman/srafovi"><img src="./images/asortiman/srafovi_00.png" alt="srafovi" /></Link>
                            <h3>Šrafovska roba</h3>
                        </div>
                        <div className="card">
                            <Link to="/asortiman/stolarija"><img src="./images/asortiman/stolarija_00.png" alt="stolarija" /></Link>
                            <h3>Stolarski i bravarski program</h3>
                        </div>
                        <div className="card">
                            <Link to="/asortiman/moleraj"><img src="./images/asortiman/boje_farbe_01.jpg" alt="farbe i lakovi" /></Link>
                            <h3>Boje, farbe i molerski program</h3>
                        </div>
                        <div className="card">
                            <Link to="/asortiman/alat"><img src="./images/asortiman/rucni_alat_01.jpeg" alt="rucni alat" /></Link>
                            <h3>Ručni alat</h3>
                        </div>
                        <div className="card">
                            <Link to="/asortiman/htz"><img src="./images/asortiman/htz_01.jpeg" alt="htz oprema" /></Link>
                            <h3>HTZ oprema</h3>
                        </div>
                        <div className="card">
                            <Link to="/asortiman/basta"><img src="./images/asortiman/bastenski_program_08.png" alt="bastenska oprema" /></Link>
                            <h3>Baštenski program</h3>
                        </div>
                        <div className="card">
                            <Link to="/asortiman/varenje"><img src="./images/asortiman/varilacki_program.jpeg" alt="varilac" /></Link>
                            <h3>Brusno rezni i varilački program</h3>
                        </div>
                        <div className="card">
                            <Link to="/asortiman/plastika"><img src="./images/asortiman/domacinstvo_00.png" alt="plastikara" /></Link>
                            <h3>Domaćinstvo i plastika</h3>
                        </div>
                        <div className="card">
                            <Link to="/asortiman/elektro"><img src="./images/asortiman/elektro_01.jpeg" alt="elektro oprema" /></Link>
                            <h3>Elektromaterijal</h3>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}