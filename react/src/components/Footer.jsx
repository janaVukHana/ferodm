export default function Footer() {

    const year = new Date().getFullYear();

    return (
        <footer style={{
            borderTop: '10px solid white',
            textAlign: 'center'
        }}>
            <section className="dark-section">
                <div className="inner-container">
                    <p style={{paddingBottom: '1rem'}}>&copy; <span className="copyright-year">{year}</span> Ilija Radovanović</p>
                    <p>Made with &hearts; & &#9749; in Novi Sad, Budva and Belgrade.</p>
                </div>
            </section>
        </footer>
    )
}

{/* &#9874; aka hammer entitie code */}