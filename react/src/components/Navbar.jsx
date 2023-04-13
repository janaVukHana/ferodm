import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {

    
    const [showMenu, setShowMenu] = useState(false)
    
    useEffect(() => {
        window.addEventListener('resize', (e) => {
            if(window.innerWidth > 600) {
                setShowMenu(false)
            }
        })
    }, [])

    const handleClick = () => {
        setShowMenu(!showMenu)
    }

    return (
        <nav>
            <div className="logo-n-hamburger">
                <div className='logo'>
                    <a href="#">Fero D&M<br /><span>Gvožđara</span></a>
                </div>
                <div className="hamburger-icon" onClick={handleClick}>HAMB</div>
            </div>
            <div className={showMenu ? 'nav-links show-menu' : 'nav-links'}>
                <ul>
                    <li><NavLink onClick={() => setShowMenu(false)} className={({isActive}) => isActive ? 'active':''} to="/">Home</NavLink></li>
                    <li><NavLink onClick={() => setShowMenu(false)} className={({isActive}) => isActive ? 'active':''} to="/about-us">About Us</NavLink></li>
                    <li><NavLink onClick={() => setShowMenu(false)} className={({isActive}) => isActive ? 'active':''} to="/contact">Contact</NavLink></li>
                </ul>
            </div>
        </nav>
    )
}