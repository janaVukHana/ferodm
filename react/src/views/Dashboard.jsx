import { useState } from "react";
import Hero from "../components/Hero";
import Message from "../components/Message";
import Product from "../components/Product";
import Stats from "../components/Stats";

export default function Dashboard() {

    const [showMessages, setShowMessages] = useState(true)
    const [showProducts, setShowProducts] = useState(false)
    const [showStats, setShowStats] = useState(false)

    const showPrd = (e) => {
        e.preventDefault()
        setShowProducts(true)
        setShowMessages(false)
        setShowStats(false)
    }

    const showMsg = (e) => {
        e.preventDefault()
        setShowProducts(false)
        setShowMessages(true)
        setShowStats(false)
    }

    const showSt = (e) => {
        e.preventDefault()
        setShowProducts(false)
        setShowMessages(false)
        setShowStats(true)
    }

    return (
        <>
            <Hero title="Dashboard page">
                <p>
                    U izradi...
                </p>
            </Hero>
            <section className="light-section">
                <div className="inner-container">
                    <div className="dashboard-home">
                        <aside>
                            <h2>Links</h2>
                            <ul>
                                <li><button onClick={showMsg} className={`btn ${showMessages && 'active-btn'}`}>Messages</button></li>
                                <li><button onClick={showPrd} className={`btn ${showProducts && 'active-btn'}`}>Products</button></li>
                                <li><button onClick={showSt} className={`btn ${showStats && 'active-btn'}`}>Stats</button></li>
                            </ul>
                        </aside>
                        <main>                            
                            {showMessages && <Message />}
                            {showProducts && <Product />}
                            {showStats && <Stats />}
                        </main>
                    </div>
                </div>
            </section>

            
        </>
    )
}