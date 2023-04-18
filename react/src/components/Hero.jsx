export default function Hero({title, children}) {
    return (
        <div className='header-hero'>
            <div className="intro-heading">
                <h1>{title}</h1>
                {children}
            </div>
        </div>
    )
}