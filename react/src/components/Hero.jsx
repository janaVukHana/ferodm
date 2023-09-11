export default function Hero({title, styles, children}) {
    console.log(styles);
    return (
        <div className='header-hero' style={styles}>
            <div className="intro-heading">
                <h1>{title}</h1>
                {children}
            </div>
        </div>
    )
}