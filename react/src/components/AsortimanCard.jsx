export default function AsortimanCard({title, listElements, image, order, children}) {
    return (
        <section className="light-section">
            <div className="inner-container">
                <div className="asortiman-intro">
                    <div className="asortiman-content" style={{order: order}}>
                        <h2 style={{textAlign: 'left', marginBottom: '.5rem'}}>{title}</h2>
                        <ul style={{listStyleType: 'disc'}}>
                            {listElements.map(li => <li key={li}>{li}</li>)}
                        </ul>
                    </div>
                    <div className="asortiman-image">
                        <img src={`/images/asortiman/${image}`} alt="asortiman image" />
                    </div>
                </div>
                {children}
            </div>
        </section>
    )
}