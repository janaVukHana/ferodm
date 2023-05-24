import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import AsortimanItem from '../components/AsortimanItem';

export default function Asortiman() {
  useEffect(() => {
    const handleScroll = () => {
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
                        <AsortimanItem link='zice' src='zica.jpg' alt='zica' title='Žice, pletiva, mreže, sita' />
                        <AsortimanItem link='stubovi' src='stubovi.jpg' alt='stubovi' title='Stubovi, španeri, lanci,sajle' />
                        <AsortimanItem link='ekseri' src='ekseri.png' alt='ekseri' title='Ekseri' />
                        <AsortimanItem link='srafovi' src='srafovi_00.png' alt='srafovi' title='Šrafovska roba' />
                        <AsortimanItem link='stolarija' src='stolarija_00.png' alt='stolarija' title='Stolarski i bravarski program' />
                        <AsortimanItem link='moleraj' src='boje_farbe_01.jpg' alt='farbe i lakovi' title='Boje, farbe i molerski program' />
                        <AsortimanItem link='alat' src='rucni_alat_01.jpeg' alt='rucni alat' title='Ručni alat' />
                        <AsortimanItem link='htz' src='htz_01.jpeg' alt='htz oprema' title='HTZ oprema' />
                        <AsortimanItem link='basta' src='bastenski_program_08.png' alt='bastenski oprema' title='Baštenski program' />
                        <AsortimanItem link='varenje' src='varilacki_program.jpeg' alt='varilac' title='Brusno rezni i varilački program' />
                        <AsortimanItem link='plastika' src='domacinstvo_00.png' alt='plastikara' title='Domaćinstvo i plastika' />
                        <AsortimanItem link='elektro' src='elektro_01.jpeg' alt='elektro oprema' title='Elektromaterijal' />
                    </div>
                </div>
            </section>
        </>
    )
}