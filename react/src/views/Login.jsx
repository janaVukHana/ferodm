import Hero from "../components/Hero";

export default function Login() {

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log('Login logic...')
    }

    return (
        <>
            <Hero title="Login page">
                <div className="contact-form">
                    <form onSubmit={handleSubmit}>
                        <input type="email" placeholder="Email adresa" />
                        <input type="password" placeholder="Sifra" />
                        <button>Login</button>
                    </form>
                </div>
            </Hero>
            
        </>
    )
}